import Anthropic from "@anthropic-ai/sdk";

const globalForAnthropic = globalThis as unknown as {
  anthropic: Anthropic | undefined;
};

function createClient(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      "ANTHROPIC_API_KEY environment variable is not set. " +
        "Add it to .env.local to enable AI features (summaries, translations, MP letters)."
    );
  }
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

// Lazy singleton: only created when first accessed, so missing key
// doesn't crash routes at import time.
export function getAnthropicClient(): Anthropic {
  if (!globalForAnthropic.anthropic) {
    globalForAnthropic.anthropic = createClient();
  }
  return globalForAnthropic.anthropic;
}

// Backwards-compatible named export — getter proxy that defers creation.
export const anthropic = new Proxy({} as Anthropic, {
  get(_target, prop) {
    return (getAnthropicClient() as Record<string | symbol, unknown>)[prop];
  },
});
