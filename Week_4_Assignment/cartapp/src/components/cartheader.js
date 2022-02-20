import React from "react";

const Cartheader = () => {
  return (
    <header className="container">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>Shopping Cart</li>
      </ul>

      <span className="count">9 items in the bag</span>
    </header>
  );
};

export default Cartheader;
