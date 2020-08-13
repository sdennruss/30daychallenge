import React from "react";

const MenuContent = ({ breakfast, lunch, dinner, imageIndex }) => {
  return (
    <React.Fragment>
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
        <div className="breakfast-content">
          <p className="breakfast-item">{breakfast}</p>
          <p className="breakfast-details">
            {breakfastDetails[imageIndex].description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuContent;
