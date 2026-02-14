import { describe, it, expect, vi, beforeEach } from "vitest";
import { generateBillSummary } from "./summarize";

vi.mock("./client", () => ({
  anthropic: {
    messages: {
      create: vi.fn(),
    },
  },
}));

vi.mock("../legislation/fetcher", () => ({
  fetchBillText: vi.fn(),
}));

import { anthropic } from "./client";
import { fetchBillText } from "../legislation/fetcher";

const validSummary = {
  overview: "This bill reforms education standards.",
  purpose: "To improve education quality.",
  keyChanges: ["Raise teacher pay", "Update curriculum"],
  impacts: [{ group: "Teachers", impact: "Higher salaries" }],
  implementation: "Starting September 2025",
  tldr: "Reforms education standards across England.",
};

function mockAIResponse(text: string) {
  vi.mocked(anthropic.messages.create).mockResolvedValue({
    content: [{ type: "text", text }],
    usage: { input_tokens: 1000, output_tokens: 500 },
  } as never);
}

describe("generateBillSummary", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns parsed summary and token count on valid response", async () => {
    mockAIResponse(JSON.stringify(validSummary));

    const result = await generateBillSummary(
      "Education Bill",
      "A bill to reform education",
      "Government"
    );

    expect(result.summary).toEqual(validSummary);
    expect(result.tokensUsed).toBe(1500);
  });

  it("strips markdown code fences from response", async () => {
    mockAIResponse("```json\n" + JSON.stringify(validSummary) + "\n```");

    const result = await generateBillSummary(
      "Education Bill",
      "A bill to reform education",
      "Government"
    );

    expect(result.summary).toEqual(validSummary);
  });

  it("fetches bill text when legislationUrl is provided", async () => {
    vi.mocked(fetchBillText).mockResolvedValue("Full bill text here");
    mockAIResponse(JSON.stringify(validSummary));

    await generateBillSummary(
      "Test Bill",
      "Long title",
      "Government",
      "https://legislation.gov.uk/ukpga/2024/1"
    );

    expect(fetchBillText).toHaveBeenCalledWith(
      "https://legislation.gov.uk/ukpga/2024/1"
    );
  });

  it("falls back to longTitle when legislationUrl fetch fails", async () => {
    vi.mocked(fetchBillText).mockRejectedValue(new Error("Network error"));
    mockAIResponse(JSON.stringify(validSummary));

    const result = await generateBillSummary(
      "Test Bill",
      "A long title as fallback",
      "Government",
      "https://legislation.gov.uk/ukpga/2024/1"
    );

    // Should still succeed using longTitle
    expect(result.summary).toEqual(validSummary);
  });

  it("uses longTitle when no legislationUrl provided", async () => {
    mockAIResponse(JSON.stringify(validSummary));

    await generateBillSummary(
      "Test Bill",
      "The long title of the bill",
      "Government"
    );

    expect(fetchBillText).not.toHaveBeenCalled();
  });

  it("truncates bill text that exceeds MAX_BILL_TEXT_LENGTH", async () => {
    const longText = "x".repeat(100000);
    vi.mocked(fetchBillText).mockResolvedValue(longText);
    mockAIResponse(JSON.stringify(validSummary));

    await generateBillSummary(
      "Test Bill",
      "Long title",
      "Government",
      "https://legislation.gov.uk/ukpga/2024/1"
    );

    const callArgs = vi.mocked(anthropic.messages.create).mock.calls[0][0];
    const userMessage = callArgs.messages[0].content as string;
    // The prompt should contain truncated text, not the full 100k characters
    expect(userMessage.length).toBeLessThan(100000);
    expect(userMessage).toContain("[Text truncated]");
  });

  it("throws when response has missing overview", async () => {
    const invalid = { ...validSummary, overview: "" };
    mockAIResponse(JSON.stringify(invalid));

    await expect(
      generateBillSummary("Test", "Test", "Government")
    ).rejects.toThrow("Invalid summary structure");
  });

  it("throws when response has missing purpose", async () => {
    const invalid = { ...validSummary, purpose: "" };
    mockAIResponse(JSON.stringify(invalid));

    await expect(
      generateBillSummary("Test", "Test", "Government")
    ).rejects.toThrow("Invalid summary structure");
  });

  it("throws when keyChanges is not an array", async () => {
    const invalid = { ...validSummary, keyChanges: "not an array" };
    mockAIResponse(JSON.stringify(invalid));

    await expect(
      generateBillSummary("Test", "Test", "Government")
    ).rejects.toThrow("Invalid summary structure");
  });

  it("throws when impacts is not an array", async () => {
    const invalid = { ...validSummary, impacts: "not an array" };
    mockAIResponse(JSON.stringify(invalid));

    await expect(
      generateBillSummary("Test", "Test", "Government")
    ).rejects.toThrow("Invalid summary structure");
  });

  it("throws when tldr is missing", async () => {
    const invalid = { ...validSummary, tldr: "" };
    mockAIResponse(JSON.stringify(invalid));

    await expect(
      generateBillSummary("Test", "Test", "Government")
    ).rejects.toThrow("Invalid summary structure");
  });

  it("throws when AI returns invalid JSON", async () => {
    mockAIResponse("This is not JSON at all");

    await expect(
      generateBillSummary("Test", "Test", "Government")
    ).rejects.toThrow();
  });
});
