import React from "react";
import { Link } from "react-router-dom";
import "../styles/SamsungGuide.css";
import SamsungBox from "../images/samsungbox.jpeg";

export const SamsungGuide = ({ signUserOut }) => {
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
      <div className='samsung__container'>
        <h1>SAMSUNG GUIDE</h1>
        <div className='row__container'>
          <div className='p__container'>
            <ol>
              <li>
                <span className='li__color'>Turn on the TV and go through all the steps until network connection</span>
              </li>
              <li>
                <span className='li__color'>When it gets to network connection, wait 1 to 2 seconds and cancel</span>
              </li>
              <li>
                <span className='li__color'>Get the IP Address from the TV and type it on the laptop</span>
              </li>
              <li>
                <span className='li__color'>Finish the setup and go to HDMI 1</span>
              </li>
              <li>
                <span className='li__color'>Start first reading</span>
              </li>
              <li>
                <span className='li__color' n>
                  After the reading is finished, go to settings
                </span>
              </li>
              <li>
                <span className='li__color'>Go to network settings and enable IP remote</span>
              </li>
              <li>
                <span className='li__color'>On the laptop, select "Find TV"</span>
              </li>
              <li>
                <span className='li__color'>Back to the settings, turn off the Energy Saving option</span>
              </li>
              <li>
                <span className='li__color'>
                  Go to Picture settings &#8594; Expert settings &#8594; Put Sharpness on 5 and on colors, select custom
                </span>
              </li>
              <li>
                <span className='li__color'>Go back to HDMI 1 and start the second reading</span>
              </li>
              <li>
                <span className='li__color'>Create the TV report</span>
              </li>
              <li>
                <span className='li__color'>Change the language to dutch</span>
              </li>
            </ol>
            <img className='samsung__box' alt='Samsung TV Box' src={SamsungBox} />
          </div>
        </div>
      </div>
    </div>
  );
};
