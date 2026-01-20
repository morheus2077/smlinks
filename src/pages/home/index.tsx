import { useState, useEffect} from "react";
import { Link } from "react-router";
import { CircleArrowDown } from "lucide-react";
import { Social } from "../../components/Social";
import { Instagram, Github, Facebook} from "lucide-react";
import { db } from "../../services/firebaseConnection";
import 
    { 
     collection,
     query,
     orderBy,
     doc,
     getDoc,
     getDocs
} from "firebase/firestore";

interface LinkProps{
    id: string,
    name: string,
    url: string,
    color: string,
    bg: string,
}



export function Home(){

    
        const[linksList, setLinksList] = useState <LinkProps[]>([])
        const[fbLink, setFbLink] = useState("");
        const[instaLink, setInstaLink] = useState("");
        const[gitLink, setGitLink] = useState("");
    
        useEffect(()=>{

            //buscando os links principais
           const linksRef = collection(db, "links");
           const queryRef = query(linksRef, orderBy("created", "desc"));
    
           getDocs(queryRef)
           .then((snapshot) => {
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
                setLinksList(allLinks);
           })
                
           //buscando links das redes sociais
           const socialRef = doc(db, "socialnetworks", "link");
                getDoc(socialRef)   
                    .then((snapshot) => {
                        if(snapshot.data() !== undefined){
                            setFbLink(snapshot.data()?.facebook);
                            setInstaLink(snapshot.data()?.instagram);
                            setGitLink(snapshot.data()?.github)
                        }
                        })
                        .catch((error) =>{
                            console.log(error)
                        })
        },[]);
    

    return(
        <>
        <div className="h-dvh flex justify-center">
            <div className="mt-32">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-4xl">Emílio Branquinho</h1>
                    <p className="md:text-xl flex gap-3 items-center justify-center">Veja meus links <i><CircleArrowDown/></i></p>
                </div>
                     <div  className="flex flex-col items-center w-[360px] md:w-full lg:w-full justify-start gap-4 mt-3">

                    {linksList.map((link)=> (
                        <>
                    <article
                    key={link.id}
                    style={{background: link.bg}}
                    className="h-[35px] rounded-sm w-[330px] md:w-[600px] lg:w-[420px] flex items-center justify-center"
                    >
                    <a
                    href={link.url}
                    target="_blank"
                    >
                        <p
                        style={{color: link.color}}
                        >
                        {link.name}
                        </p>
                    </a>
                    </article>
                        </>
                    ))}
            </div>
                <footer>
                    <div className="flex gap-10 items-center justify-center mt-3">
                        <Social url={instaLink}>
                            <Instagram size={30}/>
                        </Social>
                        <Social url={gitLink}>
                            <Github size={30}/>
                        </Social>
                        <Social url={fbLink}>
                            <Facebook size={30}/>
                        </Social>
                    </div>    
                </footer>
            </div>
        </div>
        </>
    )
}