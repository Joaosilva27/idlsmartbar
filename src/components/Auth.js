import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";

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
      <h2 className='h2__signin'>Please Sign In With Google to continue</h2>
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
