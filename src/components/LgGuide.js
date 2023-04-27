import React, { useState } from "react";
import { Link } from "react-router-dom";
import LGbox from "../images/lg_box.png";
import "../styles/LgGuide.css";

export const LgGuide = ({ signUserOut }) => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      <div>
        <div className='sign__out'>
          <button className='signOut--sendMessage__button' onClick={signUserOut}>
            Sign Out
          </button>
          <Link to='/'>
            <button className='signOut--sendMessage__button'>Home</button>
          </Link>
        </div>
      </div>
      <div className='lg__container'>
        <h1 style={{ textAlign: "center" }}>LG GUIDE</h1>
        <div className='row__container'>
          <div>
            <button style={{ color: "white" }} className='button__guides animation'>
              Short Guide
            </button>
            <button style={{ color: "white" }} className='button__guides animation'>
              Full Guide
            </button>
            <button style={{ color: "white" }} className='button__guides animation'>
              Manual Guide
            </button>
            <div className='row__h4'>
              <h4>Report Example</h4>
              <h4 className='ml-10'>Word Document Guide</h4>
            </div>
          </div>
          <img className='lg__box' alt='LG TV Box' src={LGbox} />
        </div>
        {shortGuide && (
          <div className='row__container'>
            <div className='p__container'>
              <ol>
                <li>
                  <span className='li__color'>Turn on the TV and select the language/country</span>
                </li>
                <li>
                  <span className='li__color'>Select "exit first user" and confirm by selecting "yes"</span>
                </li>
                <li>
                  <span className='li__color'>Open settings, go to picture mode and select "Expert Bright"</span>
                </li>
                <li>
                  <span className='li__color'>Turn off energy saving</span>
                </li>
                <li>
                  <span className='li__color'>Go back to HDMI 1 and start the first reading</span>
                </li>
                <li>
                  <span className='li__color' n>
                    After the reading is finished, on the laptop click "Find TV"
                  </span>
                </li>
                <li>
                  <span className='li__color'>When the unique code shows up on the TV screen, type it into the laptop</span>
                </li>
                <li>
                  <span className='li__color'>Leave the only option selected as "Expert Day" and start the last reading</span>
                </li>
                <li>
                  <span className='li__color'>After the reading is finished, create the report</span>
                </li>
                <li>
                  <span className='li__color'>Go to every HDMI and change it's picture setting to "Expert Bright"</span>
                </li>
                <li>
                  <span className='li__color'>Go back to HDMI 1 and start the second reading</span>
                </li>
                <li>
                  <span className='li__color'>Go to advanced settings and select "Apply to all inputs"</span>
                </li>
                <li>
                  <span className='li__color'>Change the language to dutch</span>
                </li>
              </ol>
              <img className='lg__box' alt='LG TV Box' src={LGbox} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
