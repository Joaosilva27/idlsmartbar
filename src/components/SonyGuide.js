import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PdfDownloader from "./PdfDownloader";
import SonyBox from "../images/sonyTV.png";
import SonyPDF from "../documents/Sony_Report.pdf";
import SonyTemplateColors from "../documents/Sony_Template_Colors.docx";
import SonyTemplateNoColors from "../documents/Sony_Template_NoColor.docx";
import "../styles/SonyGuide.css";

export const SonyGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>SONY GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "75vh" }}>
              <div className='row__container'>
                <div>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                      Short Guide
                      <br></br>
                      <p style={{ backgroundColor: "#1b171c", fontSize: "1rem" }}>&#40;automatic&#41;</p>
                    </button>

                    <Link to='/calibration-guide/sony/manual'>
                      <button style={{ color: "white" }} className='button__guides animation'>
                        Manual Guide
                      </button>
                    </Link>
                  </div>

                  <div className='row__h4'>
                    <PdfDownloader fileName='Sony Report Example' fileUrl={SonyPDF} />

                    <h4 style={{ marginLeft: "2rem" }}>Word Document Guide</h4>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img className='lg__box' alt='LG TV Box' src={SonyBox} />
                  <PdfDownloader fileName='Sony Template (with Colors)' fileUrl={SonyTemplateColors} />
                  <PdfDownloader fileName='Sony Template (without Colors)' fileUrl={SonyTemplateNoColors} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {shortGuide && (
        <div>
          <h2 style={{ textAlign: "center" }}>Short Guide</h2>
          <div style={{ marginTop: "1rem" }}>
            <div className='p__container'>
              <div className='short__guide__container'>
                <ol className='list-decimal'>
                  <li>
                    <span className='li__color'>Turn on the TV and select English or Dutch as the language.</span>
                  </li>
                  <li>
                    <span className='li__color'>Select "Netherlands" &#8594; "Set up basic TV".</span>
                  </li>
                  <li>
                    <span className='li__color'>Scroll all the way down and select "Skip".</span>
                  </li>
                  <li>
                    <span className='li__color'>Accept the terms of service.</span>
                  </li>
                  <li>
                    <span className='li__color'>Once the TV finishes loading, select "Start".</span>
                  </li>
                  <li>
                    <span className='li__color'>Scroll all the way down and select "Agree All" and "Proceed".</span>
                  </li>
                  <li>
                    <span className='li__color'>Agree to the Privacy Notice Terms of Service.</span>
                  </li>
                  <li>
                    <span className='li__color'>Type 1 2 3 4 as the Parental Lock, and type it again to confirm it.</span>
                  </li>
                  <li>
                    <span className='li__color'>Leave Power Saving as "Off" &#8594; "Skip" &#8594; "Next" &#8594; "Table-Top Stand".</span>
                  </li>
                  <li>
                    <span className='li__color'>Skip the "Acoustic Auto Calibration" &#8594; "Next" &#8594; "OK" &#8594; "Complete".</span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Once the TV finishes it's setup, press the source/input button on the TV Remote and select "Edit".
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>Select all of the HDMI's by pressing "OK" for each, and select "Close".</span>
                  </li>
                  <li>
                    <span className='li__color'>Go to HDMI1 and on the laptop start the first reading.</span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Once the first reading is finished, press the "Home" button, scroll all the way to the right and select "Calman for Bravia".
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>Press "OK", write the "IP Address on the laptop and click "Find SONY TV".</span>
                  </li>
                  <li>
                    <span className='li__color'>Unselect "PRO2" and leave only "PRO1" selected.</span>
                  </li>
                  <li>
                    <span className='li__color'>Click "Start AutoCal" to start the last reading.</span>
                  </li>
                  <li>
                    <span className='li__color'>Once the last reading is finished, press the "Settings" button &#8594; "Picture Settings".</span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Copy every single setting from HDMI1 to the rest of the HDMI's, and make sure to turn off "Motionflow" in all of them.
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Press the "Settings" button &#8594; select "Settings" &#8594; "System" &#8594; "Language" &#8594; "Netherlands".
                    </span>
                  </li>
                </ol>
              </div>
              <img className='lg__box' alt='Sony TV Box' src={SonyBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
