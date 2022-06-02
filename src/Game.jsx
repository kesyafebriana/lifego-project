import React, { useState, useEffect, useLayoutEffect } from 'react';
import Time from "./components/Time";
import Bar from "./components/Bar";
import BtnBar from './components/BtnBar';
import MobileNews from "./components/MobileNews";
import './Game.css';
import Images from './components/Images';
import BGSiang from "./assets/siangUMN.png";
import BGPagi from "./assets/pagiUMN.png";
import BGMalam from "./assets/malamUMN.png";

const WEATHER_API="https://api.openweathermap.org/data/2.5/weather?lat=-6.24099652174&lon=106.631889&appid=b43f5f6f6fc6d9ec445455aa52d344f2";

function Game(props) {
    const [eat, setEat] = useState(0);
    const [study, setStudy] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [play, setPlay] = useState(0);
    const index=7;
    const [weather, setWeather] = useState([]);
    const [time, setTime] = useState("");

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

    {/*useEffect(()=>{
    //     fetch(WEATHER_API)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setWeather(data.results);
    //     });
    // },[]);*/}

    {//*UNTUK GANTI BACKGROUND BERDASARKAN WAKTU*/}
    useEffect(()=>{
        let greeting = document.querySelector(".greeting");
        greeting = greeting.innerHTML;
        greeting = greeting.split(",");
        greeting = greeting[0];

        /*
            Greeting itu antara
                Good Morning
                Good Afternoon
                Good Evening
                Good Night
        */

        setTime(greeting);
    },[])}

    return (
        <>
            <MobileNews />
            {time == "Good Morning" ? <img src={BGPagi} className="background-image"/> : ""}
            {time == "Good Afternoon" ? <img src={BGSiang} className="background-image"/> : ""}
            {time == "Good Evening" ? <img src={BGSiang} className="background-image"/> : ""}
            {time == "Good Night" ? <img src={BGMalam} className="background-image"/> : ""}
            
            <Time name={props.name}/>
            <h1>ini major {props.major}</h1>
            <img src={Images[props.character].url} />
            <Bar action={study} name="Lawsen" onClick={handleStudy}/>
        </>
        </>
    );
}

export default Game;