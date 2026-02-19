


export interface InputCompProps{
    label?: string,
    inputType: React.HTMLInputTypeAttribute | undefined,
    placeHolder?: string
    hideLable?:boolean
}



export default function InputComp({label,inputType,placeHolder,hideLable=true}:InputCompProps) {
    let classNames = "flex flex-col align-center";
    if(!hideLable){
        classNames = "flex flex-col gap-[10px] align-center";
    }
    return (
        <div className={classNames}>
            {!hideLable && <p className="text-2xl text-[var(--primary-text)]">{label}</p>}
            <input placeholder={placeHolder ?? ""} className="bg-[var(--input-bg)] text-xl border border-[var(--input-border)] text-[var(--primary-text)] p-[10px] border-solid rounded-[10px] h-[60px]" type={inputType} />
        </div>
    );
}
