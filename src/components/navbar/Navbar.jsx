import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo_transparent_4.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatOpenTask">What is OpenTask</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#benefits">Benefits</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="opentask__navbar">
      <div className="opentask__navbar-links">
        <div className="opentask__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="opentask__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="opentask__navbar-sign">
        <button type="button" id="logIn">
          Log in
        </button>
        <button type="button" id="signUp">
          Sign up
        </button>
      </div>
      <div className="opentask__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="opentask__navbar-menu_container scale-up-center">
            <div className="opentask__navbar-menu_container-links">
              <Menu />
              <div className="opentask__navbar-menu_container-links-sign">
                <button type="button" id="logIn">
                  Log in
                </button>
                <button type="button" id="signUp">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
