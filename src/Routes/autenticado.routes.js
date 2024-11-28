import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import EditarUsuarios from '../EditarUsuarios/index';
import DashBoardPersonal from '../DashBoardPersonal/DashBoardPersonal';
import DashBoardAluno from '../DashBoardAluno/DashBoardAluno';

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< DashBoardAluno />} />
                <Route path='/DashBoardPersonal' element={< DashBoardPersonal />} />
                <Route path='/EditarUsuarios/:id' element={<EditarUsuarios/>} />
                
                <Route path='*' element={< DashBoardAluno />} />
            </Routes>
        </BrowserRouter>
    )
}