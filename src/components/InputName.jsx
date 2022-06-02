import React, { useState, useEffect } from "react";

export default function InputName({nameget}) {

    const [input, setInput] = useState("");

    useEffect(() => {
        nameget(input);
    }, [input])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} className="row mx-auto" id="inputName" placeholder="Enter your name here. . ."></input>
        </div>
    )
}