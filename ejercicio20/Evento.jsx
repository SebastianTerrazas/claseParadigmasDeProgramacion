import React, { useState } from 'react'

const Evento = () => {
    const [text,setText] = useState('Este es un texto desde estado')

    const changeText = () => {
        setText('Texto modificado')
    }

    return (
        <>
            <h2>{ text }</h2>
            <button onClick={ changeText }>Press me!</button>
        </>
    )
}
export default Evento