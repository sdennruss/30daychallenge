import React from 'react';
import { meals } from '../calendar/challenges';

const Meals = ({breakfast, lunch, dinner}) => {
  return (
    <React.Fragment>

      <div className="menu-container">

        <div className="breakfast-container">
            <h3 class="meal-name">Breakfast</h3>
            <div className="recipes">
            <p className="breakfast-item">{breakfast}</p>
            </div>
            <a><button className="details-button">View Details</button></a>
          </div>

        <div className="lunch-container">
          <h3 class="meal-name">Lunch</h3>
            <div className="recipes">
            <p className="lunch-item">{lunch}</p>
            </div>
            <a><button className="details-button">View Details</button></a>
          </div>

          <div className="dinner-container">
            <h3 class="meal-name">Dinner</h3>
              <div className="recipes">
              <p className="dinner-item">{dinner}</p>
          </div>
          <a><button className="details-button">View Details</button></a>
        </div>

        </div>
    </React.Fragment>
  );
}


export default Meals;
