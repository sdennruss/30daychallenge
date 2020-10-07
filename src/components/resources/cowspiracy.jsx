import React, { useState } from "react";
import resourceDetails from "./resourcesInfo";

const CowSpiracy = ({ resources }) => {
  const [next, setNext] = useState(0);
  const [back, setBack] = useState(6);

  const handleNextResource = (next) => {
    const nextResource = next === 6 ? 0 : next;
    console.log("New resource has been clicked", next);
    setNext(nextResource);
  };

  const handleBackResource = (back) => {
    const backResource = back === -1 ? 5 : back;
    console.log("New resource has been clicked", back);

    setNext(backResource);
  };

  return (
    <React.Fragment>
      <div className="cowspiracy-outer-container">
        <div className="cowspiracy-container">
          <div className="arrow-left">
            <i
              onClick={() => handleBackResource(next - 1)}
              className="fa fa-arrow-left"
              aria-hidden="true"
            ></i>
          </div>
          <div className="all-content">
            <div className="resource-content-container">
              <h2 className="resource-title">{resourceDetails[next].title}</h2>
              <p className="resource-paragraph">{resourceDetails[next].body}</p>
              <a
                className="resource-button"
                target="_blank"
                rel="noopener noreferrer"
                href={resourceDetails[next].link}
              >
                + View Details
              </a>
            </div>
            <div className="image-resource-container">
              <img className="doc-image" src={resourceDetails[next].images} />
            </div>
          </div>
          <div className="arrow-right">
            <i
              onClick={() => handleNextResource(next + 1)}
              className="fa fa-arrow-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CowSpiracy;
