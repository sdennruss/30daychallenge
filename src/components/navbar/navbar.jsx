import React from 'react';
import {Link} from "react-router-dom"

const NavBar = ({navigations}) => {
  return (
  <React.Fragment>
  <div className="navbar-container">
    {navigations.map(navigation => (
      <div key={navigation} className={navigation}>
          <nav className="navigation">
            <ul className="unordered-list">
              <li className="list-items">
              <Link to={`/${navigation}`}>{navigation}</Link>
              </li>
            </ul>
          </nav>
      </div>
    ))}
    </div>
  </React.Fragment>
   );
}

export default NavBar;
