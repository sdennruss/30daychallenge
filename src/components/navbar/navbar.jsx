import React from 'react';
import {Link} from "react-router-dom"

const NavBar = ({navigations, onNavSelected, desktopNavClass}) => {

return (

  <React.Fragment>

  <div className="navbar-container">
    {navigations.map(navigation => (
      <div key={navigation} className={navigation}>
      <nav className="navigation-mobile">
        <ul className="desktop-unordered-list">
          <li className="desktop-list-items">
          <Link
          onMouseOver={() => onNavSelected(navigation)}
          className={navigation} to={`/${navigation}`}><span className = {desktopNavClass} >{navigation}</span></Link>
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
