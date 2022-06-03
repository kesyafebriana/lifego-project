import React from "react";

const AlertPopupEat = props => {
  return (
    <div className="popup-box">
      <div className='popup-container'>
        <img src={props.pict} className='popup-background'/>
      </div>
    </div>
  );
};

export default AlertPopupEat;