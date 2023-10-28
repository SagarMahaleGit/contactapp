import React from "react";
import { Link, useParams } from "react-router-dom";
import userImage from "../images/userImage.png";

const ContactDetails = (props) => {
  const { id } = useParams();
  const contact = props.contactList.filter((contact) => contact.id == id)[0];

  return (
    <div
      className="main"
      style={{
        marginTop: 50,
      }}
    >
      <div className="ui card centered">
        <div className="image">
          <img src={userImage} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <div
        className="center-div"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <button className="ui button blue center">
            Back to All Contacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
