

import React from 'react'
import ContactCard from './contactcard'
import { staticContactData } from './sidebardata';
import type { Status } from '../../../utils/types/Types';


export interface ContactCardProp{
  id:string | number,
  isOnline: boolean,
  email?:string,
  Name: string,
  unReadMessageCount: number,
  lastMessage?: string,
  lastMessageDate?: Date
}


interface ContactList{
  allUserConverations: ContactCardProp[],
  selectedContact:string | number | null,
  handleChangeSelectedContact: (id:string | number | null)=>void
}

function ContactList({allUserConverations,handleChangeSelectedContact,selectedContact}:ContactList) {


  return (
    <div className='overflow-y-scroll h-[100%]'>
      <div className='flex flex-col'>
        {allUserConverations && allUserConverations?.map(item=>{
          return <ContactCard key={item?.id} id={item?.id} onClickContact={handleChangeSelectedContact}  isOnline={item?.isOnline} Name={item?.Name} unReadMessageCount={item?.unReadMessageCount} lastMessage={item?.lastMessage} lastMessageDate={item?.lastMessageDate} isSelected={selectedContact==item?.id}/>
        })}
      </div>
      
    </div>
  )
}

export default ContactList