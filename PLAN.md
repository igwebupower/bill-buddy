# Email-Based Auth Migration Plan

Convert Bill Buddy from anonymous device-based identity (`localStorage UUID → X-Device-ID → DeviceProfile`) to email-based identity with OTP verification (`Email + 6-digit OTP → session token → User → TrackedBill`).

---

## Phase 1: Schema Changes

**Modify `prisma/schema.prisma`**

Add three new models:

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  preferredLang String   @default("en")
  theme         String   @default("dark")

  sessions          Session[]
  trackedBills      TrackedBill[]
  pushSubscriptions PushSubscription[]

  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  token     String   @unique
  expiresAt DateTime

  createdAt DateTime @default(now())

  @@index([userId])
  @@index([token])
  @@index([expiresAt])
}

model VerificationCode {
  id        String   @id @default(cuid())
  email     String
  code      String
  expiresAt DateTime
  attempts  Int      @default(0)
  usedAt    DateTime?

  createdAt DateTime @default(now())

  @@index([email])
  @@index([code, email])
}
```

Modify existing models:
- **`TrackedBill`**: Change `deviceId` → `userId`, relation from `DeviceProfile` → `User`, unique constraint from `[deviceId, billId]` → `[userId, billId]`
- **`PushSubscription`**: Change `deviceId` → `userId`, relation from `DeviceProfile` → `User`
- **Delete `DeviceProfile`** model entirely

Run: `npx prisma migrate dev --name email-auth-migration`

---

## Phase 2: Auth Utilities (Server-Side)

**Create `src/lib/auth/session.ts`**
- `generateSessionToken()` — `crypto.randomBytes(32).toString("hex")`
- `createSession(userId)` — creates `Session` row with 30-day expiry, returns token
- `validateSession(token)` — looks up session, checks expiry, returns `User` or `null`
- `deleteSession(token)` — removes session row
- `getUserFromRequest(request)` — reads `Authorization: Bearer <token>` header, returns `User` or `null`

**Create `src/lib/auth/otp.ts`**
- `generateOTP()` — `crypto.randomInt(100000, 999999).toString()`
- `createVerificationCode(email)` — invalidates previous codes, stores new code with 10-min expiry
- `verifyOTP(email, code)` — validates code, checks expiry and max 5 attempts, marks used

---

## Phase 3: Email Sending

**Install:** `npm install nodemailer && npm install -D @types/nodemailer`

**Create `src/lib/email/client.ts`**
- Nodemailer transport configured via env vars (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`)
- `sendEmail(to, subject, html)` function

**Create `src/lib/email/templates.ts`**
- `otpEmailHtml(code)` — styled HTML template with the 6-digit code

---

## Phase 4: Auth API Routes

**Create `src/app/api/auth/send-otp/route.ts`** — POST
- Validates email format
- Rate-limits (3 per 10 min per email) using existing `@upstash/ratelimit`
- Calls `createVerificationCode`, sends email

**Create `src/app/api/auth/verify-otp/route.ts`** — POST
- Validates `{ email, code }`
- Calls `verifyOTP` → if valid, upserts `User`, creates `Session`, returns `{ token, user }`

**Create `src/app/api/auth/me/route.ts`** — GET
- Calls `getUserFromRequest` → returns user info or 401

**Create `src/app/api/auth/logout/route.ts`** — POST
- Calls `deleteSession` on the token from the header

---

## Phase 5: Client-Side Auth

**Create `src/hooks/useAuth.ts`** (replaces `useDeviceId`)
- Stores session token in `localStorage` under `bill-buddy-session-token`
- On mount: reads stored token, validates via `GET /api/auth/me`
- Exposes: `user`, `token`, `loading`, `login(email)`, `verify(email, code)`, `logout()`

**Create `src/contexts/AuthContext.tsx`**
- Wraps `useAuth` in React Context so one instance is shared across all components

**Modify `src/app/layout.tsx`**
- Wrap children in `<AuthProvider>`

---

## Phase 6: Auth UI Component

**Create `src/components/auth/AuthDialog.tsx`**
- Two-step dialog using existing `Dialog`, `Input`, `Button` components
- Step 1: Email input → "Send Code" button → calls `login()`
- Step 2: 6-digit OTP input → "Verify" button → calls `verify()` → triggers `onAuthenticated` callback
- "Resend code" link

---

## Phase 7: Migrate API Routes

All routes that read `X-Device-ID` switch to `Authorization: Bearer <token>` via `getUserFromRequest()`.

**Modify `src/app/api/tracked/route.ts`**
- All 3 handlers (GET, POST, DELETE): replace device ID → user auth
- Remove `ensureDevice()` function
- `deviceId` → `userId` in all Prisma queries
- Missing auth returns 401 instead of 400

**Modify `src/app/api/notifications/subscribe/route.ts`**
- Replace `X-Device-ID` with `getUserFromRequest`
- Remove `deviceProfile.upsert`
- `pushSubscription.upsert` uses `userId`

**Modify `src/app/api/notifications/unsubscribe/route.ts`**
- Add auth requirement
- Filter `deleteMany` by `userId` for security

---

## Phase 8: Migrate Client Components

**Modify `src/components/bills/TrackButton.tsx`**
- Replace `useDeviceId` → `useAuthContext`
- If user not authenticated: clicking "Track" opens `AuthDialog` instead
- After auth dialog success: proceed with tracking
- All fetch headers: `X-Device-ID` → `Authorization: Bearer`

**Modify `src/app/tracked/TrackedBillsClient.tsx`**
- Replace `useDeviceId` → `useAuthContext`
- If unauthenticated: show "Sign in to see your tracked bills" prompt with `AuthDialog`
- All fetch headers updated

**Modify `src/app/settings/SettingsClient.tsx`**
- Replace `useDeviceId` → `useAuthContext`
- Show user email + "Sign Out" button instead of device ID
- If unauthenticated: show "Sign In" button
- Notification subscribe/unsubscribe headers updated

---

## Phase 9: Remove Old Identity System

- **Delete `src/hooks/useDeviceId.ts`**
- Search and verify no remaining references to `useDeviceId`, `X-Device-ID`, `DeviceProfile`, or `bill-buddy-device-id`

---

## Phase 10: Inngest Review

**`src/lib/inngest/functions.ts`** — No changes needed. `checkStageChanges` queries `trackedBills: { some: {} }` which is model-agnostic. `Notification` records are bill-scoped, not user-scoped.

---

## Phase 11: Test Updates

**Modify `src/test/setup.ts`**
- Add mocks for `user`, `session`, `verificationCode` Prisma models
- Remove `deviceProfile` mock

**Modify existing test files**
- `src/app/api/tracked/route.test.ts` — mock `getUserFromRequest`, replace `X-Device-ID` with `Authorization: Bearer`, `deviceId` → `userId`
- `src/app/api/notifications/subscribe/route.test.ts` — same pattern

**Create new test files**
- `src/lib/auth/otp.test.ts` — OTP generation, verification, expiry, max attempts
- `src/lib/auth/session.test.ts` — session creation, validation, deletion, request parsing
- `src/app/api/auth/send-otp/route.test.ts` — validation, rate limiting, success
- `src/app/api/auth/verify-otp/route.test.ts` — invalid code, valid code, session creation

---

## Phase 12: Environment & Cleanup

**Add to `.env.example`:**
```
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Bill Buddy <noreply@billbuddy.uk>"
```

---

## Files Summary

| Action | Files |
|--------|-------|
| **NEW** | `src/lib/auth/session.ts`, `src/lib/auth/otp.ts`, `src/lib/email/client.ts`, `src/lib/email/templates.ts`, `src/app/api/auth/send-otp/route.ts`, `src/app/api/auth/verify-otp/route.ts`, `src/app/api/auth/me/route.ts`, `src/app/api/auth/logout/route.ts`, `src/hooks/useAuth.ts`, `src/contexts/AuthContext.tsx`, `src/components/auth/AuthDialog.tsx` |
| **MODIFY** | `prisma/schema.prisma`, `src/app/layout.tsx`, `src/app/api/tracked/route.ts`, `src/app/api/notifications/subscribe/route.ts`, `src/app/api/notifications/unsubscribe/route.ts`, `src/components/bills/TrackButton.tsx`, `src/app/tracked/TrackedBillsClient.tsx`, `src/app/settings/SettingsClient.tsx`, `package.json` |
| **MODIFY (tests)** | `src/test/setup.ts`, `src/app/api/tracked/route.test.ts`, `src/app/api/notifications/subscribe/route.test.ts` |
| **NEW (tests)** | `src/lib/auth/otp.test.ts`, `src/lib/auth/session.test.ts`, `src/app/api/auth/send-otp/route.test.ts`, `src/app/api/auth/verify-otp/route.test.ts` |
| **DELETE** | `src/hooks/useDeviceId.ts` |

## Execution Order

Phases 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 (sequential; each depends on the prior)
