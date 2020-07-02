import React from "react";
import NavMobile from "./navmobile";
import MenuNav from "./menuNav";

const Toggle = ({
  navigations,
  expand,
  onClick,
  navBarClass,
  onNavSelected,
  close,
}) => {
  // const changeNavClass = expand ? "x" : "line";
  const x = !expand ? null : "open";

  return (
    <React.Fragment>
      <div className="hamburger-container">
        <div className="hamburger">
          <input type="checkbox" id="menuToggle"></input>

          <label
            onClick={() => onClick(!expand)}
            htmlFor="menuToggle"
            className="menuOpen"
          >
            <div className="open"></div>
          </label>
        </div>
      </div>

      {expand && (
        <MenuNav
          close={close}
          onClick={onClick}
          expand={expand}
          navBarClass={navBarClass}
          onNavSelected={onNavSelected}
          navigations={navigations}
        />
      )}
    </React.Fragment>
  );
};

export default Toggle;
