import { useEffect, useState, type ReactNode } from 'react';
import {auth} from '../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate} from 'react-router';

interface PrivateProps{
    children: ReactNode;
}

export function Private({children}: PrivateProps): any{

    const[loading, setLoading] = useState(true);
    const[signed, setSigned] = useState(false);

    useEffect(()=>{

    const onSub = onAuthStateChanged(auth, (user)=>{
        if(user){
            const userData = {
                uuid: user?.uid,
                email: user.email
            }
                localStorage.setItem("reactLinks", JSON.stringify(userData))
                    setLoading(false)
                        setSigned(true)
                } else {
                setLoading(false)
                setSigned(false)
        }
    })


    return ()=>{
        onSub();
    }
    }, []);

    if(loading){
        return <div></div>
    }

    if(!signed){
        return <Navigate to='/login'/>
    }


    return children;
}