import React from "react";
import './additional.css';
import desejos from '../assets/desejos.gif';
import interação from '../assets/interação.gif';
import liberdade from '../assets/liberdade.gif';
import tempo from '../assets/tempo.gif';

export function Additional() {
    return (
        <div className='additional'>
            <div className="text">
                <h4>Quais os benefícios de usar o XPUNTO?</h4>
                <p>É mais saudável unir pessoas através de seus muitos interesses em comum do que as distanciar pelas suas poucas diferenças.</p>
                <p>É difícil alcançar objetivos sozinhos.</p>
                <p>Saber com quem conversar sobre o que se quer é essencial para atender qualquer desejo.</p>
                <p>Estudo é importante, mas conseguir se comunicar efetivamente é a chave para o sucesso em qualquer área da vida.</p>
                <p>Barreiras de comunicação somem quando existe o mesmo objetivo.</p>
                <p>Conectamos pessoas pelos seus interesses em comum, para que possam fazer negócios, compartilhar ideias ou simplesmente desfrutar de atividades de lazer juntos.</p>
                <div className="buttons">
                    <button onClick={() => alert("Funções gratuitas do app...")}>Free</button>
                    <button onClick={() => alert("Funções pagas do app...")}>Premium</button>
                </div>
            </div>
            <div className="container">
                <img src={desejos} className="images" alt="Desejos" />
                <img src={interação} className="images" alt="Interação" />
                <img src={liberdade} className="images" alt="Liberdade" />
                <img src={tempo} className="images" alt="Tempo" />
            </div>
        </div>
    );
}
