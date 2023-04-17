import React from "react";
import "../styles/ManualGuide.css";

export const ManualGuide = () => {
  return (
    <div>
      <h1>!!!TEST!!! !!!MANUAL GUIDE!!!</h1>
      <br></br>
      <h3 className='color__black'>First, start the first reading as soon as you get it out of the box</h3>
      <h2>Preparation</h2>
      <ul>
        <li className='color__black'>Change mode selection from standard to movie if It's Samsumg, or Expert day bright if LG</li>
        <li className='color__black'>Turn off Energy Saving</li>
        <li className='color__black'>Turn off filter functions such as noise editing, motionflow, local dimming, etc...</li>
      </ul>
    </div>
  );
};
