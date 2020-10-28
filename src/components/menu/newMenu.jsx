import React, { useState } from "react";
import { breakfastDetails } from "./breakfast";
import { lunchDetails } from "./lunch";
import { dinnerDetails } from "./dinner";

const NewMenu = ({
  breakfast,
  lunch,
  dinner,
  challengeIndex,
  onDaysClicked,
}) => {
  const [openMenu, setOpenMenu] = useState(null);

  const breakfastBrownDiv =
    openMenu === lunch || openMenu === dinner
      ? "brown-b-c"
      : "breakfast-container";
  const lunchBrownDiv = openMenu === lunch ? "brown-l-c" : "lunch-container";
  const dinnerBrownDiv = openMenu === dinner ? "brown-d-c" : "dinner-container";

  const hideBreakfast =
    openMenu === lunch || openMenu === dinner ? "none" : null;

  return (
    <React.Fragment>
      <p className="challenge-number">{` Day ${challengeIndex + 1}`}</p>
      <div className="menu-container">
        <div
          onClick={() => setOpenMenu(breakfast)}
          className={breakfastBrownDiv}
        >
          <a className="meal-name">Breakfast</a>
        </div>
        <div onClick={() => setOpenMenu(lunch)} className={lunchBrownDiv}>
          <a className="meal-name">Lunch</a>
        </div>

        <div onClick={() => setOpenMenu(dinner)} className={dinnerBrownDiv}>
          <a className="meal-name">Dinner</a>
        </div>
      </div>

      <div className="menu-items">
        {onDaysClicked && (
          <div className="recipes-breakfast" style={{ display: hideBreakfast }}>
            <div className="breakfast-image-container">
              <img
                style={{ width: "700", height: "400" }}
                className="breakfast-img"
                src={
                  process.env.PUBLIC_URL +
                  `/breakfast/breakfast-${challengeIndex + 1}.jpg`
                }
              />
            </div>
            <div className="breakfast-content">
              <p className="breakfast-item">{breakfast}</p>
              <p className="breakfast-details">
                {breakfastDetails[challengeIndex].description}
              </p>
              <a
                href={breakfastDetails[challengeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-button"
              >
                + View Recipe
              </a>
            </div>
          </div>
        )}

        {openMenu === lunch && (
          <div className="recipes">
            <div className="lunch-image-container">
              <img
                style={{ width: "700", height: "400" }}
                className="lunch-img"
                src={
                  process.env.PUBLIC_URL +
                  `/lunch/lunch-${challengeIndex + 1}.jpg`
                }
              />
            </div>
            <div className="lunch-content">
              <p className="lunch-item">{lunch}</p>
              <p className="lunch-details">
                {lunchDetails[challengeIndex].description}
              </p>
              <a
                href={lunchDetails[challengeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-button"
              >
                + View Recipe
              </a>
            </div>
          </div>
        )}

        {openMenu === dinner && (
          <div className="recipes">
            <div className="dinner-image-container">
              <img
                style={{ width: "700", height: "400" }}
                className="dinner-img"
                src={
                  process.env.PUBLIC_URL +
                  `/dinner/dinner-${challengeIndex + 1}.jpg`
                }
              />
            </div>
            <div className="dinner-content">
              <p className="dinner-item">{dinner}</p>
              <p className="dinner-details">
                {dinnerDetails[challengeIndex].description}
              </p>
              <a
                href={dinnerDetails[challengeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-button"
              >
                + View Recipe
              </a>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default NewMenu;
