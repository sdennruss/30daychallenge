import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import ProgressBarStyle from './styleProgress';

const ProgressBar = ({value, item}) => {

  const percentage = (item === 0 ? 0 : value)


  return (
    <React.Fragment>
    <h5>Check your Progress</h5>
    <ProgressBarStyle >
        <CircularProgressbar
          value={value}
          text={`${percentage}%`}
          />
      </ProgressBarStyle>
      </React.Fragment>

   );
}

export default ProgressBar;
