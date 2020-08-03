import React, { useState } from "react";

const NewMenu = ({ breakfast, lunch, dinner, imageIndex, days }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const breakfastBrownDiv = openMenu === breakfast ? "#937e6a" : null;
  const lunchBrownDiv = openMenu === lunch ? "#937e6a" : null;
  const dinnerBrownDiv = openMenu === dinner ? "#937e6a" : null;

  const handleOpenMenu = (open) => {
    console.log("Menu has been opened", open);
    setOpenMenu(open);
  };

  return (
    <React.Fragment>
      <div className="menu-container">
        <div
          style={{ backgroundColor: breakfastBrownDiv }}
          onClick={() => handleOpenMenu(breakfast)}
          className="breakfast-container"
        >
          <a className="meal-name">Breakfast</a>
        </div>
        <div
          style={{ backgroundColor: lunchBrownDiv }}
          onClick={() => handleOpenMenu(lunch)}
          className="lunch-container"
        >
          <a className="meal-name">Lunch</a>
        </div>

        <div
          style={{ backgroundColor: dinnerBrownDiv }}
          onClick={() => handleOpenMenu(dinner)}
          className="dinner-container"
        >
          <a className="meal-name">Dinner</a>
        </div>
      </div>

      <div className="menu-items">
        {openMenu === breakfast ? (
          <div className="recipes">
            <div className="breakfast-image-container">
              <img
                className="breakfast-img"
                src={
                  process.env.PUBLIC_URL +
                  `/breakfast/breakfast-${imageIndex + 1}.jpg`
                }
              />
            </div>
            <div className="breakfast-title">
              <p className="breakfast-item">{breakfast}</p>
            </div>
          </div>
        ) : null}
        {openMenu === lunch ? (
          <div className="recipes">
            <div className="lunch-image-container">
              <img
                className="lunch-img"
                src={
                  process.env.PUBLIC_URL + `/lunch/lunch-${imageIndex + 1}.jpg`
                }
              />
            </div>
            <div className="lunch-title">
              <p className="lunch-item">{lunch}</p>
            </div>
          </div>
        ) : null}
        {openMenu === dinner ? (
          <div className="recipes">
            <div className="dinner-image-container">
              <img
                className="dinner-img"
                src={
                  process.env.PUBLIC_URL +
                  `/dinner/dinner-${imageIndex + 1}.jpg`
                }
              />
            </div>
            <div className="dinner-title">
              <p className="dinner-item">{dinner}</p>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default NewMenu;
