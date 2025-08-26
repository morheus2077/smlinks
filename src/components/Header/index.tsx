import { Link } from "react-router";


export function Header(){
    return(
        <>
        <header className="bg-white text-black">
            <div className="flex items-center h-[50px]">
                <Link to="/" >Home</Link>
                
            </div>
        </header>
        </>
    )
}