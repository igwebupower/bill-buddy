import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getBillTypeLabel,
  getHouseColor,
  getStageProgress,
  getBills,
  getBillById,
  getBillStages,
  getBillPublications,
} from "./client";

// ─── Pure helper functions ──────────────────────────────────────────────────────

describe("getBillTypeLabel", () => {
  it("returns 'Government Bill' for 'Government'", () => {
    expect(getBillTypeLabel("Government")).toBe("Government Bill");
  });

  it("returns 'Private Members' Bill' for 'Private Members''", () => {
    expect(getBillTypeLabel("Private Members'")).toBe("Private Members' Bill");
  });

  it("returns 'Private Bill' for 'Private'", () => {
    expect(getBillTypeLabel("Private")).toBe("Private Bill");
  });

  it("returns the raw string for unknown categories", () => {
    expect(getBillTypeLabel("Hybrid")).toBe("Hybrid");
    expect(getBillTypeLabel("")).toBe("");
  });
});

describe("getHouseColor", () => {
  it("returns commons classes for 'Commons'", () => {
    const result = getHouseColor("Commons");
    expect(result).toContain("commons");
  });

  it("returns lords classes for 'Lords'", () => {
    const result = getHouseColor("Lords");
    expect(result).toContain("lords");
  });

  it("returns muted classes for null", () => {
    const result = getHouseColor(null);
    expect(result).toContain("muted");
  });

  it("returns muted classes for unknown house", () => {
    const result = getHouseColor("Unknown");
    expect(result).toContain("muted");
  });
});

describe("getStageProgress", () => {
  it("returns 0 for null", () => {
    expect(getStageProgress(null)).toBe(0);
  });

  it("returns 15 for 1st reading stages", () => {
    expect(getStageProgress("1st reading")).toBe(15);
    expect(getStageProgress("Commons 1st Reading")).toBe(15);
  });

  it("returns 30 for 2nd reading stages", () => {
    expect(getStageProgress("2nd reading")).toBe(30);
    expect(getStageProgress("Lords 2nd Reading")).toBe(30);
  });

  it("returns 45 for committee stages", () => {
    expect(getStageProgress("Committee stage")).toBe(45);
    expect(getStageProgress("Public Bill Committee")).toBe(45);
  });

  it("returns 60 for report stages", () => {
    expect(getStageProgress("Report stage")).toBe(60);
  });

  it("returns 75 for 3rd reading stages", () => {
    expect(getStageProgress("3rd reading")).toBe(75);
    expect(getStageProgress("Lords 3rd Reading")).toBe(75);
  });

  it("returns 100 for royal assent", () => {
    expect(getStageProgress("Royal Assent")).toBe(100);
  });

  it("returns 100 for act stages", () => {
    expect(getStageProgress("Act of Parliament")).toBe(100);
  });

  it("returns 65 for consideration stages", () => {
    expect(getStageProgress("Consideration of amendments")).toBe(65);
  });

  it("returns 85 for ping pong stages", () => {
    expect(getStageProgress("Ping Pong")).toBe(85);
  });

  it("returns 50 for unknown stages", () => {
    expect(getStageProgress("Something Unknown")).toBe(50);
  });
});

// ─── API client functions (mocking fetch) ────────────────────────────────────────

describe("Parliament API client", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    mockFetch.mockReset();
  });

  describe("getBills", () => {
    it("calls the correct URL with default params", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [], totalResults: 0 }),
      });

      await getBills();

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.pathname).toBe("/api/v1/Bills");
      expect(calledUrl.searchParams.get("Skip")).toBe("0");
      expect(calledUrl.searchParams.get("Take")).toBe("20");
      expect(calledUrl.searchParams.get("SortField")).toBe("DateUpdated");
      expect(calledUrl.searchParams.get("SortOrder")).toBe("0");
    });

    it("maps sortField 'title' to 'Title'", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [], totalResults: 0 }),
      });

      await getBills({ sortField: "title" });

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.searchParams.get("SortField")).toBe("Title");
    });

    it("maps sortOrder 'asc' to 1", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [], totalResults: 0 }),
      });

      await getBills({ sortOrder: "asc" });

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.searchParams.get("SortOrder")).toBe("1");
    });

    it("calculates Skip from page and take", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [], totalResults: 0 }),
      });

      await getBills({ page: 3, take: 10 });

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.searchParams.get("Skip")).toBe("20");
      expect(calledUrl.searchParams.get("Take")).toBe("10");
    });

    it("includes search term when provided", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [], totalResults: 0 }),
      });

      await getBills({ search: "education" });

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.searchParams.get("SearchTerm")).toBe("education");
    });

    it("excludes undefined params from URL", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [], totalResults: 0 }),
      });

      await getBills({ search: undefined });

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.searchParams.has("SearchTerm")).toBe(false);
    });

    it("throws on non-OK response", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      });

      await expect(getBills()).rejects.toThrow("Parliament API error: 500");
    });
  });

  describe("getBillById", () => {
    it("calls the correct URL with bill ID", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ billId: 123 }),
      });

      await getBillById(123);

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.pathname).toBe("/api/v1/Bills/123");
    });

    it("throws on non-OK response", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 404,
        statusText: "Not Found",
      });

      await expect(getBillById(999)).rejects.toThrow(
        "Parliament API error: 404"
      );
    });
  });

  describe("getBillStages", () => {
    it("calls the correct URL", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ items: [] }),
      });

      await getBillStages(42);

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.pathname).toBe("/api/v1/Bills/42/Stages");
    });
  });

  describe("getBillPublications", () => {
    it("calls the correct URL", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ publications: [] }),
      });

      await getBillPublications(42);

      const calledUrl = new URL(mockFetch.mock.calls[0][0]);
      expect(calledUrl.pathname).toBe("/api/v1/Bills/42/Publications");
    });
  });
});
