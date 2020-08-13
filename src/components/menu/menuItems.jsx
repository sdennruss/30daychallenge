import React from "react";
import Calendar from "../calendar/calendar";
import NewMenu from "./newMenu";
import NewProgressBar from "../progress/newProgressBar";

const MenuItems = ({
  onDaysClicked,
  challenges,
  match,
  value,
  item,
  showContact,
  challengeDivColor,
  transitionColor,
  imageIndex,
}) => {
  const {
    params: { days, breakfast, lunch, dinner },
  } = match;

  return (
    <React.Fragment>
      <div className="progress-container">
        <div className="left-column">
          <Calendar
            challengeDivColor={challengeDivColor}
            transitionColor={transitionColor}
            challenges={challenges}
            onDaysClicked={onDaysClicked}
            value={value}
            days={days}
          />
          <NewProgressBar item={item} value={value} days={days} />
        </div>

        <div className="right-column">
          <NewMenu
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
            imageIndex={imageIndex}
            showContact={showContact}
            onDaysClicked={onDaysClicked}
            days={days}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MenuItems;
