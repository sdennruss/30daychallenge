import React from "react";

const Meals = ({ breakfast, lunch, dinner }) => {
  return (
    <React.Fragment>
      <div className="menu-container">
        <div className="breakfast-container">
          <a className="meal-name">Breakfast</a>
          <div className="recipes">
            <p className="breakfast-item">{breakfast}</p>
          </div>
          <button className="recipe-button">
            + <span className="view-recipe">View Recipe</span>
          </button>
        </div>

        <div className="lunch-container">
          <a className="meal-name">Lunch</a>
          <div className="recipes">
            <p className="lunch-item">{lunch}</p>
          </div>
          <button className="recipe-button">
            + <span className="view-recipe">View Recipe</span>
          </button>
        </div>

        <div className="dinner-container">
          <a className="meal-name">Dinner</a>
          <div className="recipes">
            <p className="dinner-item">{dinner}</p>
          </div>
          <button className="recipe-button">
            + <span className="view-recipe">View Recipe</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meals;
