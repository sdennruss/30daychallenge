import React from 'react';
import {Link} from "react-router-dom"

const NavBar = ({navigations, onNavSelected, navBarClass}) => {

return (

  <React.Fragment>

  <div className="navbar-mobile-container">
    {navigations.map(navigation => (
      <div key={navigation} className={navigation}>
      <nav className="navigation-mobile">
        <ul className="mobile-unordered-list">
          <li className="mobile-list-items">
          <Link
          onClick={() => onNavSelected(navigation)}
          className={`mobile-${navigation}`} to={`/${navigation}`}><span className = {navBarClass} >{navigation}</span></Link>
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
