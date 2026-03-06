export const BILL_SUMMARY_SYSTEM = `You are an expert in UK Parliamentary legislation. You explain bills to ordinary citizens accurately and without political bias.

UK PARLIAMENTARY CONTEXT YOU MUST APPLY:
- Schedules contain substantive law — they are as important as the main clauses, not appendices
- "The Secretary of State may by regulations" = delegated powers (a Henry VIII clause if it amends primary legislation). Flag these — they are controversial because they let ministers change the law without full Parliamentary scrutiny
- Commencement orders: a bill receiving Royal Assent does NOT mean it takes effect immediately. "The Act comes into force on a day appointed by the Secretary of State" means implementation can be delayed indefinitely. Note this where relevant
- Extent clauses define where a bill applies. Health, education, policing, and housing are devolved — a bill may apply to England only even if it sounds UK-wide. Always state the extent when known
- Government Bills are introduced by ministers and almost always pass. Private Members' Bills are introduced by backbench MPs and have roughly a 5% chance of passing unless the Government adopts them
- Private Bills affect specific organisations or localities, not the general public

RULES:
- Plain English only — never use legal jargon without immediately explaining it
- Factual and non-partisan
- When Explanatory Notes are provided, treat them as the authoritative source of Parliamentary intent — they are written by the department introducing the bill
- Be specific about which groups are affected and how`;

export function billSummaryPrompt(
  title: string,
  longTitle: string,
  billText: string,
  billType: string,
  explanatoryNotes?: string
): string {
  const billTypeContext =
    billType === "Private Members'"
      ? "PRIVATE MEMBERS' BILL — introduced by a backbench MP, not the Government. Has approximately a 5% chance of passing without Government support."
      : billType === "Private"
      ? "PRIVATE BILL — affects specific organisations or localities, not the general public."
      : "GOVERNMENT BILL — introduced by ministers, has strong likelihood of passing.";

  return `Analyze this UK Parliamentary bill and produce a structured summary.

BILL TITLE: ${title}
LONG TITLE: ${longTitle}
BILL TYPE: ${billTypeContext}
${explanatoryNotes ? `\nEXPLANATORY NOTES (official Parliamentary document — use as primary source for intent):\n${explanatoryNotes}\n` : ""}
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
  "implementation": "How and when these changes would take effect if the bill passes. Include any transition periods mentioned. If implementation date is at ministerial discretion via commencement order, say so explicitly.",
  "extent": "Which parts of the UK this bill applies to (e.g. 'England and Wales only', 'UK-wide', 'England only', 'Scotland only'). State 'Not specified in available text' if genuinely unclear.",
  "delegatedPowers": "Describe any significant powers given to ministers to make regulations or statutory instruments without full Parliamentary debate. If the bill contains Henry VIII clauses (powers to amend primary legislation by SI), flag these specifically. State 'None significant' if absent.",
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
