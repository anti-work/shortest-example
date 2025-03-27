import "dotenv/config";
import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "https://github.com",
  testPattern: "**/*.test.ts",
  anthropicKey: process.env.ANTHROPIC_API_KEY,
  ai: {
    provider: "anthropic",
    model: "claude-3-5-sonnet-latest",
    apiKey: process.env.ANTHROPIC_API_KEY
  }
} satisfies ShortestConfig;

