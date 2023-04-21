import "./App.css";
import { useEffect } from "react";
import { doc, updateDoc, increment, query, collection, orderBy, limit, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import IDLogo from "./images/IDLogo.png";
import TVicon from "./images/TVicon.png";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { Route, Routes, Link } from "react-router-dom";
import CalibrationGuide from "./components/CalibrationGuide";
import { ManualGuide } from "./components/ManualGuide";
import { AutomaticGuide } from "./components/AutomaticGuide";
import { SamsungGuide } from "./components/SamsungGuide";

import Cookies from "universal-cookie";
import { useState, useRef } from "react";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const [mostVisitedRooms, setMostVisitedRooms] = useState([]);

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

  const handleSetRoom = async () => {
    setRoom(roomInputRef.current.value);

    const roomRef = doc(db, "rooms", roomInputRef.current.value);
    const roomSnapshot = await getDoc(roomRef);

    if (roomSnapshot.exists()) {
      await updateDoc(roomRef, {
        visits: increment(1),
      });
    } else {
      await setDoc(roomRef, {
        visits: 1,
      });
    }
  };

  const queryRooms = query(collection(db, "rooms"), orderBy("visits", "desc"), limit(3));

  useEffect(() => {
    const unsubscribe = onSnapshot(queryRooms, snapshot => {
      const rooms = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMostVisitedRooms(rooms);
    });

    return () => unsubscribe();
  }, []);

  if (!isAuth) {
    return (
      <div className='App'>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={
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
              <div>
                <div className='calibration__button--div'>
                  <Link className='tv__guide' to='/calibration-guide'>
                    Calibration Guide
                  </Link>
                </div>
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
                      <button className='App__button' onClick={handleSetRoom}>
                        Enter Chat
                      </button>
                    </form>
                  </div>
                  <div className='rooms__container'>
                    <div className='room__div'>
                      <h3>Most visited rooms:</h3>
                      <div className='room__flex'>
                        {mostVisitedRooms.map(room => (
                          <div key={room.id} className='room__row'>
                            <h4>{room.id}</h4>
                            <button className='App__button room__button' onClick={() => setRoom(room.id)}>
                              Join
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          }
        />
        <Route path='/calibration-guide' element={<CalibrationGuide signUserOut={signUserOut} />} />
        <Route path='/calibration-guide/manual-guide' element={<ManualGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/automatic-guide' element={<AutomaticGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/samsung' element={<SamsungGuide signUserOut={signUserOut} />} />
      </Routes>
    </>
  );
}

export default App;
