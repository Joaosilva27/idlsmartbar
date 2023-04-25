import React from "react";
import "../styles/ManualGuide.css";
import { Link } from "react-router-dom";

export const ManualGuide = ({ signUserOut }) => {
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
      <div className='manual__container'>
        <h1>!!!TEST!!! !!!MANUAL GUIDE!!!</h1>
        <br></br>
        <h3 className='color__white'>Fill in all the calman information, select "color management" and start the first reading</h3>
        <h2>Preparation</h2>
        <ul>
          <li className='color__white'>Change mode selection from standard to movie </li>
          <li className='color__white'>Turn off Energy Saving</li>
          <li className='color__white'>Turn off filter functions such as noise editing, motionflow, local dimming, etc...</li>
        </ul>
        <h2>Calibration</h2>
        <ul>
          <li className='color__white'>Contrast</li>
          <li className='color__white'>Black Level</li>
          <li className='color__white'>Gamma</li>
          <li className='color__white'>Luminance</li>
          <li className='color__white'>White Balance</li>
          <li className='color__white'>Color Management</li>
          <li className='color__white'>Sharpness</li>
        </ul>
        <h2>Final Steps</h2>
        <ul>
          <li className='color__white'>Final Reading</li>
          <li className='color__white'>Port Application</li>
          <li className='color__white'>Change Language</li>
        </ul>
      </div>
    </div>
  );
};
