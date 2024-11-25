import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

import apiLocal from '../Api/apiLocal';

export default function EditarUsuarios() {

    const { id } = useParams();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

        async function consultarDadosUsuarioUnico() {

            const resposta = await apiLocal.post('/ConsultarUsuarioUnico',{

                id
            })

            setNome(resposta.data.nome);
            setEmail(resposta.data.email);
            setPassword(resposta.data.password);
        }

        consultarDadosUsuarioUnico();

    },[])

    async function enviarAlteracao(e){

        try{

            e.preventDefault();

            console.log(id)

           const resposta = await apiLocal.put('/AlterarDadosUsuario',{

                id,
                nome,
                email
            });

            console.log(resposta);

        }catch(err){

            alert("Erro ao comunicar com o servidor");
        }
       
    }

    return (

        <div className="editar-usuarios">
        <h1>Editar Usuários</h1>
        <p>ID do usuário: {id}</p>
        <form onSubmit={enviarAlteracao}>
            <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
             />

            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password"
            disabled
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button>Enviar</button>
        </form>
    </div>
    )
}