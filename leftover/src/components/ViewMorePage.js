
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ViewMorePage.css';

const ViewMorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="view-more-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>More Places</h1>
      
      {/* Repeat similar place containers as in MainPage */}
      <div className="place-container">
        <div className="place-card">
          <h3>Globuse Center</h3>
          <p>Log: XYZ</p>
          <p>Updated: 12 mins ago</p>
        </div>
        <div className="place-card">
          <h3>What’s Up PG</h3>
          <p>Log: ABC</p>
          <p>Updated: 15 mins ago</p>
        </div>
        {/* Add more places as needed */}
      </div>

      <nav className="navbar">
        <button className="nav-button">🏠 Home</button>
        <button className="nav-button">👤 Person</button>
        <button className="nav-button">🛒 Cart</button>
        <button className="nav-button">✉️ Messages</button>
      </nav>
    </div>
  );
};

export default ViewMorePage;
