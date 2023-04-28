import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LGbox from "../images/lg_box.png";
import "../styles/LgGuide.css";
import backArrow from "../images/backArrow.png";

export const LgGuide = ({ signUserOut }) => {
  const navigate = useNavigate();
  const [shortGuide, setShortGuide] = useState(false);

  const onHandleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='sign__out'>
            <button className='signOut--sendMessage__button' onClick={signUserOut}>
              Sign Out
            </button>
            <Link to='/'>
              <button className='signOut--sendMessage__button'>Home</button>
            </Link>
            <button onClick={onHandleGoBack} className=' back__container back__button'>
              <span>
                <img className='back__arrow' src={backArrow} />
                <p className='back__p'>Back</p>
              </span>
            </button>
          </div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>LG GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "70vh" }}>
              <div className='row__container'>
                <div>
                  <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                    Short Guide
                  </button>
                  <Link to='/calibration-guide/lg/full-guide'>
                    <button style={{ color: "white" }} className='button__guides animation'>
                      Full Guide
                    </button>
                  </Link>

                  <button style={{ color: "white" }} className='button__guides animation'>
                    Manual Guide
                  </button>
                  <div className='row__h4'>
                    <h4>Report Example</h4>
                    <h4 style={{ marginLeft: "2rem" }}>Word Document Guide</h4>
                  </div>
                </div>
                <img className='lg__box' alt='LG TV Box' src={LGbox} />
              </div>
            </div>
          </div>
        </div>
      )}

      {shortGuide && (
        <div>
          <div className='sign__out'>
            <button className='signOut--sendMessage__button' onClick={signUserOut}>
              Sign Out
            </button>
            <Link to='/'>
              <button className='signOut--sendMessage__button'>Home</button>
            </Link>
            <button
              onClick={() => {
                setShortGuide(false);
              }}
              className=' back__container back__button'
            >
              <span>
                <img className='back__arrow' src={backArrow} />
                <p className='back__p'>Back</p>
              </span>
            </button>
          </div>
          <h2 style={{ textAlign: "center" }}>Short Guide</h2>
          <div style={{ marginTop: "1rem" }}>
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
                  <span className='li__color'>After the reading is finished, on the laptop click "Find TV"</span>
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
        </div>
      )}
    </div>
  );
};
