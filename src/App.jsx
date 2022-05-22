import React, { useState, useEffect } from 'react';
import Button from "./components/button";
import PopUpButton from "./components/popUpButton";
import Profile from "./assets/popUpTeam.png";
import QMark from "./assets/popUpQMark.png";
import './App.css';

function App() {

    return (
    <>
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