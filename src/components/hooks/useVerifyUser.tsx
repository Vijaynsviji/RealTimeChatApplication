



import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../config/api';

function useVerifyUser() {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const validateUser = async(token:string)=>{
        try{
            if(!token){
                navigate('/signin');
                return;
            }

            const response = await axios.post(apiBaseUrl + "/verify",{ token: token});

            if(response.status!=200){
                navigate('/signin');
            }

        }catch(e){
            console.error(e);
            navigate('/signin');
            return;
        }
    }

    React.useEffect(()=>{
        validateUser(token || "");
    },[]);

  return {validateUser};
}

export default useVerifyUser;