import React from "react";

//  className="row m-lg-3 mt-lg-4 ms-lg-5"

export default function BtnBar(props) {
    return (
        <button id="barBtn" onClick={props.onClick}>{props.name}</button>
    );
}