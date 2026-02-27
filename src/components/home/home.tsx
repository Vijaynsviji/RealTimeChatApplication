import MessageView from "./messageview/messageview";
import SideBar from "./sidebar/sidebar";


export default function Home(){
    return <div className="bg-[var(--light-color-100)] box-border">
        <div className="border-[2px] box-border border-solid border-[var(--border)] h-[calc(100vh-40px)] m-[20px] rounded-[20px] grid grid-cols-[1fr_2fr]">
            <div className="box-border flex flex-col overflow-hidden border-r-[2px] border-[var(--border)]"><SideBar /></div>
            <div className="box-border flex flex-col  overflow-y-hidden"><MessageView /></div>
        </div>
    </div>
}