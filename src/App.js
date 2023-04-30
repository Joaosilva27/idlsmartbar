import "./App.css";
import { useEffect } from "react";
import { doc, updateDoc, increment, query, collection, orderBy, limit, onSnapshot, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "./firebase-config";
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import IDLogo from "./images/IDLogo.png";
import TVicon from "./images/TVicon.png";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import CalibrationGuide from "./components/CalibrationGuide";
import { ManualGuide } from "./components/ManualGuide";
import { AutomaticGuide } from "./components/AutomaticGuide";
import { SamsungGuide } from "./components/SamsungGuide";
import { LgGuide } from "./components/LgGuide";
import { SonyGuide } from "./components/SonyGuide";
import { PhillipsGuide } from "./components/PhillipsGuide";
import { TclGuide } from "./components/TclGuide";
import { HisenseGuide } from "./components/HisenseGuide";
import { OkGuide } from "./components/OkGuide";
import backArrow from "./images/backArrow.png";

import Cookies from "universal-cookie";
import { useState, useRef } from "react";
import { LgFullGuide } from "./components/LgFullGuide";
const cookies = new Cookies();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isAnonymousAuth, setIsAnonymousAuth] = useState(false);
  const [room, setRoom] = useState(null);
  const [mostVisitedRooms, setMostVisitedRooms] = useState([]);

  const roomInputRef = useRef(null);

  const handleUnload = async () => {
    if (room) {
      const username = auth.currentUser.displayName || auth.currentUser.email;
      const roomRef = doc(db, "rooms", room);
      await updateDoc(roomRef, {
        users: firebase.firestore.FieldValue.arrayRemove(username),
      });
    }
  };

  const signUserOut = async () => {
    handleUnload();
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsAnonymousAuth(false);
    setRoom(null);
  };

  const handleGoToHome = async () => {
    handleUnload();
    setRoom(null);
  };

  const handleSetRoom = async roomId => {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnapshot = await getDoc(roomRef);
    const username = auth.currentUser.displayName || auth.currentUser.email;

    if (roomSnapshot.exists()) {
      await updateDoc(roomRef, {
        visits: increment(1),
        users: arrayUnion(username),
      });
    } else {
      await setDoc(roomRef, {
        name: roomId,
        visits: 1,
        users: [username],
      });
    }
    setRoom(roomId);
  };

  const queryRooms = query(collection(db, "rooms"), orderBy("visits", "desc"), limit(3));

  useEffect(() => {
    const unsubscribe = onSnapshot(queryRooms, snapshot => {
      const rooms = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        numUsers: Math.max(doc.data().users ? doc.data().users.length : 0, 0),
      }));

      setMostVisitedRooms(rooms);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [room]);

  if (!isAuth || !isAnonymousAuth) {
    return (
      <div className='App'>
        <Auth setIsAnonymousAuth={setIsAnonymousAuth} setIsAuth={setIsAuth} />
      </div>
    );
  }

  const onHandleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <div className='sign__out'>
          <button className='signOut--sendMessage__button' onClick={signUserOut}>
            Sign Out
          </button>
          {(location.pathname !== "/" || room) && (
            <Link to='/'>
              <button onClick={handleGoToHome} className='signOut--sendMessage__button'>
                Home
              </button>
            </Link>
          )}
        </div>
        {location.pathname !== "/" && (
          <button onClick={onHandleGoBack} className=' back__container back__button'>
            <span>
              <img className='back__arrow' src={backArrow} alt='Arrow Icon' />
              <p className='back__p'>Back</p>
            </span>
          </button>
        )}
      </div>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <div>
                <div className='calibration__button--div'>
                  <Link className='tv__guide' to='/calibration-guide' onClick={handleUnload}>
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
                      <button
                        className='App__button'
                        onClick={() => {
                          const newRoomId = roomInputRef.current.value;
                          setRoom(newRoomId);
                          handleSetRoom(newRoomId);
                        }}
                      >
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
                            <button
                              className='App__button room__button'
                              onClick={() => {
                                setRoom(room.id);
                                handleSetRoom(room.id);
                              }}
                            >
                              Join
                            </button>
                            <div className='online__flex'>
                              <p>
                                <span className='online__counter'></span>
                                {room.numUsers} {room.numUsers === 0 ? "People online" : room.numUsers > 1 ? "People online" : "Person online"}
                              </p>
                            </div>
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
        <Route path='/' element={<App />} />
        <Route path='/calibration-guide' element={<CalibrationGuide signUserOut={signUserOut} />} />
        <Route path='/calibration-guide/manual-guide' element={<ManualGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/automatic-guide' element={<AutomaticGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/samsung' element={<SamsungGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/lg' element={<LgGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/lg/full-guide' element={<LgFullGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/sony' element={<SonyGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/phillips' element={<PhillipsGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/tcl' element={<TclGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/hisense' element={<HisenseGuide signUserOut={signUserOut} />} />
        <Route path='calibration-guide/ok' element={<OkGuide signUserOut={signUserOut} />} />
      </Routes>
    </>
  );
}

export default App;
