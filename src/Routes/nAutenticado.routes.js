import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CadastrarUsuarios from '../CadastroAluno/CadastroAluno';


import LoginAluno from '../loginAluno/loginAluno';

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/LoginAluno' element={< LoginAluno />} />
                <Route path='/CadastrarAluno' element={<CadastrarUsuarios/>} />
                
                
                <Route path='*' element={< LoginAluno />} />
            </Routes>
        </BrowserRouter>
    )
}