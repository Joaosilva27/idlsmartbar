import React from "react";
import { Link } from "react-router-dom";
import "../styles/CalibrationGuide.css";

function CalibrationGuide() {
  return (
    <div className='guide__container'>
      <h1>Calibration Guide</h1>
      <p>This is the calibration guide.</p>
      <Link to='/'>Go back to home page</Link>
    </div>
  );
}

export default CalibrationGuide;
