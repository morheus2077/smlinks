import { Header } from "../../components/Header";
import { Link } from "lucide-react";
import { Input } from "../../components/Input";
import { useState } from "react";
import { type FormEvent } from "react";
import {db} from '../../services/firebaseConnection';
import {doc, setDoc, getDoc} from 'firebase/firestore';


export function Networks(){
    
    const[instagram, setInstagram] = useState("");
    const[github, setGithub] = useState("");
    const[facebook, setFacebook] = useState("");

    useState(()=>{
         const socialRef = doc(db, "socialnetworks", "link");
            getDoc(socialRef)   
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data()?.facebook);
                    setInstagram(snapshot.data()?.instagram);
                    setGithub(snapshot.data()?.github)
                }
                  })
                    .catch((error) =>{
                            console.log(error)
                        })     
                                });

    function handleRegister(e:FormEvent){
        e.preventDefault(); 

       setDoc(doc(db, 'socialnetworks', "link"), {
        facebook: facebook,
        instagram: instagram,
        github: github,
        created: new Date()
       })
       .then(()=>{
        alert("Cadastro feito com sucesso!");
       })
       .catch((error) =>{
        console.log(error);
       })
    }


    return(
        <>
        <Header/>
        <h1 className="text-center text-3xl mt-5">Suas redes sociais</h1>
        <div className="h-dvh flex  justify-center ">
        <form onSubmit={handleRegister} className="mt-5" action="">
            <div className="flex flex-col">
                <label className="mt-2" htmlFor="facebook">Link do Facebook</label>
                <Input
                className="bg-[#172554] w-[360px] lg:w-[500px] h-[35px] rounded-sm indent-3 mt-2"
                value={facebook}
                onChange={(e) =>{setFacebook(e.target.value)}}
                />
                <label className="mt-2" htmlFor="instagram">Link do instagram</label>
                <Input
                className="bg-[#172554] w-[360px] lg:w-[500px] h-[35px] rounded-sm indent-3 mt-2"
                value={instagram}
                onChange={(e)=>{setInstagram(e.target.value)}}
                />
                <label className="mt-2" htmlFor="youtube">Link do Github</label>
                <Input
                className="bg-[#172554] w-[360px] lg:w-[500px] h-[35px] rounded-sm indent-3 mt-2"
                value={github}
                onChange={(e) =>{setGithub(e.target.value)}}
                />
                <button className="bg-blue-600 w-[360px] lg:w-[500px] h-[33px] rounded-md cursor-pointer hover:bg-white hover:text-blue-600 transition-transform hover:scale-105 duration-200 ease-in-out mt-3 flex items-center justify-center gap-3">Salvar Links <i><Link size={20}/></i></button>
            </div>
        </form>
        </div>
        </>
    )
}