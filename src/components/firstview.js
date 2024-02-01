import React from "react";
import './firstview.css';
import AndroidLogo from './AndroidLogo.png'; // Substitua pelo caminho real do seu logo Android
import IOSLogo from './IOSLogo.png'; // Substitua pelo caminho real do seu logo IOS

export function FirstView() {
    function Download(system) {
    }

    return (
        <div className="firstview">
            <span><h2>Apresentação XPUNTO Network: Um app que vai te conectar com pessoas ao redor de todo o mundo com o mesmo interesse que você!</h2></span>
            <p>Com ele você terá a oportunidade de expandir sua rede de contatos de uma forma eficiente e útil, imagine poder se conectar com pessoas que tenham os seus mesmos interesses, sejam eles: sociais, filantrópicos, profissionais, e comerciais de forma ilimitada.</p>
            <p>BAIXE NOSSO APP EM SUA LOJA DE APLICATIVOS:</p>  
            <div className="buttondownload">
                <a href="https://play.google.com/store/apps/details?id=br.com.xpunto" onClick={() => Download('Android')} target="_blank" rel="noopener noreferrer">
                    <img src={AndroidLogo} alt="Android Logo" className="logo" />
                </a>
                <a href="https://www.apple.com/br/app-store/" onClick={() => Download('IOS')} target="_blank" rel="noopener noreferrer">
                    <img src={IOSLogo} alt="iOS Logo" className="logo" />
                </a>
            </div>
        </div>
    );
}