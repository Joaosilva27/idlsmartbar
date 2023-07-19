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
import { SonyManual } from "./components/SonyManual";
import { PhillipsGuide } from "./components/PhillipsGuide";
import { PhillipsManual } from "./components/PhillipsManual";
import { TclGuide } from "./components/TclGuide";
import { HisenseGuide } from "./components/HisenseGuide";
import { HisenseManual } from "./components/HisenseManual";
import { HisenseE7 } from "./components/HisenseE7";
import { OkGuide } from "./components/OkGuide";
import Loading from "./components/Loading";
import backArrow from "./images/backArrow.png";

import Cookies from "universal-cookie";
import { useState, useRef } from "react";
import { LgFullGuide } from "./components/LgFullGuide";
import { Guide } from "./components/Guide";
import { PhillipsManualOled } from "./components/PhillipsManualOled";
import { OkGuideManual } from "./components/OkGuideManual";
import { TclGuideManual } from "./components/TclGuideManual";
import { PhillipsGuide8007 } from "./components/PhillipsGuide8007";
import { SamsungGuideManualShort } from "./components/SamsungGuideManualShort";
const cookies = new Cookies();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isAnonymousAuth, setIsAnonymousAuth] = useState(false);
  const [room, setRoom] = useState(null);
  const [mostVisitedRooms, setMostVisitedRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuth) {
    return (
      <div className='App'>
        <Auth setIsLoading={setIsLoading} setIsAnonymousAuth={setIsAnonymousAuth} setIsAuth={setIsAuth} />
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
            <div className='flex items-center justify-center'>
              <span>
                <img className='back__arrow' src={backArrow} alt='Arrow Icon' />
                <p className='back__p'>Back</p>
              </span>
            </div>
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
                  <Link className='tv__guide' to='/guides' onClick={handleUnload}>
                    Guides
                  </Link>
                </div>
              </div>

              {room ? (
                <Chat isAnonymousAuth={isAnonymousAuth} room={room} />
              ) : (
                isAuth && (
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
                              <h4 className='mt-6'>{room.id}</h4>
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
                )
              )}
            </>
          }
        />
        <Route path='/' element={<App />} />
        <Route path='/loading' element={<Loading />}></Route>
        <Route path='/guides' element={<Guide />} />
        <Route path='/calibration-guide' element={<CalibrationGuide />} />
        <Route path='/calibration-guide/manual-guide' element={<ManualGuide />} />
        <Route path='calibration-guide/automatic-guide' element={<AutomaticGuide />} />
        <Route path='calibration-guide/samsung' element={<SamsungGuide />} />
        <Route path='calibration-guide/samsung/manual/short' element={<SamsungGuideManualShort />} />
        <Route path='calibration-guide/lg' element={<LgGuide />} />
        <Route path='calibration-guide/lg/full-guide' element={<LgFullGuide />} />
        <Route path='calibration-guide/sony' element={<SonyGuide />} />
        <Route path='calibration-guide/sony/manual' element={<SonyManual />} />
        <Route path='calibration-guide/phillips' element={<PhillipsGuide />} />
        <Route path='calibration-guide/phillips/manual' element={<PhillipsManual />} />
        <Route path='calibration-guide/phillips/manual/oled' element={<PhillipsManualOled />} />
        <Route path='calibration-guide/phillips/manual/8007' element={<PhillipsGuide8007 />} />
        <Route path='calibration-guide/tcl' element={<TclGuide />} />
        <Route path='calibration-guide/tcl/manual' element={<TclGuideManual />} />
        <Route path='calibration-guide/hisense' element={<HisenseGuide />} />
        <Route path='calibration-guide/hisense/manual' element={<HisenseManual />} />
        <Route path='calibration-guide/hisense/manual/e7' element={<HisenseE7 />} />
        <Route path='calibration-guide/ok' element={<OkGuide />} />
        <Route path='calibration-guide/ok/manual' element={<OkGuideManual />} />
      </Routes>
    </>
  );
}

export default App;
