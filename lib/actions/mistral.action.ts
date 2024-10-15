"use server";
import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });
export async function chatWithMistral(userMessage: string) {
  try {
    const response = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: userMessage }],
    });

    if (response.choices && response.choices.length > 0) {
      return response.choices[0].message.content;
    } else {
      console.error("Mistral API Error: No choices returned in the response");
      return "Sorry, something went wrong.";
    }
  } catch (error) {
    console.error("Mistral API Error:", error);
    return "Sorry, something went wrong.";
  }
}
