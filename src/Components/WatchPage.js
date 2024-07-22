import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";
import Livechat from "./Livechat";

const WatchPage = ()=>{  
    const dispatch = useDispatch();
    useEffect(()=>{ 
    
      dispatch(closeMenu()); 
    },[])
     
    const [searchParams] = useSearchParams();
   // console.log(searchParams.get("v"));

    return (
      <div className="flex flex-col w-full">
        <div className="p-5 flex w-full " >
           <div>
            < iframe width="800"
             height="400"
              src={"https://www.youtube.com/embed/"+searchParams.get("v")}
              title="YouTube video player"
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
             </iframe>
            </div>
         <div className="w-full">
          <Livechat />
        </div>
        </div>
        <CommentsContainer/>
        </div>
    )
}

export default WatchPage;