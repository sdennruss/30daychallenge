import React, { useState } from "react";
import Days from "./days";

const Calendar = ({ challenges, onDaysClicked }) => {
  return (
    <React.Fragment>
      <div className="transition-outer-container">
        <div className="overlay-calendar"></div>
        <div className="transition-calendar-container">
          <h1 className="thirty-day-challenge">30 Day Vegan Calendar</h1>
          <h3 className="pick-calendar-day">
            Pick a Day and Let's Get Started!{" "}
          </h3>

          <div className="challenge-container">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="challenge-divs">
                <Days challenge={challenge} onDaysClicked={onDaysClicked} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
