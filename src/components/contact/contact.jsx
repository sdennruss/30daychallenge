import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <div className="contact-column-left">
          <Link to="/connect">
            <h3 className="help">Need up with the transition?</h3>
          </Link>
        </div>

        <div className="contact-column-right">
          <div className="email-container">
            <p className="email-address">
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hi Shan!&shva=1"
                target="_blank"
                rel="noopener noreferrer"
                className="email"
              >
                sdennisrussell@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
