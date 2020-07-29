import React from "react";

const NewProgressBar = ({ value, item, days }) => {
  const percentage = item === 0 ? 0 : value;

  return (
    <React.Fragment>
      <div className="progress-path">
        <div
          className="progress-stroke"
          style={{ width: `${percentage}%` }}
        >{`${percentage}%`}</div>
      </div>
    </React.Fragment>
  );
};

export default NewProgressBar;
