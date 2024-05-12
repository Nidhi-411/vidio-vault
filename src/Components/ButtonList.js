import Button from "./Button";

const ButtonList = ()=>{

    const list = ["All" , "Development" ,"live",   "Music" , "Computer" , "Gamming" , "Ai" ,"React" , "Projects","Dance", "Shorts" ,"Latest" , "Fun","DSA", "Food", ]
   
    return (
        <div className="flex">

           {list.map((l) => (
                <Button key={l} name={l} />
            ))}

        </div>
    )
}
export default ButtonList;