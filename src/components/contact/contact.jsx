import React from "react";
import Leaves from "./leaves.jpg";

const Contact = ({ showCalendar }) => {
  return (
    <React.Fragment>
      <div style={{ display: showCalendar }} className="contact-container">
        <div className="contact-column-left">
          <h3 className="help">
            Shanice Dennis-Russell{" "}
            <i className="fa fa-copyright" aria-hidden="true"></i> 2020
          </h3>
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
                Email
              </a>
            </p>
          </div>

          <div className="instagram-container">
            <p className="instagram-handle">
              <a
                href="https://www.instagram.com/onewayshan/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="insta"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
