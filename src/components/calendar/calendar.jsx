import React from 'react';
import Days from './days';


const Calendar = ({value, item, challenges, onDaysClicked}) => {
  return (
    <React.Fragment>
    <h1>Pick a Day and Let's Get Started!</h1>
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
    </div>

    </React.Fragment>
   );
}

export default Calendar;
