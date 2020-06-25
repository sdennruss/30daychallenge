import React from "react";
import Cows from "./brown-cow.jpg";

const FoodInspo = () => {
  return (
    <React.Fragment>
      <h1 className="food-inspo-title">Food FoodInspo</h1>
      <div className="resources-container-3">
        <div className="column-5">
          <img alt="cows" className="brown-cow-3" src={Cows} />
          <p className="page-start-3">1</p> <p className="page-end-3">3</p>
        </div>

        <div className="column-6">
          <div className="title-3">A</div>
          <div className="info-3">B</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodInspo;
