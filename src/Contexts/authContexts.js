import { createContext, useState } from "react";
import apiLocal from '../Api/apiLocal';

export const AutenticadoContexto = createContext();

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false);
    const [token, setToken] = useState('');

    const autenticado = !!tokenT;

    async function loginEntrada(email, senha) {

        try {

            const resposta = await apiLocal.post('/loginUsuarios', {

                email,
                senha,
            });

            localStorage.setItem('@id', JSON.stringify(resposta.data.id));
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome));
            localStorage.setItem('@token', JSON.stringify(resposta.data.token));
            localStorage.setItem('@tipo', JSON.stringify(resposta.data.tipo));

            setTokenT(true)

            return resposta.data;
        } catch (err) {

            alert(err.response.data.error)

        }

    }

    async function consultarDadosUsuarios() {
        try {
            const resposta = await apiLocal.get(`/verifica`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(resposta);

        } catch (err) {

        }
    }



    return (

        <AutenticadoContexto.Provider value={({ autenticado, loginEntrada })}>

            {children}

        </AutenticadoContexto.Provider>
    )
}