import React, { useState } from "react";

const NewMenu = ({ breakfast, lunch, dinner }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenMenu = (open) => {
    console.log("Menu has been opened");
    setOpenMenu(open);
  };

  return (
    <React.Fragment>
      <div className="menu-container">
        <div
          onClick={() => handleOpenMenu("open")}
          className="breakfast-container"
        >
          <a className="meal-name">Breakfast</a>
          {openMenu && (
            <div className="recipes">
              <p className="breakfast-item">{breakfast}</p>
            </div>
          )}
        </div>

        <div onClick={() => handleOpenMenu("open")} className="lunch-container">
          <a className="meal-name">Lunch</a>
          {openMenu && (
            <div className="recipes">
              <p className="lunch-item">{lunch}</p>
            </div>
          )}
        </div>

        <div
          onClick={() => handleOpenMenu("open")}
          className="dinner-container"
        >
          <a className="meal-name">Dinner</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewMenu;
