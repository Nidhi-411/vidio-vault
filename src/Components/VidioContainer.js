import { useEffect, useState } from "react"
import { YouTube_Vidios_Api } from "../utils/Constants"
import VidioCard from "./VidioCard";
import { Link } from "react-router-dom";

const VidioContainer = ()=>{

    const [vidios , setVidios ] = useState([]);

    useEffect(()=>{
        getVidios()
    } , [])

    const getVidios = async()=>
        {
           const data = await fetch(YouTube_Vidios_Api)
           const json = await data.json();
           //console.log(json);
           setVidios(json.items);
        }

    return(
        <div className="flex flex-wrap">
           {
              vidios.map((vidio)=>
              <Link key={vidio.id} to={"/watch?v="+vidio.id}> 
              <VidioCard   info={vidio}/>
              </Link>)
           }
          
        </div>
    )
   
} 
export default VidioContainer;