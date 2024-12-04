import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import DashBoardPersonal from '../DashBoardPersonal/DashBoardPersonal';
import DashBoardAluno from '../DashBoardAluno/DashBoardAluno';
import EditarAluno from '../EditarAluno/indexAluno';
import EditarPersonal from '../EditarPersonal/indexPersonal';

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/DashBoardAluno' element={< DashBoardAluno />} />
                <Route path='/DashBoardPersonal' element={< DashBoardPersonal />} />
                <Route path='/EditarAluno/:id' element={<EditarAluno/>} />
                <Route path='/EditarPersonal/:id' element={<EditarPersonal/>} />
                
            </Routes>
        </BrowserRouter>
    )
}