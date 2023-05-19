import React from "react";
import { Link } from "react-router-dom";
import PhillipsBoxOled from "../images/PhillipsBoxOled.png";
import PdfDownloader from "./PdfDownloader";
import HisenseE7Report from "../documents/Hisense_Report.pdf";

export const PhillipsManualOled = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>PHILLIPS OLED MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol>
              <li>
                <span className='li__color'>
                  Follow the identical steps as for the Automatic Calibration up until the point where we navigate to HDMI1 &#40;Short Guide: Step
                  10.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>Start the first reading with the 'Color Management' enabled on Calman.</span>
              </li>
              <li>
                <span className='li__color'>
                  Press the 'Menu' button &#8594; 'Frequent Settings' &#8594; 'All Settings' &#8594; 'Picture' &#8594; 'AI Picture Style' &#8594;
                  'Calman' &#8594; 'Manual' &#40;If we skip this step, the color management setting will be greyed out and unavailable afterward.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture' settings menu &#8594; 'Advanced' &#8594; 'Motion' &#8594; 'Motion Styles' &#8594; 'OFF'.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Advanced' settings menu &#8594; 'Contrast' &#8594; 'Video Contrast' and start doing the 'Contrast Pattern' in
                  Calman. &#40;If the bars do not appear even after changing the contrast value, set it to 80.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Contrast' settings menu &#8594; 'Light Boost' &#8594; 'Medium'.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE1</span>: The reason why we follow this step is so we can achieve around 230 Luminance, otherwise,
                  the final result would be less than half that.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture' settings menu &#8594; 'Black Level' and start measuring the 'Brightness Pattern' in Calman.
                  <br></br>
                  <br></br>
                  &#40;
                  <span className='note'>NOTE2:</span> Do not keep it in that state if you can still not see the Bar 16 even after setting it to 100.
                  As soon as you see the Bar 17, exit. On the 'OPTINAL READING NOTE2' in the&nbsp;
                  <Link to='/calibration-guide/sony/manual'>
                    <span className='note' style={{ textDecoration: "underline" }}>
                      Sony Manual Guide
                    </span>
                  </Link>
                  <span>, I go into further details about this.</span>
                  &#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture'settings menu &#8594; 'Advanced' &#8594; 'Contrast' &#8594; 'Gamma' 'Measure the Gamma' and start
                  measuring/setting the 'Gamma'.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>OPTIONAL NOTE1:</span> For a graph with easier readability, right click on the Gamma graph in the Calman
                  program &#8594; 'Properties' and on the first option 'Chart Type' select 'Gamma Point'.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture' settings menu &#8594; 'OLED Contrast' and start measuring/setting the Luminance.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture' settings menu &#8594; 'Advanced' &#8594; 'Colour' &#8594; 'Whitepoint Alignment' &#8594; '2 Points' and
                  start the usual White Balance process. &#40;'WP' is Gain&#40;80&#41; and 'BL' is Offset&#40;30.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After finishing the White Balance, skip the 'Color Management' page and go to the last Calman page where you can start the last
                  'Series Reading'. &#40;If the colors are good, skip the next step. Otherwise, keep reading.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  If the colors are not good, go back to the 'Picture' settings menu &#8594; 'Advanced' &#8594; 'Colour' &#8594; 'Colour Control' and
                  start the usual Color Management process by playing with the 'HUE' and 'Saturation' values of each color.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>TIP:</span> The easiest way to calibrate the colors this way is to do a continuous reading on the last
                  reading page and change both values until each color is below the yellow line.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  Go back to the 'Picture' settings menu &#8594; 'Sharpness' and set it to your liking by comparing it to the family picture provided
                  by Calman.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Write both TV Reports on the laptop and lastly change the language to Dutch by going to 'All Settings' &#8594; 'Region and
                  Languages' &#8594; 'Languages' &#8594; 'Menu Language' &#8594; 'Nederlands'.
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='Hisense E7 TV Box' src={PhillipsBoxOled} />
            <PdfDownloader fileName='Phillips OLED Report' fileUrl={HisenseE7Report} />
          </div>
        </div>
      </div>
    </div>
  );
};
