import React from 'react'
import MessageViewHeader from './messageviewheader'
import MessageComp from './messagecomp';
import MessageInput from './messageinput';
import type { Message } from '../../../utils/types/Types';
import { messageData } from './messagedata';

function MessageView() {
  const [messages,setMessages] = React.useState<Message[]>([]);


  React.useEffect(()=>{
    setMessages(messageData)
  },[])



  const sendMessage = (newMessage:Message)=>{
    try{
      setMessages(prev=>[...prev,newMessage]);
    }catch(e){
      console.error("Error in sendMessage");
    }
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