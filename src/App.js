import React from 'react';
import './App.css';
import { Navbar } from './components/menubar';
import { Menubar } from './components/menubar';
import { FirstView } from './components/firstview';

function App() {
  const handleBotao1 = () => {
    alert('1º Botão clicado!');
    // Adicione sua lógica personalizada para o 1º Botão aqui
  };

  const handleBotao2 = () => {
    alert('2º Botão clicado!');
    // Adicione sua lógica personalizada para o 2º Botão aqui
  };

  const handleBotao3 = () => {
    alert('3º Botão clicado!');
    // Adicione sua lógica personalizada para o 3º Botão aqui
  };

  return (
    <div className="App">
      <Navbar/>
      <FirstView/>
      <div className='additional'>
        <p>ESPAÇO RESERVADO PARA COLOCAR ALGUNS DADOS ADICIONAIS E AVALIAÇÕES DE USUÁRIOS</p>
      </div>
      <div className='explanation'>
        <p>ESPAÇO RESERVADO PARA COLOCAR UM TUTORIAL E BREVE EXPLICAÇÃO SOBRE COMO FUNCIONA O APP</p>
      </div>
      <div className='director'>
        <p>ESPAÇO RESERVADO PARA COLOCAR OS LINKS DE DIRECIONAMENTO DAS REDES SOCIAIS</p>
      </div>
    </div>
  );
}


export default App;
