import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div className="hero">
        <span className="hero-text">
          <span className="hero-heading">Take Notes </span>
          <span className="hero-para">Organise Your Life , &</span>
          <span className="hero-para2">
            Better Life is best.
            <Link to="/Home">
              <button className="btn btn-success">Start Now </button>
            </Link>
          </span>
        </span>
        <img
          src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_taking_notes_re_bnaf.svg"
          alt="note"
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default Hero;
