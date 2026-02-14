export const BILL_SUMMARY_SYSTEM = `You are a UK Parliamentary legislation expert who explains bills to ordinary citizens. Your role is to make complex legal language accessible while being accurate and non-partisan.

IMPORTANT RULES:
- Use plain English, avoid legal jargon
- Be factual and non-partisan - never express political opinions
- Explain impacts on real people with concrete examples
- If something is uncertain, say so
- Be concise but thorough`;

export function billSummaryPrompt(
  title: string,
  longTitle: string,
  billText: string,
  billType: string
): string {
  return `Analyze this UK Parliamentary bill and produce a structured summary.

BILL TITLE: ${title}
LONG TITLE: ${longTitle}
BILL TYPE: ${billType}

BILL TEXT:
${billText}

Respond with a JSON object matching this exact structure:
{
  "overview": "A 2-3 paragraph plain-English overview of what this bill does and why it matters. Write for someone with no legal background.",
  "purpose": "A 1-2 paragraph explanation of why this bill was introduced - what problem is it trying to solve?",
  "keyChanges": ["Array of 4-8 strings, each describing a specific change the bill would make. Start each with a verb."],
  "impacts": [
    {"group": "Name of affected group (e.g., 'Renters', 'NHS Workers', 'Small Businesses')", "impact": "How this group would be affected, in 1-2 sentences"}
  ],
  "implementation": "How and when these changes would take effect if the bill passes. Include any transition periods mentioned.",
  "tldr": "One sentence summary, max 150 characters. Must be understandable to a 16-year-old."
}

Return ONLY valid JSON, no markdown fences or extra text.`;
}

export function topicClassifyPrompt(
  title: string,
  longTitle: string
): string {
  return `Classify this UK Parliamentary bill into policy topics and affected groups.

BILL TITLE: ${title}
LONG TITLE: ${longTitle}

POLICY TOPICS (choose 1-3):
Health, Education, Housing, Transport, Environment, Economy, Defence, Immigration, Justice, Technology, Employment, Social Welfare

AFFECTED GROUPS (choose 1-4):
Workers, Renters, Homeowners, Students, Pensioners, NHS Staff, Businesses, Children, Disabled People, Veterans, Immigrants, Farmers, Consumers, Local Authorities, Charities

Respond with JSON:
{
  "topics": ["topic1", "topic2"],
  "groups": ["group1", "group2"]
}

Return ONLY valid JSON.`;
}

export const LETTER_DRAFT_SYSTEM = `You are a helpful assistant that drafts concise, respectful letters from UK constituents to their Members of Parliament about specific parliamentary bills. You write in a personal, authentic voice — not overly formal, not casual.

IMPORTANT RULES:
- Keep the letter under 300 words
- Be respectful and constructive regardless of stance
- Reference the specific bill by name
- Never fabricate facts about the bill
- Include a clear ask (e.g. vote for/against, raise concerns, request information)
- Do not include addresses, dates, or sign-offs — only the letter body
- Write in first person as the constituent`;

export function draftLetterPrompt(
  billTitle: string,
  billSummary: string,
  mpName: string,
  constituency: string,
  stance: "support" | "oppose" | "concerned",
  personalNote?: string
): string {
  const stanceText = {
    support: "supports this bill and wants to encourage their MP to back it",
    oppose: "opposes this bill and wants to urge their MP to vote against it",
    concerned:
      "has concerns about this bill and wants their MP to scrutinise it carefully",
  }[stance];

  return `Draft a letter from a constituent in ${constituency} to their MP, ${mpName}, about the following bill.

BILL: ${billTitle}

BILL SUMMARY:
${billSummary}

The constituent ${stanceText}.${personalNote ? `\n\nThe constituent also wants to mention: ${personalNote}` : ""}

Write ONLY the letter body (no greeting, no sign-off, no addresses). Keep it under 300 words, personal, and specific to the bill's content.`;
}

export function translatePrompt(
  summary: {
    overview: string;
    purpose: string;
    keyChanges: string[];
    impacts: Array<{ group: string; impact: string }>;
    implementation: string;
    tldr: string;
  },
  targetLanguage: string
): string {
  return `Translate this UK Parliamentary bill summary into ${targetLanguage}. Maintain the same JSON structure and keep it natural-sounding in the target language.

${JSON.stringify(summary, null, 2)}

Return ONLY valid JSON with the same structure, all text fields translated to ${targetLanguage}.`;
}
