import React from "react";
import logo from "../logo.svg";
import arrow from "../icon-arrow.svg";

import "./box.css";

const Box = () => {
  return (
    <div className="innerbox">
      <img src={logo} />
      <div className="content">
        <div className="row1">
          <div className="red">W E ' R E</div>
          <div className="bl">C O M I N G</div>
          <div className="bl">S O O N</div>
        </div>
        <div className="row2 ">
          <div> Hello fellow shoppers! We're currently building our new </div>
          <div>fashion store. Add your email below to stay up-to-date with</div>
          <div>announcements and our launch deals.</div>
        </div>
        <div className="row3">
          <input className="input" type="text" placeholder="Email Address" />
          <div className="arrow">
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
