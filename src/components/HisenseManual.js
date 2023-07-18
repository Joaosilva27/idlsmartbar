import React from "react";
import { Link } from "react-router-dom";
import "../styles/HisenseManual.css";
import HisenseE7 from "../images/hisense_e7.png";

export const HisenseManual = () => {
  return (
    <div>
      <div className='div__center'>
        <div>
          <div className='div__card'>
            <h1 style={{ color: "white" }}>Series 7</h1>
            <br></br>
            <Link to='/calibration-guide/hisense/manual/e7'>
              <img className='card__tv__image animation' alt='Hisense E7 Model' src={HisenseE7} />
            </Link>
          </div>
        </div>
        <div className='div__row'>
          <div className='div__card'>
            <h1 style={{ color: "white" }}>!!!EMPTY</h1>
            <br></br>
            <Link to='/calibration-guide/hisense/manual'>
              <img className='card__tv__image animation' alt='Hisense E7 Model' src={HisenseE7} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
