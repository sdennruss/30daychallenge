import React from "react";
import NavMobile from "./navmobile";

const Toggle = ({
  navigations,
  expand,
  onClick,
  clicked,
  navBarClass,
  onNavSelected,
}) => {
  const changeNavClass = expand ? "x" : "line";
  const x = expand ? "x" : null;

  return (
    <React.Fragment>
      <div className="hamburger-container">
        <div onClick={() => onClick(!expand)} className="hamburger">
          <div className={changeNavClass}>{x}</div>
          <div className={changeNavClass}>{}</div>
          <div className={changeNavClass}>{}</div>
        </div>
      </div>

      {expand && (
        <NavMobile
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
