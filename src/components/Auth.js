import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import IDLogo from "../images/IDLogo.png";
import TVicon from "../images/TVicon.png";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = props => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='auth__container'>
      <div className='auth__flex--row'>
        <img alt='Logo for IDLogistics' className='Logo' src={IDLogo} />
        <img alt='TV Icon' className='Logo' src={TVicon} />
        <h1 style={{ color: "#1b171c", marginTop: "0.3rem" }}>Smartbar</h1>
      </div>
      <h4 className='h4__signin'>Please Sign In With Google to continue</h4>
      <button className='signin__google' onClick={signInWithGoogle}>
        Sign In With Google
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
