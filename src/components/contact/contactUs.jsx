import React from "react";
import Hello from "./hello.jpg";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="contactus-container">
        <div className="contactus-top">
          <h2 className="dont-be-shy">Don't Be Shy.</h2>
          <p className="tranisiton-statement">
            <span className="say-hi">Say Hi.</span>
            The transition to eating no meat products isn't easy, especially if
            you don't have a support system. Shoot me a message via email if
            you're struggling with the transition!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
