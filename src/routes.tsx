import {  createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { Networks } from "./pages/networks";
import { NotFound } from "./pages/notFound";
import { Private } from "./private/Private";



const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
            path: '/',
            element: <Home/>
            },

            {
                path: '/login',
                element: <Login/>
            },

            {
                path: '/admin',
                element: <Private> <Admin/> </Private> 
            },
            {
                path: '/admin/social',
                element: <Private><Networks/></Private> 
            },

            {
                path: "*",
                element: <NotFound/>
            }
            
        ]
    }
])

export {router};