import React, { useState } from "react";
import Select from "react-select";
import Majors from "./Majors";
import InputMajorStyle from "./InputMajosStyle";

export default function InputMajor() {
    const [option, setOption] = useState();

    return (
        <div>
            <Select id="inputMajor"
                options={Majors}
                onChange={
                    e => 
                        setOption(e.value)
                }
                placeholder={option}
                value={option}
                styles={InputMajorStyle}
            />
        </div>
    );
}