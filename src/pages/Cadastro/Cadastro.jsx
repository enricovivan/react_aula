import './Cadastro.css'

import { useContext } from 'react'

import { AutenticacaoContext } from '../../contexts/auth'

function Cadastro(){

    const {autenticado} = useContext(AutenticacaoContext)

    return (

        <>
            <h1 className='white'>Cadastro</h1>

            <h3 className='white'>Voce está logado?: {`${autenticado}`}</h3>
        </>

    )
}

export default Cadastro