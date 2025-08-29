import { Link } from "react-router";

export function NotFound(){
    return(
        <>
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-5xl font-bold">404</span>
                <span className="text-3xl lg:text-4xl font-bold">Página não encontrada</span>
                <p>Você caiu em uma página que não existe!</p>
                <Link to="/">
                    <button
                    className="bg-gray-400 w-20 md:w-[100px]
                    md:h-[30px] rounded-sm cursor-pointer"
                    >Voltar</button>
                </Link>
            </div>
        </div>
        </>
    )
}