import MessageView from "./messageview/messageview";
import SideBar from "./sidebar/sidebar";


export default function Home(){
    return <div className="bg-[var(--bg-page)]">
        <div className="border-[2px] border-solid border-[var(--border)] h-screen m-[20px] rounded-[20px] grid grid-cols-[1fr_3fr]">
            <div className="h-[100%]  border-r-[2px] border-[var(--border)]"><SideBar /></div>
            <div className="h-[100%]"><MessageView /></div>
        </div>
    </div>
}