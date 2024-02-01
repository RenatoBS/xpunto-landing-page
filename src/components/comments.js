import React from "react";
import './comments.css';

export function Comments() {
    return (
        <div className='comments'>
            <div className="comments-container">
                <div className="comments-header">
                    <h5>Com a palavra nossos usuários:</h5>
                </div>
                <div className="comments-list">
                    <p>Darla Carvalho - "Muito bom. Recomendadissimo, só precisa de mais pessoas usando."</p>
                    <p>Brenda de Jesus -"Achei incrível e muito promissor."</p>
                    <p>Gustavo Luz -"Esplêndido! O aplicativo é simples e maravilhoso."</p>
                    <p>Cris Melo - "Conheci por um amigo, quero parabenizar pela ideia e trabalho."</p>
                </div>
            </div>
        </div>
    );
}