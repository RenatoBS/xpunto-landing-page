import React from 'react';
import './menubar.css'

export function Navbar() {
    const handleButton = (buttonText) => {
        alert(`${buttonText}!`);
    }

    return (
        <div className='Menubar'>
            <img className='Imagem' src="logo.png" alt="Logo"></img>
            <button onClick={() => handleButton('1º Botão')}>1º Botão</button>
            <button onClick={() => handleButton('2º Botão')}>2º Botão</button>
            <button onClick={() => handleButton('3º Botão')}>3º Botão</button>
            <button onClick={() => handleButton('4º Botão')}>4º Botão</button>
            <div className='Usuario'>
                <button onClick={() => handleButton('Sign in')}>Sign in</button>
                <button onClick={() => handleButton('Sign up')}>Sign up</button>
            </div>
        </div>
    );
}
