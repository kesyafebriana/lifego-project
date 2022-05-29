import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../App";
import Game from "../Game";
import '../App.css';

export default function Main() {
    const [major, setMajor] = useState("");
    const [name, setName] = useState("");
    const [character, setCharacter] = useState(null);

    function getMajor(majorget) {
        setMajor(majorget);
        console.log(major);
    }

    function getName(nameget) {
        setName(nameget);
        console.log(name);
    }

    function getCharacter(characterget) {
        setCharacter(characterget);
        console.log(character);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="game" element={<Game major={major} name={name} character={character} />} />
                <Route path="/" element={<App major={getMajor} name={getName} character={getCharacter} />} />
            </Routes>
        </BrowserRouter>
    );

}