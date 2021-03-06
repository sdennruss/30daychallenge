import React from "react";
import { Link } from "react-router-dom";

const MenuNav = ({ navigations, expand, onToggle }) => {
  return (
    <React.Fragment>
      <div className="menu menuEffects">
        <div className="menuContent">
          {navigations.map((navigation) => (
            <nav key={navigation}>
              <ul className="unlisted-items">
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    onClick={() => onToggle(!expand)}
                    to={`/${navigation}`}
                  >
                    {navigation}
                  </Link>
                </li>
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuNav;
