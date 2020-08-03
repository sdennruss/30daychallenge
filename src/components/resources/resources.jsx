import React from "react";
import CowSpiracy from "./cowspiracy";

const Resources = ({ resources }) => {
  return (
    <React.Fragment>
      <div>
        <CowSpiracy resources={resources} />
      </div>
    </React.Fragment>
  );
};

export default Resources;
