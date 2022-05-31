import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Bar(props) {

    return (
        <div>
            {/* <img src={props.img} /> */}
            <div id="barContainer">
                <ProgressBar id="bar" now={props.action} />
            </div>
            <button id="barBtn" onClick={props.onClick}>{props.name}</button>
        </div>
    );

}