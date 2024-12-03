import React from 'react';
import Rotas from './Routes';
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Contexts/authContexts';

export default function App() {

  return (

    <AuthProvider>

      <div>

        <Rotas />
        <ToastContainer autoClose={5000} />
      </div>

    </AuthProvider>
      
  )
}


