import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiLocal from '../Api/apiLocal';

export default function EditarPersonal() {

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [CREF, setCREF] = useState('');
    const [sexo, setSexo] = useState('');
    const [aluno, setAluno] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        async function consultarDados() {
            try {
                const resposta = await apiLocal.post(`/ConsultarPersonalUnico/${id}`);





                setNome(resposta.data[0].nome);
                setTelefone(resposta.data[0].telefone);
                setEmail(resposta.data[0].email);
                setCREF(resposta.data[0].CREF);
                setSexo(resposta.data[0].sexo);
                setAluno(resposta.data[0]?.aluno[0]?.id || "");

                


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
            await apiLocal.put(`/AlterarDadosPersonal/${id}`, {
                nome,
                telefone,
                email,
                CREF,
                sexo,
                aluno: aluno ? [aluno] : [],
            });

            alert("Atualizado com sucesso!");
            navigate("/DashBoardPersonal");
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
                        placeholder="CREF"
                        value={CREF}
                        onChange={(e) => setCREF(e.target.value)}
                    />
                </label>

                <label>Sexo:
                    <input
                        type="text"
                        placeholder="Sexo"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                    />
                </label>

                <label>Aluno:
                    <input
                        type="text"
                        placeholder="Aluno"
                        value={aluno}
                        onChange={(e) => setAluno(e.target.value)}
                    />
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
