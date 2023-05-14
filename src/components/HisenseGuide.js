import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PdfDownloader from "./PdfDownloader";
import HisenseBox from "../images/HisenseBox.png";
import HisenseReport from "../documents/Hisense_Report.pdf";
import HisenseTemplate from "../documents/Hisense_Template.docx";

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
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img className='lg__box' alt='LG TV Box' src={HisenseBox} />
                  <PdfDownloader fileName='Hisense Template' fileUrl={HisenseTemplate} />
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
                    <span>test</span>
                  </li>
                </ol>
              </div>

              <img className='lg__box' alt='Hisense TV Box' src={HisenseBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
