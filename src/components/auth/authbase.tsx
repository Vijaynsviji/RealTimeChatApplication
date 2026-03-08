
import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "../UI/ButtonComp/ButtonComp";
import InputComp from "../UI/InputComp/InputComp";
import React from "react";
import axios, { AxiosError } from 'axios';
import { apiBaseUrl } from "../../config/api";
import Alert from "@mui/material/Alert";


interface AuthBaseComp{
    isSignUp: Boolean
}


export type handleChangeType = "FirstName" | "LastName" | "Email" | "Password";


export default function AuthBaseComp({isSignUp}:AuthBaseComp){
    const [firstName,setFirstName] = React.useState("");
    const [lastName,setLastName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const Name = isSignUp ? "Sign Up" : "Sign In";

    const [loading,setIsLoading] = React.useState(false);
    const [showAlert,setShowAlert] = React.useState(false);
    const [showErrorAlert,setShowErrorAlert] = React.useState(false);
    const [ErrorMessage,setErrorMessage] = React.useState("");
    const navigate = useNavigate();


    const handleChange = (value:string,  type: handleChangeType)=>{
        switch(type){
            case "FirstName": setFirstName(value);break;
            case "Email": setEmail(value);break;
            case "LastName": setLastName(value);break;
            case "Password": setPassword(value);break;
            default: setFirstName(value);break;
        }
    }

    const handleSubmit = async ()=>{
        try{
            setIsLoading(true);

            let data = null;
            if(isSignUp){
                data = {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password
                }
            }else{
                data = {
                    email: email,
                    password: password
                }
            }

            const res = await axios.post(apiBaseUrl + (isSignUp? "/signup" : "/signin"),data);

            if(res.status==200){
                const responseData = res.data;
                setShowAlert(true);
                setIsLoading(false);
                if(!isSignUp){
                    const token = responseData?.data?.token;

                    localStorage.setItem('token',token);


                };

                setTimeout(()=>{
                    setShowAlert(false);
                   !isSignUp ?  navigate('/'): navigate('/signin');
                },2000);
            }
        }catch(e:any){
            const ErrorReponse = e?.response?.data;
            console.error("Error in  handleSubmit " + e);
            setErrorMessage(ErrorReponse?.message ?? "Some thing went wrong");
            setIsLoading(false);
            setShowErrorAlert(true);
            setTimeout(()=>{
                setShowErrorAlert(false);
                setErrorMessage("");
            },2000)

        }
    }



    return <div className="bg-[var(--bg-page)] h-screen w-screen flex items-center justify-center">
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="w-[30%] bg-[var(--bg-card)] rounded-[25px] flex flex-col  gap-[40px] border border-[var(--input-border)] boder-solid p-[30px]">
                <h1 className={"font-bold self-center text-6xl text-[var(--primary-text)]"}>{Name}</h1>
                {isSignUp && <InputComp  type="FirstName" value={firstName} handleChange={handleChange} placeHolder="Vijay N S" hideLable={false} label="First Name" inputType="text" />}
                {isSignUp && <InputComp value={lastName} type="LastName" handleChange={handleChange} placeHolder="Vijay N S" hideLable={false} label="Last Name" inputType="text" />}
                <InputComp value={email} type="Email" handleChange={handleChange} placeHolder="vijay@gmail.com" hideLable={false}  label="Email" inputType="email" />
                <InputComp value={password} type="Password" handleChange={handleChange} placeHolder="vijay123" hideLable={false} label="Password" inputType="text" />

                <ButtonComp handleSubmit={handleSubmit} name={Name} isLoading={loading} />
                {showAlert && <Alert severity="success">{isSignUp ? "Sign up Success" : "Sign in Success"}</Alert>}
                {showErrorAlert && <Alert severity="error">{ErrorMessage}</Alert> }
                <div>
                    <Link className="text-[20px]" to={isSignUp ? "/signin": "/signup"}>{isSignUp ?  "I already have an account?": "Create new account."}</Link>
                </div>
        </div>
    </div>
}