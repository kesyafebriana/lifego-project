import React, { useState,useEffect } from 'react';
import background from './assets/bgLP.png';
import Logo from "./assets/logofix.png";
import { Link } from 'react-router-dom';
import Button from "./components/button";
import Report from "./assets/report.png";
import Images from './components/Images';

function Rapot(props) {
  const [course1,setCourse1] = useState("");
  const [course2,setCourse2] = useState("");
  const [course3,setCourse3] = useState("");
  const [apapun,setApapun] = useState(0);

  if(props.major === "Akuntansi" && apapun === 0){
    setCourse1("1. Business Statistics");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Arsitektur" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "DKV" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Film" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Informatika" && apapun === 0){
    setCourse1("1. a");
    setCourse2("2. b");
    setCourse3("3. c")
    setApapun(1);
  } else if (props.major === "Jurnalistik" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Manajemen" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Sistem Informasi" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Teknik Elektro" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  } else if (props.major === "Teknik Komputer" && apapun === 0){
    setCourse1("1. ");
    setCourse2("2. ");
    setCourse3("3. ")
    setApapun(1);
  }

  return (
    <>
    <div className="coba">
      <div className='Rapot'>
        <img src={background} className="background" alt=""/>
      </div>

      <img id='char' src={Images[0].normal[props.character].url} />
      <h1>{props.name}</h1>
      <h1>{props.major}</h1>
      <p>{course1}</p>
      <p>{course2}</p>
      <p>{course3}</p>

      <div className="logoh">
        <img width="27%" src={Logo} />
      </div>

      <div className="rapot">
        <img width="80%" src={Report} className="report" alt=""/>
      </div>

      <div className="tombol">
        <Link to='/'><Button item="Exit">Back</Button></Link> 
      </div>
      </div>
    </>
  );
}

export default Rapot; 