import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "./route";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

vi.mock("@/lib/parliament/client", () => ({
  getBills: vi.fn(),
}));

import { getBills as getParliamentBills } from "@/lib/parliament/client";

function makeRequest(params: Record<string, string> = {}) {
  const url = new URL("http://localhost/api/bills");
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return new NextRequest(url);
}

describe("GET /api/bills", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns bills from DB when results exist", async () => {
    const mockBills = [
      {
        id: "1",
        shortTitle: "Test Bill",
        longTitle: "A test bill",
        currentHouse: "Commons",
        stages: [],
        sponsors: [],
        summaries: [],
      },
    ];

    vi.mocked(prisma.bill.findMany).mockResolvedValue(mockBills as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(1 as never);

    const response = await GET(makeRequest());
    const data = await response.json();

    expect(data.items).toHaveLength(1);
    expect(data.items[0].shortTitle).toBe("Test Bill");
    expect(data.totalResults).toBe(1);
    expect(data.currentPage).toBe(1);
  });

  it("applies search filter to DB query", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);
    vi.mocked(getParliamentBills).mockResolvedValue({
      items: [],
      totalResults: 0,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    await GET(makeRequest({ search: "education" }));

    const whereArg = vi.mocked(prisma.bill.findMany).mock.calls[0][0]?.where;
    expect(whereArg).toHaveProperty("OR");
  });

  it("applies house filter", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);
    vi.mocked(getParliamentBills).mockResolvedValue({
      items: [],
      totalResults: 0,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    await GET(makeRequest({ house: "Lords" }));

    const whereArg = vi.mocked(prisma.bill.findMany).mock.calls[0][0]?.where;
    expect(whereArg).toHaveProperty("currentHouse", "Lords");
  });

  it("applies isAct filter with 'true'", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);
    vi.mocked(getParliamentBills).mockResolvedValue({
      items: [],
      totalResults: 0,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    await GET(makeRequest({ isAct: "true" }));

    const whereArg = vi.mocked(prisma.bill.findMany).mock.calls[0][0]?.where;
    expect(whereArg).toHaveProperty("isAct", true);
  });

  it("applies isAct filter with 'false'", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);
    vi.mocked(getParliamentBills).mockResolvedValue({
      items: [],
      totalResults: 0,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    await GET(makeRequest({ isAct: "false" }));

    const whereArg = vi.mocked(prisma.bill.findMany).mock.calls[0][0]?.where;
    expect(whereArg).toHaveProperty("isAct", false);
  });

  it("caps take at 50", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);
    vi.mocked(getParliamentBills).mockResolvedValue({
      items: [],
      totalResults: 0,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    await GET(makeRequest({ take: "100" }));

    const findManyArg = vi.mocked(prisma.bill.findMany).mock.calls[0][0];
    expect(findManyArg?.take).toBe(50);
  });

  it("calculates pagination correctly", async () => {
    const mockBills = Array.from({ length: 10 }, (_, i) => ({
      id: String(i),
      shortTitle: `Bill ${i}`,
    }));

    vi.mocked(prisma.bill.findMany).mockResolvedValue(mockBills as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(25 as never);

    const response = await GET(makeRequest({ page: "2", take: "10" }));
    const data = await response.json();

    expect(data.currentPage).toBe(2);
    expect(data.itemsPerPage).toBe(10);
    expect(data.totalPages).toBe(3);
    expect(data.totalResults).toBe(25);
  });

  it("falls back to Parliament API when DB returns 0 results", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);

    const mockParliamentBills = [
      {
        billId: 100,
        shortTitle: "Parliament Bill",
        longTitle: "A bill from Parliament API",
        currentHouse: "Commons",
        currentStage: { description: "2nd Reading" },
        billTypeCategory: "Government",
        isAct: false,
        isDefeated: false,
        lastUpdate: "2024-01-01",
        sponsors: [],
      },
    ];

    vi.mocked(getParliamentBills).mockResolvedValue({
      items: mockParliamentBills,
      totalResults: 1,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    const response = await GET(makeRequest());
    const data = await response.json();

    expect(getParliamentBills).toHaveBeenCalled();
    expect(data.items[0].shortTitle).toBe("Parliament Bill");
    expect(data.items[0].id).toBe("100");
  });

  it("falls back to Parliament API when DB throws an error", async () => {
    vi.mocked(prisma.bill.findMany).mockRejectedValue(
      new Error("DB connection error")
    );

    const mockParliamentBills = [
      {
        billId: 200,
        shortTitle: "Fallback Bill",
        longTitle: "Fallback long title",
        currentHouse: "Lords",
        currentStage: null,
        billTypeCategory: "Private",
        isAct: false,
        isDefeated: false,
        lastUpdate: "2024-06-01",
        sponsors: [],
      },
    ];

    vi.mocked(getParliamentBills).mockResolvedValue({
      items: mockParliamentBills,
      totalResults: 1,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    const response = await GET(makeRequest());
    const data = await response.json();

    expect(data.items[0].shortTitle).toBe("Fallback Bill");
  });

  it("returns 500 when both DB and Parliament API fail", async () => {
    vi.mocked(prisma.bill.findMany).mockRejectedValue(
      new Error("DB error")
    );
    vi.mocked(getParliamentBills).mockRejectedValue(
      new Error("API error")
    );

    const response = await GET(makeRequest());

    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBeDefined();
  });

  it("maps Parliament API sponsors correctly", async () => {
    vi.mocked(prisma.bill.findMany).mockResolvedValue([] as never);
    vi.mocked(prisma.bill.count).mockResolvedValue(0 as never);

    vi.mocked(getParliamentBills).mockResolvedValue({
      items: [
        {
          billId: 1,
          shortTitle: "Test",
          longTitle: "Test",
          currentHouse: null,
          currentStage: null,
          billTypeCategory: "Government",
          isAct: false,
          isDefeated: false,
          lastUpdate: null,
          sponsors: [
            {
              member: {
                name: "John Smith",
                party: "Labour",
                memberPhoto: "http://example.com/photo.jpg",
              },
              organisation: null,
            },
          ],
        },
      ],
      totalResults: 1,
      itemsPerPage: 20,
      currentPage: 1,
    } as never);

    const response = await GET(makeRequest());
    const data = await response.json();

    expect(data.items[0].sponsors[0]).toEqual({
      name: "John Smith",
      party: "Labour",
      photoUrl: "http://example.com/photo.jpg",
    });
  });
});
