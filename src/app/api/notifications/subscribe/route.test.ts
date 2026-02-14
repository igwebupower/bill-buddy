import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

vi.mock("@/lib/auth/session", () => ({
  getUserFromRequest: vi.fn(),
}));

import { getUserFromRequest } from "@/lib/auth/session";

const mockUser = { id: "user-1", email: "test@example.com" };

function makeRequest(
  headers: Record<string, string> = {},
  body: unknown = {}
) {
  return new NextRequest("http://localhost/api/notifications/subscribe", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
}

describe("POST /api/notifications/subscribe", () => {
  beforeEach(() => vi.resetAllMocks());

  it("returns 401 when not authenticated", async () => {
    vi.mocked(getUserFromRequest).mockResolvedValue(null);

    const response = await POST(makeRequest());
    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data.error).toBe("Unauthorized");
  });

  it("returns 400 when endpoint is missing", async () => {
    vi.mocked(getUserFromRequest).mockResolvedValue(mockUser as never);

    const response = await POST(
      makeRequest(
        { Authorization: "Bearer test-token" },
        { keys: { p256dh: "key1", auth: "key2" } }
      )
    );
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe("Invalid subscription");
  });

  it("returns 400 when keys.p256dh is missing", async () => {
    vi.mocked(getUserFromRequest).mockResolvedValue(mockUser as never);

    const response = await POST(
      makeRequest(
        { Authorization: "Bearer test-token" },
        { endpoint: "https://push.example.com", keys: { auth: "key2" } }
      )
    );
    expect(response.status).toBe(400);
  });

  it("returns 400 when keys.auth is missing", async () => {
    vi.mocked(getUserFromRequest).mockResolvedValue(mockUser as never);

    const response = await POST(
      makeRequest(
        { Authorization: "Bearer test-token" },
        { endpoint: "https://push.example.com", keys: { p256dh: "key1" } }
      )
    );
    expect(response.status).toBe(400);
  });

  it("returns 400 when keys is missing entirely", async () => {
    vi.mocked(getUserFromRequest).mockResolvedValue(mockUser as never);

    const response = await POST(
      makeRequest(
        { Authorization: "Bearer test-token" },
        { endpoint: "https://push.example.com" }
      )
    );
    expect(response.status).toBe(400);
  });

  it("creates subscription successfully with valid data", async () => {
    vi.mocked(getUserFromRequest).mockResolvedValue(mockUser as never);
    vi.mocked(prisma.pushSubscription.upsert).mockResolvedValue({} as never);

    const response = await POST(
      makeRequest(
        { Authorization: "Bearer test-token" },
        {
          endpoint: "https://push.example.com/subscription/abc",
          keys: { p256dh: "p256dh-key", auth: "auth-key" },
        }
      )
    );

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.ok).toBe(true);

    expect(prisma.pushSubscription.upsert).toHaveBeenCalledWith({
      where: { endpoint: "https://push.example.com/subscription/abc" },
      create: {
        userId: "user-1",
        endpoint: "https://push.example.com/subscription/abc",
        p256dh: "p256dh-key",
        auth: "auth-key",
      },
      update: {
        p256dh: "p256dh-key",
        auth: "auth-key",
      },
    });
  });
});
