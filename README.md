# 🚀 Space Explorer Assistant

An interactive AI assistant web application that answers user questions about space using an LLM (Groq/OpenAI) with a full-stack setup.

## 🌐 Live Preview
Coming soon...

---

## 🛠 Tech Stack

### 📦 Backend (Python, FastAPI)
- **FastAPI**: Handles HTTP POST requests and provides an endpoint (`/chat`) for frontend to interact with.
- **Pydantic**: For data validation (ChatRequest model).
- **Uvicorn**: ASGI server to run the FastAPI app.
- **Groq API**: Used for generating AI responses (alternative to OpenAI).
- **CORS Middleware**: Enables frontend (localhost:3000) to talk to backend (localhost:8000).

### 🎨 Frontend (React + Tailwind CSS)
- **React**: Interactive UI, built with functional components.
- **useState**: Manages user prompt and AI response.
- **fetch API**: Calls FastAPI backend endpoint.
- **Tailwind CSS**: Styling framework for building modern, responsive UI.
- **Sound Integration**: JavaScript audio API used to play sound on button click.

### 🗂 Folder Structure
```
space-explorer/
│
├── backend/
│   ├── main.py           # FastAPI app
│   ├── assistant.py      # get_ai_response function (Groq/OpenAI)
│   ├── models.py         # Optional: pydantic models if separated
│   ├── requirements.txt  # Python dependencies
│
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── index.js      # React DOM render
│   │   └── styles.css    # Tailwind CSS (optional)
│   └── package.json      # React project metadata

├── .gitignore
└── README.md
```

---

## ✅ Features
- Ask natural language questions about space
- Real-time AI-generated responses
- Click sound feedback
- Styled UI using Tailwind
- Works with Groq (free API alternative)

---

## 🚀 Run Locally

### 1. Backend (FastAPI)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

Frontend will be at http://localhost:3000  
Backend runs on http://localhost:8000

---

## 🌍 Deployment Ideas
- Frontend: Vercel, Netlify, GitHub Pages
- Backend: Render, Railway, or PythonAnywhere

---

## ✨ Acknowledgements
- Groq API for fast LLM responses
- FastAPI team for lightweight backend
- Tailwind CSS for utility-first styling

---

## 📬 Contact
Made with ❤️ by Sonnya Varshney(sonnyavarshney822@gmail.com)
