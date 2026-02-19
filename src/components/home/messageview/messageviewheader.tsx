

import React from 'react'
import AvatarComp from '../../UI/Avatar/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MessageViewHeader() {
  return (
    <div className='flex border-b-[2px] border-solid border-[var(--border)] h-25 items-center justify-between p-[20px]'>
        <div className='flex items-center gap-[30px]'>
            <AvatarComp size={{ width: 56, height: 56 }} />
            <div>
                <p className='text-2xl font-bold'>Vijay N S</p>
                <p className='text-1xl text-green-800'>Active Now</p>
            </div>

        </div>
        <div className='flex gap-[20px]'>
        <SearchIcon  fontSize='large' />
        <CallOutlinedIcon  fontSize='large'/>
        <VideocamOutlinedIcon fontSize='large' />
        <InfoOutlinedIcon  fontSize='large'/>
        <MoreVertIcon fontSize='large' />
        </div>
    </div>
  )
}

export default MessageViewHeader