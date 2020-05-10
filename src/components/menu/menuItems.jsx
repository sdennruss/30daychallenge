import React from 'react';
import ProgressBar from '../progress/progressBar';
import Calendar from '../calendar/calendar';

const MenuItems = ({ onDaysClicked, challenges, match, value, item  }) => {
  const {params: { days, breakfast, lunch, dinner, }} = match


  return (
    <React.Fragment>
    <Calendar
    challenges={challenges}
    onDaysClicked={onDaysClicked}
    />
      <h1>{days}</h1>

      <ProgressBar
      value={value}
      item={item}
      />
          <div className="menu-container">
            <div className="breakfast">
             <h4 className="breakfast-item">{breakfast}</h4>
            </div>

            <div className="lunch">
              <h4 className="lunch-item">{lunch}</h4>
            </div>

            <div className="dinner">
              <h4 className="dinner-item">{dinner}</h4>
            </div>


        </div>
    </React.Fragment>

     );
  }

export default MenuItems;
