import React from 'react'
import MessageViewHeader from './messageviewheader'
import MessageComp from './messagecomp';
import MessageInput from './messageinput';
import type { Message } from '../../../utils/types/Types';
import { messageData } from './messagedata';


interface MessageView{
  messages: Message[]
}



function MessageView({messages}:MessageView) {




  const sendMessage = (newMessage:Message)=>{
    
  }


  return (
    <>
        <MessageViewHeader />
        <MessageComp messageData={messages}/>
        <MessageInput sendMessage={sendMessage} />
    </>
  )
}

export default MessageView;