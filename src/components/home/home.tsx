import React from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import MessageView from "./messageview/messageview";
import SideBar from "./sidebar/sidebar";
import type { Message } from "../../utils/types/Types";


export default function Home(){
    const validateUser = useVerifyUser();
    const [selectedContact,setSelectedContact] = React.useState<string | number | null>(null);
    const [messages,setMessages] = React.useState<Message[]>([]);


    const handleChangeSelectedContact = (userId: string | number | null)=>{
        if(userId==null || userId==undefined) return;

        setSelectedContact(userId);
    }


    return <div className="bg-[var(--light-color-100)] box-border">
        <div className="border-[2px] box-border border-solid border-[var(--border)] h-[calc(100vh-40px)] m-[20px] rounded-[20px] grid grid-cols-[1fr_2fr]">
            <div className="box-border flex flex-col overflow-hidden border-r-[2px] border-[var(--border)]"><SideBar selectedContact={selectedContact} handleChangeSelectedContact={handleChangeSelectedContact} /></div>
            <div className="box-border flex flex-col  overflow-y-hidden"><MessageView messages={messages} /></div>
        </div>
    </div>
}