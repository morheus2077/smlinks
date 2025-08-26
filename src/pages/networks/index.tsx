import { Header } from "../../components/Header";
import { Link } from "lucide-react";

export function Networks(){
    return(
        <>
        <Header/>
        <h1 className="text-center text-3xl mt-5">Suas redes sociais</h1>
        <div className="h-screen flex  justify-center">
        <form className="mt-5" action="">
            <div className="flex flex-col">
                <label className="mt-2" htmlFor="facebook">Link do Facebook</label>
                <input className="bg-[#172554] w-[500px] h-[35px] rounded-sm indent-3 mt-2" type="text" />
                <label className="mt-2" htmlFor="instagram">Link do instagram</label>
                <input className="bg-[#172554] w-[500px] h-[35px] rounded-sm indent-3 mt-2" type="text" />
                <label className="mt-2" htmlFor="youtube">Link do Youtube</label>
                <input className="bg-[#172554] w-[500px] h-[35px] rounded-sm indent-3 mt-2" type="text" />
                <button className="bg-blue-600 w-[500px] h-[33px] rounded-md cursor-pointer hover:bg-white hover:text-blue-600 transition-transform hover:scale-105 duration-200 ease-in-out mt-3 flex items-center justify-center gap-3">Salvar Links <i><Link size={20}/></i></button>
            </div>
        </form>
        </div>
        </>
    )
}