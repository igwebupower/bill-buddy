import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "./route";
import { NextRequest } from "next/server";

// Mock global fetch for Parliament API calls
const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

function makeRequest(postcode?: string) {
  const url = postcode
    ? `http://localhost/api/mp?postcode=${encodeURIComponent(postcode)}`
    : "http://localhost/api/mp";
  return new NextRequest(url, { method: "GET" });
}

describe("GET /api/mp", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns 400 when no postcode is provided", async () => {
    const response = await GET(makeRequest());
    expect(response.status).toBe(400);
  });

  it("returns 400 when postcode is too short", async () => {
    const response = await GET(makeRequest("A"));
    expect(response.status).toBe(400);
  });

  it("uses query parameter format for constituency search", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        items: [
          {
            value: {
              name: "Cities of London and Westminster",
              currentRepresentation: {
                member: {
                  value: {
                    id: 4514,
                    nameDisplayAs: "Nickie Aiken",
                    latestParty: {
                      name: "Conservative",
                      abbreviation: "Con",
                      backgroundColour: "0087DC",
                      foregroundColour: "FFFFFF",
                    },
                    thumbnailUrl:
                      "https://members-api.parliament.uk/api/Members/4514/Thumbnail",
                    gender: "F",
                  },
                },
              },
            },
          },
        ],
      }),
    });

    // Contact endpoint
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        value: [
          {
            type: "Parliamentary",
            email: "nickie.aiken.mp@parliament.uk",
          },
        ],
      }),
    });

    await GET(makeRequest("SW1A 1AA"));

    // Verify the constituency search uses query params, NOT path segments
    const constituencyUrl = mockFetch.mock.calls[0][0] as string;
    expect(constituencyUrl).toContain("?searchText=");
    expect(constituencyUrl).not.toMatch(
      /\/Location\/Constituency\/Search\/SW1A/
    );
  });

  it("returns MP data with email on successful lookup", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        items: [
          {
            value: {
              name: "Test Constituency",
              currentRepresentation: {
                member: {
                  value: {
                    id: 1234,
                    nameDisplayAs: "Test MP",
                    latestParty: {
                      name: "Labour",
                      abbreviation: "Lab",
                      backgroundColour: "DC241F",
                      foregroundColour: "FFFFFF",
                    },
                    thumbnailUrl: "https://example.com/photo.jpg",
                    gender: "M",
                  },
                },
              },
            },
          },
        ],
      }),
    });

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        value: [
          {
            type: "Parliamentary",
            email: "test.mp@parliament.uk",
          },
        ],
      }),
    });

    const response = await GET(makeRequest("SW1A 1AA"));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.name).toBe("Test MP");
    expect(data.email).toBe("test.mp@parliament.uk");
    expect(data.constituency).toBe("Test Constituency");
    expect(data.party).toBe("Labour");
  });

  it("returns 404 when constituency not found", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ items: [] }),
    });

    const response = await GET(makeRequest("ZZ99 9ZZ"));
    expect(response.status).toBe(404);
  });

  it("returns 404 when no current MP (vacant seat)", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        items: [
          {
            value: {
              name: "Vacant Constituency",
              currentRepresentation: {},
            },
          },
        ],
      }),
    });

    const response = await GET(makeRequest("SW1A 1AA"));
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toContain("vacant");
  });

  it("returns MP data with null email when contact details unavailable", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        items: [
          {
            value: {
              name: "Test Constituency",
              currentRepresentation: {
                member: {
                  value: {
                    id: 1234,
                    nameDisplayAs: "Test MP",
                    latestParty: {
                      name: "Labour",
                      abbreviation: "Lab",
                      backgroundColour: "DC241F",
                      foregroundColour: "FFFFFF",
                    },
                    thumbnailUrl: "https://example.com/photo.jpg",
                    gender: "M",
                  },
                },
              },
            },
          },
        ],
      }),
    });

    // Contact endpoint fails
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });

    const response = await GET(makeRequest("SW1A 1AA"));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.name).toBe("Test MP");
    expect(data.email).toBeNull();
  });
});
