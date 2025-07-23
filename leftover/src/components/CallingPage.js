import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CallingPage.css';

const CallingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="calling-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="caller-info">
        <div className="person-icon">👤</div>
        <h2>John Doe</h2>
        <p>Ringing...</p>
      </div>

      <div className="controls">
        <button className="speaker-button">🔊 Speaker</button>
        <button className="cut-button" onClick={() => navigate('/map')}>✂️ Cut</button> {/* Navigate to Map Page */}
      </div>

      <div className="message-icon" onClick={() => navigate('/thank-you')}>💬</div> {/* Navigate to Thank You Page */}
    </div>
  );
};

export default CallingPage;
