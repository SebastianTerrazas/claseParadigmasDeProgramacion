import React, { useState } from 'react'

const Lights = () => {
    const [bulb1, updateBulb1] = useState(false)
    const [bulb2, updateBulb2] = useState(false)
    const [bulb3, updateBulb3] = useState(false)
    const [bulb4, updateBulb4] = useState(false)
    const [bulb5, updateBulb5] = useState(false)
    const [bulb6, updateBulb6] = useState(false)

    const bulbs = [bulb1, bulb2, bulb3, bulb4, bulb5, bulb6]

    const bulbStyle = {
        'cursor'    : 'pointer',
        margin      : '8px',
    }
    const textStyle = {
        'text-align': 'center',
    }

    const getImage = (i) => {
        return bulbs[i-1] ? "https://i.postimg.cc/tChsCykf/on.png" : "https://i.postimg.cc/wTKtp3XL/off.png"
    }

    return (
        <div>
            <table>
                <tr>
                    <td><img src={getImage(1)} alt="bulb" width="128px" onClick={() => updateBulb1(bulb => !bulb)} style={bulbStyle}/></td>
                    <td><img src={getImage(2)} alt="bulb" width="128px" onClick={() => updateBulb2(bulb => !bulb)} style={bulbStyle}/></td>
                    <td><img src={getImage(3)} alt="bulb" width="128px" onClick={() => updateBulb3(bulb => !bulb)} style={bulbStyle}/></td>
                    <td><img src={getImage(4)} alt="bulb" width="128px" onClick={() => updateBulb4(bulb => !bulb)} style={bulbStyle}/></td>
                    <td><img src={getImage(5)} alt="bulb" width="128px" onClick={() => updateBulb5(bulb => !bulb)} style={bulbStyle}/></td>
                    <td><img src={getImage(6)} alt="bulb" width="128px" onClick={() => updateBulb6(bulb => !bulb)} style={bulbStyle}/></td>
                </tr>
                <tr>
                    <td style={textStyle}>Foco 1:<br/>Sala</td>
                    <td style={textStyle}>Foco 2:<br/>Comedor</td>
                    <td style={textStyle}>Foco 3:<br/>Cocina</td>
                    <td style={textStyle}>Foco 4:<br/>Estancia</td>
                    <td style={textStyle}>Foco 5:<br/>Recamara<br/>principal</td>
                    <td style={textStyle}>Foco 6:<br/>Recamara<br/>de los niños</td>
                </tr>
            </table>
        </div>
    )
}

export default Lights
