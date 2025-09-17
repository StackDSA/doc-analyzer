import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Upload route

app.post("/extract", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(fileBuffer);
    res.json({ text: data.text });
  } catch (err) {
    console.error("Error parsing PDF:", err);
    res.status(500).json({ error: "Failed to extract text" });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});