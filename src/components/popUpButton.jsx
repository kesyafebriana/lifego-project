import React from "react";

function PopUpButton({pict}) {

    return (
        <>
            <div className="popUp">
                <img className="popUpButton" src={pict} />
            </div>
        </>
    )
}

export default PopUpButton;