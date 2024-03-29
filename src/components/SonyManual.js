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
            <ol className='list-decimal'>
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
                  &#40;<span className='note'>NOTE1:</span> Please, make sure to always turn off Motionflow, regardless of the TV being
                  Automatic/Manual. This is a crucial step in order to get a perfect calibration. While it is possible to leave all the other settings
                  ON and still achieve good results, if we leave the 'Motionflow' ON we will never have an ideal calibration.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>
                  Set the 'Colour Space' to 'sRGB/B.T.709' and now it is possible to start with the usual manual procedure.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  In the 'Brightness' section, navigate to the last setting called 'Adv. contrast enchancer' and set it to 'Medium'. You can now start
                  doing the 'Contrast Pattern'.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>OPTINAL READING NOTE1:</span>&nbsp;The reason why you set this setting to 'Medium', is so you can
                  actually change the 'Contrast' the way you intend to. In the SONY models and a few Samsung TV's the 'Contrast' setting functions as
                  a brightness setting, therefore you cannot see the Calman contrast bars/lines changing. By enabling the 'Adv. contrast enchancer'
                  you are able to see the bars/lines and make a accurate contrast for each individual TV.&#41;
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
                  black colors. In most SONY models we cannot see the Bar 16, it can only be seen until the number 17. However, this does not
                  necessarily mean that we should leave the 'Black Level' to as close to 16 as we can. People who are unknowledgeable regarding
                  calibration guidelines could think that setting it to 100 would be correct, nonetheless that is not the case.
                  <br></br>
                  <br></br>
                  It does not matter, which model or TV brand. For example, if we have, let's say 50 as 'Black Level', and set it to it's maximum
                  value and still cannot see the bar 16, we should either leave it as the default value or slightly change it. We can indeed leave it
                  as 100 and achieve a 'good' result sheet, but the actual picture quality would be tremendously bad. If the client watches a
                  dark-colored movie instead of one with vivid colors, for example, a horror movie, the image will look grey/foggy instead of
                  dark/black.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span className='li__color'>
                  Measure the 'Gamma' and change the value until the result is adequate. &#40;Most of the times the default value will be good enough
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
                  After having finished the White Balance calibration, skip the Color Management step and go straight to the last Calman page, where
                  you will perform the last reading and start a 'Series Reading'. &#40;If the colors are proper, skip to the last step, otherwise keep
                  reading.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  If the colors are not right, go to 'Settings' &#8594; 'Picture Settings' &#8594; 'Adv. colour adjustment' &#8594; 'Per color
                  adjustment'. &#40;Here we can calibrate our colors by playing with the 'HUE' and 'Saturation' values of each color. The easiest way
                  to calibrate colors this way is to do a 'Continuous Reading' on the last page and changing each color values until all of them are
                  below the yellow line.&#41;
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE2:</span>&nbsp;
                  <span className='li__color'>
                    If your SONY model does not have the setting to calibrate colors, this means you either need to create a better White Balance or
                    change your 'Target Exponent' value in Calman settings. &#40;Try either 2.2 or 2.4 and press the 'Enter' key in your keyboard. To
                    access this setting click on the 'Settings' icon on the top-right side of the screen in Calman &#8594; 'Target Exponent' and set
                    it to the value you desire.&#41;
                  </span>
                </span>
              </li>
              <br></br>
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
