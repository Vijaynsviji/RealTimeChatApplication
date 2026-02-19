
import ButtonComp from "../UI/ButtonComp/ButtonComp";
import InputComp from "../UI/InputComp/InputComp";


interface AuthBaseComp{
    isSignUp: Boolean
}


export default function AuthBaseComp({isSignUp}:AuthBaseComp){
    const Name = isSignUp ? "Sign Up" : "Sign In";



    return <div className="bg-[var(--bg-page)] h-screen w-screen flex items-center justify-center">
        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="w-[30%] bg-[var(--bg-card)] rounded-[25px] flex flex-col  gap-[40px] border border-[var(--input-border)] boder-solid p-[30px]">
                <h1 className={"font-bold self-center text-6xl text-[var(--primary-text)]"}>{Name}</h1>
                {isSignUp && <InputComp placeHolder="Vijay N S" label="Name" inputType="text" />}
                <InputComp placeHolder="vijay@gmail.com"  label="Email" inputType="email" />
                <InputComp placeHolder="vijay123" label="Password" inputType="text" />

                <ButtonComp name={Name} />
        </div>
    </div>
}