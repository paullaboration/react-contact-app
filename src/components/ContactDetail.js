import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">Paul</div>
                <div className="description">cs.paul@gmail.com</div>
            </div>
        </div>
    </div>
  );
};

export default ContactCard;