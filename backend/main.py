# backend/main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from assistant import get_ai_response  # Import your function

# Create FastAPI app
app = FastAPI()

# Allow frontend (localhost:3000 or 5173 for Vite) to talk to backend (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # for create-react-app
        "http://localhost:5173"   # for Vite (which you're using)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request body format
class ChatRequest(BaseModel):
    prompt: str

# Create the POST route for AI chat
@app.post("/chat")
def chat(request: ChatRequest):
    try:
        response = get_ai_response(request.prompt)
        return response  # ✅ now it's just a string like "A black hole is..."

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
