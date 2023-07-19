import React from "react";
import PdfDownloader from "./PdfDownloader";
import "../styles/SamsungGuide.css";
import SamsungReport from "../documents/Samsung_Report.pdf";
import SamsungTemplate from "../documents/Samsung_Template.docx";
import SamsungManualBox from "../images/samsungbox.jpeg";

export const SamsungGuideManualShort = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>SAMSUNG SHORT MANUAL GUIDE</h2>
      <div style={{ marginTop: "1rem" }}>
        <div className='p__container'>
          <div className='short__guide__container'>
            <ol className='list-decimal'>
              <li>
                <span className='li__color'>Start off by filling in all the info in the Calman program and finishing the TV setup.</span>
                <br></br>
                <br></br>
                <span style={{ textDecoration: "underline" }}>Do not forget:</span>
                <br></br>
                <br></br>
                <span className='note'>a.</span>&nbsp;
                <span className='li__color'>Since we are doing a manual calibration, choose 'Manual' instead of the TV brand.</span>
                <br></br>
                <br></br>
                <span className='note'>b.</span>&nbsp;
                <span className='li__color'>
                  To know what to write in the 'Model' input box, you can either write the letters you see on the box &#40;e.g.{" "}
                  <span style={{ textDecoration: "underline" }}>'S95C'</span>&#41; or you can find it in the TV label &#40;e.g.{" "}
                  <span style={{ textDecoration: "underline" }}>'QE77S95CAT'</span>.&#41;
                </span>
                <br></br>
                <br></br>
                <span className='note'>c.</span>&nbsp;
                <span className='li__color'>
                  You do not need to connect the LAN cable. &#40;However if you happen to forget about this and you connect the LAN cable, that's
                  totally fine. Connecting or not is the same thing when calibrating a telivision manually, the only difference is the extra menu that
                  will appear for you to connect your TV to the internet which you can just skip.&#41;
                </span>
                <br></br>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  Navigate to HDMI1 and you may now start the first 'Series Reading' with Color Management enabled in Calman.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>OPTIONAL NOTE1:</span>&nbsp;What the 'Series Reading' does is, it activate the camera/eye and cycle
                  through the patterns/colors selected. &#40;Which in your case since you are doing SDR, they're 6 different colors: Red, Green, Blue,
                  Yellow, Cyan and Magenta. If you were doing a HDR calibration there would be a lot more colors.&#41;
                </span>
                <br></br>
                <br></br>
              </li>
              <li>
                <span>
                  After finishing the first reading you can now navigate to 'All Settings' &#8594; 'Picture' &#8594; 'Picture Mode' &#8594; 'Movie'.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>OPTIONAL NOTE2:</span>&nbsp;The reason why we change the 'Picture Mode' to 'Movie' is because it was
                  designed to reproduce colors, contrast and settings that closely align with industry standards used in film production. It aims to
                  provide a more accurate and natural representation of the images being displayed, with better color accuracy and optimized contrast
                  and brightness. While personal preferences may vary from every client, the 'Movie' mode offers a good starting point for a basic
                  calibration which is exactly what we do.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  Navigate to 'General and Privacy' &#8594; 'Power and Energy Saving' &#8594; 'Brightness Optimisation' and turn if off.
                </span>
              </li>
              <li>
                <span className='li__color'>Press the 'Home' button and the 'top arrow' on the TV remote to navigate to the settings.</span>
              </li>
              <li>
                <span className='li__color'>
                  Picture &#8594; Picture Mode &#8594; Cinema Day &#40;if a 'Energy Efficiency Notice' pop-up appears, select 'confirm'.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Scroll all the way down and select 'Picture Mode Settings' &#8594; Apply Picture Settings &#8594; All Sources.
                </span>
              </li>
              <li>
                <span className='li__color'>
                  We can now start by turning off every picture filter settings. This may include: 'Adaptive Contrast', 'Ultra Smooth Motion', 'Noise
                  Reduction', 'MPEG Noise Reduction'.
                </span>
              </li>
              <li>
                <span className='li__color'>Start doing the contrast as usual &#40;every bar visible besides the last two.&#41;</span>
              </li>
              <li>
                <span className='li__color'>Start the brightness pattern &#40;Brightness setting.&#41;</span>
              </li>
              <li>
                <span className='li__color'>
                  Start measuring the luminance &#40;Select the 'Backlight' setting and press the 'down' arrow once on your TV Remote.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  After setting the Luminance close to 230 as we can, go back to the settings menu, scroll down and select 'Expert Settings' &#8594;
                  'White Balance' and start doing the White Balance.
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE1:</span> Hisense displays the 'Offset' first in the menu, while majority of the other TV
                  brands start the white balance menu with 'Gain' and then 'Offset. Therefore, the first three R G B colors in the menu are "Offset"
                  &#40;30&#41;, while the last three R G B colors are "Gain" &#40;80&#41;. However, this is merely aesthetic; we perform the White
                  Balance in the same way that every other TV does, by starting with "80" and then "30".&#41;
                  <br></br>
                  <br></br>&#40;<span className='note'>NOTE2:</span> Try to get the White Balance bars as low as you can &#40;if it goes slightly past
                  the DeltaE 2000 green line, that's fine&#41; because this model does not allow for the R G B values to be precisely balanced.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  After finishing the White Balance, don't do the 'Color Management' and skip straight to the last page where you can do the final
                  reading and start the reading. &#40;With the E7 Model the colors usually come looking great from factory settings. If the results
                  are good, skip to step 16. If they're bad keep following the steps.&#41;
                  <br></br>
                  <br></br>
                  &#40;<span className='note'>NOTE3:</span>&nbsp;If your 'Gamma Adjustment' is 2.4 &#40;the default value from factory&#41; remember
                  to also change it in Calman. To access this setting click on the 'Settings' icon on the top-right side of the screen in Calman →
                  'Target Exponent' and set it to the value you desire.&#41;
                </span>
              </li>
              <br></br>
              <li>
                <span className='li__color'>
                  Go to 'Settings' &#8594; 'Picture Mode Settings' &#8594; 'Expert Settings' &#8594; 'Color Tuner'. &#40;Here we can do the color
                  management of each color by playing with 'HUE', 'Saturation' and 'Brightness' values. The easiest way to calibrate the colors this
                  way is to do a continuous reading on the last reading page and change both values until each color is below the yellow line.&#41;
                </span>
              </li>
              <li>
                <span className='li__color'>
                  Inside 'Picture Mode Settings' set the 'Sharpness' to your liking by comparing it with the family picture provided by Calman.
                  Usually 5 is a great value, but set it as it best fits your TV.
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
                  'Language and Location' &#8594; 'Menu Language' &#8594; 'Netherlands'.
                </span>
              </li>
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width: "23rem" }} className='lg__box' alt='Hisense E7 TV Box' src={SamsungManualBox} />
            <PdfDownloader fileName='Samsung Report' fileUrl={SamsungReport} />
            <PdfDownloader fileName='Samsung Template' fileUrl={SamsungTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};
