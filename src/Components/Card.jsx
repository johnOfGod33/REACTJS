import MyButton from "./MyButton";
import style from "./Card.module.css"
const Card = ({titre, children}) => {
    let handleClick = () =>{
        alert("Tu as compris");
    }
 return(
    <div className={style.toto}>
        <h1> {titre} </h1>
        <p> {children} </p>
        <MyButton text={"click on me"} handleClick={handleClick} />
    </div>
 )
}

export default Card;