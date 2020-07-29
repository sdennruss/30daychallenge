import React from "react";

const CowSpiracy = () => {
  return (
    <React.Fragment>
      <div className="cowspiracy-outer-container">
        <div className="cowspiracy-container">
          <div className="arrow-left">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <div className="resource-content-container">
            <h2 className="resource-title">Cowspiracy</h2>
            <p className="resource-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className="image-resource-container">
            <h2> Image</h2>
          </div>
          <div className="arrow-right">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CowSpiracy;
