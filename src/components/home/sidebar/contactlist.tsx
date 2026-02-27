

import React from 'react'
import ContactCard from './contactcard'
import { staticContactData } from './sidebardata'

function ContactList() {
  const [selectedContactId,setSelectedContactedId] = React.useState(staticContactData?.[0].id);



  const handleOnClickContact = (id:number)=>{
    setSelectedContactedId(id);
  }



  return (
    <div className='overflow-y-scroll h-[100%]'>
      <div className='flex flex-col'>
        {staticContactData && staticContactData?.map(item=>{
          return <ContactCard key={item?.id} id={item?.id} onClickContact={handleOnClickContact}  isOnline={item?.isOnline} Name={item?.Name} unReadMessageCount={item?.unReadMessageCount} lastMessage={item?.LastMessage} lastMessageDate={item?.date} isSelected={selectedContactId==item?.id}/>
        })}
      </div>
      
    </div>
  )
}

export default ContactList