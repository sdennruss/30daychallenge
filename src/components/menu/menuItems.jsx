import React, { useRef } from "react";
import Calendar from "../calendar/calendar";
import NewMenu from "./newMenu";
import NewProgressBar from "../progress/newProgressBar";

const MenuItems = ({
  challenges,
  match,
  onDaysClicked,
  progressPercentage,
  challengeIndex,
}) => {
  const {
    params: { days, breakfast, lunch, dinner },
  } = match;

  return (
    <React.Fragment>
      <div className="overlay-calendar-2"></div>
      <div className="over-column-container">
        <div className="left-column">
          <Calendar
            challenges={challenges}
            challengeIndex={challengeIndex}
            onDaysClicked={onDaysClicked}
            breakfast={breakfast}
          />
          <NewProgressBar
            progressPercentage={progressPercentage}
            challengeIndex={challengeIndex}
            challenges={challenges}
          />
        </div>

        <div className="right-column">
          <NewMenu
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
            days={days}
            onDaysClicked={onDaysClicked}
            challengeIndex={challengeIndex}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MenuItems;
