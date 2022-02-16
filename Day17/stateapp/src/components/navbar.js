import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>{props.firstbev}</li>
        <li>Tea</li>
        <li>Coffee</li>
      </ul>
    </div>
  );
};

export default Navbar;
