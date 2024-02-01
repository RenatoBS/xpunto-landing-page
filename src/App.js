import React from 'react';
import './App.css';
import { Navbar } from './components/menubar';
import { Menubar } from './components/menubar';
import { FirstView } from './components/firstview';
import { Additional } from './components/additional';
import { Comments } from './components/comments';
import YoutubeEmbed  from './components/Videoapresentacao';
import CadastroForm from './components/CadastroForm';
import Footer from './components/Footer';

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
      <Additional/>
      <Comments/>
      <YoutubeEmbed/>
      <CadastroForm/>
      <Footer/>
    </div>
  );
}


export default App;
