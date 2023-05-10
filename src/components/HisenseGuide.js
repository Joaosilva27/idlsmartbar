import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PdfDownloader from "./PdfDownloader";
import HisenseBox from "../images/HisenseBox.png";
import HisenseReport from "../documents/Hisense_Report.pdf";

export const HisenseGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>HISENSE GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "70vh" }}>
              <div className='row__container'>
                <div style={{ marginTop: "2rem" }}>
                  <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                    Short Guide
                  </button>
                  <Link to='/calibration-guide/lg/full-guide'>
                    <button style={{ color: "white" }} className='button__guides animation'>
                      Full Guide
                    </button>
                  </Link>

                  <Link to='/calibration-guide/hisense/manual'>
                    <button style={{ color: "white" }} className='button__guides animation'>
                      Manual Guide
                    </button>
                  </Link>

                  <div className='row__h4'>
                    <PdfDownloader fileName='Hisense Report Example' fileUrl={HisenseReport} />

                    <h4 style={{ marginLeft: "2rem" }}>Word Document Guide</h4>
                  </div>
                </div>
                <img className='lg__box' alt='LG TV Box' src={HisenseBox} />
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
                <ol>
                  <li>
                    <span className='li__color'>
                      The Phillips TV has a different step than any other TV, we connect the HDMI cable, the power cable, but we will only connect the
                      LAN cable later on
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>Turn the TV on and select "English" or "Dutch" as the language</span>
                  </li>
                  <li>
                    <span className='li__color'>Skip the Pairing by pressing "OK" on the TV remote</span>
                  </li>
                  <li>
                    <span className='li__color'>Select "Later"</span>
                  </li>
                  <li>
                    <span className='li__color'>Accept Google's Terms of Service &#8594; Accept Google Services</span>
                  </li>
                  <li>
                    <span className='li__color'>Press the "right" arrow on the TV remote to navigate through this screen</span>
                  </li>
                  <li>
                    <span className='li__color'>Select "The Netherlands" &#8594; "Home Use" &#8594; "Later" &#8594; "Continue"</span>
                  </li>
                  <li>
                    <span className='li__color'>When it shows "Updating Apps" on the screen, we can now connect the LAN cable to the TV</span>
                  </li>
                  <li>
                    <span className='li__color'>Select "Noted" &#8594; "Finish"</span>
                  </li>
                  <li>
                    <span className='li__color'>Once the TV is ready, press the "Sources/Input" button on the remote and go to HDMI1</span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Start the first reading &#40;if a pop-up appears regarding the "Quick Picture Settings", select "Later"&#41;
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Once the reading is finished, press the "Menu" button on the TV remote and select "Frequent Settings"
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Scroll all the way down and select "All Settings" &#8594; "Picture" &#40;if a "ECO Reminder" pop-up appears, select "OK"&#41;
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Select "AI Picture Style" &#8594; "Calman" &#40;once again if "ECO Reminder" shows up, press "OK"&#41;
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Now that "Calman" is selected, press the green button on your TV Remote. &#40;There are 4 colored buttons. Red, green, yellow
                      and blue&#41;
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>Select "Auto" and type the IP Address on the laptop &#8594; "Find Phillips TV"</span>
                  </li>
                  <li>
                    <span className='li__color'>Once it's connected, leave only "SDR Calibration" selected, and click "Start AutoCal"</span>
                  </li>
                  <li>
                    <span className='li__color'>!!!TO-DO: FINISH WRITING LAST STEPS.!!! </span>
                  </li>
                </ol>
              </div>
              <img className='lg__box' alt='Sony TV Box' src={HisenseBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
