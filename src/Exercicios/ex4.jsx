import React, { useState } from 'react';

function Ex4() {
  
  const Validador = () => {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleClick = () => {
      setMensagem(senha === confirmarSenha ? 'As senhas são as mesmas.' : 'As senhas não são as mesmas.');
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
        <div>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha"
            />
          </label>
        </div>
        <div>
          <label>
            Confirmar Senha:
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Confirme a senha"
            />
          </label>
        </div>
        <button onClick={handleClick}>Validar Senhas</button>
        <p>{mensagem}</p>
      </div>
    );
  };

  const Mensagem = () => {
    const [texto, setTexto] = useState('Bem-vindo');
    const [nome, setNome] = useState('');
  
    const handleClick = () => {
      if (nome === '') {
        setTexto(texto === 'Bem-vindo' ? 'Até logo' : 'Bem-vindo');
      } else {
        setTexto(texto === 'Bem-vindo' ? `Até logo, ${nome}` : `Bem-vindo, ${nome}`);
      }
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
        <h1>{texto}</h1>
        <div>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Clique aqui</button>
      </div>
    );
  };
  

  return (
    <div style={{ height: '40vh', display: 'flex', flexDirection: 'column', gap: '2em' }}>
      <Mensagem />
      <Validador />
    </div>
  );
}

export default Ex4;
