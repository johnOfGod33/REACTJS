import { useState } from "react"; // permet l'affichage
const Game = () =>{
    let [count, setCount] = useState(0);
    let handleClick = () =>{
        setCount(prevCount => prevCount+=1);
    }
    return (
        <div>
            <section>
                {count}
            </section>
            <section>
                <button onClick={handleClick}>
                    Count
                </button>
            </section>
        </div>
    )

}

export default Game;


