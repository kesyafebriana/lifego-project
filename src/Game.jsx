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
import Majors from './components/Majors';

import informatikaSenin     from "./assets/matkul/Informatika/informatikaSenin.png";
import informatikaSelasa    from "./assets/matkul/Informatika/informatikaSelasa.png";
import informatikaRabu      from "./assets/matkul/Informatika/informatikaRabu.png";
import informatikaKamis     from "./assets/matkul/Informatika/informatikaSenin.png";
import informatikaJumat     from "./assets/matkul/Informatika/informatikaSelasa.png";
import informatikaSabtu     from "./assets/matkul/sabtuMinggu.png";
import informatikaMinggu    from "./assets/matkul/sabtuMinggu.png";

import akuntansiSenin   from "./assets/matkul/Akuntansi/akuntansiSenin.png";
import akuntansiSelasa  from "./assets/matkul/Akuntansi/akuntansiSelasa.png";
import akuntansiRabu    from "./assets/matkul/Akuntansi/akuntansiRabu.png";
import akuntansiKamis   from "./assets/matkul/Akuntansi/akuntansiSenin.png";
import akuntansiJumat   from "./assets/matkul/Akuntansi/akuntansiSelasa.png";
import akuntansiSabtu   from "./assets/matkul/sabtuMinggu.png";
import akuntansiMinggu  from "./assets/matkul/sabtuMinggu.png";

import arsitekturSenin  from "./assets/matkul/Arsitektur/arsitekturSenin.png";
import arsitekturSelasa from "./assets/matkul/Arsitektur/arsitekturSelasa.png";
import arsitekturRabu   from "./assets/matkul/Arsitektur/arsitekturRabu.png";
import arsitekturKamis  from "./assets/matkul/Arsitektur/arsitekturSenin.png";
import arsitekturJumat  from "./assets/matkul/Arsitektur/arsitekturSelasa.png";
import arsitekturSabtu  from "./assets/matkul/sabtuMinggu.png";
import arsitekturMinggu from "./assets/matkul/sabtuMinggu.png";

import DKVSenin     from "./assets/matkul/DKV/DKVSenin.png";
import DKVSelasa    from "./assets/matkul/DKV/DKVSelasa.png";
import DKVRabu      from "./assets/matkul/DKV/DKVRabu.png";
import DKVKamis     from "./assets/matkul/DKV/DKVSenin.png";
import DKVJumat     from "./assets/matkul/DKV/DKVSelasa.png";
import DKVSabtu     from "./assets/matkul/sabtuMinggu.png";
import DKVMinggu    from "./assets/matkul/sabtuMinggu.png";

import filmSenin    from "./assets/matkul/Film/filmSenin.png";
import filmSelasa   from "./assets/matkul/Film/filmSelasa.png";
import filmRabu     from "./assets/matkul/Film/filmRabu.png";
import filmKamis    from "./assets/matkul/Film/filmSenin.png";
import filmJumat    from "./assets/matkul/Film/filmSelasa.png";
import filmSabtu    from "./assets/matkul/sabtuMinggu.png";
import filmMinggu   from "./assets/matkul/sabtuMinggu.png";

import jurnalistikSenin     from "./assets/matkul/Jurnalistik/jurnalistikSenin.png";
import jurnalistikSelasa    from "./assets/matkul/Jurnalistik/jurnalistikSelasa.png";
import jurnalistikRabu      from "./assets/matkul/Jurnalistik/jurnalistikRabu.png";
import jurnalistikKamis     from "./assets/matkul/Jurnalistik/jurnalistikSenin.png";
import jurnalistikJumat     from "./assets/matkul/Jurnalistik/jurnalistikSelasa.png";
import jurnalistikSabtu     from "./assets/matkul/sabtuMinggu.png";
import jurnalistikMinggu    from "./assets/matkul/sabtuMinggu.png";

import managemenSenin   from "./assets/matkul/Managemen/managemenSenin.png";
import managemenSelasa  from "./assets/matkul/Managemen/managemenSelasa.png";
import managemenRabu    from "./assets/matkul/Managemen/managemenRabu.png";
import managemenKamis   from "./assets/matkul/Managemen/managemenSenin.png";
import managemenJumat   from "./assets/matkul/Managemen/managemenSelasa.png";
import managemenSabtu   from "./assets/matkul/sabtuMinggu.png";
import managemenMinggu  from "./assets/matkul/sabtuMinggu.png";

import SISenin  from "./assets/matkul/SI/SISenin.png";
import SISelasa from "./assets/matkul/SI/SISelasa.png";
import SIRabu   from "./assets/matkul/SI/SIRabu.png";
import SIKamis  from "./assets/matkul/SI/SISenin.png";
import SIJumat  from "./assets/matkul/SI/SISelasa.png";
import SISabtu  from "./assets/matkul/sabtuMinggu.png";
import SIMinggu from "./assets/matkul/sabtuMinggu.png";

import teknikElektroSenin   from "./assets/matkul/TeknikElektro/teknikElektroSenin.png";
import teknikElektroSelasa  from "./assets/matkul/TeknikElektro/teknikElektroSelasa.png";
import teknikElektroRabu    from "./assets/matkul/TeknikElektro/teknikElektroRabu.png";
import teknikElektroKamis   from "./assets/matkul/TeknikElektro/teknikElektroSenin.png";
import teknikElektroJumat   from "./assets/matkul/TeknikElektro/teknikElektroSelasa.png";
import teknikElektroSabtu   from "./assets/matkul/sabtuMinggu.png";
import teknikElektroMinggu  from "./assets/matkul/sabtuMinggu.png";

import teknikKomputerSenin  from "./assets/matkul/TeknikKomputer/teknikKomputerSenin.png";
import teknikKomputerSelasa from "./assets/matkul/TeknikKomputer/teknikKomputerSelasa.png";
import teknikKomputerRabu   from "./assets/matkul/TeknikKomputer/teknikKomputerRabu.png";
import teknikKomputerKamis  from "./assets/matkul/TeknikKomputer/teknikKomputerSenin.png";
import teknikKomputerJumat  from "./assets/matkul/TeknikKomputer/teknikKomputerSelasa.png";
import teknikKomputerSabtu  from "./assets/matkul/sabtuMinggu.png";
import teknikKomputerMinggu from "./assets/matkul/sabtuMinggu.png";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?lat=-6.24099652174&lon=106.631889&appid=b43f5f6f6fc6d9ec445455aa52d344f2";

function Game(props) {
    const [eat, setEat] = useState(50);
    const [study, setStudy] = useState(0);
    const [sleep, setSleep] = useState(50);
    const [play, setPlay] = useState(50);
    const index = 1;
    const [weather, setWeather] = useState();
    const [news, setNews] = useState([]);
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

    function handleEat() {
        setEat(eat + 20);
        setSleep(sleep - 10);

        if(tempat == 2) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }
    }

    function handleStudy() {
        setStudy(study + 20);
        setSleep(sleep - 10);
        setPlay(play - 10);

        if(tempat == 2) { //di kampus & lagi belajar
            let img = document.querySelector(".matkul");
            img.style.display = "inline-block";

            //AKUNTANSI
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = {akuntansiSenin}.akuntansiSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Akuntansi") { 
                img.src = {akuntansiSelasa}.akuntansiSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = {akuntansiRabu}.akuntansiRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = {akuntansiKamis}.akuntansiKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = {akuntansiJumat}.akuntansiJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = {akuntansiSabtu}.akuntansiSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Akuntansi") {
                img.src = {akuntansiMinggu}.akuntansiMinggu;
            } 

            //Arsitektur
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = {arsitekturSenin}.arsitekturSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Arsitektur") { 
                img.src = {arsitekturSelasa}.arsitekturSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = {arsitekturRabu}.arsitekturRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = {arsitekturKamis}.arsitekturKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = {arsitekturJumat}.arsitekturJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = {arsitekturSabtu}.arsitekturSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Arsitektur") {
                img.src = {arsitekturMinggu}.arsitekturMinggu;
            } 

            //DKV
            if(hari === "Senin" && localStorage.getItem("jurusan") === "DKV") {
                img.src = {DKVSenin}.DKVSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "DKV") { 
                img.src = {DKVSelasa}.DKVSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "DKV") {
                img.src = {DKVRabu}.DKVRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "DKV") {
                img.src = {DKVKamis}.DKVKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "DKV") {
                img.src = {DKVJumat}.DKVJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "DKV") {
                img.src = {DKVSabtu}.DKVSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "DKV") {
                img.src = {DKVMinggu}.DKVMinggu;
            } 


            //Film
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Film") {
                img.src = {filmSenin}.filmSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Film") { 
                img.src = {filmSelasa}.filmSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Film") {
                img.src = {filmRabu}.filmRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Film") {
                img.src = {filmKamis}.filmKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Film") {
                img.src = {filmJumat}.filmJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Film") {
                img.src = {filmSabtu}.filmSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Film") {
                img.src = {filmMinggu}.filmMinggu;
            } 

            //Informatika
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = {informatikaSenin}.informatikaSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Informatika") { 
                img.src = {informatikaSelasa}.informatikaSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = {informatikaRabu}.informatikaRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = {informatikaKamis}.informatikaKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = {informatikaJumat}.informatikaJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = {informatikaSabtu}.informatikaSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Informatika") {
                img.src = {informatikaMinggu}.informatikaMinggu;
            } 

            //Jurnalistik
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = {jurnalistikSenin}.jurnalistikSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Jurnalistik") { 
                img.src = {jurnalistikSelasa}.jurnalistikSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = {jurnalistikRabu}.jurnalistikRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = {jurnalistikKamis}.jurnalistikKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = {jurnalistikJumat}.jurnalistikJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = {jurnalistikSabtu}.jurnalistikSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Jurnalistik") {
                img.src = {jurnalistikMinggu}.jurnalistikMinggu;
            } 

            //Manajemen
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = {managemenSenin}.managemenSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Manajemen") { 
                img.src = {managemenSelasa}.managemenSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = {managemenRabu}.managemenRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = {managemenKamis}.managemenKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = {managemenJumat}.managemenJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = {managemenSabtu}.managemenSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Manajemen") {
                img.src = {managemenMinggu}.managemenMinggu;
            } 

            //Sistem Informasi
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = {SISenin}.SISenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Sistem Informasi") { 
                img.src = {SISelasa}.SISelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = {SIRabu}.SIRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = {SIKamis}.SIKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = {SIJumat}.SIJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = {SISabtu}.SISabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Sistem Informasi") {
                img.src = {SIMinggu}.SIMinggu;
            } 

            //Teknik Elektro
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = {teknikElektroSenin}.teknikElektroSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Teknik Elektro") { 
                img.src = {teknikElektroSelasa}.teknikElektroSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = {teknikElektroRabu}.teknikElektroRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = {teknikElektroKamis}.teknikElektroKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = {teknikElektroJumat}.teknikElektroJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = {teknikElektroSabtu}.teknikElektroSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Teknik Elektro") {
                img.src = {teknikElektroMinggu}.teknikElektroMinggu;
            } 

            //Teknik Komputer
            if(hari === "Senin" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = {teknikKomputerSenin}.teknikKomputerSenin;
            } else if(hari === "Selasa" && localStorage.getItem("jurusan") === "Teknik Komputer") { 
                img.src = {teknikKomputerSelasa}.teknikKomputerSelasa;
            } else if(hari === "Rabu" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = {teknikKomputerRabu}.teknikKomputerRabu;
            } else if(hari === "Kamis" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = {teknikKomputerKamis}.teknikKomputerKamis;
            } else if(hari === "Jumat" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = {teknikKomputerJumat}.teknikKomputerJumat;
            } else if(hari === "Sabtu" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = {teknikKomputerSabtu}.teknikKomputerSabtu;
            } else if(hari === "Minggu" && localStorage.getItem("jurusan") === "Teknik Komputer") {
                img.src = {teknikKomputerMinggu}.teknikKomputerMinggu;
            } 
        }
    }

    function handleSleep() {
        setSleep(sleep + 20);
        setStudy(study - 10);
    }

    function handlePlay() {
        setPlay(play + 20);
        setEat(eat - 10);
        setSleep(sleep - 10);

        if(tempat == 2) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }
    }

    function handleHome() {
        setTempat(1);
        setBg(2);
        setPlace("@Home");
    }

    function handleCampus() {
        setTempat(2);
        setBg(2);
        setPlace("@Campus");
    }

    function handleLibro() {
        setTempat(3);
        setBg(2);
        setPlace("@Libro");
    }

    function handleLawsen() {
        setTempat(4);
        setBg(2);
        setPlace("@Lawsen");
    }

    useEffect(() => {
        if(tempat != 2) {
            let img = document.querySelector(".matkul");
            img.style.display = "none";
        }
    }, [tempat])

    useEffect(() => {
        fetch(WEATHER_API)
            .then((res) => res.json())
            .then((data) => {
                setTemp(Math.round(data.main.temp / 10));
                setWeather(data.weather[0].main);
            });
    },[]);

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
        }
        if (updatedMs === 100) {
        updatedS++;
        updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    if (status === 0) {
        start();
    }
    let condition = false;
    if(time.m === 5 && time.s === 1){
        if(weather === "rain"){
            if(tempat === 1){
                setBg(1);
            } else if(tempat === 2){
                setBg(1);
            } else if(tempat === 3){
                setBg(1);
            } else if(tempat === 4){
                setBg(1);
            }
        } else {
            if(tempat === 1){
                setBg(2);
            } else if(tempat === 2){
                setBg(2);
            } else if(tempat === 3){
                setBg(2);
            } else if(tempat === 4){
                setBg(2);
            }
        }}
    // } else if (time.m > 11 && time.m <= 16){
    //     if(weather === "rain"){
    //         if(tempat === 1){
    //             setBg(1);
    //         } else if(tempat === 2){
    //             setBg(1);
    //         } else if(tempat === 3){
    //             setBg(1);
    //         } else if(tempat === 4){
    //             setBg(1);
    //         }
    //     } else {
    //         if(tempat === 1){
    //             setBg(1);
    //         } else if(tempat === 2){
    //             setBg(1);
    //         } else if(tempat === 3){
    //             setBg(1);
    //         } else if(tempat === 4){
    //             setBg(1);
    //         }
    //     }
    // } else if (time.m > 16 && time.m <= 19){
    //     if(weather === "rain"){
    //         if(tempat === 1){
    //             setBg(1);
    //         } else if(tempat === 2){
    //             setBg(1);
    //         } else if(tempat === 3){
    //             setBg(1);
    //         } else if(tempat === 4){
    //             setBg(1);
    //         }
    //     } else {
    //         if(tempat === 1){
    //             setBg(1);
    //         } else if(tempat === 2){
    //             setBg(1);
    //         } else if(tempat === 3){
    //             setBg(1);
    //         } else if(tempat === 4){
    //             setBg(1);
    //         }
    //     }
    // } else if (time.m > 19 && time.m <= 23 || time.m >= 0 && time.m <= 4){
    //     if(weather === "rain"){
    //         if(tempat === 1){
    //             setBg(1);
    //         } else if(tempat === 2){
    //             setBg(1);
    //         } else if(tempat === 3){
    //             setBg(1);
    //         } else if(tempat === 4){
    //             setBg(1);
    //         }
    //     } else {
    //         if(tempat === 1){
    //             setBg(1);
    //         } else if(tempat === 2){
    //             setBg(1);
    //         } else if(tempat === 3){
    //             setBg(1);
    //         } else if(tempat === 4){
    //             setBg(1);
    //         }
    //     }
    // }

    useEffect(()=> {
        let hari = document.querySelector(".timeClock");
        hari = hari.innerHTML;
        hari = hari.split(" ");
        hari = hari[0]

        setJurusan(localStorage.getItem("jurusan"));
        setHari(hari);
        console.log(localStorage.getItem("jurusan"));
    }, [])

    return (
        <>
            <MobileNews />
            <div className='row'>
                <div id='setBar' className='row mt-lg-5'>
                    <div className='col-2'></div>
                    <Bar action={eat} img={Images[1].logo[0].url} />
                    <Bar action={study} img={Images[1].logo[2].url} />
                    <Bar action={sleep} img={Images[1].logo[3].url} />
                    <Bar action={play} img={Images[1].logo[1].url} />
                    <div className='col-2'></div>
                </div>
                
                {time.m >= 5 && time.m <= 11 ? <img alt=' ' src={BGPagi} className="background-image" /> : ""}
                {time.m > 11 && time.m <= 16 ? <img alt=' ' src={BGSiang} className="background-image" /> : ""}
                {bg === 1 ? <img alt=' ' src={BGSiang} className="background-image" /> : ""}
                {bg === 2 ? <img alt=' ' src={BGMalam} className="background-image" /> : <img alt=' ' src={BGMalam} className="background-image" />}

                <Time name={props.name} />

                <div className='col row'>
                    <div className='bgImg'>
                    <h1 className='place' id='place1'>@GoTo</h1>
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

                <img id='char' src={Images[0].normal[props.character].url} />

                {/* src={Images[0].normal[props.character].url} */}

            {/* Kalo pencet campus > study */}
            <img src="" className="matkul" />

                <div className="weatherCs col">
                <h1 className="weatherStyle">{temp}&#176;C</h1>
                <img className="weatherBg" src={WeatherBg} />
                </div>
                <Link to='./Rapot'><Button>rapot</Button></Link>
            </div>
        </>
    )
}

export default Game;