import React, { useState } from "react";
import Plants from "./plants.jpg";
import Leaves from "./leaves.jpg";

const HomePage = ({ history }) => {
  return (
    <React.Fragment>
      <div className="overlay">
        <div className="homepage-container">
          <div className="container-content">
            <div className="container-content-inner">
              <div className="homepage-title">
                <h1 className="veg-chal">Vegan Challenge</h1>
              </div>
              <div className="homepage-paragraph-container">
                <p className="homepage-paragraph">
                  Over 115 million animals – mice, rats, dogs, cats, rabbits,
                  monkeys, birds, among others – are killed in laboratory
                  experiments worldwide for chemical, drug, food, and cosmetics
                  testing every year. This 30 day vegan challenge has been
                  designed to help you start a new lifestyle by eliminating the
                  consumption of animal products from your diet. Those who are
                  curious, sometimes lack guidance on how to get started. If
                  you're ready to go make the swtich, click the{" "}
                  <span className="start-word">start</span> button to begin.
                </p>
              </div>
              <div className="homepage-button">
                <button onClick={() => history.push("/home")} className="btns">
                  Start
                </button>
              </div>
            </div>
          </div>
          <div className="homepage"></div>
          <div className="overlay"></div>

          <div className="homepage-image-container">
            <div className="inner-image">
              <img src={Plants} alt="plant" className="container_img" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
