import React, {createContext} from 'react'
import { useState } from 'react';

// Cria uma variável global para armazenar informações
// Pode ser acessado em todo o sistema
export const AutenticacaoContext = createContext()

// Cria o componente de autenticação
// para ser o provider do Context
export const AutenticacaoProvider = ({children}) => {

    const [usuario, setUsuario] = useState(null);

    const login = (user, senha) => {
        console.log('Login realizado com sucesso!!')
        console.log(`Login: ${user}, Senha: ${senha}`)
        setUsuario(user)
    }
    
    const logout = () => {
        console.log("Logout")
        setUsuario(null)
    }

    return (

        <AutenticacaoContext.Provider value={
            {
                autenticado: !!usuario,
                usuario: usuario,
                login: login,
                logout: logout,
            }
        }>

        {children}

        </AutenticacaoContext.Provider>

    )

}