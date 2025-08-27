import { Link } from "react-router";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import {auth} from '../../services/firebaseConnection';

export function Header(){

    async function handleLogout(){
        await signOut(auth)        
    }


    return(
        <>
        <header className="w-full lg:px-[350px] py-2 px-2 lg:py-[10px] text-black ">
            <nav className="bg-white flex items-center justify-between h-10 rounded-sm">
                <div className="flex gap-5 px-5">
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/admin/social">Redes Sociais</Link>
                </div>
                <button onClick={handleLogout} className="px-3">
                    <LogOut color="red" cursor="pointer"/>
                </button>
            </nav>
        </header>
        </>
    )
}