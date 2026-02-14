import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

vi.mock("@/lib/ai/summarize", () => ({
  generateBillSummary: vi.fn(),
}));

vi.mock("@/lib/parliament/client", () => ({
  getBillById: vi.fn(),
}));

import { generateBillSummary } from "@/lib/ai/summarize";
import { getBillById } from "@/lib/parliament/client";

function makeRequest(id: string) {
  return new NextRequest(`http://localhost/api/bills/${id}/summary`, {
    method: "POST",
  });
}

describe("POST /api/bills/[id]/summary", () => {
  beforeEach(() => vi.resetAllMocks());

  it("returns cached summary when bill exists in DB with summary", async () => {
    const mockSummary = {
      overview: "Overview",
      purpose: "Purpose",
      keyChanges: [],
      impacts: [],
      implementation: "",
      tldr: "TLDR",
    };

    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [mockSummary],
    } as never);

    const response = await POST(makeRequest("bill-1"), {
      params: Promise.resolve({ id: "bill-1" }),
    });
    const data = await response.json();

    expect(data.cached).toBe(true);
    expect(data.summary).toEqual(mockSummary);
    expect(generateBillSummary).not.toHaveBeenCalled();
  });

  it("generates summary when bill exists but has no summary", async () => {
    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [],
    } as never);

    const mockGenerated = {
      summary: {
        overview: "Generated overview",
        purpose: "Generated purpose",
        keyChanges: ["Change 1"],
        impacts: [{ group: "Workers", impact: "Better conditions" }],
        implementation: "2025",
        tldr: "Generated TLDR",
      },
      tokensUsed: 1500,
    };

    vi.mocked(generateBillSummary).mockResolvedValue(mockGenerated as never);
    vi.mocked(prisma.billSummary.create).mockResolvedValue({
      ...mockGenerated.summary,
      id: "summary-1",
    } as never);

    const response = await POST(makeRequest("bill-1"), {
      params: Promise.resolve({ id: "bill-1" }),
    });
    const data = await response.json();

    expect(data.cached).toBe(false);
    expect(generateBillSummary).toHaveBeenCalledWith(
      "Test Bill",
      "A test bill",
      "Government",
      null
    );
  });

  it("fetches from Parliament API when bill not in DB", async () => {
    vi.mocked(prisma.bill.findFirst).mockResolvedValue(null as never);
    vi.mocked(getBillById).mockResolvedValue({
      billId: 123,
      shortTitle: "Parliament Bill",
      longTitle: "A bill from Parliament",
      billTypeCategory: "Government",
    } as never);
    vi.mocked(prisma.bill.create).mockResolvedValue({
      id: "new-bill",
      shortTitle: "Parliament Bill",
      longTitle: "A bill from Parliament",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [],
    } as never);

    const mockGenerated = {
      summary: {
        overview: "Overview",
        purpose: "Purpose",
        keyChanges: [],
        impacts: [],
        implementation: "",
        tldr: "TLDR",
      },
      tokensUsed: 1000,
    };
    vi.mocked(generateBillSummary).mockResolvedValue(mockGenerated as never);
    vi.mocked(prisma.billSummary.create).mockResolvedValue({
      ...mockGenerated.summary,
    } as never);

    const response = await POST(makeRequest("123"), {
      params: Promise.resolve({ id: "123" }),
    });
    const data = await response.json();

    expect(getBillById).toHaveBeenCalledWith(123);
    expect(data.cached).toBe(false);
  });

  it("returns 404 when bill cannot be found anywhere", async () => {
    vi.mocked(prisma.bill.findFirst).mockResolvedValue(null as never);

    const response = await POST(makeRequest("not-a-number"), {
      params: Promise.resolve({ id: "not-a-number" }),
    });

    expect(response.status).toBe(404);
  });

  it("returns 500 when summary generation fails", async () => {
    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [],
    } as never);

    vi.mocked(generateBillSummary).mockRejectedValue(
      new Error("AI service unavailable")
    );

    const response = await POST(makeRequest("bill-1"), {
      params: Promise.resolve({ id: "bill-1" }),
    });

    expect(response.status).toBe(500);
  });
});
