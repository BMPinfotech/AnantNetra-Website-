import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      console.error("No message provided");
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    console.log("Processing message:", message.substring(0, 50) + "...");

    // Switching to 'gemini-pro' as it is the most stable standard model
    // gemini-1.5-flash was causing 404s for v1beta API
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
      You are the AI assistant for "AnantNetra", a technology company focused on Cybersecurity, AI Solutions, and IT Consultancy.
      Your goal is to help users with information about AnantNetra's services, products, and contact details.

      **CRITICAL INSTRUCTIONS:**
      1. **SCOPE:** You must ONLY answer questions related to AnantNetra, its services (IT Consultancy, Business Consultancy, AI, Data Services, Cyber Audit, Incident Response), its products (NetraSecure AI), or general company information.
      2. **REFUSAL:** If a user asks about anything unrelated to AnantNetra (e.g., general knowledge, politics, other companies, math problems, etc.), you must politely refuse. Say something like: "I am designed to assist only with AnantNetra-related queries."
      3. **LANGUAGE:** The user may ask questions in ANY language (English, Hindi, Hinglish, etc.). However, you must **ALWAYS RESPOND IN ENGLISH**. If the user asks in Hindi, understand the intent and reply in English.
      4. **TONE:** Professional, helpful, and concise.

      **Company Context:**
      - **Slogan:** "Beyond technology. Towards tomorrow."
      - **Services:** IT Consultancy, Business Consultancy, AI Solutions, Data Services, Cyber Audits, Incident Response.
      - **Products:** NetraSecure AI (Threat detection/security management).
      - **Contact:** Users can reach out via the website contact form or schedule a free audit call.

      **User Message:** ${message}
    `;

    console.log("Sending request to Gemini model...");
    const result = await model.generateContent(systemPrompt);
    console.log("Response received.");

    const response = await result.response;
    const text = response.text();
    console.log("Generated text:", text.substring(0, 50) + "...");

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error("Error generating content:", error);

    // Check for specific error types
    if (error.message?.includes("429") || error.status === 429) {
      console.warn("Quota exceeded.");
      return NextResponse.json(
        { reply: "I'm currently receiving too many requests. Please try again in a moment." },
        { status: 429 }
      );
    }

    if (error.message?.includes("404") || error.status === 404) {
      console.error("Model not found or API version mismatch.");
      return NextResponse.json(
        { reply: "System configuration error. Please contact support." },
        { status: 404 }
      );
    }

    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
