import React, { useState, useEffect } from "react";
import DisplayTime from "./DisplayTime";
import BtnPauseResume from "./BtnPauseResume";

function Time(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  // Not started = 0
  // started = 1
  // stopped = 2

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

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resume = () => start();

  if (status === 0) {
    start();
  }

  if (time.h === 8) {
    console.log("Blabla" + time.h);
    clearInterval(interv);
    setStatus(0);
  }

  return (
    <>
      <div>
        <BtnPauseResume status={status} resume={resume} stop={stop} />
      </div>
      <div className="time">
        <DisplayTime name={props.name} time={time} />
      </div>
    </>
  );
}

export default Time;
