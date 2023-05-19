import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhillipsBox from "../images/phillipsTV.png";
import PhillipsReport from "../documents/Phillips_Report.pdf";
import PhillipsTemplateLED from "../documents/Phillips_Template_Led.docx";
import PhillipsTemplateOLED from "../documents/Phillips_Template_Oled.docx";
import PdfDownloader from "./PdfDownloader";
import "../styles/PhillipsGuide.css";

export const PhillipsGuide = ({ signUserOut }) => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>PHILLIPS GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "80vh" }}>
              <div className='row__container'>
                <div style={{ marginTop: "2rem" }}>
                  <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                    Short Guide
                  </button>

                  <Link to='/calibration-guide/phillips/manual'>
                    <button style={{ color: "white" }} className='button__guides animation'>
                      Manual Guide
                    </button>
                  </Link>

                  <div className='row__h4'>
                    <PdfDownloader fileName='Phillips Report Example' fileUrl={PhillipsReport} />

                    <h4 style={{ marginLeft: "2rem" }}>Word Document Guide</h4>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img style={{ marginBottom: "-2rem" }} className='lg__box' alt='LG TV Box' src={PhillipsBox} />
                  <PdfDownloader fileName='Phillips OLED Template' fileUrl={PhillipsTemplateOLED} />
                  <PdfDownloader fileName='Phillips LED Template' fileUrl={PhillipsTemplateLED} />
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
                    <span className='li__color'>
                      Skip the Pairing by pressing "OK" on the TV remote &#40;if the Phillips model is older, skipping is not an option. Simply hold
                      the source button for a few seconds or keep pressing it until the pairing is complete&#41;
                    </span>
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
                    <span className='li__color'>
                      After the calibration is finished, navigate to HDMI2 and press the 'Settings' button &#8594; 'Frequent Settings' &#8594; 'All
                      Settings' &#8594; 'AI Picture Style' &#8594; 'Calman'
                    </span>
                  </li>
                  <li>
                    <span className='li__color'>Repeat the last step for HDMI3 and HDMI4 and write the TV Report</span>
                  </li>
                  <li>
                    <span className='li__color'>
                      Change the language to Dutch by pressing the 'Settings' button &#8594; 'Frequent Settings' &#8594; 'All Settings' &#8594;
                      'Region and Languages' &#8594; 'Languages' &#8594; 'Menu Language' &#8594; 'Nederlands'
                    </span>
                  </li>
                </ol>
              </div>
              <img className='lg__box' alt='Sony TV Box' src={PhillipsBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
