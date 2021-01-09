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

  const scrollRef = useRef();

  function handleScroll() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

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
            handleScroll={handleScroll}
            progressPercentage={progressPercentage}
            challengeIndex={challengeIndex}
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
            scrollRef={scrollRef}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MenuItems;
