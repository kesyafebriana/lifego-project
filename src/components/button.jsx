import React from "react";

function Button({click,item}) {
    return (
        <>
            <button onClick={click} className="normalButton">
                {item}
            </button> 
        </>
    )
}

export default Button;