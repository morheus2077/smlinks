import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from 'lucide-react';

export function Admin(){

    const[inputName, setInputName] = useState("");
    const[inputUrl, setInputUrl] = useState("");
    const[NameColorInput, setNameColorInput] = useState("#f1f1f1");
    const[bgColorInput, setbgColorInput] = useState("#0000");

    return(
        <>
       <Header/>
        <div className="h-screen flex justify-center bg-[#030129]">
        <form className="w-[360px] lg:w-[500px] " action="">
            <div className="flex flex-col px-4 lg:px-0 ">
                    <label className="pt-6" htmlFor="name">Nome do link</label>
                    <Input
                    className="bg-white w-[330px] lg:w-[500px] h-[30px] rounded-xs indent-3 text-black mt-4"
                    placeholder="Digite o nome do link:"
                    value={inputName}
                    onChange={(e) =>{setInputName(e.target.value)}}
                    />
                    <label className="pt-6" htmlFor="url">URL do link</label>
                    <Input
                    className="bg-white w-[330px] lg:w-[500px]  h-[30px] rounded-xs indent-3 text-black mt-4"
                    placeholder="Digite a URL do link:"
                    value={inputUrl}
                    onChange={(e) =>{setInputUrl(e.target.value)}}
                    />
            </div>

            <section className="px-4">
                <div className="flex gap-10 items-center h-20">
                    <div className="flex gap-3">
                        <label htmlFor="">Cor do link</label>
                        <input 
                        className="h-9 w-10 mb-2 
                        " 
                        type="color"
                        value={NameColorInput}
                        onChange={(e) => setNameColorInput(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-3">
                        <label htmlFor="">Fundo do link</label>
                        <input 
                        className="h-9 w-10 mb-2 " 
                        type="color"
                        value={bgColorInput}
                        onChange={(e)=>{setbgColorInput(e.target.value)}}
                        />
                    </div>
                </div>
            </section>

            <div className="border  border-blue-600 flex flex-col items-center w-[360px] lg:w-full justify-start h-[100px] gap-5">
                <label htmlFor="">Veja como está ficando:</label>
                <article
                className="h-[35px] rounded-sm w-[330px] lg:w-[420px] flex items-center justify-center"
                style={{background: bgColorInput}}
                >
                    <p
                    style={{color: NameColorInput}}
                    >
                    {inputName}
                    </p>
                </article>
            </div>

            <button className="flex items-center justify-center gap-3 bg-blue-600 w-full lg:w-full mt-2 rounded-sm h-[35px] cursor-pointer">cadastrar <i><Link size={18}/></i></button>
        </form>
        </div>
        </>
    )
}