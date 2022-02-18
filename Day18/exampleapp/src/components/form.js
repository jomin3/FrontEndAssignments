import React, { useState } from "react";

import "./form.css";
const Form = () => {
  const [info, setinfo] = useState({ emailid: "", pass: "" });

  const clickHandler = (event) => {
    event.preventDefault();
  };
  const changeHandler = (event, x) => {
    console.log(info);
    if (x == "emailid") setinfo({ ...info });
    else {
      setinfo({ ...info });
    }
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={info.emailid}
          onChange={() => {
            changeHandler("emailid");
          }}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={info.pass}
          onChange={() => {
            changeHandler("pass");
          }}
        />
      </div>
      {/* <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div> */}
      <button type="submit" className="btn btn-primary" onClick={clickHandler}>
        Submit
      </button>
    </form>
  );
};

export default Form;
