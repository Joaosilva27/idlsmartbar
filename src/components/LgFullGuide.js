import React from "react";
import { Link } from "react-router-dom";

export const LgFullGuide = ({ signUserOut }) => {
  return (
    <div>
      <div className='sign__out'>
        <button className='signOut--sendMessage__button' onClick={signUserOut}>
          Sign Out
        </button>
        <Link to='/'>
          <button className='signOut--sendMessage__button'>Home</button>
        </Link>
      </div>
      <h1>full guide</h1>
    </div>
  );
};
