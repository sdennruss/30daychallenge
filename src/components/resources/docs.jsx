import React from 'react';
import Cows from "./brown-cow.jpg"

const Docs = () => {
  return (
    <React.Fragment>
      <h1 className="doc-title">Docs</h1>
      <div className="resources-container-1">
        <div className="column-1">
        <img className="brown-cow-1" src={Cows}/>
        </div>

        <div className="column-2">
          <div className="title-1">A</div>
            <div className="info-1">B</div>
        </div>
      </div>
    </React.Fragment>

   );
}

export default Docs;
