import React, { useState } from "react";

export default function InputName({nameget}) {

    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
        console.log(input);
        nameget(input);
    }

    return (
        <div>
            <input onChange={handleChange} className="row mx-auto" id="inputName" placeholder="Enter your name here. . ."></input>
        </div>
    )
}