import React from "react";
import PlantLogo from "./veg-logo.png";
import MenuNav from "./menuNav";

const Toggle = ({ navigations, expand, onToggle }) => {
  return (
    <React.Fragment>
      <div className="hamburger-container">
        <div className="hamburger">
          <input
            onClick={() => onToggle(!expand)}
            type="checkbox"
            id="menuToggle"
            checked={expand}
            onChange={() => onToggle(!expand)}
          />

          <label htmlFor="menuToggle" className="menuOpen">
            <div className="open"></div>
          </label>
        </div>
      </div>

      {expand && (
        <MenuNav onClick={onToggle} expand={expand} navigations={navigations} />
      )}
    </React.Fragment>
  );
};

export default Toggle;
