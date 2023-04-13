import "./App.css";
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import IDLogo from "./images/IDLogo.png";
import TVicon from "./images/TVicon.png";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

import Cookies from "universal-cookie";
import { useState, useRef } from "react";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  const handleGoToHome = () => {
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className='App'>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      <div className='sign__out'>
        <button className='signOut--sendMessage__button' onClick={signUserOut}>
          Sign Out
        </button>
        {room ? (
          <button onClick={handleGoToHome} className='signOut--sendMessage__button'>
            Home
          </button>
        ) : null}
      </div>

      {room ? (
        <Chat room={room} />
      ) : (
        <div className='App__room'>
          <img alt='Logo for IDLogistics' className='IDL__Logo' src={IDLogo} />
          <img alt='TV Icon' className='TV__Logo' src={TVicon} />

          <div className='App__centered'>
            <form>
              <label className='App__Room--Name'>Enter room name:</label>
              <br></br>
              <input spellCheck='false' className='App__input' ref={roomInputRef} />
              <br></br>
              <button className='App__button' onClick={() => setRoom(roomInputRef.current.value)}>
                Enter Chat
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
