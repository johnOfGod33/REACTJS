const CustomButton = ({text})=>{ //chaque composant a un parametre props
    let handleClick = ()=>{
        console.log("click");
    }
    return(
        <button onClick={handleClick}>
             {text} 
        </button>
    )
}
export default CustomButton;