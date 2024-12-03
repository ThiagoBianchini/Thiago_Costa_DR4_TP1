import React, { useState } from 'react';

function Ex7 () {

    const Mensagem = () => {
        const [nome, setNome] = useState('');
        const [mensagem, setMensagem] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setMensagem(nome.trim() ? `Bem-vindo, ${nome}` : 'Insira um nome.');
        };

        return (
            <div>
            <h1>Formulário de Saudação</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                placeholder="Digite seu nome" 
                required 
                />
                <button type="submit">Enviar</button>
            </form>
                {mensagem && <p>{mensagem}</p>}
            </div>
        );
    };

    return (
        <div>
            <Mensagem/>
        </div>
    )

}
export default Ex7;