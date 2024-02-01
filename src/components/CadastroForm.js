import React, { useState } from 'react';
import './CadastroForm.css'

const CadastroForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [captcha, setCaptcha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verificar a resposta do captcha
        const resultadoCaptcha = parseInt(captcha);
        if (resultadoCaptcha === 8) {
            // A resposta está correta, você pode realizar a lógica de envio aqui
            console.log("Cadastro realizado com sucesso!");
            console.log("Nome: ", nome);
            console.log("Email: ", email);
        } else {
            // A resposta está incorreta
            alert("A resposta do captcha está incorreta. Tente novamente.");
        }
    };

    return (
        <div>
            <h1>Entre em contato conosco:</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="captcha">Qual é a soma de 5 + 3?</label>
                <input
                    type="text"
                    id="captcha"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    required
                />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroForm;