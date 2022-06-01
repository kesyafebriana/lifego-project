import React, { useState, useEffect } from 'react';
import Time from "./components/Time";
import Bar from "./components/Bar";
import BtnBar from './components/BtnBar';
import './Game.css';
import Images from './components/Images';

function Game(props) {
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
            {/* <Time name={props.name}/>
            <h1>ini major {props.major}</h1>
            <img src={Images[props.character].url} /> */}
            <div id='setBar' className='row mt-lg-5'>
                {/* <div className='col-2'></div> */}
                <Bar action={eat} img={Images[1].logo[0].url}/>
                <Bar action={study} img={Images[1].logo[2].url}/>
                <Bar action={sleep} img={Images[1].logo[3].url}/>
                <Bar action={play} img={Images[1].logo[1].url}/>
                {/* <div className='col-2'></div> */}
            </div>
            {/* ms-lg-5 mt-lg-5 */}
            <div className='col'>
                <BtnBar name="Eat" onClick={handleEat}/>
                <BtnBar name="Study" onClick={handleStudy}/>
                <BtnBar name="Sleep" onClick={handleSleep}/>
                <BtnBar name="Play" onClick={handlePlay}/>
            </div>
        </>
    );
}

export default Game;