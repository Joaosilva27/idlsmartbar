import React from "react";
import { Link } from "react-router-dom";
import PhillipsBoxOLED from "../images/PhillipsBoxOled.png";
import PhillipsBoxLED from "../images/PhillipsBoxLed.png";

export const PhillipsManual = () => {
  return (
    <div>
      <div className='div__center'>
        <div>
          <div className='div__card'>
            <h1 style={{ color: "white" }}>OLED</h1>
            <br></br>
            <Link to='/calibration-guide/phillips/manual/oled'>
              <img className='card__tv__image animation' alt='Phillips OLED Model' src={PhillipsBoxOLED} />
            </Link>
          </div>
        </div>
        <div className='div__row'>
          <div className='div__card'>
            <h1 style={{ color: "white" }}>LED</h1>
            <br></br>
            <Link to='/calibration-guide/phillips/manual'>
              <img style={{ width: "16.5rem" }} className='card__tv__image animation' alt='Phillips LED Model' src={PhillipsBoxLED} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
