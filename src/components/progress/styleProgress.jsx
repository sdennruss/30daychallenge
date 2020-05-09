import React from 'react';
const ProgressBarStyle = (props) => {
  return (
    <div className = "progress-bar-container" style={{ margin: 30 }}>
      <div className="progress-bar-div" style={{ marginTop: 30, display: "flex" }}>
        <div className= "progressbar" style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
          <h3 className="h5">{props.label}</h3>
      </div>
    </div>
  );
}
export default ProgressBarStyle;
