import MyButton from "./MyButton";
const Card = ({titre, children}) =>{
    let handleClick = () =>{
        alert("C'est fini");
    }
    return(
        <div>
            <h1> {titre} </h1>
            {children}
            <MyButton titre = {"click"} fonction={handleClick}/>
        </div>
    )
}

export default Card;