import React from 'react';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import ProgressBarStyle from './styleProgress';

const ProgressBar = ({value, item }) => {

  const percentage = (item === 0 ? 0 : value)
  const completed = (value === 100 ? "#9FC4A4" : "#B17FAB")


  return (
    <React.Fragment>
    <h5 className="check-your-progress">Check your Progress</h5>
    <ProgressBarStyle >
        <CircularProgressbar
         className="CircularProgressbar-path"
          value={value}
          text={`${percentage}% `}
          styles=
          {buildStyles ({
            pathColor: completed,
            textColor: completed
          })}
          />
      </ProgressBarStyle>
      </React.Fragment>

   );
}

export default ProgressBar;
