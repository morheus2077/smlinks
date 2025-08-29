import { useState, useEffect, type FormEvent } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from 'lucide-react';

import { Trash } from "lucide-react";
import { db } from "../../services/firebaseConnection";
import 
    { 
     addDoc,
     collection,
     onSnapshot,
     query,
     orderBy,
     deleteDoc,
     doc
} from "firebase/firestore";

interface LinkProps{
    id: string,
    name: string,
    url: string,
    color: string,
    bg: string,
}


export function Admin(){

    const[inputName, setInputName] = useState("");
    const[inputUrl, setInputUrl] = useState("");
    const[NameColorInput, setNameColorInput] = useState("#f1f1f1");
    const[bgColorInput, setbgColorInput] = useState("#0000");

    const[linksList, setLinksList] = useState <LinkProps[]>([])

    useEffect(()=>{
       const linksRef = collection(db, "links");
       const queryRef = query(linksRef, orderBy("created", "asc"));

       const unsub = onSnapshot(queryRef, (snapshot) => {
         let allLinks = [] as LinkProps[];

        snapshot.forEach((doc) => {
            allLinks.push({
                  id: doc.id,
                  name: doc.data().name,
                  url: doc.data().url,
                  color: doc.data().color,
                  bg: doc.data().bg
            }) 
        })
            console.log(unsub)
          console.log(allLinks)
          setLinksList(allLinks)
       } )
        
      
    },[]);

     function handleRegister(e: FormEvent){
        e.preventDefault();

        if(inputName === "" || inputUrl === ""){
            alert("Preencha todos os campos");
            return;
        }

         addDoc(collection(db, "links"), {
            name: inputName,
            url: inputUrl,
            color: NameColorInput,
            bg: bgColorInput,
            created: new Date()
        })
        
        .then(()=>{
            alert("Link adicionado!");
            setInputName("");
            setInputUrl("");
            
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    function handleDelete(item: string){
        deleteDoc(doc(db, "links", item))
        .then(() =>{
            alert("Link excluido com sucesso!");
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
       <Header/>
        <div className="h-dvh flex flex-col items-center bg-[#030129]">
        <form onSubmit={handleRegister} className="w-[360px] md:w-[700px] lg:w-[500px] " action="">
            <div className="flex flex-col px-4 lg:px-0 ">
                    <label className="pt-6 md:text-xl lg:text-lg" htmlFor="name">Nome do link</label>
                    <Input
                    className="bg-white w-full lg:w-[500px] md:h-[40px] h-[30px] lg:h-[30px] rounded-xs indent-3 text-black mt-4"
                    placeholder="Digite o nome do link:"
                    value={inputName}
                    onChange={(e) =>{setInputName(e.target.value)}}
                    />
                    <label className="pt-6 md:text-xl lg:text-lg" htmlFor="url">URL do link</label>
                    <Input
                    className="bg-white w-full lg:w-[500px] md:h-[40px] h-[30px] lg:h-[30px] rounded-xs indent-3 text-black mt-4"
                    placeholder="Digite a URL do link:"
                    value={inputUrl}
                    onChange={(e) =>{setInputUrl(e.target.value)}}
                    />
            </div>

            <section className="px-4">
                <div className="flex gap-10 items-center h-20">
                    <div className="flex gap-3">
                        <label
                        className="md:text-xllg:text-sm"
                        htmlFor="">Cor do link</label>
                        <input 
                        className="h-9 w-10 mb-2 
                        " 
                        type="color"
                        value={NameColorInput}
                        onChange={(e) => setNameColorInput(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-3">
                        <label
                        className="md:text-xllg:text-sm"
                        htmlFor="">Fundo do link</label>
                        <input 
                        className="h-9 w-10 mb-2 " 
                        type="color"
                        value={bgColorInput}
                        onChange={(e)=>{setbgColorInput(e.target.value)}}
                        />
                    </div>
                </div>
            </section>

            {inputName !== "" &&(
                <>
                <div className="border  border-blue-600 flex flex-col items-center w-[360px] md:w-full lg:w-full justify-start h-[100px] gap-5">
                <label htmlFor="">Veja como está ficando:</label>
                <article
                className="h-[35px] rounded-sm w-[330px] md:w-[600px] lg:w-[420px] flex items-center justify-center"
                style={{background: bgColorInput}}
                >
                    <p
                    style={{color: NameColorInput}}
                    >
                    {inputName}
                    </p>
                </article>
            </div>
                </>
            )}  

            <button 
            className="flex items-center justify-center gap-3 bg-blue-600 w-full lg:w-full mt-2 rounded-sm h-[35px] cursor-pointer lg:h-[35px] md:h-[45px] md:text-2xl lg:text-lg">
            cadastrar 
            <i><Link size={18}/></i>
            </button>
        </form>

        <div className="mt-8 md:text-3xl flex flex-col items-center w-[360px] md:w-[700px] lg:w-[500px]  justify-center">
                <h1>Meus Links</h1>
                <div className="lg:w-full mt-5 flex flex-col gap-3">
                    {linksList.map((link)=>(
                        <>
                <article
                        style={{background: link.bg}}
                        key={link.id}
                        className="h-[35px] rounded-sm w-[330px] md:w-[600px] lg:w-full flex items-center justify-between px-5 lg:text-lg  "
                        >
                    <p
                        style={{color: link.color}}
                    >
                    {link.name}
                    </p>
                    <div>
                    <button onClick={() => handleDelete(link.id)} className="border  border-dashed rounded-sm p-1 cursor-pointer hover:bg-white hover:text-red-600 ">
                    <i><Trash size={20}/></i></button>
                    </div>
                </article> 
                        </>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}