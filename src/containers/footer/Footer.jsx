import React from "react";
import gpt3Logo from "../../assets/logo_transparent_4.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          See everything the team’s working on in one place.
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <button type="button" className="getStartedButton">
          Get Started
        </button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Ateeq Rana</p>
          <p>Muhammad Awais Zafar</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2022 OpenTask. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
