import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  }

  return (
  <div class="main">
    <h2>
      Contact List
      <Link to="/add">
      <button className="ui button blue">Add Contact</button>
      </Link>
    </h2>
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" placeholder="Search Contacts" className="prompt" />
     <i className="search icon"></i>
      </div>
    </div>
  <div className="ui celled list">{renderContactList}</div>
  </div>
  );
};

export default ContactList;