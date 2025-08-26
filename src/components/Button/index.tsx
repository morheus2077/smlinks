import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{};

export function Button(props: ButtonProps){
    return(
    <button className="bg-blue-600 w-[300px] h-[30px] rounded-md cursor-pointer hover:bg-white hover:text-blue-600 transition-transform hover:scale-105 duration-200 ease-in-out outline-none"
    {...props}
    >Acessar</button>
    )

}