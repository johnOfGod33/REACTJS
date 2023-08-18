import { useState } from "react";
const Welcome = () =>{
    let [isPresent, setIsPresent] = useState(true)
    let handleClick = () =>{
        setIsPresent(!isPresent)
    }
    return(
        <div>
            <section>
                <button onClick={handleClick}>
                    {
                        isPresent ? ("Leave me") : ("Come Back")
                    }
                </button>
            </section>
            {
                isPresent ? (
                    <section>
                        <p>
                            Good to see you
                        </p>
                    </section>
                ):(
                    <section>
                        <p>
                            I miss you, please come back
                        </p>
                    </section>
                )
            }
        </div>
    )
}

export default Welcome;