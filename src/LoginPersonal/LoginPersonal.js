import React, { useContext, useState } from 'react';
import { AutenticadoContexto } from '../Contexts/authContexts';
import { Link, useNavigate } from 'react-router-dom';


export default function LoginPersonal() {

  const { loginEntrada } = useContext(AutenticadoContexto)
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Itipo = localStorage.getItem('@tipo');
  const tipo = JSON.parse(Itipo);


  const navigate = useNavigate()
  
  async function dadosLogin(e) {
    e.preventDefault()
    if (!email || !senha) {
      alert('Preencha todos os campos!')
      return
    }



    if (tipo === "personal") {
      alert(tipo)
    } else {
      alert('Seu login já está vinculado como aluno. Use outro login ou entre em contato com o suporte.');
    }
    try {
      await loginEntrada(email, senha)
      navigate('/DashBoardPersonal')
    } catch (err) {

    }
  }


  return (
    <div className='conteinerInicioGeral'>

      <h1>Login Personal</h1>

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
      <p>Para se cadastrar clique <Link to='/CadastroPersonal'>Aqui</Link></p>
    </div>
  )
}
