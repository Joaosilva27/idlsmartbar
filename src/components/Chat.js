import { useEffect, useState, useRef } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";
import notificationSound from "../sounds/message_sound.mp3";
import addNotification from "react-push-notification";
import DefaultProfilePicture from "../images/default_pfp.jpeg";

export const Chat = props => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const messagesRef = useRef(null);

  useEffect(() => {
    const queryMessages = query(collection(db, "messages"), where("room", "==", room), orderBy("createdAt"));

    const unsubscribe = onSnapshot(queryMessages, snapshot => {
      let messages = [];
      snapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [room]);

  useEffect(() => {
    const messagesContainer = messagesRef.current;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const audio = new Audio(notificationSound);
    const lastMessage = messages[messages.length - 1];

    if (lastMessage && lastMessage.user !== auth.currentUser.displayName) {
      setHasNewMessage(true);

      if (hasNewMessage) {
        audio.play();

        addNotification({
          title: `${lastMessage.user} sent a Message `,
          message: `${lastMessage.user}: ${lastMessage.text}`,
          duration: 5000,
          native: true,
          icon: lastMessage.profilePicture,
        });
      }
    }
  }, [messages]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (newMessage === "") return;

    const currentUser = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: currentUser.displayName,
      profilePicture: currentUser.photoURL,
      room,
    });

    setNewMessage("");
    setHasNewMessage(false);
  };

  return (
    <div className='chat'>
      <div className='header'>
        <h1>
          Welcome to: <span className='Chat__room--title'>{room.toUpperCase()}</span>
        </h1>
      </div>

      <div ref={messagesRef} className='messages'>
        {messages.map(message => (
          <p className='Chat__message'>
            {message.profilePicture ? (
              <img className='profile__picture' referrerpolicy='no-referrer' src={message.profilePicture} alt={message.user} />
            ) : (
              <img className='profile__picture' src={DefaultProfilePicture} alt={message.user}></img>
            )}
            {message.user || "Guest"} : {message.text}
          </p>
        ))}
      </div>
      <div className='send__message__container'>
        <form onSubmit={handleSubmit} className='new__message__form'>
          <input
            spellCheck='false'
            onChange={e => setNewMessage(e.target.value)}
            className='new__message__input'
            placeholder='Type a message here...'
            value={newMessage}
          />
          <button type='submit' className='signOut--sendMessage__button'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
