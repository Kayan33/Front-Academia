import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiLocal from '../Api/apiLocal';

export default function EditarAluno() {

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');

    const navigate = useNavigate()
    useEffect(() => {
        async function consultarDados() {
            try {
                const resposta = await apiLocal.post(`/ConsultarAlunoUnico/${id}`);





                setNome(resposta.data.nome );
                setTelefone(resposta.data.telefone );
                setEmail(resposta.data.email );
                setEndereco(resposta.data.endereco );
                setData_nascimento(resposta.data.data_nascimento );

            } catch (err) {
                console.error("Erro ao carregar os dados:", err);
                alert("Erro ao carregar os dados do usuário");
            }
        }

        consultarDados();
    }, [id]);


    async function enviarAlteracao(e) {
        e.preventDefault();

        try {
            await apiLocal.put(`/AlterarDadosAluno/${id}`, {
                nome,
                telefone,
                email,
                endereco,
                data_nascimento
            });

            alert("Atualizado com sucesso!");
            navigate("/DashBoardALUNO");
        } catch (err) {
            console.error("Erro ao atualizar os dados:", err);
            alert("Erro ao atualizar os dados.");
        }
    }

    return (
        <div className="editar-usuarios">
            <h1>Editar personal</h1>
            <p>ID do usuário: {id}</p>
            <form onSubmit={enviarAlteracao}>
                <label>Nome:
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>

                <label>Telefone:
                    <input
                        type="text"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </label>

                <label>E-mail:
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>CREF:
                    <input
                        type="text"
                        placeholder=""
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                </label>

                <label>Sexo:
                    <input
                        type="date"
                        placeholder="data"
                        value={data_nascimento}
                        onChange={(e) => setData_nascimento(e.target.value)}
                    />
                </label>



                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
