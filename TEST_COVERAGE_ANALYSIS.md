# Test Coverage Analysis - Bill Buddy

## Current State

**Test coverage: 0%.** The project has no test files, no testing framework installed, and no CI/CD pipeline to enforce testing. There are approximately 75 TypeScript/TSX source files with zero corresponding tests.

---

## Priority 1: Pure Utility & Logic Functions (Highest ROI)

These are stateless, deterministic functions with no external dependencies. They are the easiest to test and provide immediate confidence.

### `src/lib/parliament/client.ts` - `getStageProgress()` (line 114)
- Maps stage name strings to percentage values using substring matching
- **Risk:** Incorrect progress display across the entire app
- **Test cases needed:**
  - Each known stage keyword (`1st reading` -> 15, `2nd reading` -> 30, `committee` -> 45, etc.)
  - Case insensitivity (the function lowercases input)
  - `null` input returns 0
  - Unknown stage names return 50 (default)
  - Stages with multiple matching keywords (e.g., a string containing both "committee" and "report")

### `src/lib/parliament/client.ts` - `getBillTypeLabel()` (line 92)
- Maps bill category strings to display labels
- **Test cases needed:**
  - Known categories: `"Government"`, `"Private Members'"`, `"Private"`
  - Unknown category falls back to the raw string

### `src/lib/parliament/client.ts` - `getHouseColor()` (line 102)
- Returns CSS class strings for Commons/Lords badges
- **Test cases needed:**
  - `"Commons"`, `"Lords"`, `null`, unknown string

### `src/lib/legislation/fetcher.ts` - `extractTextFromXml()` / `stripTags()` (lines 26, 62)
- Parses legislation XML into plain text using regex
- **Risk:** Broken AI summaries if XML parsing fails silently
- **Test cases needed:**
  - Well-formed XML with `<Title>`, `<Text>`, `<Para>` elements
  - XML with nested tags
  - XML with processing instructions and comments (should be stripped)
  - Empty XML / no matching elements (fallback path)
  - Malformed XML (graceful degradation)
  - `stripTags()` with various HTML inputs, consecutive whitespace

### `src/lib/ai/prompts.ts` - Prompt builder functions (lines 10, 40, 64)
- `billSummaryPrompt()`, `topicClassifyPrompt()`, `translatePrompt()`
- **Test cases needed:**
  - Output includes all interpolated values (title, longTitle, billText, billType)
  - Special characters in input are not mangled
  - `translatePrompt()` serializes the summary object correctly

---

## Priority 2: API Route Handlers (Highest Business Risk)

These are the backbone of the application. Bugs here directly affect users.

### `src/app/api/bills/route.ts` - GET handler
- Complex logic: DB query with filters -> fallback to Parliament API -> double fallback on error
- **Test cases needed:**
  - Successful DB query with various filter combinations (`search`, `house`, `type`, `isAct`)
  - Pagination: `page` and `take` params, `take` capped at 50
  - DB returns 0 results -> falls back to Parliament API
  - DB throws error -> falls back to Parliament API
  - Both DB and API fail -> returns 500
  - Response shape matches expected contract (`items`, `totalResults`, `currentPage`, etc.)

### `src/app/api/tracked/route.ts` - GET/POST/DELETE handlers
- Manages user-tracked bills with device ID authentication
- **Test cases needed:**
  - Missing `X-Device-ID` header returns 400 for all methods
  - GET: returns tracked bills for a device
  - POST: creates tracked bill, upserts device profile
  - POST with `parliamentId` for bill not in DB: fetches from Parliament API and creates
  - POST with invalid/NaN IDs returns 404
  - DELETE: removes tracking, handles bill lookup by ID or parliamentId
  - DELETE for non-existent bill still returns `{ ok: true }`

### `src/app/api/bills/[id]/summary/route.ts` - POST handler
- Orchestrates AI summary generation with multiple fallback paths
- **Test cases needed:**
  - Bill found in DB with existing summary -> returns cached
  - Bill found in DB without summary -> generates via AI -> saves -> returns
  - Bill not in DB -> fetches from Parliament API -> creates in DB -> generates summary
  - DB unavailable -> still generates summary from Parliament API
  - Invalid bill ID and invalid parliamentId -> returns 404
  - AI generation failure -> returns 500

### `src/app/api/export/pdf/route.ts` - POST handler
- Generates PDF documents from bill data
- **Test cases needed:**
  - Missing `billId` returns 400
  - Bill found in DB with summary -> PDF includes all sections
  - Bill not in DB -> fetches from Parliament API
  - Invalid bill ID -> returns 404
  - PDF output is valid (non-zero Content-Length, correct Content-Type)
  - Filename sanitization (special characters removed from title)

### `src/app/api/notifications/subscribe/route.ts` - POST handler
- **Test cases needed:**
  - Missing device ID -> 400
  - Missing/incomplete subscription keys -> 400
  - Valid subscription -> upserts device and subscription -> 201

---

## Priority 3: Background Job Functions (Highest Complexity)

### `src/lib/inngest/functions.ts` - `syncBills`
- Paginated bill sync: fetches from Parliament API, upserts bills, stages, sponsors into DB
- **Risk:** Data corruption, silent failures, incomplete syncs
- **Test cases needed:**
  - Single page of results: all bills upserted correctly
  - Multi-page pagination with correct `hasMore` logic
  - Safety limit at page 20
  - Stage sync failure is caught and doesn't block the bill sync
  - Sponsor sync correctly constructs composite IDs
  - SyncLog created at start, updated on completion/failure
  - Error during sync updates SyncLog with error message

### `src/lib/inngest/functions.ts` - `generateSummaryFn`
- Generates AI summary for a bill on demand
- **Test cases needed:**
  - Bill not found -> throws
  - Bill already has summary -> returns `{ cached: true }`
  - No existing summary -> calls `generateBillSummary()` -> saves result

### `src/lib/inngest/functions.ts` - `checkStageChanges`
- Monitors tracked bills for stage changes and creates notifications
- **Test cases needed:**
  - No tracked bills -> returns `{ checked: 0, changes: 0 }`
  - Tracked bill with no stage change -> no notification created
  - Tracked bill with stage change -> bill updated, notification created
  - Bill becomes Act -> notification type is `ROYAL_ASSENT`
  - Only active bills checked (not acts, defeated, or withdrawn)

---

## Priority 4: AI Integration (Correctness of Output Parsing)

### `src/lib/ai/summarize.ts` - `generateBillSummary()`
- Calls Claude API, parses JSON response, validates structure
- **Test cases needed (mock the Anthropic client):**
  - Valid JSON response -> parsed correctly
  - Response wrapped in markdown code fences -> cleaned and parsed
  - Legislation URL provided -> fetches bill text
  - Legislation URL fetch fails -> falls back to longTitle
  - Bill text exceeds `MAX_BILL_TEXT_LENGTH` -> truncated
  - Missing required fields in response -> throws "Invalid summary structure"
  - `keyChanges` not an array -> throws
  - `impacts` not an array -> throws
  - Token counting from response usage

---

## Priority 5: Parliament API Client (Network Layer)

### `src/lib/parliament/client.ts` - `fetchParliament()`, `getBills()`, `getBillById()`, etc.
- **Test cases needed (mock `fetch`):**
  - Successful response parsed as JSON
  - Non-OK response throws with status, statusText, and path
  - Query params correctly mapped (e.g., `sortField: "title"` -> `SortField: "Title"`)
  - `undefined`/`null` params excluded from URL
  - Pagination: `Skip` calculated correctly from `page` and `take`
  - Default values applied (`page=1`, `take=20`, `sortField="dateUpdated"`, `sortOrder="desc"`)

---

## Priority 6: React Components (User-Facing Behavior)

These require `@testing-library/react`. Focus on components with logic, not pure presentational ones.

### `src/components/bills/BillFilters.tsx`
- Filter state management, search debouncing
- **Test cases needed:**
  - Filter selections update URL/state
  - Search input debouncing works correctly
  - Clear filters resets state

### `src/components/bills/TrackButton.tsx`
- Toggle tracking, calls API, shows loading state
- **Test cases needed:**
  - Click sends POST to track, DELETE to untrack
  - Loading state shown during API call
  - Error handling on API failure

### `src/components/bills/ShareDialog.tsx`
- Share URL generation, clipboard copy
- **Test cases needed:**
  - Correct share URL generated
  - Copy to clipboard works (mock clipboard API)

### `src/hooks/useDeviceId.ts`
- Reads/writes `localStorage`, generates UUID
- **Test cases needed:**
  - First call generates and stores UUID
  - Subsequent calls return stored UUID
  - Works when `localStorage` is unavailable (SSR)

---

## Recommended Testing Stack

| Tool | Purpose |
|------|---------|
| **Vitest** | Test runner (fast, native ESM/TypeScript, compatible with Next.js) |
| **@testing-library/react** | Component testing |
| **@testing-library/jest-dom** | DOM assertion matchers |
| **msw** (Mock Service Worker) | HTTP request mocking for API and Parliament client tests |

### Suggested `package.json` additions

```json
{
  "devDependencies": {
    "vitest": "^3.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0",
    "jsdom": "^25.0.0",
    "msw": "^2.0.0"
  },
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

---

## Suggested Implementation Order

| Phase | Scope | Files to Test | Why First |
|-------|-------|---------------|-----------|
| **1** | Pure functions | `parliament/client.ts` (helpers), `legislation/fetcher.ts`, `ai/prompts.ts` | Zero dependencies, highest ROI, establishes testing patterns |
| **2** | API routes | `api/bills/route.ts`, `api/tracked/route.ts`, `api/notifications/subscribe/route.ts` | Core user-facing endpoints, require mocking Prisma + fetch |
| **3** | AI integration | `ai/summarize.ts`, `api/bills/[id]/summary/route.ts` | Requires mocking Anthropic SDK, validates critical parsing logic |
| **4** | Background jobs | `inngest/functions.ts` | Complex orchestration, highest data-integrity risk |
| **5** | Components | `BillFilters`, `TrackButton`, `ShareDialog`, `useDeviceId` | Requires browser DOM environment, lower risk than backend |

---

## Coverage Goals

| Milestone | Target | Focus |
|-----------|--------|-------|
| **Initial** | 40% line coverage | Pure functions + API routes |
| **Intermediate** | 65% line coverage | Add AI integration + background jobs |
| **Mature** | 80% line coverage | Add component tests + edge cases |
