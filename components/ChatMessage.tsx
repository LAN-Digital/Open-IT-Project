import { getAuth } from 'firebase/auth';
import React from 'react'

const ChatMessage = (props: any) => {
    const { text, uid } = props.message;
    const auth = getAuth();
    
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    
  return (
      <div className={`rounded max-w-xs my-2 bg-gray-500 px-4 py-2 ${messageClass == 'sent' ? 'ml-auto' : 'mr-auto'}`}>
    
    <p className='text-gray-200'>{text}</p>
    </div>
  )
}

export default ChatMessage