import React, { useState } from "react";
import "./App.css";

function VisitingCardFront() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-left">
          <img src="/Photo.webp" alt="Anushree" className="profile-img" />
          <h1 className="name">ANUSHREE</h1>
          <p className="sub-text">3<sup>rd</sup> year Engineer</p>
          <p className="usn">USN: <strong>4MT22CS026</strong></p>
          <div className="usn-qr">
            <img src="/qrcode.jpg" alt="QR Code" className="qr-code" />
          </div>
        </div>

        <div className="card-right">
          <div className="header">
            <img src="/mitelogo.jpeg" alt="MITE Logo" className="icon mite-logo" />
            <span>MITE</span>
          </div>

          <div className="info">
            <img src="/phone.jpeg" alt="Phone" className="icon" />
            <span className="label">Phone Number :</span>
            <span className="value"><strong>+91-8189654679</strong></span>
          </div>

          <div className="info">
            <img src="/email.jpeg" alt="Email" className="icon" />
            <span className="label">Email Address :</span>
            <span className="value">anushreeacharya04@gmail.com</span>
          </div>

          <div className="info">
            <img src="/insta.jpeg" alt="Instagram" className="icon" />
            <span className="label">Instagram Id :</span>
            <span className="value">anushree_acharya0.4</span>
          </div>

          <div className="info">
            <img src="/location.jpeg" alt="Location" className="icon" />
            <span className="label">Address :</span>
            <span className="value">Vishwakarma Nilaya, Andar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisitingCardBack() {
  return (
    <div className="container">
      <div className="back-card">
        <img src="/mitelogo.jpeg" alt="MITE Logo" className="back-logo" />
        <h2 className="college">MITE</h2>
        <p className="slogan">Invent Solutions</p>
        <a href="https://mite.ac.in/" className="mite-link" target="_blank" rel="noopener noreferrer">
          https://mite.ac.in/
        </a>
      </div>
    </div>
  );
}

function App() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
     <div className="container" onClick={handleFlip}>
      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <VisitingCardFront />
          </div>
          <div className="flip-card-back">
            <VisitingCardBack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
