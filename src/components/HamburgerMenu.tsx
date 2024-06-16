import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isActivated, setIsActivated] = useState(false);

  const toggleMenu = () => {
    setIsActivated(!isActivated);
  };

  return (
    <div className="hamburger-menu">
    <div className={`menu ${isActivated ? 'menu_activated' : ''}`}>
      <nav id="main-menu" className="menu__nav">
        <ul className="menu__list ra-list">
          <li className="menu__group"><a href="#0" className="menu__link ra-link">About</a></li>
          <li className="menu__group"><a href="#0" className="menu__link ra-link">Meet Us</a></li>
          <li className="menu__group"><a href="#0" className="menu__link ra-link">Social</a></li>
          <li className="menu__group"><a href="#0" className="menu__link ra-link">Professionalism</a></li>
          <li className="menu__group"><a href="#0" className="menu__link ra-link">Service</a></li>
          <li className="menu__group"><a href="#0" className="menu__link ra-link">Apply</a></li>
          <li className="menu__group"><a href="#0" className="menu__link ra-link">Log In</a></li>
        </ul>
      </nav>
      <button className="menu__toggle ra-button" type="button" aria-controls="main-menu" onClick={toggleMenu}>
        <span className="menu__hamburger uia-hamburger">
          <span className="menu__hamburger-label uia-hamburger__label">
            <span className="menu__toggle-hint ha-screen-reader">Open menu</span>
          </span>
        </span>
      </button>
    </div>
    </div>
  );
};

export default HamburgerMenu;
