import React, { useContext, useState } from 'react';
import { AutenticadoContexto } from '../Contexts/authContexts';
import { Link, useNavigate } from 'react-router-dom';



export default function LoginAluno() {

    const { loginEntrada } = useContext(AutenticadoContexto);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
   
    const navigate = useNavigate();

    async function dadosLogin(e) {
        e.preventDefault();

        if (!email || !senha) {
            alert('Preencha todos os campos!');
            return;
        }

        try {
            const data = await loginEntrada(email, senha);

            if (data.tipo === "aluno") {
                navigate('/DashBoardAluno');
                console.log(data.tipo);
            } else if (data.tipo === "personal") {
                alert('Seu login é do tipo "personal".');
                navigate('/LoginPersonal');
            } else {
                alert('Tipo de login não reconhecido!');
            }
        } catch (err) {
            console.error('Erro ao fazer login:', err);
        }
    }

    return (

        <div className='conteinerInicioGeral'>

            <h1>Login aluno</h1>

            <form onSubmit={dadosLogin}>

                <input
                    type="text"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="Submit">Enviar</button>
            </form>
            <p>Para se cadastrar clique <Link to='/CadastrarAluno'>Aqui</Link></p>
        </div>
    )
}