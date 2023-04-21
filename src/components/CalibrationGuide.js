import React from "react";
import { Link } from "react-router-dom";
import "../styles/CalibrationGuide.css";
import ControllerIcon from "../images/controller.png";
import SamgungIcon from "../images/samsung.jpg";
import LgIcon from "../images/lg.jpeg";
import SonyIcon from "../images/sony.png";
import PhillipsIcon from "../images/phillips.jpg";
import TclIcon from "../images/tcl.jpg";
import HisenseIcon from "../images/hisense.png";
import OkIcon from "../images/ok.jpeg";

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
          <img alt='TV Icon' style={{ marginLeft: "0.5rem" }} className='tv__icon' src={ControllerIcon} />
        </span>
        <h5 style={{ color: "#ef3342" }}>Written by Konstantyn & João</h5>

        <br></br>

        <div className='guide__flex'>
          <div className='guide__flex--column'>
            <div className='tv__flex--container'>
              <Link to='/calibration-guide/samsung'>
                <img alt='a Samsumg logo' className='tv__image' src={SamgungIcon} />
              </Link>
              <img alt='a LG logo' className='tv__image' src={LgIcon} />
              <img alt='a Sony logo' className='tv__image' src={SonyIcon} />
              <img alt='a Phillips logo' className='tv__image' src={PhillipsIcon} />
            </div>
            <div className='tv__flex--container'>
              <img alt='a TCL tv logo' className='tv__image' src={TclIcon} />
              <img alt='a Hisense tv logo' className='tv__image' src={HisenseIcon} />
              <img alt='a OK tv logo' className='tv__image' src={OkIcon} />
            </div>
            <h2 className='guide__selector--title'>General Knowledge:</h2>

            <div className='guide__selector--div'>
              <Link to='/calibration-guide/automatic-guide'>
                <button className='signOut--sendMessage__button' style={{ marginRight: "1rem" }}>
                  Automatic
                </button>
              </Link>

              <Link to='/calibration-guide/manual-guide'>
                <button className='signOut--sendMessage__button'>Manual</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalibrationGuide;
