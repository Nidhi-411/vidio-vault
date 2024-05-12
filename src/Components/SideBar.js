import { useSelector } from "react-redux";

 
 
const SideBar = ()=>{ 

    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    if(!isMenuOpen) return null ; // early return

    return(
        <div className="border border-l-gray-400 shadow-lg w-44">
            
            <ul className="pt-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Vidios</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-2">Sbbsciptions</h1>
             <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Vidios</li>
             </ul>
             <h1 className="font-bold pt-2">Watch Later</h1>
             <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Vidios</li>
             </ul>
         </div>
    )
}
export default SideBar;