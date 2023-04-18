import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";
import notificationSound from "../sounds/message_sound.mp3";

export const Chat = props => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState();
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, snapshot => {
      let messages = [];
      snapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const messagesContainer = messagesRef.current;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messagesRef]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  useEffect(() => {
    const audio = new Audio(notificationSound);
    const lastMessage = messages[messages.length - 1];

    if (lastMessage && lastMessage.user !== auth.currentUser.displayName) {
      audio.play();
    }
  }, [messages]);

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
            {message.user} : {message.text}
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
