import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchBillText } from "./fetcher";

describe("fetchBillText", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    mockFetch.mockReset();
  });

  it("appends /data.xml to URLs that don't already end with it", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("<Text>Hello world</Text>"),
    });

    await fetchBillText("https://legislation.gov.uk/ukpga/2024/1");

    expect(mockFetch.mock.calls[0][0]).toBe(
      "https://legislation.gov.uk/ukpga/2024/1/data.xml"
    );
  });

  it("does not double-append /data.xml", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("<Text>Hello</Text>"),
    });

    await fetchBillText("https://legislation.gov.uk/ukpga/2024/1/data.xml");

    expect(mockFetch.mock.calls[0][0]).toBe(
      "https://legislation.gov.uk/ukpga/2024/1/data.xml"
    );
  });

  it("throws on non-OK response", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    await expect(
      fetchBillText("https://legislation.gov.uk/ukpga/2024/1")
    ).rejects.toThrow("Failed to fetch legislation XML: 404 Not Found");
  });

  it("extracts text from Title elements", async () => {
    const xml = `<?xml version="1.0"?>
      <Legislation>
        <Title>Part 1 - Introduction</Title>
        <Text>This is the main text of the bill.</Text>
      </Legislation>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).toContain("Part 1 - Introduction");
    expect(result).toContain("This is the main text of the bill.");
  });

  it("extracts text from Pnumber and Number elements as headings", async () => {
    const xml = `<Legislation>
      <Pnumber>1</Pnumber>
      <Number>Section 2</Number>
    </Legislation>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).toContain("## 1");
    expect(result).toContain("## Section 2");
  });

  it("extracts text from Para and P elements", async () => {
    const xml = `<Legislation>
      <Para>First paragraph content.</Para>
      <P>Second paragraph content.</P>
      <P1para>Third paragraph content.</P1para>
      <P2para>Fourth paragraph content.</P2para>
    </Legislation>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).toContain("First paragraph content.");
    expect(result).toContain("Second paragraph content.");
    expect(result).toContain("Third paragraph content.");
    expect(result).toContain("Fourth paragraph content.");
  });

  it("strips nested HTML/XML tags from content", async () => {
    const xml = `<Legislation>
      <Text>This has <b>bold</b> and <i>italic</i> text.</Text>
    </Legislation>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).toContain("bold");
    expect(result).toContain("italic");
    expect(result).not.toContain("<b>");
    expect(result).not.toContain("<i>");
  });

  it("removes XML processing instructions", async () => {
    const xml = `<?xml version="1.0" encoding="utf-8"?>
      <Legislation>
        <Text>Content here</Text>
      </Legislation>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).not.toContain("<?xml");
    expect(result).toContain("Content here");
  });

  it("removes XML comments", async () => {
    const xml = `<Legislation>
      <!-- This is a comment -->
      <Text>Visible content</Text>
    </Legislation>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).not.toContain("This is a comment");
    expect(result).toContain("Visible content");
  });

  it("falls back to stripping all tags when no known elements match", async () => {
    const xml = `<CustomRoot>
      <CustomElement>Some random text</CustomElement>
    </CustomRoot>`;

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(xml),
    });

    const result = await fetchBillText("https://example.com");
    expect(result).toContain("Some random text");
    expect(result).not.toContain("<CustomElement>");
  });
});
