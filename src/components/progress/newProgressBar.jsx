import React from "react";

const NewProgressBar = ({ value, item, days }) => {
  const percentage = item === 0 ? 0 : value;

  return (
    <React.Fragment>
      <div className="progress-days">
        <p className="challenge-day-progress">{days}</p>
        <p className="challenge-day-progress">Check your progress</p>
      </div>
      <div className="progress-path">
        <div className="progress-stroke" style={{ width: `${percentage}%` }}>
          <p className="progress-percentage">{`${percentage}%`} </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewProgressBar;
