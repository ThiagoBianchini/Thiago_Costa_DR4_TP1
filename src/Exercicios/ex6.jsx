import React, { useState } from 'react';

function Ex6 () {

    const Contador = () => {
        const [numero, setNumero] = useState(0); 

        return (
            <div>
                <h1>Contador: {numero}</h1>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
                <button onClick={() => setNumero(numero - 1)}>Diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <Contador/>
        </div>
    )
}

export default Ex6;
