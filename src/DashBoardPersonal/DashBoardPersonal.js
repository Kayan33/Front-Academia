import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import apiLocal from '../Api/apiLocal';
import { Link } from 'react-router-dom';

export default function DashBoardPersonal() {
  const [dadosUsuarios, setDadosUsuarios] = useState([]);
  const [aluno, setAluno] = useState([]);

  const iToken = localStorage.getItem('@token');
  const token = JSON.parse(iToken);

  const Iid = localStorage.getItem('@id');
  const ID = JSON.parse(Iid);


  useEffect(() => {
    async function consultarDadosUsuarios() {
      try {
        const resposta = await apiLocal.post(
          `/ConsultarPersonalUnico/${ID}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setDadosUsuarios(resposta.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    consultarDadosUsuarios();
  }, []);

  async function apagarUsuarios() {
    try {
      await apiLocal.delete(`/ApagarPersonal/${ID}`)
      alert('Registro Apagado com Sucesso', {
          
      })
    } catch (err) {
          alert('Erro ao se comunicar com Back-End')
    }
  }

  return (
    <div>
      <h1>Página de DashBoardPersonal</h1>




      {dadosUsuarios.map((personal) => (
        <div key={personal.id}>
          <h1>Bem Vindo {personal.nome}</h1>
          {personal.aluno.map((aluno) => (
            <div key={aluno.id}>
              <h2>Alunos</h2>
              <h3>{aluno.nome}</h3>
              <p>{aluno.telefone}</p>
              <p>{aluno.email}</p>
            </div>
          ))}
        </div>
      ))}
      <Link to={`/EditarPersonal/${ID}`}>Editar</Link>
      <button type='submit' onClick={() => apagarUsuarios(ID)}>apagar</button>



    </div>
  );
}
