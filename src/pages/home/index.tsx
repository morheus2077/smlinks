import { CircleArrowDown } from "lucide-react";
import { Social } from "../../components/Social";
import { Instagram, Github, Linkedin } from "lucide-react";

export function Home(){
    return(
        <>
        <div className="h-screen flex justify-center">
            <div className="mt-32">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-4xl">Morpheus444</h1>
                    <p className="md:text-xl flex gap-3 items-center justify-center">Veja meus links <i><CircleArrowDown/></i></p>
                </div>

                <div className="flex flex-col justify-center mt-3 gap-3 w-[350px] md:w-[500px] lg:text-xl md:text-2xl">
                    <button className=" bg-blue-600 rounded-sm h-[35px] lg:h-[35px] md:h-[45px] cursor-pointer text-white">Meu LinkedIn</button>
                    <button className=" bg-black text-white rounded-sm h-[35px] lg:h-[35px]  md:h-[45px] cursor-pointer">Meu repositório do github</button>
                </div>
                <footer>
                    <div className="flex gap-10 items-center justify-center mt-3">
                        <Social url="https://www.youtube.com">
                            <Instagram size={30}/>
                        </Social>
                        <Social url="https://www.youtube.com">
                            <Github size={30}/>
                        </Social>
                        <Social url="https://www.youtube.com">
                            <Linkedin size={30}/>
                        </Social>
                    </div>

                    
                </footer>

            </div>
        </div>
        </>
    )
}