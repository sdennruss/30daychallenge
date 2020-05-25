import React from 'react';
import Cows from "./brown-cow.jpg"

const FoodInspo = () => {
  return (
    <React.Fragment>
    <h1 className="food-inspo-title">Food FoodInspo</h1>
    <div className="resources-container-3">
      <div className="column-5">
      <img className="brown-cow-3" src={Cows}/>
      </div>

      <div className="column-6">
        <div className="title-3">A</div>
          <div className="info-3">B</div>
      </div>
    </div>
  </React.Fragment>
   );
}

export default FoodInspo;
