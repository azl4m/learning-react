import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    console.log("nav rendered");
    
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            className="logo"
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header