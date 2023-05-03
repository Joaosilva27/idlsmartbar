import React from "react";
import "../styles/Guide.css";
import { Link } from "react-router-dom";
import TvIcon from "../images/TVicon.png";
import PhoneIcon from "../images/phoneIcon.png";
import AbonnementIcon from "../images/abonnement.png";
import LaptopIcon from "../images/laptop.png";

export const Guide = () => {
  return (
    <div>
      <div className='guide__body'>
        <div style={{ display: "flex" }}>
          <h1 className='guide__title'>Select your Guide:</h1>
        </div>
      </div>
      <div className='grid__box'>
        <div className='guide__container--center grid--1'>
          <div style={{ display: "flex" }}>
            <img alt='TV Icon' className='guide__tv--icon' src={TvIcon} />
            <Link style={{ textDecoration: "none" }} to='/calibration-guide'>
              <h1 className='guide__tv--h1'>Television Guide</h1>
            </Link>
          </div>
        </div>
        <div className='guide__container--center grid--2'>
          <div style={{ display: "flex" }}>
            <img alt='Phone Icon' className='guide__phone--icon' src={PhoneIcon} />
            <h1 className='guide__phone--h1'>Screen Foil Guide</h1>
          </div>
        </div>
        <div className='guide__container--center grid--1'>
          <div style={{ display: "flex" }}>
            <img alt='Phone Icon' className='guide__abonnement--icon' src={AbonnementIcon} />
            <h1 className='guide__phone--h1'>Abonnement Guide</h1>
          </div>
        </div>
        <div className='guide__container--center grid--2'>
          <div style={{ display: "flex" }}>
            <img alt='Phone Icon' className='guide__laptop--icon' src={LaptopIcon} />
            <h1 className='guide__phone--h1'>Laptop Guide</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
