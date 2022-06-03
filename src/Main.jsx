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

export default function Main() {
    const [major, setMajor] = useState("");
    const [name, setName] = useState("");
    const [character, setCharacter] = useState(0);

    useEffect(() => {
        console.log(name);
        console.log(major);
        console.log(character);
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
                <Route path="game" element={<Game major={major} name={name} character={character} />} />
                <Route path="/" element={<App major={getMajor} name={getName} character={getCharacter} />} />
            </Routes>
        </BrowserRouter>
    );

}