import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AutenticacaoProvider } from '../contexts/auth'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

function AppRoutes(){

    return (

        
        <Router>

            <AutenticacaoProvider>

                <Routes>
                    <Route exact path='/'
                    element={<Login/>}/>
                    <Route exact path='/cadastro'
                    element={<Cadastro/>}/>
                </Routes>

            </AutenticacaoProvider>

        </Router>

    )
    
}

export default AppRoutes