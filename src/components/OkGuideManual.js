import React from "react";
import PdfDownloader from "./PdfDownloader";
import OkBox from "../images/OkBox.png";
import OkReport from "../documents/Ok_Report.pdf";

export const OkGuideManual = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>OK MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol>
              <li>
                <span className='li__color'>Start off by selecting the Language as either English or Dutch and the Location as 'Netherlands'.</span>
              </li>
              <li>
                <span className='li__color'>
                  Press 'OK to skip the remote pairing or pair it by pressing the lower volume button and the downside arrow at the same time.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Select 'Skip' &#8594; scroll all the way down and select 'Skip' &#8594; 'Accept' &#8594; 'Yes' &#8594; 'No' &#8594; 'Android TV'.
                </span>
              </li>
              <li>
                <span className='li__color'>Use the right arrow on the remote to navigate through this menu &#8594; 'Accept'.</span>
              </li>
              <li>
                <span className='li__color'>Choose '1 2 3 4' as the input password, and write it one more time to confirm it.</span>
              </li>
              <li>
                <span className='li__color'>Select 'Home' &#8594; 'Yes' &#8594; 'Off' &#8594; 'Cable' &#8594; 'Ziggo' &#8594; 'Skip Scan'.</span>
              </li>
              <li>
                <span className='li__color'>Select HDMI1 and start the first reading with Color Management enabled on Calman.</span>
              </li>
              <li>
                <span className='li__color'>Press the 'Settings' button &#8594; 'Picture' &#8594; 'Picture Mode' &#8594; 'User' &#8594; 'OK'.</span>
              </li>
              <li>
                <span className='li__color'>
                  Navigate to 'Advanced Video' and turn off all the filters. &#40;'DNR', 'MPEG NR', 'Adaptive Luma Control', 'DI Film Mode'.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back and select 'Color Temperature' &#8594; 'Warm'. &#40;If it was already 'Warm' by default, leave it as it is.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  You can now start with the usual manual procedures. Start with 'Contrast Pattern', followed by 'Brightness
                  Pattern'&#40;Brightness&#41; and 'Luminance'&#40;Backlight.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Inside 'Picture' settings &#8594; 'Color Tuner' &#8594; enable it by pressing 'OK' and start the White Balance procedure.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  You can now skip to the last Calman page and start the last 'Series Reading', and afterwards begin the Color Management by playing
                  with the 'HUE' and 'Saturation' values of each color. The easiest way to calibrate the colors this way is to do a continuous reading
                  on the last reading page and change both values until each color is below the yellow line.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE1:</span> If a situation happens where you choose one color, start a 'Continuous Reading', and the
                  color disappears after a few seconds, follow these steps to fix the problem: Stop the reading &#8594; Click on the color graph
                  &#8594; Select the color on the bottom left of the screen &#8594; On the top right of the screen, click on the arrow next to
                  'PatternForge' &#8594; 'Window Size' &#8594; 'Full 100%'.&#41;
                  <br></br>
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  After you are done with Color Management, write both TV reports and change the language to Dutch by pressing the 'Home' button
                  &#8594; 'Settings' &#8594; 'Device Preferences' &#8594; 'Language' &#8594; 'Nederlands'.
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='OK TV Box' src={OkBox} />
            <PdfDownloader fileName='OK Report' fileUrl={OkReport} />
          </div>
        </div>
      </div>
    </div>
  );
};
