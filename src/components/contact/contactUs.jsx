import React from "react";
import ShaniceDR from "./shanicedr.jpg";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-us-outer-container">
        <div className="contact-us-container">
          <div className="contact-left-column">
            <h1 className="dont-be-shy">
              Don't be shy, say <span className="highlight-hi">hi!</span>
            </h1>

            <p className="contact-information">
              Making the transition to eliminating meat, seafood and dairy
              products is never easy, especially when people are against your
              personal lifestyle choice. Shoot me a message if you're
              struggling, and I'll be more than happy to offer recommendations
              and hear ya out.
            </p>
            <p className="contact-information-2">
              With love, Shanice Dennis-Russell
            </p>
            <div className="personal-information">
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hi Shan!&shva=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/onewayshan/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="contact-right-column">
            <div className="shanice-image-container">
              <img
                className="shanice-image"
                src={ShaniceDR}
                alt="Shanince Dennis-Russell"
              />
            </div>
          </div>
          <div className="blue-circle"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
