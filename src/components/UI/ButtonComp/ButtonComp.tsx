
export interface ButtonCompProps{
    name:string
}




export default function ButtonComp({name}:ButtonCompProps){
    return <button className="text-2xl font-bold rounded-[10px] text-[var(--primary-button-text)] p-[20px] bg-[var(--bg-primary-button)]">
        {name}
    </button>
}