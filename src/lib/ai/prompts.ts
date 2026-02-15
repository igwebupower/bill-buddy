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