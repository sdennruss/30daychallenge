import React from "react";
import ProgressBar from "../progress/progressBar";
import Calendar from "../calendar/calendar";
import MediaQuery from "react-responsive";
import NewMenu from "./newMenu";
import NewProgressBar from "../progress/newProgressBar";

const MenuItems = ({
  onDaysClicked,
  challenges,
  match,
  value,
  item,
  showContact,
  hideLanding,
  challengeDivColor,
  transitionColor,
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
          />
          <NewProgressBar item={item} value={value} days={days} />
        </div>

        <div className="right-column">
          <NewMenu
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
            showContact={showContact}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MenuItems;
