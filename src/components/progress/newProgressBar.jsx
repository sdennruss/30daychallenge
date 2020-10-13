import React from "react";

const NewProgressBar = ({ challenges, challengeIndex, progressPercentage }) => {
  return (
    <React.Fragment>
      <div className="progress-days">
        <p className="challenge-day-progress">{`${progressPercentage}% Complete`}</p>
        <div className="progress-path">
          <div
            className="progress-stroke"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewProgressBar;
