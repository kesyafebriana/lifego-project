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
import BG1Malam from "./assets/bg1malam.png";
import BG1MalamHujan from "./assets/bg1malamhujan.png";
import BG1Pagi from "./assets/bg1pagi.png";
import BG1PagiHujan from "./assets/bg1pagihujan.png";
import BG1SiangSore from "./assets/bg1sore.png";
import BG1SiangHujan from "./assets/bg1sorehujan.png";
import BG2Malam from "./assets/bg2malam.png";
import BG2MalamHujan from "./assets/bg2malamhujan.png";
import BG2Pagi from "./assets/bg2pagi.png";
import BG2PagiHujan from "./assets/bg2pagihujan.png";
import BG2SiangSore from "./assets/bg2siangsore.png";
import BG2SiangHujan from "./assets/bg2sianghujan.png";
import BG3 from "./assets/bg3.png";
import BG4 from "./assets/bg4.png";
import BG6 from "./assets/bg6.png";
import BG7 from "./assets/bg7.png";
import BG8 from "./assets/bg8.png";
import BG9 from "./assets/bg9.png";
import BG10 from "./assets/bg10.png";
import Rapot from './Rapot';
import Majors from './components/Majors';

import informatikaSenin from "./assets/matkul/Informatika/informatikaSenin.png";
import informatikaSelasa from "./assets/matkul/Informatika/informatikaSelasa.png";
import informatikaRabu from "./assets/matkul/Informatika/informatikaRabu.png";
import informatikaKamis from "./assets/matkul/Informatika/informatikaSenin.png";
import informatikaJumat from "./assets/matkul/Informatika/informatikaSelasa.png";
import informatikaSabtu from "./assets/matkul/sabtuMinggu.png";
import informatikaMinggu from "./assets/matkul/sabtuMinggu.png";

import akuntansiSenin from "./assets/matkul/Akuntansi/akuntansiSenin.png";
import akuntansiSelasa from "./assets/matkul/Akuntansi/akuntansiSelasa.png";
import akuntansiRabu from "./assets/matkul/Akuntansi/akuntansiRabu.png";
import akuntansiKamis from "./assets/matkul/Akuntansi/akuntansiSenin.png";
import akuntansiJumat from "./assets/matkul/Akuntansi/akuntansiSelasa.png";
import akuntansiSabtu from "./assets/matkul/sabtuMinggu.png";
import akuntansiMinggu from "./assets/matkul/sabtuMinggu.png";

import arsitekturSenin from "./assets/matkul/Arsitektur/arsitekturSenin.png";
import arsitekturSelasa from "./assets/matkul/Arsitektur/arsitekturSelasa.png";
import arsitekturRabu from "./assets/matkul/Arsitektur/arsitekturRabu.png";
import arsitekturKamis from "./assets/matkul/Arsitektur/arsitekturSenin.png";
import arsitekturJumat from "./assets/matkul/Arsitektur/arsitekturSelasa.png";
import arsitekturSabtu from "./assets/matkul/sabtuMinggu.png";
import arsitekturMinggu from "./assets/matkul/sabtuMinggu.png";

import DKVSenin from "./assets/matkul/DKV/DKVSenin.png";
import DKVSelasa from "./assets/matkul/DKV/DKVSelasa.png";
import DKVRabu from "./assets/matkul/DKV/DKVRabu.png";
import DKVKamis from "./assets/matkul/DKV/DKVSenin.png";
import DKVJumat from "./assets/matkul/DKV/DKVSelasa.png";
import DKVSabtu from "./assets/matkul/sabtuMinggu.png";
import DKVMinggu from "./assets/matkul/sabtuMinggu.png";

import filmSenin from "./assets/matkul/Film/filmSenin.png";
import filmSelasa from "./assets/matkul/Film/filmSelasa.png";
import filmRabu from "./assets/matkul/Film/filmRabu.png";
import filmKamis from "./assets/matkul/Film/filmSenin.png";
import filmJumat from "./assets/matkul/Film/filmSelasa.png";
import filmSabtu from "./assets/matkul/sabtuMinggu.png";
import filmMinggu from "./assets/matkul/sabtuMinggu.png";

import jurnalistikSenin from "./assets/matkul/Jurnalistik/jurnalistikSenin.png";
import jurnalistikSelasa from "./assets/matkul/Jurnalistik/jurnalistikSelasa.png";
import jurnalistikRabu from "./assets/matkul/Jurnalistik/jurnalistikRabu.png";
import jurnalistikKamis from "./assets/matkul/Jurnalistik/jurnalistikSenin.png";
import jurnalistikJumat from "./assets/matkul/Jurnalistik/jurnalistikSelasa.png";
import jurnalistikSabtu from "./assets/matkul/sabtuMinggu.png";
import jurnalistikMinggu from "./assets/matkul/sabtuMinggu.png";

import managemenSenin from "./assets/matkul/Managemen/managemenSenin.png";
import managemenSelasa from "./assets/matkul/Managemen/managemenSelasa.png";
import managemenRabu from "./assets/matkul/Managemen/managemenRabu.png";
import managemenKamis from "./assets/matkul/Managemen/managemenSenin.png";
import managemenJumat from "./assets/matkul/Managemen/managemenSelasa.png";
import managemenSabtu from "./assets/matkul/sabtuMinggu.png";
import managemenMinggu from "./assets/matkul/sabtuMinggu.png";

import SISenin from "./assets/matkul/SI/SISenin.png";
import SISelasa from "./assets/matkul/SI/SISelasa.png";
import SIRabu from "./assets/matkul/SI/SIRabu.png";
import SIKamis from "./assets/matkul/SI/SISenin.png";
import SIJumat from "./assets/matkul/SI/SISelasa.png";
import SISabtu from "./assets/matkul/sabtuMinggu.png";
import SIMinggu from "./assets/matkul/sabtuMinggu.png";

import teknikElektroSenin from "./assets/matkul/TeknikElektro/teknikElektroSenin.png";
import teknikElektroSelasa from "./assets/matkul/TeknikElektro/teknikElektroSelasa.png";
import teknikElektroRabu from "./assets/matkul/TeknikElektro/teknikElektroRabu.png";
import teknikElektroKamis from "./assets/matkul/TeknikElektro/teknikElektroSenin.png";
import teknikElektroJumat from "./assets/matkul/TeknikElektro/teknikElektroSelasa.png";
import teknikElektroSabtu from "./assets/matkul/sabtuMinggu.png";
import teknikElektroMinggu from "./assets/matkul/sabtuMinggu.png";

import teknikKomputerSenin from "./assets/matkul/TeknikKomputer/teknikKomputerSenin.png";
import teknikKomputerSelasa from "./assets/matkul/TeknikKomputer/teknikKomputerSelasa.png";
import teknikKomputerRabu from "./assets/matkul/TeknikKomputer/teknikKomputerRabu.png";
import teknikKomputerKamis from "./assets/matkul/TeknikKomputer/teknikKomputerSenin.png";
import teknikKomputerJumat from "./assets/matkul/TeknikKomputer/teknikKomputerSelasa.png";
import teknikKomputerSabtu from "./assets/matkul/sabtuMinggu.png";
import teknikKomputerMinggu from "./assets/matkul/sabtuMinggu.png";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?lat=-6.24099652174&lon=106.631889&appid=b43f5f6f6fc6d9ec445455aa52d344f2";

function Game(props) {
    const [eat, setEat] = useState(50);
    const [study, setStudy] = useState(0);
    const [sleep, setSleep] = useState(50);
    const [play, setPlay] = useState(50);
    const [weather, setWeather] = useState();
    const [temp, setTemp] = useState();
    const [tempat, setTempat] = useState(1);
    const [place, setPlace] = useState("@Home");
    const [time, setTime] = useState("");
    const [hari, setHari] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [timeK, setTimeK] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [bg, setBg] = useState(0);
    const [waktu, setWaktu] = useState("");
    const [actionChar, SetActionChar] = useState(Images[0].normal[props.character].url);
    const [uangJajan, setUangJajan] = useState(500000);

    function handleEat() {
        setEat(eat + 10);
        setSleep(sleep - 5);
        SetActionChar(Images[2].makan[props.character].url);

        if (tempat === 2 || tempat === 5 || tempat === 7 || tempat === 8) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }

        if (tempat === 4 || tempat===3){
            setUangJajan(uangJajan-10000);
        }
    }

    function handleStudy() {
        setStudy(study + 10);
        setSleep(sleep - 5);
        setPlay(play - 5);
        SetActionChar(Images[4].belajar[props.character].url);

        if (tempat === 2 || tempat === 5 || tempat === 7 || tempat === 8) { //di kampus & lagi belajar
            let img = document.querySelector(".matkul");
            img.style.display = "inline-block";

            //AKUNTANSI
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiSenin }.akuntansiSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiSelasa }.akuntansiSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiRabu }.akuntansiRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiKamis }.akuntansiKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiJumat }.akuntansiJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiSabtu }.akuntansiSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = { akuntansiMinggu }.akuntansiMinggu;
            }

            //Arsitektur
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturSenin }.arsitekturSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturSelasa }.arsitekturSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturRabu }.arsitekturRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturKamis }.arsitekturKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturJumat }.arsitekturJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturSabtu }.arsitekturSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = { arsitekturMinggu }.arsitekturMinggu;
            }

            //DKV
            if (hari === "Senin" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVSenin }.DKVSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVSelasa }.DKVSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVRabu }.DKVRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVKamis }.DKVKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVJumat }.DKVJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVSabtu }.DKVSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "DKV") {
                img.src = { DKVMinggu }.DKVMinggu;
            }


            //Film
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmSenin }.filmSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmSelasa }.filmSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmRabu }.filmRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmKamis }.filmKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmJumat }.filmJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmSabtu }.filmSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Film") {
                img.src = { filmMinggu }.filmMinggu;
            }

            //Informatika
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaSenin }.informatikaSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaSelasa }.informatikaSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaRabu }.informatikaRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaKamis }.informatikaKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaJumat }.informatikaJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaSabtu }.informatikaSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = { informatikaMinggu }.informatikaMinggu;
            }

            //Jurnalistik
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikSenin }.jurnalistikSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikSelasa }.jurnalistikSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikRabu }.jurnalistikRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikKamis }.jurnalistikKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikJumat }.jurnalistikJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikSabtu }.jurnalistikSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = { jurnalistikMinggu }.jurnalistikMinggu;
            }

            //Manajemen
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenSenin }.managemenSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenSelasa }.managemenSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenRabu }.managemenRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenKamis }.managemenKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenJumat }.managemenJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenSabtu }.managemenSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = { managemenMinggu }.managemenMinggu;
            }

            //Sistem Informasi
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SISenin }.SISenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SISelasa }.SISelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SIRabu }.SIRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SIKamis }.SIKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SIJumat }.SIJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SISabtu }.SISabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = { SIMinggu }.SIMinggu;
            }

            //Teknik Elektro
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroSenin }.teknikElektroSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroSelasa }.teknikElektroSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroRabu }.teknikElektroRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroKamis }.teknikElektroKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroJumat }.teknikElektroJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroSabtu }.teknikElektroSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = { teknikElektroMinggu }.teknikElektroMinggu;
            }

            //Teknik Komputer
            if (hari === "Senin" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerSenin }.teknikKomputerSenin;
            } else if (hari === "Selasa" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerSelasa }.teknikKomputerSelasa;
            } else if (hari === "Rabu" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerRabu }.teknikKomputerRabu;
            } else if (hari === "Kamis" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerKamis }.teknikKomputerKamis;
            } else if (hari === "Jumat" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerJumat }.teknikKomputerJumat;
            } else if (hari === "Sabtu" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerSabtu }.teknikKomputerSabtu;
            } else if (hari === "Minggu" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = { teknikKomputerMinggu }.teknikKomputerMinggu;
            }
        }
    }

    function handleSleep() {
        setSleep(sleep + 10);
        setStudy(study - 5);
        SetActionChar(Images[5].tidur[props.character].url);
    }

    function handlePlay() {
        setPlay(play + 10);
        setEat(eat - 5);
        setSleep(sleep - 5);
        SetActionChar(Images[3].game[props.character].url);

        if (tempat === 2 || tempat === 5 || tempat === 7 || tempat === 8) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }
    }

    function handleDrink() {
        setEat(eat + 10);
        setSleep(sleep - 5);
        SetActionChar(Images[6].minum[props.character].url);

        if (tempat === 2 || tempat === 5 || tempat === 7 || tempat === 8) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }

        if (tempat === 4 || tempat===3){
            setUangJajan(uangJajan-5000);
        }
    }

    function handleChat() {
        setPlay(play + 10);
        setSleep(sleep - 5);
        setStudy(study - 5);
        SetActionChar(Images[9].ngobrol[props.character].url);

        if (tempat === 2 || tempat === 5 || tempat === 7 || tempat === 8) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }
    }

    function handleCook() {
        setEat(eat + 10);
        setSleep(sleep - 5);
        SetActionChar(Images[7].masak[props.character].url);
    }

    function handleHome() {
        setTempat(1);
        setPlace("@Home");
    }

    function handleCampus() {
        setTempat(2);
        setPlace("@UMN");
    }

    function handleLibro() {
        setTempat(3);
        setPlace("@Libro");
    }

    function handleLawsen() {
        setTempat(4);
        setPlace("@Lawsen");
    }

    function handleInsideCampus() {
        setTempat(5);
        setPlace("@At UMN");
    }

    function handleInsideHome() {
        setTempat(6);
        setPlace("@At Home");
    }

    function handleLibrary() {
        setTempat(7);
        setPlace("@Library");
    }

    function handleClass() {
        setTempat(8);
        setPlace("@Class");
    }

    function handleKitchen() {
        setTempat(9);
        setPlace("@Kitchen");
    }

    function handleBedroom() {
        setTempat(10);
        setPlace("@Bedroom");
    }

    useEffect(() => {
        if (tempat != 2) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }
        console.log(tempat);
    }, [tempat])

    useEffect(() => {
        fetch(WEATHER_API)
            .then((res) => res.json())
            .then((data) => {
                setTemp(Math.round(data.main.temp / 10));
                setWeather(data.weather[0].main);
                console.log("weather" + weather);
            });
    },[]);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatedMs = timeK.ms,
        updatedS = timeK.s,
        updatedM = timeK.m,
        updatedH = timeK.h;

    const run = () => {
        if (updatedM === 24) {
        updatedH++;
        updatedM = 0;
        }
        if (updatedS === 60) {
        updatedM++;
        updatedS = 0;
        }
        if (updatedMs === 100) {
        updatedS++;
        updatedMs = 0;
        }
        updatedMs++;
        return setTimeK({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    if (status === 0) {
        start();
    }

    useEffect(() => {
        let hari = document.querySelector(".timeClock");
        hari = hari.innerHTML;
        hari = hari.split(" ");
        hari = hari[0]

        setJurusan(localStorage.getItem("jurusan"));
        setHari(hari);
        console.log(localStorage.getItem("jurusan"));
    }, [timeK.h])

    useEffect(()=> {
        // let waktu = document.querySelector(".timeClock");
        // waktu = waktu.innerHTML;
        // waktu = waktu.split(" - ");
        // waktu = waktu[1]

        let waktu = timeK.m;

        setWaktu(waktu);
        console.log("waktu" + waktu);
        setPlay(play - 10);
        setSleep(sleep - 10);
        setStudy(study - 10);
        setEat(eat - 10);
    },[timeK.m])

    return (
        <div id='gamepage'>
            <MobileNews />
            <div className='row'>

                {/* Kuliah (Ada indikator cuaca) */}
                {(tempat === 2 || tempat === 5) && (waktu >= 5 && waktu <= 11) ? <img alt=' ' src={BG2Pagi} className="background-image" /> : ""}
                {(tempat === 2 || tempat === 5) && (waktu > 11 && waktu <= 19) ? <img alt=' ' src={BG2SiangSore} className="background-image" /> : ""}
                {(tempat === 2 || tempat === 5 )&& ((waktu > 19 && waktu <= 24) || (waktu >= 0 && waktu <5))? <img alt=' ' src={BG2Malam} className="background-image" /> : ""}

                {weather === "rain" && (tempat === 2 || tempat === 5) && (waktu >= 5 && waktu <= 11) ? <img alt=' ' src={BG2PagiHujan} className="background-image" /> : ""}
                {weather === "rain" && (tempat === 2 || tempat === 5 )&& (waktu > 11 && waktu <= 19) ? <img alt=' ' src={BG2SiangHujan} className="background-image" /> : ""}
                {weather === "rain" && (tempat === 2 || tempat === 5) && ((waktu > 19 && waktu <= 24) || (waktu >= 0 && waktu <5)) ? <img alt=' ' src={BG2MalamHujan} className="background-image" /> : ""}

                {/* Luar Rumah (Ada indikator cuaca) */}
                {tempat === 1 && weather !== "rain" && (waktu >= 5 && waktu <= 11)? <img alt=' ' src={BG1Pagi} className="background-image" /> : ""}
                {tempat === 1 && weather !== "rain" && (waktu > 11 && waktu <= 19) ? <img alt=' ' src={BG1SiangSore} className="background-image" /> : ""}
                {tempat === 1 && weather !== "rain" && ((waktu > 19 && waktu <= 24) || (waktu >= 0 && waktu <5))? <img alt=' ' src={BG1Malam} className="background-image" /> : ""}

                {weather === "rain" && tempat === 1 && (waktu >= 5 && waktu <= 11) ? <img alt=' ' src={BG1PagiHujan} className="background-image" /> : ""}
                {weather === "rain" && tempat === 1 && (waktu > 11 && waktu <= 19) ? <img alt=' ' src={BG1SiangHujan} className="background-image" /> : ""}
                {weather === "rain" && tempat === 1 && ((waktu > 19 && waktu <= 24) || (waktu >= 0 && waktu <5))? <img alt=' ' src={BG1MalamHujan} className="background-image" /> : ""}

                {/* Libro Cafe (Tidak ada indikator cuaca & waktu) */}
                {tempat === 3 ? <img alt=' ' src={BG3} className="background-image" /> : ""}

                {/* Lawsen (Tidak ada indikator cuaca & waktu) */}
                {tempat === 4 ? <img alt=' ' src={BG4} className="background-image" /> : ""}

                {/* Dalem Rumah (Cuma jam aja karena tidak ada indikator cuaca dan waktu) */}
                {tempat === 6 ? <img alt=' ' src={BG6} className="background-image" /> : ""}
                {tempat === 7 ? <img alt=' ' src={BG7} className="background-image" /> : ""}
                {tempat === 8 ? <img alt=' ' src={BG8} className="background-image" /> : ""}
                {tempat === 9 ? <img alt=' ' src={BG9} className="background-image" /> : ""}
                {tempat === 10 ? <img alt=' ' src={BG10} className="background-image" /> : ""}

                <div id='setBar' className='row'>
                    <div className='col'></div>
                    <Bar action={eat} img={Images[1].logo[0].url} />
                    <Bar action={study} img={Images[1].logo[2].url} />
                    <Bar action={sleep} img={Images[1].logo[3].url} />
                    <Bar action={play} img={Images[1].logo[1].url} />
                    <div className='col'></div>
                </div>

                <div className='row'>

                    <div className='col'>
                        <div className='bgImg'>
                            <h1 className='place' id='place1'>Go To</h1>
                            <div className='col setBtn'>
                                {(tempat === 1) ?
                                    <div>
                                        <BtnBar name="UMN" onClick={handleCampus} />
                                        <BtnBar name="Lawsen" onClick={handleLawsen} />
                                        <BtnBar name="Go Inside" onClick={handleInsideHome} />
                                    </div> : ""
                                }
                                {(tempat === 2) ?
                                    <div>
                                        <BtnBar name="Home" onClick={handleHome} />
                                        <BtnBar name="Libro" onClick={handleLibro} />
                                        <BtnBar name="Go Inside" onClick={handleInsideCampus} />
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
                                {/* inside umn */}
                                {(tempat === 5) ?
                                    <div>
                                        <BtnBar name="Library" onClick={handleLibrary} />
                                        <BtnBar name="Class" onClick={handleClass} />
                                        <BtnBar name="Exit" onClick={handleCampus} />
                                    </div> : ""
                                }
                                {/* inside home */}
                                {(tempat === 6) ?
                                    <div>
                                        <BtnBar name="Kitchen" onClick={handleKitchen} />
                                        <BtnBar name="Bedroom" onClick={handleBedroom} />
                                        <BtnBar name="Exit" onClick={handleHome} />
                                    </div> : ""
                                }
                                {/* inside library */}
                                {(tempat === 7) ?
                                    <div>
                                        <div className='invisible'>
                                            <BtnBar name="Library" onClick={handleLibrary} />
                                        </div>
                                        <BtnBar name="Exit" onClick={handleInsideCampus} />
                                        <div className='invisible'>
                                            <BtnBar name="Class" onClick={handleClass} />
                                        </div>
                                    </div> : ""
                                }
                                {/* inside class */}
                                {(tempat === 8) ?
                                    <div>
                                        <div className='invisible'>
                                            <BtnBar name="Library" onClick={handleLibrary} />
                                        </div>
                                        <BtnBar name="Exit" onClick={handleInsideCampus} />
                                        <div className='invisible'>
                                            <BtnBar name="Class" onClick={handleClass} />
                                        </div>
                                    </div> : ""
                                }
                                {/* inside kitchen */}
                                {(tempat === 9) ?
                                    <div>
                                        <div className='invisible'>
                                            <BtnBar name="Kitchen" onClick={handleKitchen} />
                                        </div>
                                        <BtnBar name="Exit" onClick={handleInsideHome} />
                                        <div className='invisible'>
                                            <BtnBar name="Bedroom" onClick={handleBedroom} />
                                        </div>
                                    </div> : ""
                                }
                                {/* inside bedroom */}
                                {(tempat === 10) ?
                                    <div>
                                        <div className='invisible'>
                                            <BtnBar name="Kitchen" onClick={handleKitchen} />
                                        </div>
                                        <BtnBar name="Exit" onClick={handleInsideHome} />
                                        <div className='invisible'>
                                            <BtnBar name="Bedroom" onClick={handleBedroom} />
                                        </div>
                                    </div> : ""
                                }
                            </div>
                        </div>
                        <div className='bgImg'>
                            <h1 className='place'>{place}</h1>
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
                                        <BtnBar name="Drink" onClick={handleDrink} />
                                        <BtnBar name="Chitchat" onClick={handleChat} />
                                    </div> : ""
                                }
                                {(tempat === 4) ?
                                    <div>
                                        <BtnBar name="Eat" onClick={handleEat} />
                                        <BtnBar name="Study" onClick={handleStudy} />
                                        <BtnBar name="Chitchat" onClick={handleChat} />
                                    </div> : ""
                                }
                                {/* inside UMN */}
                                {(tempat === 5) ?
                                    <div>
                                        <div className='invisible'>
                                            <BtnBar name="invisible" />
                                            <BtnBar name="invisible" />
                                            <BtnBar name="invisible" />
                                        </div>
                                    </div> : ""
                                }
                                {/* inside home */}
                                {(tempat === 6) ?
                                    <div>
                                        <div className='invisible'>
                                            <BtnBar name="invisible" />
                                            <BtnBar name="invisible" />
                                            <BtnBar name="invisible" />
                                        </div>
                                    </div> : ""
                                }
                                {(tempat === 7) ?
                                    <div>
                                        <BtnBar name="Study" onClick={handleStudy} />
                                        <BtnBar name="Drink" onClick={handleDrink} />
                                        <div className='invisible'>
                                            <BtnBar name="invisible" />
                                        </div>
                                    </div> : ""
                                }
                                {(tempat === 8) ?
                                    <div>
                                        <BtnBar name="Study" onClick={handleStudy} />
                                        <BtnBar name="Chitchat" onClick={handleChat} />
                                        <div className='invisible'>
                                            <BtnBar name="invisible" />
                                        </div>
                                    </div> : ""
                                }
                                {(tempat === 9) ?
                                    <div>
                                        <BtnBar name="Cook" onClick={handleCook} />
                                        <BtnBar name="Eat" onClick={handleEat} />
                                        <div className='invisible'>
                                            <BtnBar name="invisible" />
                                        </div>
                                    </div> : ""
                                }
                                {(tempat === 10) ?
                                    <div>
                                        <BtnBar name="Sleep" onClick={handleSleep} />
                                        <BtnBar name="Study" onClick={handleStudy} />
                                        <div className='invisible'>
                                            <BtnBar name="invisible" />
                                        </div>
                                    </div> : ""
                                }
                            </div>
                        </div>
                    </div>
                    <Time name={props.name} uangJajan={uangJajan}/>
                    <div className='col'></div>
                </div>

                <img id='char' src={actionChar} />

                {/* src={Images[0].normal[props.character].url} */}

                <div className="weatherCs col">
                    <h1 className="weatherStyle">{temp}&#176;C</h1>
                    <img className="weatherBg" src={WeatherBg} />
                </div>

                {/* Kalo pencet campus > study */}
                <img src="" className="matkul" />
            </div>

            {/* <Link to='/Rapot'><Button>rapot</Button></Link> */}
        </div>
    );
}

export default Game;