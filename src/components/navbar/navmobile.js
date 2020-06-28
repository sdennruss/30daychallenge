import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavMobile = ({
  expand,
  navigations,
  navBarClass,
  onNavSelected,
  onClick,
}) => {
  const navTransition = expand ? "-open" : "";
  console.log(navTransition);

  return (
    <React.Fragment>
      <div className={`navbar-mobile-container${navTransition}`}>
        {navigations.map((navigation) => (
          <div key={navigation} className={navigation}>
            <nav className="navigation-mobile">
              <ul className="mobile-unordered-list">
                <li
                  className="mobile-list-items"
                  onClick={() => onClick(!expand)}
                >
                  <Link
                    onMouseOver={() => onNavSelected(navigation)}
                    className={`mobile-${navigation}`}
                    to={`/${navigation}`}
                  >
                    <span className={navBarClass}>{navigation}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default NavMobile;
