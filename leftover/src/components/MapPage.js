import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MapPage.css';

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div className="map-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>Delivery Location</h1>
      {/* Replace the div below with an actual map implementation */}
      <div className="map-placeholder">[Map goes here]</div>

      <div className="contact-container">
        <div className="person-icon">👤</div>
        <div className="person-name">John Doe</div>
        <button className="call-button">📞 Call</button>
        <div className="message-icon">💬</div>
      </div>
    </div>
  );
};

export default MapPage;
