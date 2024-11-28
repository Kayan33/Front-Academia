import React, { useState, useEffect } from 'react';

import apiLocal from '../Api/apiLocal';

export default function DashBoardPersonal() {
  const [dadosUsuarios, setDadosUsuarios] = useState([]);

  const iToken = localStorage.getItem('@token');
  const token = JSON.parse(iToken);

  const nome = localStorage.getItem('@nome')

  useEffect(() => {
    async function consultarDadosUsuarios() {
      try {
        const resposta = await apiLocal.get('/Consultaraluno', {
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

  return (
    <div>
      <h1>Página de DashBoardPersonal</h1>

      <h3>{nome} está logado</h3>

      {dadosUsuarios.map((aluno) => (
        <div key={aluno.id}>
          <h1>{aluno.nome}</h1>
          <p>{aluno.telefone}</p>
          <p>{aluno.email}</p>



        </div>
      ))}


    </div>
  );
}
