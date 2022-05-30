import React, { useState } from "react";

function DisplayTime(props) {
   const [name, setName] = useState("");

    const greeting = () => {
        if(props.time.m >= 5 && props.time.m <= 11){
          return "Good Morning, " + name + "!";
        } else if(props.time.m > 11 && props.time.m <= 16){
            return "Good Afternoon, " + name + "!";
        } else if(props.time.m > 16 && props.time.m <= 19){
            return "Good Evening, " + name + "!";
        } else if(props.time.m > 19 && props.time.m <= 23 || props.time.m >= 0 && props.time.m <= 4){
            return "Good Night, " + name + "!";
        } else {
           return "";
        }
     }

  const h = () => {
      if(props.time.h === 0) {
      return "Minggu";
     } else if(props.time.h === 1){
       return "Senin";
     } else if(props.time.h === 2) {
       return "Selasa";
     } else if(props.time.h === 3) {
        return "Rabu";
     } else if(props.time.h === 4) {
        return "Kamis";
     } else if(props.time.h === 5) {
        return "Jumat";
     } else if(props.time.h === 6) {
        return "Sabtu";
     } else {
        return "";
     }
  }
  return (
    <div>
       <h3 className="timeClock">{h()} - {(props.time.m >= 10)? props.time.m : "0"+ props.time.m}:{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</h3>
       <h1 className="greeting">{greeting()}</h1>
    </div>
  );
}

export default DisplayTime;