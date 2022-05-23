import React, { useState, useEffect } from 'react';
import Button from "./components/button";
import PopUpButton from "./components/popUpButton";
import Profile from "./assets/popUpTeam.png";
import QMark from "./assets/popUpQMark.png";
import InputName from './components/InputName';
import InputMajor from './components/InputMajor';
import GameGuideBackground from "./assets/gameGuide.png";
import CloseButton from "./assets/tombol-close.png";
import GameGuide from './components/GameGuide';
import AboutUs from "./components/AboutUs";
import AboutUsBackground from "./assets/aboutUs.png";
import './App.css';


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    } 

    const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);
    const togglePopupAboutUs = () => {
        setIsOpenAboutUs(!isOpenAboutUs);
    } 

    return (
        <>
            <Button item="START"/>

            <PopUpButton pict={Profile} handleClick = {togglePopupAboutUs} />
            {isOpenAboutUs && <AboutUs closeButton={CloseButton} pict={AboutUsBackground} handleClose={togglePopupAboutUs}/>}
            
            <PopUpButton pict={QMark} handleClick = {togglePopup} />
            {isOpen && <GameGuide closeButton={CloseButton} pict={GameGuideBackground} handleClose={togglePopup}/>}
        </>
    );
}

export default App;