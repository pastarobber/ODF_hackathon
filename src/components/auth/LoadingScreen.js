import React from 'react';
import '../styles/LoadingScreen.css'; 

function LoadingScreen() {
  return (
    <div className="loading-container">
      <img src={`${process.env.PUBLIC_URL}/mascot.png`} className="loading-logo" />
    </div>
  );
}

export default LoadingScreen;
