import React from 'react'
import AvatarComp from '../../UI/Avatar/Avatar';
import moment from 'moment';


interface ContactCard{
    id: number,
    isSelected: Boolean,
    Name: string,
    lastMessage: string,
    lastMessageDate: Date | string,
    unReadMessageCount: string | number,
    isOnline: Boolean,
    onClickContact: (id:number)=>void
}

function ContactCard({isSelected,lastMessage,lastMessageDate,unReadMessageCount,Name,isOnline=false,id,onClickContact}:ContactCard) {
    const date = new Date();
    const formattedDate = moment(lastMessageDate).format('MM/DD/YY'); 
    const numberOfUnReadMessage = typeof unReadMessageCount === "number" ? unReadMessageCount.toString() : unReadMessageCount;
    const showNumberOfUnReadMessage = typeof unReadMessageCount == 'string' ? Number(unReadMessageCount)>0: unReadMessageCount>0;
    const cardClassName = 'flex justify-between rounded-[15px] items-center px-[20px] py-[15px] m-[10px]' + (isSelected? " bg-[var(--bg-page)]" : "");
    
  return (
    <div className={cardClassName} onClick={()=>onClickContact(id)}>
        <div className='flex gap-[10px] items-center'>
            <AvatarComp size={{ width: 65, height: 65 }} isOnline={isOnline} />
            <div className='flex flex-col gap-[10px]'>
                <p className='font-bold text-xl'>{Name}</p>
                <p className='text-[var(--secondary-text)]'>{lastMessage}</p>
            </div>
        </div>
        <div className='flex flex-col items-end gap-[10px]'>
            <p className='text-[var(--secondary-text)]'>{formattedDate}</p>
            {showNumberOfUnReadMessage && <p className='p-[5px] px-[15px] rounded-[10px] bg-[var(--bg-primary-button)] text-[var(--primary-button-text)]'>{numberOfUnReadMessage}</p>}
        </div>
    </div>
  )
}

export default ContactCard;