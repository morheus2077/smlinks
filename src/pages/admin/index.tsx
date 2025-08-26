import { Header } from "../../components/Header"

export function Admin(){
    return(
        <>
       <Header/>
        <div className="h-screen flex justify-center items-center bg-[#030129]">
        <div className="flex flex-col">
                <label className="mt-2" htmlFor="name">Nome do link</label>
                <input className="bg-[#172554] w-[500px] h-[35px] rounded-sm indent-3 mt-2" type="text" />
                <label className="mt-2" htmlFor="url">URL do link</label>
                <input className="bg-[#172554] w-[500px] h-[35px] rounded-sm indent-3 mt-2" type="text" />
                
        </div>
        </div>
        </>
    )
}