import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import apiLocal from '../Api/apiLocal';

export default function DashBoardAluno() {
    const [dadosUsuarios, setDadosUsuarios] = useState([]);

    const iToken = localStorage.getItem('@token');
    const token = JSON.parse(iToken);

    const nome = localStorage.getItem('@nome')

    useEffect(() => {
        async function consultarDadosUsuarios() {
            try {
                const resposta = await apiLocal.get('/treino', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setDadosUsuarios(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        consultarDadosUsuarios();
    }, []);
console.log(dadosUsuarios);

    return (
        <div>
            <h1>Página de DashBoardAluno</h1>

            <h3>{nome} está logado</h3>

            {dadosUsuarios.map((treino) => (
                <div key={treino.id}>
                    <h1>{treino.nome_treino}</h1>



                    <div>
                        <h3>Rotinas:</h3>
                        {treino.rotinas && treino.rotinas.length > 0 ? (
                            treino.rotinas.mafp((rotina) => (
                                <div key={rotina.id}>
                                    <p>Repetições: {rotina.repeticao}</p>
                                    <p>Séries: {rotina.series}</p>
                                    <p>Descanso: {rotina.descanso}</p>



                                    <div>
                                        <h4>Exercícios:</h4>
                                        {rotina.exercicio && rotina.exercicio.length > 0 ? (
                                            rotina.exercicio.map((exercicio) => (
                                                <div key={exercicio.id}>
                                                    <p>Nome do Exercício: {exercicio.nome_exercicio}</p>
                                                    <p>
                                                        Vídeo:{" "}
                                                        <a
                                                            href={exercicio.URL_video}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {exercicio.URL_video}
                                                        </a>
                                                    </p>
                                                    <h3>Categoria:</h3>
                                                    <p>{exercicio.categoria.categoria}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Sem exercícios associados.</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Sem rotinas associadas.</p>
                        )}
                    </div>
                </div>
            ))}


        </div>
    );
}
