import React from 'react';
import './menubar.css';

export function Navbar() {
    const handleButton = (buttonText) => {
        alert(`${buttonText}...`);
    }

    return (
        <div className='Menubar'>
            <img className='Imagem' src="logo.png" alt="Logo"></img>
            <button onClick={() => handleButton('Acesso aos planos premium')}>Planos</button>
            <button onClick={() => handleButton('Acesso a área de ajuda e suporte aos clientes')}>Suporte</button>
            <button onClick={() => handleButton('Acesso a informações mais detalhadas sobre o app')}>Saiba mais</button>
            <button onClick={() => handleButton('Acesso a informação de proteção de dados aos clientes')}>Privacidade</button>
            <div className='Usuario'>
                <button onClick={() => handleButton('Acesso a área de usuário e senha')}>Login</button>
                <button onClick={() => handleButton('Acesso a área de novos cadastros')}>Cadastre-se</button>
            </div>
        </div>
    );
}
