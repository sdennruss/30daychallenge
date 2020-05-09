import React from 'react';

const MenuItems = ({ match }) => {
  const {params: { days, breakfast, lunch, dinner }} = match


  return (
    <React.Fragment>
      <h1>{days}</h1>
          <div className="menu-container">
            <div className="breakfast">
             <h4 className="breakfast-item">{breakfast}</h4>
            </div>

            <div className="lunch">
              <h4 className="lunch-item">{lunch}</h4>
            </div>

            <div className="dinner">
              <h4 className="dinner-item">{dinner}</h4>
            </div>


        </div>
    </React.Fragment>

     );
  }

export default MenuItems;
