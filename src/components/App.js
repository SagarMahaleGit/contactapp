import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import demoData from "../data/demoData.json";

function App() {
  const contactItems = "contactItems";
  const initialContactList = JSON.parse(localStorage.getItem(contactItems));
  const [contactList, setContactList] = useState(initialContactList ?? []);
  const addContactHandler = (contact) => {
    setContactList((prevContactList) => [
      ...prevContactList,
      { id: uuid(), ...contact },
    ]);
  };

  const editContactHandler = (contacts) => {
    setContactList((p) => [...contacts]);
  };

  const handleDeleteContact = (id) => {
    const updatedContactList = contactList.filter(
      (contact) => contact.id != id
    );
    setContactList(updatedContactList);
  };

  useEffect(() => {
    if (!initialContactList) setContactList(demoData);
  }, []);

  useEffect(() => {
    localStorage.setItem(contactItems, JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contactList={contactList}
                handleDeleteContact={handleDeleteContact}
              />
            }
          />
          <Route
            path="/add"
            Component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/edit/:id"
            Component={() => (
              <EditContact
                editContactHandler={editContactHandler}
                contactList={contactList}
              />
            )}
          />
          <Route
            path="/contactDetails/:id"
            Component={() => <ContactDetails contactList={contactList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
