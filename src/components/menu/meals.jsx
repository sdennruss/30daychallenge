import React from 'react';
import { meals } from '../calendar/challenges';

const Meals = ({breakfast, lunch, dinner}) => {
  return (
    <React.Fragment>

      <div className="menu-container">
        <div className="breakfast-container">
          <div className="corner-stroke-left"></div>
            <h3 class="meal-name">Breakfast</h3>
            <div className="recipes">
            <p className="breakfast-item">{breakfast}</p>
            </div>
            <a><button className="details-button">View Details</button></a>
          </div>

        <div className="lunch-container">
          <div className="corner-stroke-left"></div>
          <h3 class="meal-name">Lunch</h3>
          <div className="recipes">
            <p className="lunch-item">{lunch}</p>
          </div>
            <a><button className="details-button">View Details</button></a>
          </div>

          <div className="dinner-container">
          <div className="corner-stroke-left"></div>
          <h3 class="meal-name">Dinner</h3>
          <div className="recipes">
            <p className="dinner-item">{meals.dinner}</p>
           <a><button className="details-button">View Details</button></a>
          </div>
        </div>
        </div>
    </React.Fragment>
  );
}


export default Meals;
