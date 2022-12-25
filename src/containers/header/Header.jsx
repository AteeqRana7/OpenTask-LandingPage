import React from "react";
import "./header.css";
import workflow from "../../assets/illustration.png";

const Header = () => {
  return (
    <div className="opentask__header section__padding" id="home">
      <div className="opentask__header-content">
        <h1 className="gradient__text">
          Get work done faster as an individual or as a team!
        </h1>
        <p>
          OpenTask helps you manage projects, focus on what’s important, and
          organize work in one place for seamless collaboration.
        </p>
        <div className="opentask__header-content__input">
          <button type="button" className="getStartedButton">
            Get Started
          </button>
        </div>
      </div>
      <div className="opentask__header-image">
        <img src={workflow} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
