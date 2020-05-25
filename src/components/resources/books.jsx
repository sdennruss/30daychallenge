import React from 'react';
import Cows from "./brown-cow.jpg"

const Books = () => {
  return (
    <React.Fragment>
      <h1 className="book-title">Books</h1>
      <div className="resources-container-2">
        <div className="column-3">
          <div className="title-2">A</div>
          <div className="info-2">B</div>
        </div>

        <div className="column-4">
          <img className="brown-cow-2" src={Cows}/>
        </div>
      </div>
    </React.Fragment>
   );
}

export default Books;
