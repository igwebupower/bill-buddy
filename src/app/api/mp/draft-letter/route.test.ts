import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";
import { NextRequest } from "next/server";

vi.mock("@/lib/ai/client", () => ({
  anthropic: {
    messages: {
      create: vi.fn(),
    },
  },
}));

import { anthropic } from "@/lib/ai/client";

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest("http://localhost/api/mp/draft-letter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBody = {
  billTitle: "Education Reform Bill",
  billSummary: "A bill to reform education standards across England.",
  mpName: "Jane Smith MP",
  constituency: "Bristol West",
  stance: "support",
};

describe("POST /api/mp/draft-letter", () => {
  beforeEach(() => vi.resetAllMocks());

  it("returns 400 when required fields are missing", async () => {
    const response = await POST(makeRequest({ billTitle: "Test" }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain("Missing required fields");
  });

  it("returns 400 for invalid stance", async () => {
    const response = await POST(
      makeRequest({ ...validBody, stance: "neutral" })
    );
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toContain("stance must be one of");
  });

  it("returns drafted letter on success", async () => {
    vi.mocked(anthropic.messages.create).mockResolvedValue({
      content: [
        {
          type: "text",
          text: "I am writing to you as your constituent regarding the Education Reform Bill.",
        },
      ],
    } as never);

    const response = await POST(makeRequest(validBody));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.letter).toContain("Education Reform Bill");
    expect(data.subject).toContain("Education Reform Bill");
    expect(anthropic.messages.create).toHaveBeenCalledWith(
      expect.objectContaining({
        max_tokens: 1024,
        messages: expect.arrayContaining([
          expect.objectContaining({ role: "user" }),
        ]),
      })
    );
  });

  it("includes personal note in the prompt when provided", async () => {
    vi.mocked(anthropic.messages.create).mockResolvedValue({
      content: [{ type: "text", text: "Letter with personal note." }],
    } as never);

    await POST(
      makeRequest({
        ...validBody,
        personalNote: "As a parent of two school-age children",
      })
    );

    const callArgs = vi.mocked(anthropic.messages.create).mock.calls[0][0];
    const userMessage = callArgs.messages[0].content as string;
    expect(userMessage).toContain("As a parent of two school-age children");
  });

  it("accepts all valid stance values", async () => {
    vi.mocked(anthropic.messages.create).mockResolvedValue({
      content: [{ type: "text", text: "Letter text." }],
    } as never);

    for (const stance of ["support", "oppose", "concerned"]) {
      const response = await POST(makeRequest({ ...validBody, stance }));
      expect(response.status).toBe(200);
    }
  });

  it("returns 500 when AI call fails", async () => {
    vi.mocked(anthropic.messages.create).mockRejectedValue(
      new Error("API error")
    );

    const response = await POST(makeRequest(validBody));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toContain("Failed to draft letter");
  });
});
