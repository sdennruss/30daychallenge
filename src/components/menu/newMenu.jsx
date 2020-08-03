import React, { useState } from "react";
import images from "../assets/breakfast";

const NewMenu = ({ breakfast, lunch, dinner, imageIndex }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const breakfastBrownDiv = openMenu === breakfast ? "#937e6a" : null;
  const lunchBrownDiv = openMenu === lunch ? "#937e6a" : null;
  const dinnerBrownDiv = openMenu === dinner ? "#937e6a" : null;

  const handleOpenMenu = (open) => {
    console.log("Menu has been opened", open);
    console.log(images[imageIndex].src);
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
            <div>
              <img className="breakfast-img" src={images[imageIndex].src} />
            </div>
            <div>
              <p className="breakfast-item">{breakfast}</p>
            </div>
          </div>
        ) : null}
        {openMenu === lunch ? (
          <div className="recipes">
            <p className="lunch-item">{lunch}</p>
          </div>
        ) : null}
        {openMenu === dinner ? (
          <div className="recipes">
            <p className="dinner-item">{dinner}</p>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default NewMenu;
