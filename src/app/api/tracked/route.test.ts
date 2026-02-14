import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET, POST, DELETE } from "./route";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

vi.mock("@/lib/parliament/client", () => ({
  getBillById: vi.fn(),
}));

function makeRequest(
  method: string,
  options: {
    headers?: Record<string, string>;
    body?: unknown;
    searchParams?: Record<string, string>;
  } = {}
) {
  const url = new URL("http://localhost/api/tracked");
  if (options.searchParams) {
    Object.entries(options.searchParams).forEach(([k, v]) =>
      url.searchParams.set(k, v)
    );
  }

  return new NextRequest(url, {
    method,
    headers: options.headers || {},
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
}

describe("GET /api/tracked", () => {
  beforeEach(() => vi.resetAllMocks());

  it("returns 400 when X-Device-ID header is missing", async () => {
    const response = await GET(makeRequest("GET"));
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe("Missing device ID");
  });

  it("returns tracked bills for a valid device", async () => {
    const mockTracked = [
      {
        id: "1",
        deviceId: "device-123",
        billId: "bill-1",
        bill: { shortTitle: "Test Bill", stages: [], summaries: [] },
      },
    ];

    vi.mocked(prisma.trackedBill.findMany).mockResolvedValue(
      mockTracked as never
    );

    const response = await GET(
      makeRequest("GET", { headers: { "X-Device-ID": "device-123" } })
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.items).toHaveLength(1);
    expect(data.items[0].bill.shortTitle).toBe("Test Bill");
  });
});

describe("POST /api/tracked", () => {
  beforeEach(() => vi.resetAllMocks());

  it("returns 400 when X-Device-ID header is missing", async () => {
    const response = await POST(
      makeRequest("POST", { body: { billId: "1" } })
    );
    expect(response.status).toBe(400);
  });

  it("returns 400 when neither billId nor parliamentId is provided", async () => {
    const response = await POST(
      makeRequest("POST", {
        headers: { "X-Device-ID": "device-123" },
        body: {},
      })
    );
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain("Missing billId or parliamentId");
  });

  it("tracks a bill that already exists in DB", async () => {
    const mockBill = {
      id: "bill-1",
      shortTitle: "Existing Bill",
      parliamentId: 100,
    };

    vi.mocked(prisma.deviceProfile.upsert).mockResolvedValue({} as never);
    vi.mocked(prisma.bill.findUnique).mockResolvedValue(mockBill as never);
    vi.mocked(prisma.trackedBill.upsert).mockResolvedValue({
      id: "tracked-1",
      billId: "bill-1",
      bill: mockBill,
    } as never);

    const response = await POST(
      makeRequest("POST", {
        headers: { "X-Device-ID": "device-123" },
        body: { billId: "bill-1" },
      })
    );

    expect(response.status).toBe(201);
    expect(prisma.trackedBill.upsert).toHaveBeenCalled();
  });

  it("returns 404 for invalid (NaN) parliament ID when bill not found", async () => {
    vi.mocked(prisma.deviceProfile.upsert).mockResolvedValue({} as never);
    vi.mocked(prisma.bill.findUnique).mockResolvedValue(null as never);

    const { getBillById } = await import("@/lib/parliament/client");

    const response = await POST(
      makeRequest("POST", {
        headers: { "X-Device-ID": "device-123" },
        body: { parliamentId: "not-a-number" },
      })
    );

    expect(response.status).toBe(404);
  });
});

describe("DELETE /api/tracked", () => {
  beforeEach(() => vi.resetAllMocks());

  it("returns 400 when X-Device-ID header is missing", async () => {
    const response = await DELETE(makeRequest("DELETE"));
    expect(response.status).toBe(400);
  });

  it("returns 400 when billId is missing", async () => {
    const response = await DELETE(
      makeRequest("DELETE", {
        headers: { "X-Device-ID": "device-123" },
      })
    );
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe("Missing billId");
  });

  it("deletes tracking and returns ok when bill exists", async () => {
    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
    } as never);
    vi.mocked(prisma.trackedBill.deleteMany).mockResolvedValue({
      count: 1,
    } as never);

    const response = await DELETE(
      makeRequest("DELETE", {
        headers: { "X-Device-ID": "device-123" },
        searchParams: { billId: "bill-1" },
      })
    );

    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(prisma.trackedBill.deleteMany).toHaveBeenCalledWith({
      where: { deviceId: "device-123", billId: "bill-1" },
    });
  });

  it("returns ok even when bill is not found", async () => {
    vi.mocked(prisma.bill.findFirst).mockResolvedValue(null as never);

    const response = await DELETE(
      makeRequest("DELETE", {
        headers: { "X-Device-ID": "device-123" },
        searchParams: { billId: "nonexistent" },
      })
    );

    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(prisma.trackedBill.deleteMany).not.toHaveBeenCalled();
  });
});
