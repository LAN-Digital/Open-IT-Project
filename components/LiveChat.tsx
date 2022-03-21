import { collection, limit, orderBy, query, doc, setDoc, serverTimestamp } from "firebase/firestore";
import React, { useRef } from "react";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import { firestore } from "./Firebase";
import ChatMessage from "./ChatMessage";
import { getAuth } from "firebase/auth";

const LiveChat = () => {
  const chatRef = useRef();
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages, loading, error] = useCollectionData(q);
  const auth = getAuth();

  const sendMessage = async(e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const name = auth.currentUser.email

    await setDoc(doc(messagesRef), {
      text: chatRef.current.value,
      createdAt: serverTimestamp(),
      uid,
      name
    })
  }

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input type="text" id="chat" name="chat" ref={chatRef} required />
        <button type="submit" className="bg-red-600 text-gray-200">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
