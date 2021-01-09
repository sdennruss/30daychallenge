import React from "react";
import Days from "./days";
import NewProgressBar from "../progress/newProgressBar";

const Calendar = ({
  challenges,
  onDaysClicked,
  handleScroll,
  progressPercentage,
  challengeIndex,
}) => {
  return (
    <React.Fragment>
      <div className="transition-calendar-container">
        <div className="title-page-container">
          <h1 className="thirty-day-challenge">30 Day Vegan Calendar</h1>
          <h3 className="pick-calendar-day">
            Pick a Day and Let's Get Started!{" "}
          </h3>
        </div>
        <div className="challenge-container">
          {challenges.map((challenge) => (
            <div
              onClick={handleScroll}
              key={challenge.id}
              className="challenge-divs"
            >
              <Days challenge={challenge} onDaysClicked={onDaysClicked} />
            </div>
          ))}
        </div>
        <NewProgressBar
          progressPercentage={progressPercentage}
          challengeIndex={challengeIndex}
          challenges={challenges}
        />
      </div>
    </React.Fragment>
  );
};

export default Calendar;
