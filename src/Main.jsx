import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    HashRouter
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
        <HashRouter>
            <Routes>
                <Route />
                <Route path="rapot" element={<Rapot uangJajan={uangJajan} major={major} name={name} character={character} />} />
                <Route path="game" element={<Game uangJajan={uangJajan} setUangJajan={setUangJajan} major={major} name={name} character={character} />} />
                <Route path="/" element={<App major={getMajor} name={getName} character={getCharacter} />} />
            </Routes>
        </HashRouter>
    );

}