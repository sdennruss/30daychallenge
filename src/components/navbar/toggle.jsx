import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuNav from "./menuNav";
import vvcLogo from "./logo-2.png";

const Toggle = () => {
  const navigations = ["home", "resources", "connect"];
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <div className="hamburger-container">
        <div className="yellow-circle"></div>

        <div className="vvc-logo">
          <Link to="/home">
            {" "}
            <img src={vvcLogo} className="brand-logo" />
          </Link>
        </div>
        <div className="hamburger">
          <input
            onClick={() => setExpand(!expand)}
            type="checkbox"
            id="menuToggle"
            checked={expand}
            onChange={() => setExpand(!expand)}
          />

          <label htmlFor="menuToggle" className="menuOpen">
            <div className="open"></div>
          </label>
        </div>
      </div>

      {expand && (
        <MenuNav
          onToggle={setExpand}
          expand={expand}
          navigations={navigations}
        />
      )}
    </React.Fragment>
  );
};

export default Toggle;
