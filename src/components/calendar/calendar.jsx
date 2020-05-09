import React,{Component} from 'react';
import Days from './days';
import ProgressBar from '../progress/progressBar';


const Calendar = ({challenges, onDaysClicked, value, item}) => {
  return (
    <React.Fragment>
    <h1>Pick a Day to Get Started!</h1>
    <div className="progress-challenge-container">
      <div className="challenge-container">
        {challenges.map(challenge => (
          <div  key={challenge.id} className="challenge-divs">
            <Days
            challenge={challenge}
            onClick = {() => onDaysClicked(challenge) }
            />
        </div>
      ))}
      </div>
      <ProgressBar
      value={value}
      item={item}
      />
    </div>

    </React.Fragment>
   );
}

export default Calendar;
