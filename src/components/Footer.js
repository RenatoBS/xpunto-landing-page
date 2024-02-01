// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <h4>Siga-nos nas redes sociais:</h4>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/xpuntoapp" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/xpuntoapp/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                    {/* Adicione outros links de redes sociais conforme necessário */}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
