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
            <Link to='/calibration-guide/hisense/manual/e7'>
              <button style={{ color: "white" }} className='button__guides animation card__tv__name'>
                E7 Series
              </button>
            </Link>
            <img className='card__tv__image' alt='Hisense E7 Model' src={HisenseE7} />
          </div>
        </div>
        <div className='div__row'>
          <div className='div__card'>
            <Link>
              <button style={{ color: "white" }} className='button__guides animation card__tv__name'>
                !!EMPTY
              </button>
            </Link>
            <img className='card__tv__image' alt='Hisense E7 Model' src={HisenseE7} />
          </div>
        </div>
      </div>
    </div>
  );
};
