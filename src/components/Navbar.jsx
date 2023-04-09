import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./styles/navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src="./logo.svg" />
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar__menu">
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
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-links">
              <Menu />
            </div>
            <div className="navbar__menu-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Menu = () => (
  <ul>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#wgpt3">What is GPT3?</a>
    </li>
    <li>
      <a href="#possibility">Open AI</a>
    </li>
    <li>
      <a href="#features">Case Studies</a>
    </li>
    <li>
      <a href="#blog">Library</a>
    </li>
  </ul>
);

export default Navbar;
