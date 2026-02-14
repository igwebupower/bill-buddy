import { describe, it, expect } from "vitest";
import {
  BILL_SUMMARY_SYSTEM,
  billSummaryPrompt,
  topicClassifyPrompt,
  translatePrompt,
} from "./prompts";

describe("BILL_SUMMARY_SYSTEM", () => {
  it("is a non-empty string with key instructions", () => {
    expect(typeof BILL_SUMMARY_SYSTEM).toBe("string");
    expect(BILL_SUMMARY_SYSTEM.length).toBeGreaterThan(0);
    expect(BILL_SUMMARY_SYSTEM).toContain("plain English");
    expect(BILL_SUMMARY_SYSTEM).toContain("non-partisan");
  });
});

describe("billSummaryPrompt", () => {
  it("includes all interpolated values", () => {
    const result = billSummaryPrompt(
      "Education Reform Bill",
      "A bill to reform education in England and Wales",
      "Full text of the bill here",
      "Government"
    );

    expect(result).toContain("Education Reform Bill");
    expect(result).toContain("A bill to reform education in England and Wales");
    expect(result).toContain("Full text of the bill here");
    expect(result).toContain("Government");
  });

  it("requests JSON output format", () => {
    const result = billSummaryPrompt("Test", "Test", "Test", "Government");
    expect(result).toContain("overview");
    expect(result).toContain("purpose");
    expect(result).toContain("keyChanges");
    expect(result).toContain("impacts");
    expect(result).toContain("implementation");
    expect(result).toContain("tldr");
  });

  it("handles special characters in input", () => {
    const result = billSummaryPrompt(
      'Bill with "quotes" & <brackets>',
      "Long title with £1,000,000",
      "Text with\nnewlines\tand\ttabs",
      "Private Members'"
    );

    expect(result).toContain('Bill with "quotes" & <brackets>');
    expect(result).toContain("£1,000,000");
    expect(result).toContain("Private Members'");
  });
});

describe("topicClassifyPrompt", () => {
  it("includes title and long title", () => {
    const result = topicClassifyPrompt(
      "Housing Bill",
      "A bill to reform housing regulations"
    );

    expect(result).toContain("Housing Bill");
    expect(result).toContain("A bill to reform housing regulations");
  });

  it("lists available policy topics", () => {
    const result = topicClassifyPrompt("Test", "Test");
    expect(result).toContain("Health");
    expect(result).toContain("Education");
    expect(result).toContain("Housing");
    expect(result).toContain("Environment");
  });

  it("lists available affected groups", () => {
    const result = topicClassifyPrompt("Test", "Test");
    expect(result).toContain("Workers");
    expect(result).toContain("Renters");
    expect(result).toContain("Students");
  });

  it("requests JSON output", () => {
    const result = topicClassifyPrompt("Test", "Test");
    expect(result).toContain("topics");
    expect(result).toContain("groups");
    expect(result).toContain("JSON");
  });
});

describe("translatePrompt", () => {
  const mockSummary = {
    overview: "This bill does something",
    purpose: "To fix a problem",
    keyChanges: ["Change 1", "Change 2"],
    impacts: [{ group: "Workers", impact: "Better wages" }],
    implementation: "Starting 2025",
    tldr: "A short summary",
  };

  it("includes target language", () => {
    const result = translatePrompt(mockSummary, "French");
    expect(result).toContain("French");
  });

  it("serializes the summary object as JSON", () => {
    const result = translatePrompt(mockSummary, "Spanish");
    expect(result).toContain('"overview"');
    expect(result).toContain("This bill does something");
    expect(result).toContain("Change 1");
    expect(result).toContain("Workers");
  });

  it("mentions preserving JSON structure", () => {
    const result = translatePrompt(mockSummary, "German");
    expect(result).toContain("same structure");
  });
});
