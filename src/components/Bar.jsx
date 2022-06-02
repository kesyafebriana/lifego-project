import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Bar(props) {

    return (
        <div className="col row" id="soloBar">
            <img className="col" src={props.img} />
            <div className="col" id="barContainer">
                <ProgressBar id="bar" now={props.action} />
            </div>
        </div>
    );

}