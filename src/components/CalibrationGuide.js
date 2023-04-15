import React from "react";
import { Link } from "react-router-dom";
import "../styles/CalibrationGuide.css";
import CalmanImage from "../images/calman.webp";
import CalibrationExample from "../images/calibrationexample.png";

function CalibrationGuide() {
  return (
    <div className='guide__container'>
      <span style={{ display: "flex" }}>
        <h1>TV Calibration Guide</h1>
        <img
          alt='TV Icon'
          style={{ marginLeft: "0.5rem" }}
          className='tv__icon'
          src='https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/led-television-icon.png'
        />
      </span>
      <h5>Written by Konstantyn & João</h5>

      <br></br>
      <Link to='/'>Go back to home page</Link>
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
            <button className='signOut--sendMessage__button'>Manual</button>
          </div>
        </div>

        <img alt='A calibration example' className='calman__image' src={CalibrationExample} />
      </div>
    </div>
  );
}

export default CalibrationGuide;
