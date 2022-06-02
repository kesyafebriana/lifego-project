import React, { useState, useEffect } from 'react';
import Time from "./components/Time";
import Bar from "./components/Bar";
import BtnBar from './components/BtnBar';
import MobileNews from "./components/MobileNews";
import './Game.css';
import Images from './components/Images';
import { Link } from 'react-router-dom';
import Button from "./components/button";
import News from "./components/News";
import BtnGame from "./components/BtnGame";
import WeatherBg from "./assets/weather.png";
import BGSiang from "./assets/siangUMN.png";
import BGPagi from "./assets/pagiUMN.png";
import BGMalam from "./assets/malamUMN.png";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?lat=-6.24099652174&lon=106.631889&appid=b43f5f6f6fc6d9ec445455aa52d344f2";

function Game(props) {
    const [eat, setEat] = useState(0);
    const [study, setStudy] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [play, setPlay] = useState(0);
    const index = 1;
    const [weather, setWeather] = useState();
    const [news, setNews] = useState([]);
    const [temp, setTemp] = useState();
    const [tempat, setTempat] = useState(1);
    const [place, setPlace] = useState("@Home");
    const [time, setTime] = useState("");
    const [timebella, setTimebella] = useState({ ms: 0, s: 0, m: 0, h: 0 });

    // useEffect(() => {
    //     console.log(timebella);
    // }, [timebella]);

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

    function handleTimebella(timeget) {
        setTimebella(timeget);
    }

    function handleHome() {
        setTempat(1);
        setPlace("@Home");
    }

    function handleCampus() {
        setTempat(2);
        setPlace("@Campus");
    }

    function handleLibro() {
        setTempat(3);
        setPlace("@Libro");
    }

    function handleLawsen() {
        setTempat(4);
        setPlace("@Lawsen");
    }

    useEffect(() => {
        fetch(WEATHER_API)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data.main.temp / 10);
                setTemp(Math.round(weather));
            });
    }, []);

    useEffect(() => {
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
        console.log(greeting);
    }, [])

    return (
        <>
            <MobileNews />
            <div>
                {time === "Good Morning" ? <img alt=' ' src={BGPagi} className="background-image" /> : ""}
                {time === "Good Afternoon" ? <img alt=' ' src={BGSiang} className="background-image" /> : ""}
                {time === "Good Evening" ? <img alt=' ' src={BGSiang} className="background-image" /> : ""}
                {time === "Good Night" ? <img alt=' ' src={BGMalam} className="background-image" /> : ""}
            </div>


            <Time name={props.name} />
            <div className="weatherCs">
                <h1 className="weatherStyle">{temp}&#176;C</h1>
                <img className="weatherBg" src={WeatherBg} />
            </div>
            {/* <h1>ini major {props.major}</h1>
            <img src={Images[props.character].url} /> */}

            <div id='setBar' className='row mt-lg-5'>
                <div className='col-2'></div>
                <Bar action={eat} img={Images[1].logo[0].url} />
                <Bar action={study} img={Images[1].logo[2].url} />
                <Bar action={sleep} img={Images[1].logo[3].url} />
                <Bar action={play} img={Images[1].logo[1].url} />
                <div className='col-2'></div>
            </div>
            <h1>{place}</h1>
            <div className='row'>
                <div className='bgImg'>
                    <div className='col setBtn'>
                        {(tempat === 1) ?
                            <div>
                                <BtnBar name="Campus" onClick={handleCampus} />
                                <BtnBar name="Libro" onClick={handleLibro} />
                                <BtnBar name="Lawsen" onClick={handleLawsen} />
                            </div> : ""
                        }
                        {(tempat === 2) ?
                            <div>
                                <BtnBar name="Home" onClick={handleHome} />
                                <BtnBar name="Libro" onClick={handleLibro} />
                                <BtnBar name="Lawsen" onClick={handleLawsen} />
                            </div> : ""
                        }
                        {(tempat === 3) ?
                            <div>
                                <BtnBar name="Home" onClick={handleHome} />
                                <BtnBar name="Campus" onClick={handleCampus} />
                                <BtnBar name="Lawsen" onClick={handleLawsen} />
                            </div> : ""
                        }
                        {(tempat === 4) ?
                            <div>
                                <BtnBar name="Home" onClick={handleHome} />
                                <BtnBar name="Campus" onClick={handleCampus} />
                                <BtnBar name="Libro" onClick={handleLibro} />
                            </div> : ""
                        }
                    </div>
                </div>
                <div className='bgImg' id='bgImgTwo'>
                    <div className='col setBtn'>
                        {(tempat === 1) ?
                            <div>
                                <BtnBar name="Eat" onClick={handleEat} />
                                <BtnBar name="Sleep" onClick={handleSleep} />
                                <BtnBar name="Play" onClick={handlePlay} />
                            </div> : ""
                        }
                        {(tempat === 2) ?
                            <div>
                                <BtnBar name="Eat" onClick={handleEat} />
                                <BtnBar name="Study" onClick={handleStudy} />
                                <BtnBar name="Play" onClick={handlePlay} />
                            </div> : ""
                        }
                        {(tempat === 3) ?
                            <div>
                                <BtnBar name="Eat" onClick={handleEat} />
                                <BtnBar name="Drink" onClick={handleEat} />
                                <BtnBar name="Chitchat" onClick={handlePlay} />
                            </div> : ""
                        }
                        {(tempat === 4) ?
                            <div>
                                <BtnBar name="Eat" onClick={handleEat} />
                                <BtnBar name="Study" onClick={handleStudy} />
                                <BtnBar name="Chitchat" onClick={handlePlay} />
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;