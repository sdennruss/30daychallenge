import React from 'react';
import ProgressBar from '../progress/progressBar';
import Calendar from '../calendar/calendar';
import MediaQuery from "react-responsive";
import Meals from './meals';

const MenuItems = ({ onDaysClicked, challenges, match, value, item  }) => {
  const {params: { days, breakfast, lunch, dinner}} = match


  return (
    <React.Fragment>
    <Calendar
    challenges={challenges}
    onDaysClicked={onDaysClicked}
    />

      <h1 className="progress-days">{days}</h1>

      <MediaQuery query="(max-device-width: 768px)" >
        <ProgressBar
        value={value}
        item={item}
        />
      </MediaQuery>

      <MediaQuery query="(min-device-width: 769px)" >
      <ProgressBar
      value={value}
      item={item}
      />
    </MediaQuery>

      <Meals
      breakfast={breakfast}
      lunch={lunch}
      dinner={dinner}
      />

    </React.Fragment>
    );
  }
export default MenuItems;
