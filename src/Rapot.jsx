import React, { useState, useEffect } from "react";
import background from "./assets/bgLP.png";
import Logo from "./assets/logofix.png";
import { Link } from "react-router-dom";
import Button from "./components/button";
import Report from "./assets/report.png";
import Images from "./components/Images";

function Rapot(props) {
  const [course1, setCourse1] = useState("");
  const [course2, setCourse2] = useState("");
  const [course3, setCourse3] = useState("");
  const [apapun, setApapun] = useState(0);

  if (props.major === "Akuntansi" && apapun === 0) {
    setCourse1("1. Macro Economy");
    setCourse2("2. Intro to Multimedia Technology");
    setCourse3("3. Business Statistics");
    setApapun(1);
  } else if (props.major === "Arsitektur" && apapun === 0) {
    setCourse1("1. Architecture Theory and History");
    setCourse2("2. Architectural Design");
    setCourse3("3. Structure and Construction");
    setApapun(1);
  } else if (props.major === "DKV" && apapun === 0) {
    setCourse1("1. Illustration");
    setCourse2("2. Design & Indonesian Culture");
    setCourse3("3. Visual Analysis");
    setApapun(1);
  } else if (props.major === "Film" && apapun === 0) {
    setCourse1("1. Creative Production");
    setCourse2("2. Basic Sound");
    setCourse3("3. Story Development");
    setApapun(1);
  } else if (props.major === "Informatika" && apapun === 0) {
    setCourse1("1. Intro to Internet Technology");
    setCourse2("2. Algorithm & Data Structure");
    setCourse3("3. Calculus");
    setApapun(1);
  } else if (props.major === "Jurnalistik" && apapun === 0) {
    setCourse1("1. Media Writing");
    setCourse2("2. Interview and Reportage");
    setCourse3("3. Digital Videography");
    setApapun(1);
  } else if (props.major === "Manajemen" && apapun === 0) {
    setCourse1("1. Business Statistics");
    setCourse2("2. Business Ethics");
    setCourse3("3. Cost Accounting");
    setApapun(1);
  } else if (props.major === "Sistem Informasi" && apapun === 0) {
    setCourse1("1. Web Design and Development");
    setCourse2("2. Database Systems");
    setCourse3("3. Visual programming");
    setApapun(1);
  } else if (props.major === "Teknik Elektro" && apapun === 0) {
    setCourse1("1. Engineering Mathematics");
    setCourse2("2. Probability & Statistic");
    setCourse3("3. Algorithm & Data Structure");
    setApapun(1);
  } else if (props.major === "Teknik Komputer" && apapun === 0) {
    setCourse1("1. Physics");
    setCourse2("2. Probability & Statistics");
    setCourse3("3. Technopreneurship");
    setApapun(1);
  }

  function handleExit() {
    props.setUangJajan(500000);
    console.log("ini uang jajan di rapot " + props.uangJajan);
  }

  return (
    <>
      <div className="coba">
        <div className="Rapot">
          <img src={background} className="background" alt="" />
        </div>
        <div className="logoh">
          <img width="27%" src={Logo} />
        </div>
        <div className="row yeah">
            <div className="col">
              <div className="row information">
                <div className="col imageRapot">
                  <img
                    className="charRapot"
                    src={Images[0].normal[props.character].url}
                  />
                </div>
                <div className="col infoRapot">
                  <p>{props.name}</p>
                  <p>{props.major}</p>
                </div>
              </div>
          </div>
          <div className="col coursesRapot">
            <p>{course1}</p>
            <p>{course2}</p>
            <p>{course3}</p>
          </div>
          <div className="col jajanRapot">
            <p>Ⓖ {props.uangJajan}</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="yeah2">
          {props.total === 1 ? <p>Bagus! Kamu rajin belajar!</p> : ""}
          {props.total === 2 ? (
            <p>Makan kamu banyak banget! Jangan lupa olahraga, ya!</p>
          ) : (
            ""
          )}
          {props.total === 3 ? (
            <p>Kamu banyak tidur! Kamu harusnya belajar!</p>
          ) : (
            ""
          )}
          {props.total === 4 ? (
            <p>Kamu kebanyakan main, jangan lupa belajar ya!</p>
          ) : (
            ""
          )}
          {props.total === 5 ? <p>Hidup kamu balance sekali!</p> : ""}
        </div>
        </div>

        <div className="rapot">
          <img width="80%" src={Report} className="report" alt="" />
        </div>

        <div className="tombol">
          <Link to="/" onClick={handleExit}>
            <Button item="Exit">Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Rapot;
