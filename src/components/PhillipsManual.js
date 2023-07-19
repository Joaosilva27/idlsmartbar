import React from "react";
import { Link } from "react-router-dom";
import PhillipsBoxOLED from "../images/PhillipsBoxOled.png";
import PhillipsBoxTheOne from "../images/PhillipsBoxTheOne.png";
import PhillipsBoxLED from "../images/PhillipsBoxLed.png";

export const PhillipsManual = () => {
  return (
    <div>
      <div className='div__center'>
        <div>
          <div className='div__card'>
            <h1 style={{ color: "white" }} className='mb-4'>
              OLED/LED/THE ONE
            </h1>
            <br></br>
            <div className='flex flex-row'>
              <Link to='/calibration-guide/phillips/manual/oled'>
                <img className='card__tv__image animation mt-4' alt='Phillips OLED Model' src={PhillipsBoxOLED} />
              </Link>
              <Link to='/calibration-guide/phillips/manual/oled'>
                <img style={{ marginLeft: "2rem" }} className='card__tv__image animation mt-4' alt='Phillips OLED Model' src={PhillipsBoxTheOne} />
              </Link>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "3rem" }} className='div__row'>
          <div className='div__card'>
            <h1 style={{ color: "white" }}>LED 8007</h1>
            <br></br>
            <Link to='/calibration-guide/phillips/manual/8007'>
              <img style={{ width: "16.5rem" }} className='card__tv__image animation mt-4' alt='Phillips LED Model' src={PhillipsBoxLED} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
