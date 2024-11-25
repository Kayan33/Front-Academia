import React, {useContext, useState} from 'react';
import { AutenticadoContexto } from '../Contexts/authContexts';
import { Link } from 'react-router-dom';



export default function LoginAluno(){

    const {loginEntrada} = useContext(AutenticadoContexto);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function dadosLogin(e){

        e.preventDefault();

        if(!email || !senha){

            alert('Preencha todos os campos!');
            return 
        }

        try {
            
            await loginEntrada(email, senha);

        } catch (err) {
            
            

        }
    }

    return(

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
        <p>Para se cadastrar clique <Link to = '/CadastrarAluno'>Aqui</Link></p>
        </div>
    )
}