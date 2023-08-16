const MyButton = ({titre, fonction}) => {
    return(
    <button onClick={fonction}> 
        {titre} 
    </button>
    )
}

export default MyButton;