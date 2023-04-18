import React from "react";
import { Link } from "react-router-dom";

export const AutomaticGuide = ({ signUserOut }) => {
  return (
    <div>
      <button className='signOut--sendMessage__button' onClick={signUserOut}>
        Sign Out
      </button>
      <Link to='/'>
        <button className='signOut--sendMessage__button'>Home</button>
      </Link>
      <div>
        <h1>automatic guide </h1>
      </div>
    </div>
  );
};
