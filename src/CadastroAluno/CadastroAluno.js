import React, {useState} from 'react';
import apiLocal from '../Api/apiLocal';

export default function CadastroAluno(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function cadastroAluno(e){

        try{

            e.preventDefault();

            const resposta = await apiLocal.post('/aluno',{

                nome,
                email,
                password
            });

            alert(resposta.data.dados);

        }catch (err){

            alert('Erro ao comunicar com o Backend')
        }
    }

    return(

        <div>
        
            <h1>Formulario de Cadastro de Usuários</h1>

            <form onSubmit={cadastroAluno}> 

                    <label>Nome:
                            <input type="text" 
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}/>
                            
                    </label>

                    <label>E-mail:
                            <input type="text"
                             placeholder="E-mail"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>Senha:
                            <input type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <button type='Submit'>Cadastrar</button>

            </form>

        </div>
    )
}