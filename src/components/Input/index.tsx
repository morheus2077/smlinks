import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps){
    return(
        <>
        <input 
        className="bg-[#172554] w-[300px] h-[35px] rounded-sm indent-3" 
        {...props}
        />
        </>
    )
}