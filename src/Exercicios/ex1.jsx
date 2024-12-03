import React, { useState } from 'react';

function Ex1 () {

    const BotaoClicavel = () => {
        const [texto, setTexto] = useState('Clique aqui!');

        const handleClick = () => {
            setTexto('O botão foi clicado!');
        };

        return (
            <button onClick={handleClick}>
            {texto}
            </button>
        );
    };

    return (
        <BotaoClicavel/>
    )
}

export default Ex1;