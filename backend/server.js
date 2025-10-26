import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import pdf from "pdf-parse";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Multer setup (memory storage, no files on disk)
const upload = multer({ storage: multer.memoryStorage() });

// In-memory storage for documents (expires in 30 min)
const docsMemory = new Map();

// Upload and extract PDF text
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const fileBuffer = req.file.buffer;
    const pdfData = await pdf(fileBuffer);

    // Slice text to 8000 chars for safety
    const text = pdfData.text.slice(0, 8000);

    // Generate a temporary ID for the document
    const docId = Date.now().toString();
    docsMemory.set(docId, text);

    // Set auto-delete in 30 mins
    setTimeout(() => docsMemory.delete(docId), 30 * 60 * 1000);

    res.json({ docId, preview: text.slice(0, 200) + "..." });
  } catch (err) {
    console.error("PDF parse error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Ask question about uploaded doc
app.post("/ask", async (req, res) => {
  try {
    const { docId, question } = req.body;
    if (!docId || !question)
      return res.status(400).json({ error: "docId and question required" });

    const context = docsMemory.get(docId);
    if (!context) return res.status(404).json({ error: "Document not found or expired" });

    // Hugging Face inference call
    const response = await fetch("https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: { question, context } }),
    });

    const result = await response.json();

    if (result.error) return res.status(500).json({ error: result.error });

    res.json({ answer: result.answer || result[0]?.answer || "No answer found" });
  } catch (err) {
    console.error("HF API error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
