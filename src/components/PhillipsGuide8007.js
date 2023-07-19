import React from "react";
import { Link } from "react-router-dom";
import PdfDownloader from "./PdfDownloader";
import PhillipsBoxLED from "../images/PhillipsBoxLed.png";
import HisenseE7Report from "../documents/Hisense_Report.pdf";

export const PhillipsGuide8007 = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>PHILLIPS 8007 MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol className='list-decimal'>
              <li>
                <span className='li__color'>Select English or Dutch as the language.</span>
              </li>
              <li>
                <span className='li__color'>Scroll all the way down and select 'Skip' &#8594; 'Accept' &#8594; 'Accept'.</span>
              </li>
              <li>
                <span className='li__color'>
                  Use the 'right arrow' button to navigate through this screen and select 'Netherlands' as the country.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Select 'Home' &#8594; 'Yes' &#8594; 'Off' &#8594; 'Cable' &#8594; 'Ziggo' &#8594; 'Abort' &#8594; 'Skip' &#8594; 'Next'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Accept the terms of service &#8594; 'OK' &#8594; 'OFF' &#40;You should not consent to anything without client's consultation&#41;
                  &#8594; 'FINISH'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Press the 'Sources' button, go to HDMI1 and start the first reading with 'Color Management' enabled on Calman.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Press the 'MENU' button &#40;Last button on the TV remote&#41; &#8594; 'Settings' &#8594; 'Device Preferences' &#8594; 'Picture'
                  &#8594; 'Picture Mode' &#8594; 'User' &#8594; 'OK'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Select 'Advanced Video' and make sure all picture filters are turned off. &#40;'DNR', 'MPEG NR', 'Adaptive Luna Control', 'Local
                  Contrast Control'.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back and select 'Color Temperature' &#8594; 'Warm'. &#40;If it was already 'Warm' by default, leave it as it is.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  You can now start with the usual manual procedures. Start with 'Contrast Pattern', followed by 'Brightness Pattern'
                  &#40;Brightness&#41;, 'Gamma' and 'Luminance' &#40;Backlight&#41;.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  We can now start with the White Balance. Scroll down and select 'Colour Tuner' and do this procedure using 'Gain' and 'Offset'
                  menus.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  You can now skip to the last Calman page and start the last 'Series Reading', and afterwards begin the Color Management by playing
                  with 'HUE', 'Saturation' and 'Brightness' values of each color. The easiest way to calibrate the colors this way is to do a
                  continuous reading on the last reading page and change both values until each color is below the yellow line.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After you are done with Color Management and finished the last reading, write both TV reports and change the language to Dutch by
                  pressing the 'Home' button → 'Settings' → 'Device Preferences' → 'Language' → 'Nederlands'.
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='Hisense E7 TV Box' src={PhillipsBoxLED} />
            <PdfDownloader fileName='Phillips LED 8007 Report' fileUrl={HisenseE7Report} />
          </div>
        </div>
      </div>
    </div>
  );
};
