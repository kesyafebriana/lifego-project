import React, { useState, useEffect } from 'react';
import Time from "./components/Time";
import Bar from "./components/Bar";
import './Game.css';
import Images from './components/Images';
import { Link } from 'react-router-dom';
import Button from "./components/button";
import News from "./components/News";
import BtnGame from "./components/BtnGame1";

const WEATHER_API="https://api.openweathermap.org/data/2.5/weather?lat=-6.24099652174&lon=106.631889&appid=b43f5f6f6fc6d9ec445455aa52d344f2";
const NEWS_API="https://newsapi.org/v2/top-headlines?country=us&apiKey=f4fed20443dc4cbdb40befd9f68c3587";

function Game(props) {
    const [eat, setEat] = useState(0);
    const [study, setStudy] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [play, setPlay] = useState(0);
    const index=1;
    const [weather, setWeather] = useState([]);
    const [news, setNews] = useState([]);

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

    // useEffect(()=>{
    //     fetch(WEATHER_API)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setWeather(data.results);
    //     });
    // },[]);

    useEffect(()=>{
        fetch(NEWS_API)
        .then((res)=>res.json())
        .then((data)=>{
            setNews(data.articles[index]);
        });
    },[]);

    const tempat = () => {
        
    };

    return (
        <>
            <Time name={props.name}/>
            <h1>ini major {props.major}</h1>
            <img src={Images[props.character].url} />
            {/* <Bar action={study} name="Study" onClick={handleStudy}/> */}
            {/* <News key={news} {...news}/> */}
            <BtnGame tempat={tempat} />
        </>
    );
}

export default Game;