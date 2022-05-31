import React from "react";

function PopUpButton({pict, handleClick}) {
    function handleClickFunction() {
        handleClick ()
    }
    
    return (
        <>
            <div className="popUp" onClick={handleClickFunction}>
                <img className="popUpButton" src={pict} />
            </div>
        </>
    )
}

export default PopUpButton;