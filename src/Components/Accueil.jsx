import Presentation from "./Presentation";

const Accueil = ({children})=>{
 return(
    <div>
        <h1>Acceuil</h1>

        {children}
        
        <Presentation />
    </div>
 )
}

export default Accueil;