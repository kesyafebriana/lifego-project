import React, { useState, useEffect } from 'react';
import Time from "./components/Time";
import Bar from "./components/Bar";
import './Game.css';

function Game() {
    const [eat, setEat] = useState(0);
    const [study, setStudy] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [play, setPlay] = useState(0);

    function handleEat() {
        setEat(eat + 20);
    }

    function handleStudy() {
        setStudy(study + 20);
    }

    function handleSleep() {
        setSleep(sleep + 20);
    }

    function handlePlay() {
        setPlay(play + 20);
    }

    return (
        <>
            <Time />       
            <Bar action={study} name="Lawsen" onClick={handleStudy}/>
        </>
    );
}

export default Game;