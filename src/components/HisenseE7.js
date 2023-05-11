import React from "react";
import HisenseE7Box from "../images/hisense_e7.png";
import PdfDownloader from "./PdfDownloader";
import HisenseE7Report from "../documents/Hisense_Report.pdf";

export const HisenseE7 = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>E7 SERIES MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol>
              <li>
                <span className='li__color'>Start off by selecting the Language as either English or Dutch </span>
              </li>
              <li>
                <span className='li__color'>Press the the 'right arrow' button on the TV remote to skip and select 'Skip'</span>
              </li>
              <li>
                <span className='li__color'>Select 'Netherlands' as the country</span>
              </li>
              <li>
                <span className='li__color'>Select HDMI1 as your 'Primary Input Source'</span>
              </li>
              <li>
                <span className='li__color'>Start the first reading &#40;with color management selected&#41;</span>
              </li>
              <li>
                <span className='li__color'>Press the 'Home' button and the 'top arrow' on the TV remote to navigate to the settings</span>
              </li>
              <li>
                <span className='li__color'>
                  Picture &#8594; Picture Mode &#8594; Cinema Day &#40;if a 'Energy Efficiency Notice' pop-up appears, select 'confirm'&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Scroll all the way down and select 'Picture Mode Settings' &#8594; Apply Picture Settings &#8594; All Sources
                </span>
              </li>
              <li>
                <span className='li__color'>
                  We can now start by turning off every picture filter settings. This includes in order: 'Adaptive Contrast', 'Ultra Smooth Motion',
                  'Noise Reduction', 'MPEG Noise Reduction'
                </span>
              </li>
              <li>
                <span className='li__color'>Start doing the contrast as usual &#40;every bar visible besides the last two&#41;</span>
              </li>
              <li>
                <span className='li__color'>Start the brightness pattern &#40;Brightness setting&#41;</span>
              </li>
              <li>
                <span className='li__color'>
                  Start measuring the luminance &#40;Select the 'Backlight' setting and press the 'down' arrow once on your TV Remote&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After setting the Luminance close to 230 as we can, go back to the settings menu, scroll down and select 'Expert Settings' &#8594;
                  'White Balance' and start doing the White Balance.
                  <br></br>
                  <br></br>
                  &#40;NOTE1: While other TV's have the white balance menu starting with 'Gain' and then 'Offset', Hisense shows the 'Offset' first in
                  the menu. Which means that in the menu the first three R G B colors are 'Offset'&#40;30&#41; and the last three R G B are
                  'Gain'&#40;80&#41; However this is just aestethic, we do the White Balance as every other TV, by starting off with '80' and then
                  '30'&#41;
                  <br></br>
                  <br></br>&#40;NOTE2: This model does not allow for the R G B values to be perfectly balanced, so just try getting the White Balance
                  bars as low as you can &#40;if it goes a bit above the green line that's fine&#41;&#41;{" "}
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After finishing the White Balance, don't do the 'Color Management' and skip straight to the last page where you can do the final
                  reading and start the reading. &#40;With the E7 Model the colors usually come looking great from factory settings. If the results
                  are good, skip to step 16. If they're bad keep following the steps.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Go to 'Settings' &#8594; 'Picture Mode Settings' &#8594; 'Expert Settings' &#8594; 'Color Tuner'. &#40;Here we can do the color
                  management of each color by playing with the 'HUE' and the 'Saturation' values. The easiest way to calibrate the colors this way is
                  to do a continuous reading on the last reading page and change both values until each color is below the yellow line&#41;{" "}
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Inside 'Picture Mode Settings' set the 'Sharpness' to your liking by comparing it with the family picture provided by Calman.
                  Usually 5 is a great value, but set it as it best fits your TV
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Press the 'Input/Sources' button on the TV remote and go to HDMI2 &#8594; 'Settings' &#8594; 'Picture Mode' &#8594; 'Cinema Day'.
                  &#40;Another different feature in Hisense is that once you change the picture mode for HDMI2, it automatically applies it for HDMI3
                  and HDMI4, which means we only do this step for HDMI2.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Write both TV Reports on the laptop and lastly change the language to Dutch by going to 'Settings' &#8594; 'System' &#8594;
                  'Language and Location' &#8594; 'Menu Language' &#8594; 'Netherlands'
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='Hisense E7 TV Box' src={HisenseE7Box} />
            <PdfDownloader fileName='Hisense E7 Report' fileUrl={HisenseE7Report} />
          </div>
        </div>
      </div>
    </div>
  );
};
