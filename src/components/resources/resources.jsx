import React from 'react';
import Cows from "./cows.jpg"


const Resources = () => {

  return (
    <React.Fragment>
    <h1 className="resources-header">Resources</h1>

    <div className="equal-height-container">

      <div className="left-arrow-container">
        <div className="left-arrow"> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> </div>

      </div>


    <div className="resources-image-first">
        <img className="baby-cows" src={Cows} alt="cows" />
      </div>

      <div className="right-arrow-container">
        <div className="right-arrow"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </div>
      </div>

      <div classNmae="dots-container"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
    </React.Fragment>

   );
}

export default Resources;
