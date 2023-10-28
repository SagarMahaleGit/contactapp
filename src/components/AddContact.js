import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const add = (e) => {
    e.preventDefault();

    if (state.name !== "" && state.email !== "") {
      if (state.name.length <= 3) {
        alert("Name must be greater than three characters.");
        return;
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
        alert("Please enter valid email.");
      } else {
        props.addContactHandler(state);
        setState({
          name: "",
          email: "",
        });
        navigate("/");
      }
    } else {
      alert("Please fill all the details.");
    }
  };

  return (
    <div className="ui main" style={{ marginTop: 50 }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="Email"
            placeholder="Enter Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          ></input>
        </div>
        <button className="ui button red" onClick={() => navigate("/")}>
          Cancel
        </button>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
