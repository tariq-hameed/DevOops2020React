import React, { useState} from 'react'

export const SignInView = () => {
    const [username, setUsername] = useState("Arasto")
    const [number, setNumber] = useState(10)
    return(
        <div>
            <h1>{username}</h1>
            <button onClick={() => setUsername("Tariq")}>Update the value of the username state</button>
            <hr /><br />

            <h1>{number}</h1>
            <button onClick={()=>setNumber - 1}>Decrement</button>
            <button onClick={()=>setNumber + 1}>Increment</button>

        </div>
    )
}
