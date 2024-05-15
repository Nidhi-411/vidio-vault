
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = ()=>{
    return (
        <div className="flex" >
            
          <SideBar/>
           <Outlet/>  
       {/* Outelet me ya to <MainContainer aayega ya WatchPage , accourding to appRouter */}
        </div>
    )
}

export default Body;