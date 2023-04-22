import React from "react";
import { Link } from "react-router-dom";

export const HisenseGuide = ({ signUserOut }) => {
  return (
    <div className='samsung__container'>
      <div>
        <div className='sign__out'>
          <button className='signOut--sendMessage__button' onClick={signUserOut}>
            Sign Out
          </button>
          <Link to='/'>
            <button className='signOut--sendMessage__button'>Home</button>
          </Link>
        </div>
        <h1>Hisense GUIDE</h1>
      </div>
    </div>
  );
};
