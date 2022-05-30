import React, { useState, useEffect } from "react";
import DisplayTime from "./DisplayTime";
import News from "./News";
import BtnPauseResume from "./BtnPauseResume";

const WEATHER_API="https://api.openweathermap.org/data/2.5/weather?lat=-6.24099652174&lon=106.631889&appid=b43f5f6f6fc6d9ec445455aa52d344f2";
const NEWS_API="https://newsapi.org/v2/top-headlines?country=us&apiKey=f4fed20443dc4cbdb40befd9f68c3587";

function Time() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const index=7;
  const [weather, setWeather] = useState([]);
  const [news, setNews] = useState([]);
  const [berita, setBerita] = useState([]);

  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 24) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
      index+=1;
      setBerita(news.articles[index]);
      console.log(index);
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resume = () => start();

  if (status === 0) {
    start();
  }

  if (time.h === 8) {
    console.log("Blabla" + time.h);
    clearInterval(interv);
    setStatus(0);
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
            setNews(data);
            setBerita(news.articles[index]);
        });
    },[]);

  return (
    <>
      <div>
        <BtnPauseResume status={status} resume={resume} stop={stop} />
      </div>
      <div className="time">
        <DisplayTime time={time} />
      </div>
      <News key={berita} {...berita}/>  
    </>
  );
}

export default Time;
