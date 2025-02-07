// src/components/Landing.tsx
import React, { useState } from 'react';
import './Landing.css';

interface LandingProps {
  onJoinChat: (campusCode: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onJoinChat }) => {
  const [campusCode, setCampusCode] = useState('');

  const handleJoinClick = () => {
    onJoinChat(campusCode);
  };

  return (
    <div className="landing">
      <div className="form-container">
        <h1>
          <span className="raisoni">Raisoni </span>
          <span className="katta">Katta</span>
        </h1>
        <p>Find your perfect partner ❤️</p>
        <input
          type="text"
          placeholder="Enter Campus Code"
          value={campusCode}
          onChange={(e) => setCampusCode(e.target.value)}
          className="campus-code-input"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleJoinClick();
            }
          }}
        />
        <div>
        <button onClick={handleJoinClick} className="join-chat-btn">
          Join Chat
        </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
