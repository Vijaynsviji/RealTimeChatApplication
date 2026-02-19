

import React from 'react';
import Avatar from '@mui/material/Avatar';
import type { SxProps, Theme } from '@mui/material/styles';

interface AvatarComp{
    size: SxProps<Theme> | undefined
}


function AvatarComp({size}:AvatarComp) {
  return (
    <div>
        <Avatar sx={size} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  )
}

export default AvatarComp;