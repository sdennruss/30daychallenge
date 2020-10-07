import React from "react";
import CowSpiracy from "./cowspiracy";
import resources from "./resourcesInfo";

const Resources = () => {
  return (
    <React.Fragment>
      <div>
        <CowSpiracy resources={resources} />
      </div>
    </React.Fragment>
  );
};

export default Resources;
