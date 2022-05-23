import React from 'react';

function BtnComponent(props) {
  return (
    <div>
        
      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Resume</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;