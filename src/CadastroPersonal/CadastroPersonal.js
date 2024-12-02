import React, {useState} from 'react';
import apiLocal from '../Api/apiLocal';
import { useNavigate } from 'react-router-dom';

export default function CadastroPersonal(){

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [CREF, setCREF] = useState('');
    const [sexo, setSexo] = useState('');
    const [senha, setSenha] = useState('');
    const [aluno, setAluno] = useState([]);

 const   navigate = useNavigate()

    async function cadastroAluno(e){

        try{

            e.preventDefault();

             await apiLocal.post('/CadastrarPersonal',{

                nome,
                telefone,
                email,
                CREF,
                sexo,
                senha,
                aluno

              
            });

            alert("cadastrado")
            navigate('/LoginPersonal')

        }catch (err){

            alert('Erro ao comunicar com o Backend')
            
        }
        console.log(aluno);
    }

    return(

        <div>
        
            <h1>Formulario de Cadastro de Personal</h1>

            <form onSubmit={cadastroAluno}> 

                    <label>Nome:
                            <input type="text" 
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}/>
                            
                    </label>

                    <label>Telefone:
                            <input type="text" 
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}/>
                            
                    </label>

                    <label>E-mail:
                            <input type="text"
                             placeholder="E-mail"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>CREF:
                            <input type="text" 
                            placeholder="CREF"
                            value={CREF}
                            onChange={(e) => setCREF(e.target.value)}/>
                            
                    </label>

                    <label>Sexo:
                            <input type="text" 
                            placeholder="Sexo"
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}/>
                            
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