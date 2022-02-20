import React, { useState } from "react";
import Allcontacts from "./allcontacts";
import "./contact.css";
let idx = 2;

const Contact = () => {
  const [allcontacts, setallcontacts] = useState([
    { id: 1, newname: "jomin", emailid: "jominrajesh@gmail.com", edit: true },
  ]);
  const [contact, setcontact] = useState({
    id: 1,
    newname: "",
    emailid: "",
    edit: true,
  });
  const clickHandler = (event) => {
    event.preventDefault();
    idx++;
    allcontacts.push(contact);
    setallcontacts([...allcontacts]);
  };
  const changeNameHandler = (val) => {
    console.log("hello");
    setcontact({ ...contact, newname: val, id: idx });
  };
  const changeEmailHandler = (val) => {
    setcontact({ ...contact, emailid: val, id: idx });
  };
  const deleteEl = (id) => {
    const newcontacts = allcontacts.filter((item) => {
      return item.id !== id;
    });
    setallcontacts([...newcontacts]);
  };
  const editEl = (id) => {
    allcontacts.forEach((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
      }
    });
    setallcontacts([...allcontacts]);
  };
  const updatename = (val, id) => {
    allcontacts.forEach((element) => {
      if (element.id == id) {
        element.newname = val;
      }
    });
    setallcontacts([...allcontacts]);
  };
  const updateemail = (val, id) => {
    allcontacts.forEach((element) => {
      if (element.id == id) {
        element.emailid = val;
      }
    });
    setallcontacts([...allcontacts]);
  };
  console.log(allcontacts);
  return (
    <div>
      <form className="box">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            value={contact.newname}
            onChange={(event) => {
              changeNameHandler(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter email"
            value={contact.emailid}
            onChange={(event) => {
              changeEmailHandler(event.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button className="btn btn-primary" onClick={clickHandler}>
          Submit
        </button>
      </form>
      <div className="inner">
        <Allcontacts
          contacts={allcontacts}
          delet={deleteEl}
          edite={editEl}
          updatename={updatename}
          updateemail={updateemail}
        />
      </div>
    </div>
  );
};

export default Contact;
