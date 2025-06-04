import OpenAI from "openai";

import { API_URL } from "astro:env/server";
import { API_KEY } from "astro:env/server";

const model = "gpt-4.1-mini";
const apiKey = API_KEY;
const apiVersion = "2024-12-01-preview";
const deployment = "gpt-4.1-mini";

const openai = new OpenAI({
  apiKey,
  baseURL: `${API_URL}openai/deployments/${deployment}/`,
  defaultHeaders: {
    "api-key": apiKey,
    "Content-Type": "application/json",
  },
  defaultQuery: {
    "api-version": apiVersion,
  },
});

export async function chatWithAzureOpenAI(messages: { role: "system" | "user" | "assistant"; content: string }[], options?: {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
}) {
  const response = await openai.chat.completions.create({
    messages,
    max_tokens: options?.maxTokens ?? 800,
    temperature: options?.temperature ?? 1.0,
    top_p: options?.topP ?? 1.0,
    frequency_penalty: options?.frequencyPenalty ?? 0.0,
    presence_penalty: options?.presencePenalty ?? 0.0,
    model,
  });
  return response.choices[0]?.message?.content;
}

// Example usage (uncomment to test):
// (async () => {
//   const result = await chatWithAzureOpenAI([
//     { role: "system", content: "You are a helpful assistant." },
//     { role: "user", content: "I am going to Paris, what should I see?" },
//   ]);
//   console.log(result);
// })();