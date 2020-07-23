import React from "react";
import ProgressBar from "../progress/progressBar";
import Calendar from "../calendar/calendar";
import MediaQuery from "react-responsive";
import NewMenu from "./newMenu";
import Meals from "./meals";
import Contact from "../contact/contact";

const MenuItems = ({
  onDaysClicked,
  challenges,
  match,
  value,
  item,
  showContact,
}) => {
  const {
    params: { days, breakfast, lunch, dinner },
  } = match;

  return (
    <React.Fragment>
      <div className="progress-container">
        <div className="left-column">
          <Calendar challenges={challenges} onDaysClicked={onDaysClicked} />
        </div>

        <div className="right-column">
          <h1 className="progress-days">{days}</h1>

          <MediaQuery query="(max-device-width: 768px)">
            <ProgressBar value={value} item={item} />
          </MediaQuery>

          <MediaQuery query="(min-device-width: 769px)">
            <ProgressBar value={value} item={item} />
          </MediaQuery>
        </div>
      </div>

      <NewMenu
        breakfast={breakfast}
        lunch={lunch}
        dinner={dinner}
        showContact={showContact}
      />
    </React.Fragment>
  );
};
export default MenuItems;
