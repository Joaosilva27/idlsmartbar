import React, { useState } from "react";
import { Link } from "react-router-dom";
import LGbox from "../images/lg_box.png";
import "../styles/LgGuide.css";
import LG_Report from "../documents/LG_Report.pdf";

export const LgGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  function downloadPdf() {
    const link = document.createElement("a");
    link.href = LG_Report;
    link.download = "report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      {!shortGuide && (
        <div>
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
                    <h4 onMouseEnter={e => (e.target.style.cursor = "pointer")} onClick={downloadPdf}>
                      Report Example
                    </h4>

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
