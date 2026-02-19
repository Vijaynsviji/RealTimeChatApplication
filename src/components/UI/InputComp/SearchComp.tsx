



import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputComp from './InputComp';

function SearchComp() {
  return (
        <InputComp placeHolder='Search Conversation' inputType='text' hideLable={true}/>
  )
}

export default SearchComp;
