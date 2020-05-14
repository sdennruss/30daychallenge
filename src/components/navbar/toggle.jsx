import React, { useState } from 'react';
import NavMobile from './navmobile';
import NavBar from './navbar';

const Toggle = ({navigations, expand, onClick}) => {

  const changeNavClass = (expand ? "x" : "line")
  const x = (expand ? "x" : null)

  return (

    <React.Fragment>
      <div onClick ={() => onClick(!expand)} className="hamburger-container">
        <div className="hamburger">
          <div className={changeNavClass}>{x}</div>
          <div className={changeNavClass}>{}</div>
          <div className={changeNavClass}>{}</div>
        </div>
      </div>
      {expand && <NavMobile navigations={navigations} />}
    </React.Fragment>
   );
}

export default Toggle;
