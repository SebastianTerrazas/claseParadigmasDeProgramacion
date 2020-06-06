import React, { useState } from 'react'

const Counter21 = () => {
    const [count,setCount] = useState(0)

    return (
        <div>
            <>
                <h2>{ count < 18 ? 'Menor de edad' : 'Mayor de edad' }</h2>
                <h4><em>Sips { count < 18 ? 'orange juice :(' : count < 90 ? 'vodka :)' : 'meds :(' }</em></h4>
                <h3>Edad: { count }</h3>
                <button onClick={() => setCount(count + 1)}>
                    Happy new year!
                </button>
            </>
        </div>
    )
}

export default Counter21
