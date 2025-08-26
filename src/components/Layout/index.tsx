import { Outlet } from "react-router";

export function Layout(){
    return(
        <>
        <div className="bg-[#030129] text-white">
        <Outlet />
        </div>
        
        </>
    )
}
