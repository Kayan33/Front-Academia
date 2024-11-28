import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CadastrarUsuarios from '../CadastroAluno/CadastroAluno';


import LoginAluno from '../loginAluno/loginAluno';
import Login from '../login/login';
import LoginPersonal from '../LoginPersonal/LoginPersonal';

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/LoginAluno' element={< LoginAluno />} />
                <Route path='/LoginPersonal' element={< LoginPersonal />} />
                <Route path='/CadastrarAluno' element={<CadastrarUsuarios/>} />
                
                
                <Route path='*' element={< Login />} />
            </Routes>
        </BrowserRouter>
    )
}