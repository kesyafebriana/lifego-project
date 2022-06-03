import React from "react";
import bella from "../assets/bella.png";
import kelsha from "../assets/kelsha.png";
import kesya from "../assets/kesya.png";
import yustira from "../assets/yustira.png";

const AboutUs = (props) => {
  function close() {
    console.log("TESTING");
    props.handleClose();
  }
  return (
    <div className="popup-box">
      <div className="popup-container">
        <img src={props.pict} className="popup-background" />
        <div className="aboutus-description">
          <div className="au1">
            <img src={bella} className="buibu"/>
            <div className="description">
              Bella Saharani Sopyan
              <br /> Fullstack Developer
              <br /> 00000064581 <br />
            </div>
          </div>
          <div className="au2">
            <div className="descriptionkanan">
              Kelsha Aira Meylie
              <br /> Senior Web Developer
              <br /> 00000064613 <br />
            </div>
            <img src={kelsha} className="buibu"/>
          </div>
          <div className="au3">
            <img src={kesya} className="buibu"/>
            <div className="descriptionkesya">
              Kesya Febriana Manampiring
              <br /> UI/UX Designer
              <br /> 00000065476 <br /> <br />
            </div>
          </div>
          <div className="au4">
            <div className="descriptionkanan">
              Yustira Nhisya Shabilla
              <br /> Quality Assurance
              <br /> 00000063592 <br />
            </div>
            <img src={yustira} className="buibu"/>
          </div>
        </div>
        <img src={props.closeButton} className="close-button" onClick={close} />

      </div>
    </div>
  );
};

export default AboutUs;
