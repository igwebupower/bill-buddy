/**
 * Fetches and parses bill text from legislation.gov.uk XML
 */

export async function fetchBillText(url: string): Promise<string> {
  // Convert HTML URL to XML data URL
  const xmlUrl = url.endsWith("/data.xml") ? url : `${url}/data.xml`;

  const res = await fetch(xmlUrl, {
    headers: { Accept: "application/xml" },
    next: { revalidate: 86400 }, // cache 24h
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch legislation XML: ${res.status} ${res.statusText}`
    );
  }

  const xml = await res.text();

  // Extract text content from XML, stripping tags
  return extractTextFromXml(xml);
}

function extractTextFromXml(xml: string): string {
  // Remove XML processing instructions and comments
  let text = xml
    .replace(/<\?.*?\?>/g, "")
    .replace(/<!--.*?-->/gs, "");

  // Extract content from common legislation XML elements
  const sections: string[] = [];

  // Match section headings
  const headingPattern =
    /<(?:Title|Pnumber|Number)[^>]*>(.*?)<\/(?:Title|Pnumber|Number)>/gs;
  let match;
  while ((match = headingPattern.exec(text)) !== null) {
    const content = stripTags(match[1]).trim();
    if (content) sections.push(`\n## ${content}`);
  }

  // Match paragraph text
  const paraPattern = /<(?:Text|P|Para|P1para|P2para)[^>]*>(.*?)<\/(?:Text|P|Para|P1para|P2para)>/gs;
  while ((match = paraPattern.exec(text)) !== null) {
    const content = stripTags(match[1]).trim();
    if (content) sections.push(content);
  }

  if (sections.length > 0) {
    return sections.join("\n\n");
  }

  // Fallback: just strip all XML tags
  return stripTags(text)
    .replace(/\s+/g, " ")
    .replace(/\n\s*\n/g, "\n\n")
    .trim();
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}
