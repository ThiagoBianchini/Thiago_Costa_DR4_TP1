import React, { useState } from 'react';

function Ex5() {
  const [imagem, setImagem] = useState(true);

  const trocaImagem = () => {
    setImagem(prevState => !prevState);
  };

  return (
    <div>
      <img
        src={imagem ? "src\\assets\\sol.png" : "src\\assets\\lua.png"}
      />
      <br />
      <button onClick={trocaImagem}>Clique para mudar a imagem</button>
    </div>
  );
}

export default Ex5;
