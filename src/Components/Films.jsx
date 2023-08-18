import { useEffect } from "react";
const Films = () =>{
    let films = [
        {titre: "avatar", description: "blablabla", pays: "USA"},
        {titre: "Avengers", description: "les vengeurs !!", pays: "USA"},
        {titre: "Naruto", description: "Talk no jutsu", pays: "Japon"}
    ];

 /*    useEffect(()=>{
        console.log("affichage");
    }) */
    //fonction map

    return (
        <div className="toto">
            <div style={{backgroundColor: "green"}}>
            {
                films.map((film, indice)=>{ //on utilise le key pour garder une trace apres que DOM fictif ait rendu les element.si on a besoin de modifier ces element les trace lui permettront a react de se retrouve 
                    return(
                        <div key={indice}>  
                            <h2>
                                 {film.titre} 
                            </h2>
                            <p>
                                 {film.description}
                            </p>
                            <h4>
                                {film.pays}
                            </h4>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Films;