import React, { useState } from 'react';
import apiLocal from '../Api/apiLocal';
import { useNavigate } from 'react-router-dom';

export default function CadastroAluno() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [senha, setSenha] = useState('');


    const navigate = useNavigate()
    async function cadastroAluno(e) {

        try {

            e.preventDefault();

             await apiLocal.post('/CadastrarAluno', {

                nome,
                telefone,
                email,
                endereco,
                senha,
                data_nascimento

            });

            
            navigate("/LoginAluno")
        } catch (err) {

            alert('Erro ao comunicar com o Backend')
        }
    }

    return (

        <div>

            <h1>Formulario de Cadastro de Usuários</h1>

            <form onSubmit={cadastroAluno}>

                <label>Nome:
                    <input type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />

                </label>

                <label>E-mail:
                    <input type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>telefone:
                    <input type="text"
                        placeholder="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)} />

                </label>

                <label>Endereço:
                    <input type="text"
                        placeholder="Endereço"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)} />

                </label>

                <label>Data de Nascimento:
                    <input type="date"
                        value={data_nascimento}
                        onChange={(e) => setData_nascimento(e.target.value)} />

                </label>

                <label>Senha:
                    <input type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                </label>

                <button type='Submit'>Cadastrar</button>

            </form>

        </div>
    )
}