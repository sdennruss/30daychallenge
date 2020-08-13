import React from "react";
import Days from "./days";

const Calendar = ({
  challenges,
  onDaysClicked,
  showCalendar,
  value,
  challengeDivColor,
  transitionColor,
  days,
}) => {
  return (
    <React.Fragment>
      <div className="transition-outer-container">
        <div
          style={{ display: showCalendar }}
          className="overlay-calendar"
        ></div>
        <div
          style={{
            display: showCalendar,
            backgroundColor: transitionColor,
          }}
          className="transition-calendar-container"
        >
          <h1 className="thirty-day-challenge">30 Day Vegan Calendar</h1>
          <h3 className="pick-calendar-day">
            Pick a Day and Let's Get Started!{" "}
          </h3>

          <div className="challenge-container">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                style={{
                  backgroundColor: challengeDivColor,
                  borderColor: transitionColor,
                }}
                className="challenge-divs"
                onClick={() => onDaysClicked(challenge, "#faf8f2", "#60bea0")}
              >
                <Days challenge={challenge} />
              </div>
            ))}
          </div>
        </div>
        <div className="plus-sign">+</div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
