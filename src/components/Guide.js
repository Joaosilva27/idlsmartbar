import React from "react";
import "../styles/Guide.css";
import { Link } from "react-router-dom";
import GuideIcon from "../images/guide.png";
import TvIcon from "../images/TVicon.png";
import PhoneIcon from "../images/phoneIcon.png";

export const Guide = () => {
  return (
    <div>
      <div className='guide__body'>
        <div style={{ display: "flex" }}>
          <h1 className='guide__title'>Select your Guide:</h1>
        </div>
      </div>
      <div className='guide__container--center'>
        <div style={{ display: "flex" }}>
          <img alt='TV Icon' className='guide__tv--icon' src={TvIcon} />
          <Link style={{ textDecoration: "none" }} to='/calibration-guide'>
            <h1 className='guide__tv--h1'>Television Guide</h1>
          </Link>
        </div>
      </div>
      <div className='guide__container--center'>
        <div style={{ display: "flex" }}>
          <img alt='Phone Icon' className='guide__phone--icon' src={PhoneIcon} />
          <h1 className='guide__phone--h1'>Screen Foil Guide</h1>
        </div>
      </div>
    </div>
  );
};
