import { Unlink } from "lucide-react"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState, type FormEvent } from "react";
import {auth} from  '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useNavigate } from "react-router";

export function Login(){

    const navigate = useNavigate();
    const[emailInput, setEmailInput] = useState("");
    const[passInput, setPassInput] = useState("");
    const[inputError, setInputError] = useState("");

   async function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(emailInput === "" || passInput === ""){
            alert('Preencha todos os campos!');
            return;
        }

       await signInWithEmailAndPassword(auth, emailInput, passInput)
        .then(()=>{
            alert("Login feito com sucesso!");
            navigate('/admin', {replace: true})
        })
        .catch((error)=>{
            console.log(error)
            setInputError("Erro, email ou senha inválidos!")
        })
    }


    return(
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col">
                <h1 className="flex gap-3 text-5xl justify-center">Seemaxxx
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Links
                </span> 
                <i><Unlink size={40}/></i>
                </h1>

              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 mt-5" action="">
                <h1 className="text-red-600">{inputError}</h1>
                <Input
                type="email"
                placeholder="Digite o seu email:"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                />
                <Input
                placeholder="Digite a sua senha:"
                type="password"
                value={passInput}
                onChange={e => setPassInput(e.target.value)}
                />

                <Button
                type="submit"
                />
              </form>
            </div>
        </div>
        </>
    )
}