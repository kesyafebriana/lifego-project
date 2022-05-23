import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Button from "./components/button";
import PopUpButton from "./components/popUpButton";
import Profile from "./assets/popUpTeam.png";
import QMark from "./assets/popUpQMark.png";
import InputName from './components/InputName';
import InputMajor from './components/InputMajor';
import ChooseChar from './ChooseChar';
import Logo from "./assets/logofix.png";
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

    const toGame = () => {
        ReactDOM.render(<Game />, document.getElementById('root'));
    } 

    return (
        <>
            
            <div className="gameGuideButton">
                <PopUpButton pict={QMark} handleClick = {togglePopup} />
                {isOpen && <GameGuide closeButton={CloseButton} pict={GameGuideBackground} handleClose={togglePopup}/>}
            </div>
            <div className="aboutUsButton">
                <PopUpButton pict={Profile} handleClick = {togglePopupAboutUs} />
                {isOpenAboutUs && <AboutUs closeButton={CloseButton} pict={AboutUsBackground} handleClose={togglePopupAboutUs}/>}
            </div>
            <div className="logo">
                <img width="27%" src={Logo} />
            </div>
            {/* <ChooseChar />  */}
            <div className="input">
                <InputName />
                <InputMajor /> 
            </div>
            <div className="logoStart">
                <Button 
                    item="START"
                    click={toGame}
                />
            </div>
        </>
    );
}

export default App;