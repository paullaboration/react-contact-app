import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

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
  return (
  <div class="main">
    <h2>
      Contact List
      <Link to="/add">
      <button className="ui button blue">Add Contact</button>
      </Link>
    </h2>
<<<<<<< HEAD
=======
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" placeholder="Search Contacts" className="prompt" />
     <i className="search icon"></i>
      </div>
    </div>
>>>>>>> parent of bbdeb18 (search updated)
  <div className="ui celled list">{renderContactList}</div>
  </div>
  );
};

export default ContactList;