import React from 'react';

function BtnGame(props) {
  return (
    <div>

      {(props.tempat === 1)? 
        <div>
          <button className="buttonGame"
                  onClick={props.handleStudy}>Kuliah</button>
        </div> : ""
      }

     {(props.tempat === 2)? 
        <div>
          <button className="buttonGame"
                  onClick={props.resume}>Kerja</button>
        </div> : ""
      }

    {(props.tempat === 3)? 
        <div>
          <button className="buttonGame"
                  onClick={props.resume}>Kerja</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnGame;