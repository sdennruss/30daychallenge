import React from 'react';
import Cows from "./brown-cow.jpg"

const Docs = () => {
  return (
    <React.Fragment>
      <h1 className="doc-title">Docs</h1>
      <div className="resources-container-1">
        <div className="column-1">
        <img className="brown-cow-1" src={Cows}/>
          <p className="page-start">1</p> <p className="page-end">3</p>

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
