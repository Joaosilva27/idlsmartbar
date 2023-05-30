import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PdfDownloader from "./PdfDownloader";
import OkBox from "../images/OkBox.png";
import OkReport from "../documents/Ok_Report.pdf";
import OkTemplate from "../documents/Ok_Template.doc";

export const OkGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>OK GUIDE</h1>
            <div style={{ display: "flex", alignItems: "center", height: "70vh" }}>
              <div className='row__container'>
                <div style={{ marginTop: "2rem" }}>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                      Short Guide
                      <br></br>
                      <p style={{ backgroundColor: "#1b171c", fontSize: "1rem" }}>&#40;automatic&#41;</p>
                    </button>

                    <Link to='/calibration-guide/ok/manual'>
                      <button style={{ color: "white" }} className='button__guides animation'>
                        Manual Guide
                      </button>
                    </Link>
                  </div>

                  <div className='row__h4'>
                    <PdfDownloader fileName='OK Report Example' fileUrl={OkReport} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img style={{ marginBottom: "-2rem" }} className='lg__box' alt='OK TV Box' src={OkBox} />
                  <PdfDownloader fileName='OK Template' fileUrl={OkTemplate} />
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

              <img className='lg__box' alt='OK TV Box' src={OkBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
