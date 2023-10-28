import React from "react";
import { Link } from "react-router-dom";
import CardContact from "./CardContact";

const ContactList = (props) => {
  const renderContactList = props.contactList.map((contact) => {
    return (
      <CardContact
        contact={contact}
        key={contact.id}
        handleDeleteContact={props.handleDeleteContact}
      />
    );
  });
  return (
    <div className="main">
      <h2
        style={{
          marginTop: 50,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Contacts
        <Link to="/add">
          <button className="ui button blue right">Add contact</button>
        </Link>
      </h2>
      <div className="ui celled list" style={{ marginTop: 50 }}>
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
