import { getAuth } from 'firebase/auth';
import React from 'react'

const ChatMessage = (props: any) => {
    const { text, uid, name } = props.message;
    const auth = getAuth();
    
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    
  return (
    <div className={`max-w-xs `}>
      <h1 className='text-gray-200'>{name}</h1>
      <div className={`rounded max-w-xs my-2 px-4 py-2 ${messageClass == 'sent' ? 'bg-gray-400' : 'bg-gray-600'}`}>
    
    <p className='text-gray-200'>{text}</p>
    </div>
    </div>
  )
}

export default ChatMessage