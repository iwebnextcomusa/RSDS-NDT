import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Gemini
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("GEMINI_API_KEY environment variable is not defined.");
}

// In-memory submissions logs
const submissions = {
  quotes: [] as any[],
  registrations: [] as any[],
  contacts: [] as any[],
};

// API: Quote Request
app.post("/api/quote", (req: express.Request, res: express.Response) => {
  const { name, email, phone, company, service, message } = req.body;
  if (!name || !email || !service) {
    return res.status(400).json({ error: "Name, email, and service selection are required." });
  }
  const newQuote = { id: Date.now(), name, email, phone, company, service, message, date: new Date().toISOString() };
  submissions.quotes.push(newQuote);
  console.log("New Quote Request:", newQuote);
  return res.json({ success: true, message: "Quote request received successfully!", data: newQuote });
});

// API: Course Registration
app.post("/api/register", (req: express.Request, res: express.Response) => {
  const { name, email, phone, company, course, notes } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({ error: "Name, email, and course selection are required." });
  }
  const newReg = { id: Date.now(), name, email, phone, company, course, notes, date: new Date().toISOString() };
  submissions.registrations.push(newReg);
  console.log("New Course Registration:", newReg);
  return res.json({ success: true, message: "Registration submitted successfully!", data: newReg });
});

// API: Contact Message
app.post("/api/contact", (req: express.Request, res: express.Response) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  const newContact = { id: Date.now(), name, email, phone, subject, message, date: new Date().toISOString() };
  submissions.contacts.push(newContact);
  console.log("New Contact Message:", newContact);
  return res.json({ success: true, message: "Message sent successfully!", data: newContact });
});

// API: Chatbot proxy to Gemini
app.post("/api/chat", async (req: express.Request, res: express.Response) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required." });
  }

  if (!ai) {
    return res.json({
      role: "model",
      text: "Hello! Our AI Chatbot is currently in demo mode as the GEMINI_API_KEY is not configured yet. However, RSDS NDT Training & Consultants offers top-tier Non-Destructive Testing training, inspections, and consulting services in Mississippi and nationwide. Please reach us at (409) 272-0514 or samuelverrett80@gmail.com for direct assistance!"
    });
  }

  try {
    // Convert format to Google Gen AI SDK contents schema
    const contents = messages.map((m: any) => {
      return {
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }]
      };
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: `You are RSDS Bot, the official AI assistant for RSDS NDT TRAINING AND CONSULTANTS. You are an expert in Non-Destructive Testing (NDT) training, inspection, and consulting. Your goal is to help visitors understand NDT, browse our training courses (Visual, Ultrasonic, Magnetic Particle, Liquid Penetrant, Radiographic, Eddy Current Testing), check our certifications (ASNT, AWS, API), learn about industries we serve (Oil & Gas, Petrochemical, Aerospace, power generation, fabrication, etc.), and guide them to schedule an inspection or register for a course.
Be highly professional, helpful, accurate, trustworthy, and safety-focused.
If a user wants to register or request a quote, politely let them know they can use our easy-to-use forms on the Services, Training, or Contact tabs, or that you can answer questions directly.
Our key company details:
- Name: RSDS NDT TRAINING AND CONSULTANTS
- Phone: (409) 272-0514
- Email: samuelverrett80@gmail.com
- Location: Mississippi (MS), USA (serving MS and surrounding regions)
Keep your responses helpful, highly accurate, professional, and under 3-4 paragraphs. Use bullet points where appropriate for lists.`
      }
    });

    const replyText = response.text || "I'm sorry, I couldn't generate a response. Please contact RSDS NDT directly at (409) 272-0514.";
    return res.json({ role: "model", text: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Failed to communicate with AI model. Please try again." });
  }
});

// Setup Vite dev server or static file serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
