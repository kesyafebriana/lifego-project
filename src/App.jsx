import React, { useState, useEffect } from 'react';
import Button from "./components/button";
import PopUpButton from "./components/popUpButton";
import Profile from "./assets/popUpTeam.png";
import QMark from "./assets/popUpQMark.png";
import InputName from './components/InputName';
import './App.css';

function App() {

    return (
    <>
        <Button 
            item="START"
        />
        <PopUpButton 
            pict={Profile}
        />
        <PopUpButton 
            pict={QMark}
        />
        <InputName />
    </>
    );
}

export default App;