 
 import { useDispatch } from "react-redux"
 import {toggleMenu} from "../utils/appSlice"
 const Head  = ()=>{
     
      const dispatch = useDispatch();
     const handleToggelMenu = ()=>{
        // dispatch an action
        dispatch(toggleMenu());
     }

    return (
        <div className="grid grid-flow-col border-b-2 shadow-xl py-2 ">
         <div className=" flex col-span-1">
          <img
          onClick={()=> handleToggelMenu()}
          className="h-11 mx-2 cursor-pointer"
          alt="menu" 
          src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg"
          />
          <img 
          className="h-12 mx-2"  
          alt="logo" 
         src="https://cdn.pixabay.com/photo/2020/11/01/04/17/youtube-5702828_1280.png"
         />
         </div>

         <div className="col-span-10 my-3 px-16">

         <input type="text" className="border border-gray-500 w-1/2 rounded-l-full p-1 "/>
         <button  className= "border bg-gray-300 border-gray-500 rounded-r-full p-1">&#x1F50D;</button>
         </div>
         <div className=" col-span-1">

          <img
          className="h-10 p-1"
          alt="usericon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
         </div>
        </div>
    )
 }

 export default Head;