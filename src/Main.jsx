import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Game from "./Game";
import Rapot from "./Rapot";
import './App.css';
import './Game.css';
import './Rapot.css';

export default function Main() {
    const [major, setMajor] = useState("");
    const [name, setName] = useState("");
    const [character, setCharacter] = useState(0);
    const [uangJajan, setUangJajan] = useState(500000);
    const [eat7,setEat7] = useState(0);
    const [sleep7,setSleep7] = useState(0);
    const [play7,setPlay7] = useState(0);
    const [study7,setStudy7] = useState(0);
    const [total,setTotal] = useState();

    useEffect(() => {
        localStorage.setItem("jurusan", major);
    }, [name, major, character])

    function getMajor(majorget) {
        setMajor(majorget);
    }

    function getName(nameget) {
        setName(nameget);
    }

    function getCharacter(characterget) {
        setCharacter(characterget);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route />
                <Route path="rapot" element={<Rapot total={total} uangJajan={uangJajan} major={major} name={name} character={character} />} />
                <Route path="game" element={<Game total={total} eat7={eat7} sleep7={sleep7} play7={play7} study7={study7} uangJajan={uangJajan} setTotal={setTotal} setEat7={setEat7} setSleep7={setSleep7} setPlay7={setPlay7} setStudy7={setStudy7} setUangJajan={setUangJajan} major={major} name={name} character={character} />} />
                <Route path="/" element={<App major={getMajor} name={getName} character={getCharacter} />} />
            </Routes>
        </BrowserRouter>
    );

}