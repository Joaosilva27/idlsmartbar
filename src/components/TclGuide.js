import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import TclBox from "../images/tclBox.png";
import TclReport from "../documents/Tcl_Report.pdf";
import TclTemplate from "../documents/Tcl_Template.docx";
import PdfDownloader from "./PdfDownloader";

export const TclGuide = () => {
  const [shortGuide, setShortGuide] = useState(false);

  return (
    <div>
      {!shortGuide && (
        <div>
          <div className='lg__container'>
            <h1 style={{ textAlign: "center" }}>TCL</h1>
            <div style={{ display: "flex", alignItems: "center", height: "75vh" }}>
              <div className='row__container'>
                <div style={{ marginTop: "2rem" }}>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => setShortGuide(true)} style={{ color: "white" }} className='button__guides animation'>
                      Short Guide
                      <br></br>
                      <p style={{ backgroundColor: "#1b171c", fontSize: "1rem" }}>&#40;automatic&#41;</p>
                    </button>

                    <Link to='/calibration-guide/tcl/manual'>
                      <button style={{ color: "white" }} className='button__guides animation'>
                        Manual Guide
                      </button>
                    </Link>
                  </div>

                  <div className='row__h4'>
                    <PdfDownloader fileName='TCL Report Example' fileUrl={TclReport} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img className='lg__box' alt='LG TV Box' src={TclBox} />
                  <PdfDownloader fileName='TCL Template' fileUrl={TclTemplate} />
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
              <img className='lg__box' alt='Hisense TV Box' src={TclBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
