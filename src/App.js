import React from 'react';
import Rotas from './Routes';
import AuthProvider from './Contexts/authContexts';

export default function App() {

  return (

    <AuthProvider>

      <div>

        <Rotas />

      </div>

    </AuthProvider>
      
  )
}


