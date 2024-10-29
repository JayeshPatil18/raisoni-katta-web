// src/App.tsx
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Chat from './components/Chat';
import './App.css';
import socket from './socket'; // Ensure this is the correct import for your socket instance

// Define the static campus code
const CAMPUS_CODE = 'ghrcem';

const App: React.FC = () => {
  const [inputCode, setInputCode] = useState<string | null>(null);

  const handleJoinChat = (code: string) => {
    const formattedCode = code.toLowerCase().trim();
    if (formattedCode === CAMPUS_CODE) {
      setInputCode(formattedCode);
    } else {
      alert('Invalid campus code');
    }
  };

  return (
    <div className="App">
      {inputCode ? (
        <Chat campusCode={inputCode} />
      ) : (
        <Landing onJoinChat={handleJoinChat} />
      )}
    </div>
  );
};

export default App;
