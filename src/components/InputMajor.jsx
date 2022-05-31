import React, { useState } from "react";
import Majors from "./Majors";
import Dropdown from 'react-bootstrap/Dropdown';

export default function InputMajor({majorget}) {
    const [option, setOption] = useState("");

    function handleSelect(e) {
        setOption(e);
        console.log("ini input " + option);
        majorget(option);
    }

    return (
        <div id="inputMajor" className="row mx-auto">
            <p>{option}</p>
            <div align="end">
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle id="inputMajorBtn">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Majors.map((major) => {
                            return <Dropdown.Item eventKey={major.value}>{major.value}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div>
    );
}