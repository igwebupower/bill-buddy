import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "./route";

vi.mock("@/lib/inngest/client", () => ({
  inngest: {
    send: vi.fn(),
  },
}));

import { inngest } from "@/lib/inngest/client";

describe("GET /api/cron/sync-bills", () => {
  beforeEach(() => vi.resetAllMocks());

  it("triggers a sync event and returns ok", async () => {
    vi.mocked(inngest.send).mockResolvedValue(undefined as never);

    const response = await GET();
    const data = await response.json();

    expect(data.ok).toBe(true);
    expect(data.message).toBe("Sync triggered");
    expect(inngest.send).toHaveBeenCalledWith({
      name: "bills/sync",
      data: {},
    });
  });

  it("returns 500 when inngest.send fails", async () => {
    vi.mocked(inngest.send).mockRejectedValue(new Error("Queue error"));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.ok).toBe(false);
    expect(data.error).toBe("Failed to trigger sync");
  });
});
