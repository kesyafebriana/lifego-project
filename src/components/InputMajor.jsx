import React, { useState } from "react";
import Majors from "./Majors";
import Dropdown from 'react-bootstrap/Dropdown';

export default function InputMajor() {
    const [option, setOption] = useState("");

    return (
        <div id="inputMajor" align="end" className="row mx-auto">
            <Dropdown onSelect={(e) => setOption(e)}>
                <Dropdown.Toggle id="inputMajorBtn">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {Majors.map((major) => {
                        return <Dropdown.Item eventKey={major.value}>{major.value}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}