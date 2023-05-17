import React from "react";
import PdfDownloader from "./PdfDownloader";
import SonyBox from "../images/sonyTV.png";
import SonyReport from "../documents/Sony_Report.pdf";

export const SonyManual = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>SONY MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol>
              <li>
                <span className='li__color'>
                  Start off by following the same steps as the Automatic Calibration until the step where we edit and select all HDMI inputs
                  &#40;Short Guide: Step 12&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>Start the first reading with the 'Color Management' enabled on Calman</span>
              </li>
              <li>
                <span className='li__color'>
                  Press the 'Settings' button on the TV Remote &#8594; 'Picture Settings ' &#8594; 'Picture Mode' &#8594; 'Custom'
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Now we must turn off the picture filter settings. &#40;In order: 'Light Sensor', 'Smooth Gradation', 'Motionflow', 'Film Mode', 'HDR
                  Mode'&#41; <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE1:</span> Please make sure to always turn off Motionflow regardless of the TV being
                  Automatic/Manual. This is a crucial step in order to get a perfect calibration. While we can leave all the other settings ON and
                  still achieve good results, if we leave the 'Motionflow' ON we will never have an ideal calibration.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>Set the 'Colour Space' to 'sRGB/B.T.709' and now we can start with the usual manual procedure.</span>
              </li>
              <li>
                <span className='li__color'>
                  Instead of measuring the 'Contrast' yourself, set it to 84.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>OPTINAL READING NOTE1:</span> You will notice that even if you try changing the 'Contrast' values, the
                  bars will never change, that's due to our 'Picture Mode' being 'Custom'. We could technically change it to 'Movie' and you'd see the
                  bars actually changing as they should, however the 'Cinema' picture mode may cause some issues with our 'Gamma', unless the TV model
                  is 'XR'. Nevertheless, please use always 'Custom' in order to avoid any unnecessary problems.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>
                  Once again, instead of measuring the 'Brightness Pattern' &#40;Black Level&#41; ourselves, we set it to 54.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>OPTIONAL READING NOTE2:</span> The reason why we leave 'Black Level' as 54 is to create a balance in the
                  black colors. In most SONY models we cannot see the Bar 16, only until 17. However this doesn't necessarily mean that we should
                  leave the 'Black Level' to as close to 16 as we can. People who are unknowledgeable with calibration will think that setting it to
                  100 would be right, but that's not the case. It doesn't matter which model or TV brand, if we have, let's say 50 as 'Black Level',
                  and set it to it's maximum value and still cannot see the bar 16, we should either leave it as the default value or change it just a
                  bit. We can indeed leave it as 100 and achieve a 'good' result sheet, but the actual picture quality would be tremendously bad. If
                  the client watches a dark-colored movie instead of one with vivid colors, for example a Horror movie, the image will look grey/foggy
                  instead of dark/black.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>
                  Measure the 'Gamma' and change the value until the result is good. &#40;Most of the times the default value will be good enough
                  already&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>Measure the 'Luminance' &#40;Brightness&#41; and set it close to 230 as you possibly can.</span>
              </li>
              <li>
                <span className='li__color'>
                  Scroll down all the way down, select 'Adv. colour adjustment' &#8594; 'Adv. colour temperature: Basic' and start doing the White
                  Balance. &#40;RGB-Gain is 80 / RGB-Bias is 30&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After finishing calibrating the White Balance, skip the Color Management step and go straight to the last Calman page where we do
                  the last reading and start a 'Series Reading'. &#40;If the colors are good, skip to the last step, otherwise keep reading.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  If the colors aren't good, go to 'Settings' &#8594; 'Picture Settings' &#8594; 'Adv. colour adjustment' &#8594; 'Per color
                  adjustment'. &#40;Here we can calibrate our colors by playing with the 'HUE' and 'Saturation' values of each color. The easiest way
                  to calibrate colors this way is to do a 'Continuous Reading' on the last page and changing each color values until all of them are
                  below the yellow line.&#41;{" "}
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Apply all the 'Picture Settings' from HDMI1 to the other HDMI's the same way we do it in the Automatic Calibration, write both TV
                  Reports and change the language to Dutch.
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='Hisense E7 TV Box' src={SonyBox} />
            <PdfDownloader fileName='Sony Report' fileUrl={SonyReport} />
          </div>
        </div>
      </div>
    </div>
  );
};
