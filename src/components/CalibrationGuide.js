import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { ManualGuide } from "./ManualGuide";
import "../styles/CalibrationGuide.css";
import CalibrationExample from "../images/calibrationexample.png";

function CalibrationGuide({ signUserOut }) {
  return (
    <div>
      <div className='sign__out'>
        <button className='signOut--sendMessage__button' onClick={signUserOut}>
          Sign Out
        </button>
        <Link to='/'>
          <button className='signOut--sendMessage__button'>Home</button>
        </Link>
      </div>

      <div className='guide__container'>
        <span style={{ display: "flex" }}>
          <h1 className='color__black'>TV Calibration Guide</h1>
          <img
            alt='TV Icon'
            style={{ marginLeft: "0.5rem" }}
            className='tv__icon'
            src='https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/led-television-icon.png'
          />
        </span>
        <h5 className='color__black'>Written by Konstantyn & João</h5>

        <br></br>

        <div className='guide__flex'>
          <div className='guide__flex--column'>
            <div className='guide__p'>
              TV calibration is the process of adjusting the settings on your television to optimize the picture quality and ensure that it is
              displaying colors and images as accurately as possible. Proper calibration can enhance your viewing experience by providing a more
              natural, balanced and vivid image, which is closer to what the content creators intended.
            </div>

            <h2 className='guide__selector--title'>Select the guide:</h2>

            <div className='guide__selector--div'>
              <button className='signOut--sendMessage__button' style={{ marginRight: "1rem" }}>
                Automatic
              </button>

              <Link to='/calibration-guide/manual-guide'>
                <button className='signOut--sendMessage__button'>Manual</button>
              </Link>
            </div>
          </div>

          <img alt='A calibration example' className='calman__image' src={CalibrationExample} />
        </div>
      </div>
    </div>
  );
}

export default CalibrationGuide;
