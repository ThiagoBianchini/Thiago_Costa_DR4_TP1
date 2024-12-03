import React, { useState } from 'react';

function Ex8() {
  const [texto, setTexto] = useState('Clique aqui!');

  const handleClick = () => {
    setTexto('O botão foi clicado!');
  };

  return (
    <div>
      <button style={{
        backgroundColor: 'blue',
        border: '2px dotted cyan'
      }}
      onClick={handleClick}>{texto}</button>
    </div>
  );
}

export default Ex8;
