# 📄 Doc Analyzer

Doc Analyzer is an AI-powered web application built using the **MEAN stack** (MongoDB, Express, Angular, Node.js).  
It allows users to **upload PDF documents**, automatically **extracts the text content**, and (in later stages) can **summarize or explain** the document using AI.

---

## 🚀 Features

- 📤 Upload PDF files from the frontend  
- 🧠 Extract text from PDFs using the backend (Node.js + pdf-parse)  
- ⚙️ RESTful API endpoints for upload and extraction  
- 🪶 Simple Angular UI for user interaction  
- 🔐 Secure file handling with Multer  
- 🧹 Clean folder structure separating frontend and backend  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | Angular 19 |
| Backend | Node.js (Express) |
| Database | MongoDB |
| File Upload | Multer |
| PDF Parsing | pdf-parse |
| AI Processing (Upcoming) | OpenAI API / Gemini API |

---

## 🗂️ Folder Structure

```
doc-analyzer/
│
├── backend/
│   ├── uploads/                # Uploaded PDFs
│   ├── server.js               # Express server entry
│   ├── package.json
│   ├── .gitignore
│   └── ...other backend files
│
├── frontend/
│   └── doc-analyzer-frontend/
│       ├── src/
│       ├── proxy.conf.json
│       ├── angular.json
│       ├── package.json
│       └── ...other frontend files
│
└── README.md
```

---

## ⚙️ Backend Setup

### 1️⃣ Navigate to backend
```bash
cd backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` file
```env
PORT=5000
MONGO_URI=your_mongodb_url
```

### 4️⃣ Start the server
```bash
npm start
```

---

## 💻 Frontend Setup

### 1️⃣ Navigate to frontend
```bash
cd frontend/doc-analyzer-frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the Angular app
```bash
ng serve
```

### 4️⃣ Access the app
```
http://localhost:4200
```

---

## 🔄 API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `POST` | `/extract` | Uploads a PDF and extracts text content |

### Example using cURL
```bash
curl -X POST -F "file=@sample.pdf" http://localhost:5000/extract
```

Response:
```json
{
  "text": "Extracted text content from your PDF..."
}
```

---

## 🧠 Upcoming Features
- AI summarization and Q&A for uploaded PDFs  
- Multi-document comparison  
- Secure cloud file storage (S3 / Firebase)  
- User authentication system  

---

## 🧾 License
This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author
**Ishan Deshpande**  
Built with ❤️ using JavaScript and curiosity.
