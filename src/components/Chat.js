import { useEffect, useState, useRef } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../styles/Chat.css";
import notificationSound from "../sounds/message_sound.mp3";
import addNotification from "react-push-notification";
import DefaultProfilePicture from "../images/default_pfp.jpeg";
import attachmentIcon from "../images/attachment.png";

export const Chat = props => {
  const { room } = props;
  const { isAnonymousAuth } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const lastMessage = messages[messages.length - 1];
  const storage = getStorage();
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
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
    if (newMessage === "" && selectedImages.length === 0) return;

    const currentUser = auth.currentUser;

    if (selectedImages.length > 0) {
      try {
        const imageUrls = [];

        for (let i = 0; i < selectedImages.length; i++) {
          const file = selectedImages[i];
          const uniqueFileName = `${file.name}_${Date.now()}`;
          const storageRef = ref(storage, `images/${uniqueFileName}`);
          await uploadBytes(storageRef, file);
          const imageUrl = await getDownloadURL(storageRef);
          imageUrls.push(imageUrl);
        }

        await addDoc(collection(db, "messages"), {
          images: imageUrls,
          createdAt: serverTimestamp(),
          user: currentUser.displayName,
          profilePicture: currentUser.photoURL,
          room,
        });

        setSelectedImages([]);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await addDoc(collection(db, "messages"), {
          text: newMessage,
          createdAt: serverTimestamp(),
          user: currentUser.displayName,
          profilePicture: currentUser.photoURL,
          room,
        });

        setNewMessage("");
        setHasNewMessage(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleImageSelect = e => {
    const fileList = Array.from(e.target.files);
    setSelectedImages(fileList);
  };

  const handleImageClick = index => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  };

  return (
    <div className='chat'>
      <div className='header'>
        <h1>
          Welcome to: <span className='Chat__room--title'>{room.toUpperCase()}</span>
        </h1>
      </div>

      <div ref={messagesRef} className='messages'>
        {messages.map((message, index) => (
          <p
            key={message.id}
            className={`Chat__message ${
              message.user !== "Guest" && message.user === auth.currentUser.displayName && !isAnonymousAuth ? "flex-end" : ""
            }`}
          >
            {message.profilePicture ? (
              <img className='profile__picture' referrerpolicy='no-referrer' src={message.profilePicture} alt={message.user} />
            ) : (
              <img className='profile__picture' src={DefaultProfilePicture} alt={message.user} />
            )}
            {message.user || "Guest"}: {message.text}
            {message.images &&
              message.images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={message.user}
                  className='chat-image'
                  onClick={() => handleImageClick(messages.indexOf(message))}
                />
              ))}
          </p>
        ))}
      </div>

      {modalOpen && selectedImageIndex !== null && messages[selectedImageIndex]?.images && (
        <div className='modal-overlay' onClick={closeModal}>
          {messages[selectedImageIndex]?.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={messages[selectedImageIndex]?.user} className='modal-image' />
          ))}
        </div>
      )}

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
            {selectedImages.length > 0 ? "Send Image" : "Send"}
          </button>
          <div className='input-container'>
            <label htmlFor='imageInput' className='file-input-label'>
              <img src={attachmentIcon} style={{ height: "2rem", marginTop: "0.3rem" }} alt='Attachment' />
              <input type='file' id='imageInput' accept='image/*' onChange={handleImageSelect} className='hidden' multiple />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
