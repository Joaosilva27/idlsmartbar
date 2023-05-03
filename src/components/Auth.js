import { auth, provider } from "../firebase-config.js";
import { signInWithPopup, signInAnonymously } from "firebase/auth";
import { useState } from "react";

import "../styles/Auth.css";
import IDLogo from "../images/IDLogo.png";
import TVicon from "../images/TVicon.png";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = props => {
  const { setIsAuth, setIsAnonymousAuth, setIsLoading } = props;

  const handleLoading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      useState.push("/");
    }, 1300);
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGuestSignIn = async () => {
    try {
      const userCredential = await signInAnonymously(auth, provider);
      const user = userCredential.user;
      const token = await user.getIdToken();
      cookies.set("auth-token", token, { path: "/" });
      handleLoading();
      setIsAuth(true);
      setIsAnonymousAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='auth__container'>
      <div className='auth__flex--row'>
        <img alt='Logo for IDLogistics' className='Logo' src={IDLogo} />
        <img alt='TV Icon' className='Logo' src={TVicon} />
        <h1 style={{ color: "#1b171c", marginTop: "0.3rem" }}>Smartbar</h1>
      </div>
      <button className='signin__google' onClick={signInWithGoogle}>
        Sign In With Google
      </button>
      <br />
      <button className='signin__google' onClick={handleGuestSignIn}>
        Continue as a Guest
      </button>
      <footer>
        <p className='disclaimer'>
          Disclaimer: This website is not affiliated with or endorsed by ID Logistics®. The ID Logistics® name and logo are trademarks of ID
          Logistics®, and are used here only for identification purposes.
        </p>
      </footer>
    </div>
  );
};
