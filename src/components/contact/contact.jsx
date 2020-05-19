import React from 'react';

const Contact = (props) => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <h1 className="contact-header">Stay Connected</h1>
        <div className="email-container">
          <p className="email-address">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hello Shanice!&shva=1"
            target="_blank"
            rel="noopener noreferrer"
            className="email-address">sdennisrussell@gmail.com</a></p>
        </div>

        <div className="instagram-container">
          <p className="instagram-handle">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <a
              href="https://www.instagram.com/onewayshan/?hl=en"
              target="_blank"
              rel="noopener noreferrer">@onewayshan</a></p>
        </div>

          </div>
    </React.Fragment>
   );
}

export default Contact;
