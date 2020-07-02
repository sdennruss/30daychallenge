import React from "react";
import { Link } from "react-router-dom";

const MenuNav = ({ navigations, expand, onClick, close }) => {
  return (
    <React.Fragment>
      <div class="menu menuEffects">
        <div class="menuContent">
          {navigations.map((navigation) => (
            <nav>
              <ul className="unlisted-items">
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    onClick={() => onClick(!expand)}
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
