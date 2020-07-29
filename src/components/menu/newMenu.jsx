import React, { useState } from "react";

const NewMenu = ({ breakfast, lunch, dinner }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const breakfastkBrownDiv = openMenu === breakfast ? "#937e6a" : null;
  const lunchkBrownDiv = openMenu === lunch ? "#937e6a" : null;
  const dinnerkBrownDiv = openMenu === dinner ? "#937e6a" : null;

  const handleOpenMenu = (open) => {
    console.log("Menu has been opened", open);
    setOpenMenu(open);
  };

  return (
    <React.Fragment>
      <div className="menu-container">
        <div
          style={{ backgroundColor: breakfastkBrownDiv }}
          onClick={() => handleOpenMenu(breakfast)}
          className="breakfast-container"
        >
          <a className="meal-name">Breakfast</a>
        </div>
        <div
          style={{ backgroundColor: lunchkBrownDiv }}
          onClick={() => handleOpenMenu(lunch)}
          className="lunch-container"
        >
          <a className="meal-name">Lunch</a>
        </div>

        <div
          style={{ backgroundColor: dinnerkBrownDiv }}
          onClick={() => handleOpenMenu(dinner)}
          className="dinner-container"
        >
          <a className="meal-name">Dinner</a>
        </div>
      </div>

      <div className="menu-items">
        {openMenu === breakfast ? (
          <div className="recipes">
            <p className="breakfast-item">{breakfast}</p>
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
