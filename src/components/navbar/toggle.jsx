import React, { useState } from 'react';
import NavMobile from './navmobile';
import NavBar from './navbar';

const Toggle = ({navigations, expand, onClick, clicked, onNavStrike}) => {

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
      {expand && <NavMobile click={clicked} onNavStrike={onNavStrike} navigations={navigations} />}
    </React.Fragment>
   );
}

export default Toggle;
