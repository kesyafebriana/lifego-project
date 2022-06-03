import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Bar(props) {

    return (
        <div className="soloBar col row">
            <img className="col" src={props.img} />
            <div className="col" id="barContainer">
                <ProgressBar id="bar" now={props.action} />
            </div>
        </div>
    );

}