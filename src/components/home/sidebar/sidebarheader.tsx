



import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

function SideBarHeader() {
  return (
    <div className=' border-b-[2px] border-[var(--border)] flex justify-between items-center h-25 p-[20px]'>
        <h2 className='text-3xl font-bold'>Message</h2>
            <IconButton aria-label="more">
            <MoreVertIcon />
        </IconButton>
    </div>
  )
}

export default SideBarHeader