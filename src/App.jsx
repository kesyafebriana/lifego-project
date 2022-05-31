import React, { useState, useEffect } from 'react';
import Button from "./components/button";
import PopUpButton from "./components/popUpButton";
import Profile from "./assets/popUpTeam.png";
import QMark from "./assets/popUpQMark.png";
import InputName from './components/InputName';
import InputMajor from './components/InputMajor';
import ChooseChar from './components/ChooseChar';
import Images from './components/Images';
import Logo from "./assets/logofix.png";
import GameGuideBackground from "./assets/gameGuide.png";
import CloseButton from "./assets/tombol-close.png";
import GameGuide from './components/GameGuide';
import AboutUs from "./components/AboutUs";
import AboutUsBackground from "./assets/aboutUs.png";
import { Link } from 'react-router-dom';

function App(props) {
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
            <div className="gameGuideButton">
                <PopUpButton pict={QMark} handleClick={togglePopup} />
                {isOpen && <GameGuide closeButton={CloseButton} pict={GameGuideBackground} handleClose={togglePopup} />}
            </div>
            <div className="aboutUsButton">
                <PopUpButton pict={Profile} handleClick={togglePopupAboutUs} />
                {isOpenAboutUs && <AboutUs closeButton={CloseButton} pict={AboutUsBackground} handleClose={togglePopupAboutUs} />}
            </div>
            <div className="logo">
                <img width="27%" src={Logo} />
            </div>
            <ChooseChar character={props.character} slides={Images[0].normal} />
            <div className="input col">
                <InputName nameget={props.name} />
                <InputMajor majorget={props.major} />
            </div>
            <div className="logoStart">
                <Link to="/Game"><Button item="START" /></Link>
            </div>
        </>
    );
}

export default App;