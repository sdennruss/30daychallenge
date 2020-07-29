import React from "react";
import Avacado from "./cado.png";
import Calendar from "../calendar/calendar";

const HomePage = ({
  handleCalendar,
  hideLanding,
  showCalendar,
  challenges,
  onDaysClicked,
  value,
  item,
}) => {
  return (
    <React.Fragment>
      <div className="homepage-outer-container">
        <div style={{ display: hideLanding }} className="overlay"></div>
        <div style={{ display: hideLanding }} className="homepage-container">
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

              <div className="homepage-button">
                <button
                  onClick={() => handleCalendar("", "none")}
                  className="button-to-calendar"
                >
                  Start
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
        <div style={{ display: hideLanding }} className="brown-circle"></div>
        <div className="yellow-circle"></div>
      </div>
      <Calendar
        challenges={challenges}
        onDaysClicked={onDaysClicked}
        value={value}
        item={item}
        showCalendar={showCalendar}
      />
    </React.Fragment>
  );
};

export default HomePage;
