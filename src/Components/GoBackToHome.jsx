import style from "./GoBackToHome.module.css"

const GoBackToHome = () =>{
    let tabCaractere = ["Naruto", "Ichigo", "Luffy"];
    return(
        <div>
            {
                tabCaractere.map((caractere, indice)=>{
                    return(
                        <h2 className={style.custom} key={indice}>
                            {caractere}
                        </h2>
                    )
                })
            }
        </div>
    )
}

export default GoBackToHome;