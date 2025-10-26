# Doc-Analyzer

A web application to upload PDF documents, generate summaries, and ask follow-up questions using AI.

---

## Features

* Upload PDF documents.
* Generate AI-powered summaries of uploaded PDFs.
* Ask questions about the content of the PDF.
* Simple Angular frontend with Node.js backend.

---

## Tech Stack

* **Frontend:** Angular 19, TypeScript, HTML/CSS
* **Backend:** Node.js, Express.js
* **AI Integration:** OpenAI or Hugging Face (via Inference API)
* **File Handling:** Multer for file uploads
* **PDF Parsing:** `pdf-parse` library

---

## Project Structure

```
doc-analyzer/
├─ backend/
│  ├─ server.js           # Express server
│  ├─ routes/
│  ├─ controllers/
│  ├─ uploads/            # Temporary file storage
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ app/
│  │  │  ├─ services/
│  │  │  │  └─ doc-analyzer.service.ts
│  │  │  ├─ components/
│  │  │  │  └─ upload/
│  │  │  │     ├─ upload.component.ts
│  │  │  │     ├─ upload.component.html
│  │  │  │     └─ upload.component.css
│  │  │  └─ app.module.ts
│  └─ package.json
└─ README.md
```

---

## Setup Instructions

### Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/` with your API key:

```
OPENAI_API_KEY=your_openai_api_key_here
# OR Hugging Face token if using HF API
HF_API_KEY=your_hugging_face_token_here
```

4. Start the server:

```bash
npm start
```

The backend server runs on `http://localhost:3000` by default.

---

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the Angular development server:

```bash
ng serve
```

The frontend will run on `http://localhost:4200`.

---

## Usage

1. Open the app in your browser.
2. Upload a PDF file using the file input.
3. View the AI-generated summary.
4. Ask follow-up questions based on the uploaded document.

---

## Notes

* Make sure the uploaded PDF is readable and not corrupted.
* Ensure the backend `uploads` folder has proper write permissions.
* Multer `file` field name must match the frontend `FormData.append('file', file)` field.
* If using Hugging Face, generate a token with only **Inference API** permissions for security.

---

## License

MIT License
