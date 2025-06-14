import React, { useState, useRef } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const audioRef = useRef(null); // audio ref

  const handleAsk = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // reset audio if clicked quickly
      audioRef.current.play(); // play sound
    }

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response); // extract the actual response string
    } catch (err) {
      console.error(err);
      setResponse('❌ Error: Failed to fetch response.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Space Explorer Assistant</h1>

      <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xl">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a space question..."
          className="border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded px-4 py-2 flex-1"
        />
        <button
          onClick={handleAsk}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 transition"
        >
          Ask
        </button>
      </div>

      {response && (
        <div className="mt-6 bg-white border border-gray-200 p-4 rounded shadow-md w-full max-w-xl">
          <strong className="text-lg">Response:</strong>
          <p className="mt-2 text-gray-800 whitespace-pre-line">{response}</p>
        </div>
      )}

      {/* Click sound */}
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </div>
  );
}

export default App;
