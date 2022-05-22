import React, { useState, useEffect } from 'react';
import Button from "./components/button";
import PopUpButton from "./components/popUpButton";
import Clock from "./components/clock";
import Profile from "./assets/popUpTeam.png";
import QMark from "./assets/popUpQMark.png";
import './App.css';


function App() {
    const [timeDays, setTimeDays] = useState();
    const [timeHours, setTimeHours] = useState();
    const [timeMinutes, setTimeMinutes] = useState();
    const [timeSeconds, setTimeSeconds] = useState();

    let interval;

    const startTime=()=>{
        const date= new Date("May 8, 2021 ").getTime();

        interval=setInterval(()=>{
            const now = new Date("May 1, 2021 ").getTime();

            const distance = 3;

            const day = Math.floor(distance/(24*60*60*1000));
            const hour = Math.floor(distance/(24*60*60*1000)/(1000*60*60));
            const minute = Math.floor(distance/(24*60*60*1000)/(1000*60));
            const second = Math.floor(distance/(24*60*60*1000)/(1000));
            
            if(distance<0){
                clearInterval(interval.current);
            } else {
                // Keep Update
                setTimeDays(day);
                setTimeHours(hour);
                setTimeMinutes(minute);
                setTimeSeconds(second);
            }
        });
    };

    useEffect(() => {
        startTime();
    })
    return (
    <>
        <Clock 
            timeDays={timeDays}
            timeHours={timeHours}
            timeMinutes={timeMinutes}
            timeSeconds={timeSeconds}
        />
        <Button 
            item="START"
        />
        <br/>
        <br/>
        <PopUpButton 
            pict={Profile}
        />
        <br/>
        <PopUpButton 
            pict={QMark}
        />
    </>
    );
}

export default App;