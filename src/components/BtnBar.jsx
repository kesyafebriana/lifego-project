import React from "react";

export default function BtnBar(props) {
    return (
        <button id="barBtn" className="row" onClick={props.onClick}>{props.name}</button>
    );
}