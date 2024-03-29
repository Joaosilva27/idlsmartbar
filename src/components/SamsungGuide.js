import React from "react";
import "../styles/SamsungGuide.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PdfDownloader from "./PdfDownloader";
import SamsungBox from "../images/samsungbox.jpeg";
import SamsungReport from "../documents/Samsung_Report.pdf";
import SamsungTemplate from "../documents/Samsung_Template.docx";

export const SamsungGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='samsung__container'>
            <h1 style={{ textAlign: "center" }}>SAMSUNG GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "75vh" }}>
              <div className='row__container'>
                <div style={{ marginTop: "3rem" }}>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                      Short Guide
                      <br></br>
                      <p style={{ backgroundColor: "#1b171c", fontSize: "1rem" }}>&#40;automatic&#41;</p>
                    </button>
                    <Link to='/calibration-guide/lg/full-guide'>
                      <button style={{ color: "white" }} className='button__guides animation'>
                        Full Guide
                        <br></br>
                        <p style={{ backgroundColor: "#1b171c", fontSize: "1rem" }}>&#40;automatic&#41;</p>
                      </button>
                    </Link>

                    <button style={{ color: "white" }} className='button__guides animation'>
                      Full Manual Guide
                    </button>

                    <Link to='/calibration-guide/samsung/manual/short'>
                      <button style={{ color: "white" }} className='button__guides animation'>
                        Short Manual Guide
                      </button>
                    </Link>
                  </div>
                  <div className='row__h4'>
                    <PdfDownloader fileName='Samsung Report Example' fileUrl={SamsungReport} />

                    <h4 style={{ marginLeft: "2rem" }}>Word Document Guide</h4>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img style={{ marginBottom: "-4rem" }} className='lg__box' alt='Samsung TV Box' src={SamsungBox} />
                  <PdfDownloader fileName='Samsung Template' fileUrl={SamsungTemplate} />
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
              <ol className='list-decimal'>
                <li>
                  <span className='li__color'>Turn on the TV and go through all the steps until network connection.</span>
                </li>
                <li>
                  <span className='li__color'>When it gets to network connection, wait 1 to 2 seconds and cancel.</span>
                </li>
                <li>
                  <span className='li__color'>Get the IP Address from the TV and type it on the laptop.</span>
                </li>
                <li>
                  <span className='li__color'>Finish the setup and go to HDMI 1.</span>
                </li>
                <li>
                  <span className='li__color'>Start first reading.</span>
                </li>
                <li>
                  <span className='li__color' n>
                    After the reading is finished, go to settings.
                  </span>
                </li>
                <li>
                  <span className='li__color'>Go to network settings and enable IP remote.</span>
                </li>
                <li>
                  <span className='li__color'>On the laptop, select "Find TV".</span>
                </li>
                <li>
                  <span className='li__color'>Back to the settings, turn off the Energy Saving option.</span>
                </li>
                <li>
                  <span className='li__color'>
                    Go to Picture settings &#8594; Expert settings &#8594; Put Sharpness on 5 and on colors, select custom.
                  </span>
                </li>
                <li>
                  <span className='li__color'>Go back to HDMI 1 and start the second reading.</span>
                </li>
                <li>
                  <span className='li__color'>Create the TV report.</span>
                </li>
                <li>
                  <span className='li__color'>Change the language to dutch.</span>
                </li>
              </ol>
              <img className='samsung__box' alt='Samsung TV Box' src={SamsungBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
