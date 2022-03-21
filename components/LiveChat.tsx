
import { collection, limit, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { useCollectionData, useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from './Firebase'
import ChatMessage from './ChatMessage';


const LiveChat = () => {
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'), limit(25));
    const [messages, loading, error] = useCollectionData(q)
    console.log(error);
  return (
    <div >
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  )
}

export default LiveChat