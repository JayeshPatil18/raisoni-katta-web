// src/App.tsx
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Chat from './components/Chat';
import './App.css';
import socket from './socket'; // Ensure this is the correct import for your socket instance

const App: React.FC = () => {
  const [campusCode, setCampusCode] = useState<string | null>(null);
  const [inputCode, setInputCode] = useState<string | null>(null);

  const handleJoinChat = (code: string) => {
    setInputCode(code.toLowerCase().trim());
  };

  useEffect(() => {
    // Check if inputCode is set to emit 'joinCampus'
    if (inputCode) {
      socket.emit('joinCampus', inputCode);
    }

    socket.on('notification', (msg: string) => {
      if(inputCode && msg.includes(inputCode)){
        setCampusCode(inputCode);
      }
    });

    socket.on('error', (msg: string) => {
      alert(msg);
      setCampusCode(null);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('notification');
      socket.off('error');
    };
  }, [inputCode]); // Monitor inputCode only for emitting and listening

  return (
    <div className="App">
      {campusCode ? (
        <Chat campusCode={campusCode} />
      ) : (
        <Landing onJoinChat={handleJoinChat} />
      )}
    </div>
  );
};

export default App;
