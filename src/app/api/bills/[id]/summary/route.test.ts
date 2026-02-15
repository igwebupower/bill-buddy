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

vi.mock("@/lib/ai/client", () => ({
  anthropic: {
    messages: {
      create: vi.fn(),
    },
  },
}));

import { generateBillSummary } from "@/lib/ai/summarize";
import { getBillById } from "@/lib/parliament/client";
import { anthropic } from "@/lib/ai/client";

function makeRequest(id: string, body?: Record<string, unknown>) {
  return new NextRequest(`http://localhost/api/bills/${id}/summary`, {
    method: "POST",
    ...(body
      ? {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      : {}),
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

  it("returns 400 for unsupported language", async () => {
    const response = await POST(makeRequest("bill-1", { language: "xx" }), {
      params: Promise.resolve({ id: "bill-1" }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe("Unsupported language");
  });

  it("returns cached translated summary when it exists", async () => {
    const welshSummary = {
      overview: "Trosolwg",
      purpose: "Pwrpas",
      keyChanges: ["Newid 1"],
      impacts: [{ group: "Gweithwyr", impact: "Amodau gwell" }],
      implementation: "2025",
      tldr: "Crynodeb Cymraeg",
    };

    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [welshSummary],
    } as never);

    const response = await POST(makeRequest("bill-1", { language: "cy" }), {
      params: Promise.resolve({ id: "bill-1" }),
    });
    const data = await response.json();

    expect(data.cached).toBe(true);
    expect(data.language).toBe("cy");
    expect(data.summary).toEqual(welshSummary);
    expect(generateBillSummary).not.toHaveBeenCalled();
  });

  it("generates English then translates for non-English language", async () => {
    // Bill exists but no cy summary
    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [],
    } as never);

    // No existing English summary
    vi.mocked(prisma.billSummary.findFirst).mockResolvedValue(null as never);

    // Generate English summary
    vi.mocked(generateBillSummary).mockResolvedValue({
      summary: {
        overview: "English overview",
        purpose: "English purpose",
        keyChanges: ["Change 1"],
        impacts: [{ group: "Workers", impact: "Better conditions" }],
        implementation: "2025",
        tldr: "English TLDR",
      },
      tokensUsed: 1500,
    } as never);

    // Save English summary
    vi.mocked(prisma.billSummary.create).mockResolvedValue({
      id: "summary-en",
      billId: "bill-1",
      language: "en",
      version: 1,
      overview: "English overview",
      purpose: "English purpose",
      keyChanges: ["Change 1"],
      impacts: [{ group: "Workers", impact: "Better conditions" }],
      implementation: "2025",
      tldr: "English TLDR",
      tokensUsed: 1500,
    } as never);

    // Claude translates
    const translatedSummary = {
      overview: "Trosolwg Cymraeg",
      purpose: "Pwrpas Cymraeg",
      keyChanges: ["Newid 1"],
      impacts: [{ group: "Gweithwyr", impact: "Amodau gwell" }],
      implementation: "2025",
      tldr: "Crynodeb Cymraeg",
    };
    vi.mocked(anthropic.messages.create).mockResolvedValue({
      content: [{ type: "text", text: JSON.stringify(translatedSummary) }],
      usage: { input_tokens: 500, output_tokens: 600 },
    } as never);

    const response = await POST(makeRequest("bill-1", { language: "cy" }), {
      params: Promise.resolve({ id: "bill-1" }),
    });
    const data = await response.json();

    expect(data.language).toBe("cy");
    expect(data.cached).toBe(false);
    expect(generateBillSummary).toHaveBeenCalled();
    expect(anthropic.messages.create).toHaveBeenCalled();
  });

  it("uses existing English summary for translation without regenerating", async () => {
    // Bill exists but no cy summary
    vi.mocked(prisma.bill.findFirst).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [],
    } as never);

    // English summary already exists
    vi.mocked(prisma.billSummary.findFirst).mockResolvedValue({
      id: "summary-en",
      billId: "bill-1",
      language: "en",
      version: 1,
      overview: "Existing English overview",
      purpose: "Existing English purpose",
      keyChanges: ["Change 1"],
      impacts: [{ group: "Workers", impact: "Better conditions" }],
      implementation: "2025",
      tldr: "Existing English TLDR",
      tokensUsed: 1500,
    } as never);

    const translatedSummary = {
      overview: "Trosolwg",
      purpose: "Pwrpas",
      keyChanges: ["Newid 1"],
      impacts: [{ group: "Gweithwyr", impact: "Amodau gwell" }],
      implementation: "2025",
      tldr: "Crynodeb",
    };
    vi.mocked(anthropic.messages.create).mockResolvedValue({
      content: [{ type: "text", text: JSON.stringify(translatedSummary) }],
      usage: { input_tokens: 500, output_tokens: 600 },
    } as never);

    vi.mocked(prisma.billSummary.create).mockResolvedValue({
      ...translatedSummary,
      id: "summary-cy",
    } as never);

    const response = await POST(makeRequest("bill-1", { language: "cy" }), {
      params: Promise.resolve({ id: "bill-1" }),
    });
    const data = await response.json();

    expect(data.language).toBe("cy");
    // Should NOT regenerate English — should reuse existing
    expect(generateBillSummary).not.toHaveBeenCalled();
    // Should translate via Claude API
    expect(anthropic.messages.create).toHaveBeenCalled();
  });
});
