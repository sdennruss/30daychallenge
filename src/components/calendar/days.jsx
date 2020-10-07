import React from "react";
import { Link } from "react-router-dom";

const Days = ({ challenge, onDaysClicked }) => {
  return (
    <React.Fragment>
      <Link
        key={challenge.id}
        to={`/calendar/${challenge.breakfast}/${challenge.lunch}/${challenge.dinner}/Day ${challenge.days}`}
      >
        <h6
          onClick={() => onDaysClicked(challenge)}
          className="challenge-items"
        >
          {challenge.days}
        </h6>
      </Link>
    </React.Fragment>
  );
};

export default Days;
