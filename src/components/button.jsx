import React from "react";

function Button({item}) {
    return (
        <>
            <button className="normalButton">
                {item}
            </button> 
        </>
    )
}

export default Button;