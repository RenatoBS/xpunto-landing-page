// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Informações importantes:</h4>
        <ul>
          <li>
            <a
              href="https://sergiodellerba.github.io/xpunto-txt-sobre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="https://sergiodellerba.github.io/xpunto-txt-faq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://sergiodellerba.github.io/xpunto-dicas-seguranca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Segurança
            </a>
          </li>
          <li>
            <a
              href="https://sergiodellerba.github.io/xpunto-txt-termos-uso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termos de uso
            </a>
          </li>
          <li>
            <a
              href="https://sergiodellerba.github.io/xpunto-txt-politica-privacidade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LGPD
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/xpuntoapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/xpuntoapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          {/* Adicione outros links de redes sociais conforme necessário */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
