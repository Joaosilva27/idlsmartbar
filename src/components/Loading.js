import React from "react";
import "../styles/Loading.css";
import TvGif1 from "../images/redtv_gif.gif";
import TvGif2 from "../images/tvremote_gif.gif";
import TvGif3 from "../images/tvcat.gif";

export default function Loading() {
  const randomImage = Math.random() < 0.33 ? TvGif1 : Math.random() < 0.66 ? TvGif2 : TvGif3;

  return (
    <div className='loading__body'>
      <div className='loading__column'>
        <img className='loading__image' alt='TV Loading' src={randomImage} />
        <h6 className='loading__text'>Loading ...</h6>
      </div>
    </div>
  );
}
