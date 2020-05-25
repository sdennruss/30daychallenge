import React from 'react';
import Docs from "./docs";
import Books from "./books";
import FoodInspo from './foodInspo';


const Resources = ({onClick}) => {

  return (
    <React.Fragment>
      <Docs />

      <Books />

      <FoodInspo />

    </React.Fragment>

   );
}

export default Resources;
