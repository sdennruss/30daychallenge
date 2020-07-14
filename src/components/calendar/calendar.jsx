import React from "react";
import Days from "./days";
import Contact from "../contact/contact";

const Calendar = ({ challenges, onDaysClicked, showCalendar }) => {
  return (
    <React.Fragment>
      <div
        style={{ display: showCalendar }}
        className="transition-calendar-container"
      >
        <h1 className="thirty-day-challenge">30 Day Vegan Challenge</h1>
        <h3 className="pick-calendar-day">
          Pick a Day and Let's Get Started!{" "}
        </h3>
        <div className="challenge-container">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              style={{ cursor: "pointer" }}
              className="challenge-divs"
              onClick={() => onDaysClicked(challenge)}
            >
              <Days challenge={challenge} />
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
};

export default Calendar;
