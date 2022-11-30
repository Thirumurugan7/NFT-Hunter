import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="game-info">
        <h1 className="title1">LET THE</h1>
        <h1 className="title2">GAME BEGIN</h1>
        <div className="description">
          <p className="desc">FIRST AI DRIVEN GAME IN STARKNET</p>
        </div>
        <div className="btn-container">
          <button className="start-btn">Start</button>
        </div>
      </div>
      <div className="hero-pic">pic</div>
    </div>
  );
};

export default Hero;
