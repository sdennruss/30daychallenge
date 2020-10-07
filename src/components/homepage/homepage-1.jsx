import React, { useState } from "react";
import Avacado from "./cado.png";
import { Link } from "react-router-dom";

const HomePage1 = () => {
  return (
    <React.Fragment>
      <div className="homepage-outer-container">
        <div className="overlay"></div>
        <div className="homepage-container">
          <div className="container-content">
            <div className="container-content-inner">
              <div className="homepage-title">
                <h1 className="veg-chal">Vegan Challenge</h1>
              </div>
              <div className="paragraph-container">
                <p className="homepage-paragraph">
                  Over 115 million animals – mice, rats, dogs, cats, rabbits,
                  monkeys, birds, among others – are killed in laboratory
                  experiments worldwide for chemical, drug, food, and cosmetics
                  testing every year. This 30 day vegan challenge is designed to
                  help you start a new lifestyle by eliminating the consumption
                  of animal products from your diet. Those who are curious,
                  sometimes lack guidance on how to get started. If you're ready
                  to go make the swtich, click the{" "}
                  <span className="start-word">start</span> button to begin.
                </p>
              </div>

              <div classNsame="homepage-button">
                <button className="button-to-calendar">
                  <Link className="button-to-calendar" to="/calendar">
                    {" "}
                    Start
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="homepage-image-container">
            <div className="container-image">
              <img
                src={Avacado}
                alt="avacado-illustration"
                className="avacado-image"
              />
            </div>
          </div>
        </div>
        <div className="brown-circle"></div>
        <div className="yellow-circle"></div>
      </div>
    </React.Fragment>
  );
};

export default HomePage1;