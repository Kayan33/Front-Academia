import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import apiLocal from '../Api/apiLocal';


export default function DashBoard(){

    const [dadosUsuarios, setDadosUsuarios] = useState(['']);

    const iToken = localStorage.getItem('@token');
    const token = JSON.parse(iToken);

    useEffect(() => {

        async function consultarDadosUsuarios(){

            const resposta = await apiLocal.get('/treino',{

                headers:{

                    Authorization: `Bearer ${token}`
                }
            });

            setDadosUsuarios(resposta.data);    

        }

        consultarDadosUsuarios();

    }, [dadosUsuarios])

        

    return(
        <div>

        <h1>Pagina de DashBoard</h1>

        {dadosUsuarios.map ((item) => {

            return(

                <div>

                    <p>Id: {item.nome_treino}</p>

                    

                    

                   <Link to ={`/EditarUsuarios/${item.id}`}>Editar</Link>

                </div>
            )

        })} 

        </div>
    )
}