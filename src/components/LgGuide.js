import React, { useState } from "react";
import { Link } from "react-router-dom";
import LGbox from "../images/lg_box.png";
import "../styles/LgGuide.css";
import LG_Report from "../documents/LG_Report.pdf";
import PdfDownloader from "./PdfDownloader";

export const LgGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>LG GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "80vh" }}>
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
                      Manual Guide
                    </button>
                  </div>
                  <div className='row__h4'>
                    <PdfDownloader fileName='LG Report Example' fileUrl={LG_Report} />

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
          <h2 style={{ textAlign: "center" }}>Short Guide</h2>
          <div style={{ marginTop: "1rem" }}>
            <div className='p__container'>
              <ol className='list-decimal'>
                <li>
                  <span className='li__color'>Turn on the TV and select the language/country.</span>
                </li>
                <li>
                  <span className='li__color'>Select "exit first user" and confirm by selecting "yes".</span>
                </li>
                <li>
                  <span className='li__color'>Open settings, go to picture mode and select "Expert Bright".</span>
                </li>
                <li>
                  <span className='li__color'>Turn off energy saving.</span>
                </li>
                <li>
                  <span className='li__color'>Go back to HDMI 1 and start the first reading.</span>
                </li>
                <li>
                  <span className='li__color'>After the reading is finished, on the laptop click "Find TV".</span>
                </li>
                <li>
                  <span className='li__color'>When the unique code shows up on the TV screen, type it into the laptop.</span>
                </li>
                <li>
                  <span className='li__color'>Leave the only option selected as "Expert Day" and start the last reading.</span>
                </li>
                <li>
                  <span className='li__color'>After the reading is finished, create the report.</span>
                </li>
                <li>
                  <span className='li__color'>Go to every HDMI and change it's picture setting to "Expert Bright".</span>
                </li>
                <li>
                  <span className='li__color'>Go back to HDMI 1 and start the second reading.</span>
                </li>
                <li>
                  <span className='li__color'>Go to advanced settings and select "Apply to all inputs".</span>
                </li>
                <li>
                  <span className='li__color'>Change the language to dutch.</span>
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
