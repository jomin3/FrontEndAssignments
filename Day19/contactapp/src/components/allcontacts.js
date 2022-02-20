import React, { useEffect, useState } from "react";

const Allcontacts = (props) => {
  const changename = (val, id) => {
    props.updatename(val, id);
  };

  const changeemail = (val, id) => {
    props.updateemail(val, id);
  };

  const wid = {
    margin: 10,
    width: 300,
  };
  const margin = {
    margin: 10,
  };
  console.log(props);
  return props.contacts.map((item) => {
    const clickdelete = (event, id) => {
      event.preventDefault();
      props.delet(id);
    };
    const clickedit = (event, id) => {
      event.preventDefault();
      props.edite(id);
    };
    return (
      <div className="card" style={wid}>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              //   placeholder="Enter name"
              readOnly={item.edit}
              value={item.newname}
              onChange={(event) => {
                changename(event.target.value, item.id);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              //   placeholder="Enter email"
              value={item.emailid}
              readOnly={item.edit}
              onChange={(event) => {
                changeemail(event.target.value, item.id);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button
            type="button"
            className="btn btn-warning "
            style={margin}
            onClick={(event) => {
              clickedit(event, item.id);
            }}
          >
            Edit
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={(event) => {
              clickdelete(event, item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
};

export default Allcontacts;
