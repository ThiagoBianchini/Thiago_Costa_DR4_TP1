import React, { useState } from 'react';

function Ex2 () {

    const Mensagem = () => {

        const [texto, setTexto] = useState('Bem-vindo');

        const handleClick = () => {
            if (texto === 'Bem-vindo') {
                setTexto('Até a próxima');
            }
        };

        return (
            <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h1>{texto}</h1>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
        );
    };

    return (
        <Mensagem />
    );
}

export default Ex2;
