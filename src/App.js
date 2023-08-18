import Films from "./Components/Films";
import { useState } from "react";
import Welcome from "./Components/Welcome";
import Card from "./Components/Card";
import Game from "./Components/Game";
import GoBackToHome from "./Components/GoBackToHome";

function App(){
  let [showCaractere, setShowCaratere] = useState(false)
  return (
    <div>
  {/*     <Card/>
      <Welcome/>
      <section>
          <button onClick={()=>{setShowFilm(prevState => !prevState)}}>
            showFilm
          </button>
      </section>
      {
        showFilm && <Films/>
      } */}
      <section>
        <button onClick={()=>{setShowCaratere(prevState => !prevState)}}>
          showCaractere
        </button>
      </section>
      <section>
        {
          showCaractere && <GoBackToHome/>
        }
      </section>
    </div>
  )
}

export default App;   