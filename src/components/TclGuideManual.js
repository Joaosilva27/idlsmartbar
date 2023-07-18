import React from "react";
import PdfDownloader from "./PdfDownloader";
import TclBox from "../images/tclBox.png";
import TclReport from "../documents/Tcl_Report.pdf";

export const TclGuideManual = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>TCL MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol>
              <li>
                <span className='li__color'>
                  Start off by selecting the Language as 'English' or 'Dutch', and select 'Netherlands' as your region.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Select 'Set up basic TV' &#8594; scroll all the way down and select 'Skip' &#8594; 'Accept' &#8594; 'Home' &#8594; 'Skip' &#8594;
                  'Agree' &#8594; 'Agree' &#8594; 'OK' &#8594; 'Allow'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Pair the TV remote by pressing the 'OK' and 'Home' button at the same time for 3 seconds or more, or simply select 'Skip'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Navigate to HDMI1 and start the first 'Series' reading with Color Management enabled on Calman.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE1:</span> If you are unable to see any HDMI's, go to 'Inputs/Sources' &#8594; 'Edit' and select all
                  of the inputs. &#40;Same procedure as you do in all SONY models.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  <span style={{ textDecoration: "underline" }}>If your TV model is 85 inches or more, follow this step, otherwise skip it.</span>{" "}
                  Press the 'Settings' button, &#8594; 'Settings' &#8594; 'Display' &#8594; 'Sound and Picture' &#8594; 'Adaptive Brightness' &#8594;
                  'OFF'. &#40;If you are unable to find this setting, please just keep reading.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Press the 'Settings' button &#8594; select 'Settings' &#8594; 'Display' &#8594; 'Sound and Picture' &#8594; 'Picture Preset'.
                  &#8594; 'Movie'.
                </span>
              </li>
              <li>
                <span className='li__color'>Go back and select 'Apply All Picture Mode' &#8594; 'All Sources'.</span>
              </li>
              <li>
                <span className='li__color'>
                  Now start turning off all picture filter settings. Navigate to 'Advanced' &#8594; 'Brightness Settings' and turn off 'Black Stretch'
                  and 'Dynamic Brightness'.
                </span>
              </li>
              <li>
                <span className='li__color'>Select 'Local Contrast' &#8594; 'Low'.</span>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Advanced' settings menu &#8594; 'Clarity' &#8594; 'Digital Noise Reduction' &#8594; 'OFF'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back once again to 'Advanced' settings menu &#8594; 'Colour' &#8594; 'Colour Temperature' and be sure to set it to 'Warm' &#40;If
                  it's already 'Warm' just leave it as it is.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  You can now start with the usual manual procedures. Do 'Contrast Pattern', 'Brightness Pattern' &#40;Black Level&#41; and 'Gamma'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Navigate to 'Advanced' settings menu, &#8594; 'Expert Calibration' &#8594; 'White Balance' &#8594; '2 Points' &#8594; 'OK' and start
                  doing the White Balance.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After finishing the White Balance, skip the Color Management and go straight to Calman's last page where you can begin the last
                  'Series' reading. &#40;If the colors are proper, skip the next step, otherwise keep reading.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture' settings &#8594; 'Advanced Settings' &#8594; 'Expert Settings' &#8594; 'Colour Space' &#8594; 'Custom' and
                  start the Color Management procedure.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE2:</span> Due to poor and cheap build quality, it is only possible to calibrate the main colors
                  &#40;<span style={{ color: "red" }}>Red</span>, <span style={{ color: "green" }}>Green</span>, &nbsp;
                  <span style={{ color: "#99caff" }}>Blue</span>&#41;. This means you do not need to touch the rest of the colors.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>Go back to the 'Picture' settings menu &#8594; 'Sharpness' and set it to your liking.</span>
              </li>
              <li>
                <span className='li__color'>
                  Write both TV reports and change the language to Dutch by navigating to 'Settings' &#8594; 'System' &#8594; 'Language' &#8594;
                  'Nederlands'.
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='TCL TV Box' src={TclBox} />
            <PdfDownloader fileName='TCL Report' fileUrl={TclReport} />
          </div>
        </div>
      </div>
    </div>
  );
};
