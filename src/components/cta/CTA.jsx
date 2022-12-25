import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Get started today.</p>
        <h3>Start organising projects with OpenTask!</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button" className="getStartedButton">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
