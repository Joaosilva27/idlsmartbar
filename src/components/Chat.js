import { useEffect, useState, useRef } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../styles/Chat.css";
import notificationSound from "../sounds/message_sound.mp3";
import addNotification from "react-push-notification";
import DefaultProfilePicture from "../images/default_pfp.jpeg";
import attachmentIcon from "../images/attachment.png";

// afnaoijfof aoifjao af

export const Chat = props => {
  const { room } = props;
  const { isAnonymousAuth } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const lastMessage = messages[messages.length - 1];
  const storage = getStorage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    if (newMessage === "" && !selectedImage) return;

    const currentUser = auth.currentUser;

    if (selectedImage) {
      const storageRef = ref(storage, `images/${selectedImage.name}`);
      await uploadBytes(storageRef, selectedImage);
      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "messages"), {
        image: imageUrl,
        createdAt: serverTimestamp(),
        user: currentUser.displayName,
        profilePicture: currentUser.photoURL,
        room,
      });

      setSelectedImage(null);
    } else {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: currentUser.displayName,
        profilePicture: currentUser.photoURL,
        room,
      });

      setNewMessage("");
      setHasNewMessage(false);
    }
  };

  function toggleModal(open) {
    setModalOpen(open);
  }

  const handleImageSelect = e => {
    const file = e.target.files[0];
    setSelectedImage(file);
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
          <p
            key={message.id}
            className={`Chat__message ${
              message.user !== "Guest" && message.user === auth.currentUser.displayName && !isAnonymousAuth ? "flex-end" : ""
            }`}
          >
            {message.profilePicture ? (
              <img className='profile__picture' referrerpolicy='no-referrer' src={message.profilePicture} alt={message.user} />
            ) : (
              <img className='profile__picture' src={DefaultProfilePicture} alt={message.user}></img>
            )}
            {message.user || "Guest"} : {message.text}
            {message.image && (
              <>
                <img
                  src={message.image}
                  alt={message.user}
                  className='h-64 ml-2 object-contain cursor-pointer'
                  onClick={() => setSelectedImage(message.image)}
                />

                {selectedImage && (
                  <div className='modal-overlay' onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt={message.user} className='modal-image' />
                  </div>
                )}
              </>
            )}
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
          <div className='input-container flex justify-center items-center rounded-md w-24 border-2 border-gray-900 outline-none'>
            <label htmlFor='imageInput' className='file-input-label'>
              <img src={attachmentIcon} className='h-8' alt='Attachment' />
              <input type='file' id='imageInput' accept='image/*' onChange={handleImageSelect} className='hidden' />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
