import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = ()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
   
      dispatch(closeMenu());
  
    },[])
     
    const [searchParams] = useSearchParams();
   // console.log(searchParams.get("v"));

    return (
        <div className="p-5">
           < iframe width="800"
            height="400"
             src={"https://www.youtube.com/embed/"+searchParams.get("v")}
              title="YouTube video player"
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage;