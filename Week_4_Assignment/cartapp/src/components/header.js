import React from "react";
import logo from "./Lenskart-logo.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="head">
      <img src={logo} className="im" />
      <div className="options">
        <div>Track Order</div>
        <div>Sign In & Sign Up</div>
        <div>Wish List </div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Header;
