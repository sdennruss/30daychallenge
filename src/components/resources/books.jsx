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
          <p className="page-start-2">1</p> <p className="page-end-2">3</p>
        </div>
      </div>
    </React.Fragment>
   );
}

export default Books;
