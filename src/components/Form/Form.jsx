import './Form.css'
import Input from '../Input/Input'
import { useState, useContext } from 'react';
import { AutenticacaoContext } from '../../contexts/auth';

function Form(){

    const {autenticado, login, logout, usuario} = useContext(AutenticacaoContext)

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const novoSubmit = (event) => {
        event.preventDefault();
        console.log('----------------------------------------------------')
        login(formState.username, formState.password)
        console.log(`Logado?: ${autenticado}`)
        console.log('----------------------------------------------------')
        console.log('Deu Certo :P\nDados:')
        console.log("User: " + formState.username + '\nPass: ' + formState.password)
        console.log('----------------------------------------------------')

    }


    // Aqui serve pra definir o estado automaticamente dos campos do formulário
    function mudancaForm(e){
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
            // Para usar o atributo e.target.name, o 'name' do input
            // precisa ter o mesmo nome da variavel do objeto do useState
        })
    }

    // Outra forma de fazer isso:
    // Nesse caso vc precisa especificar na hora de chamar a função o nome da variavel do objeto do useState
    function handleForm(e, chave){
        setFormState({
            ...formState,
            [chave]: e.target.value,
        })
    }

    return (

        <>
            <br />
            <form action="POST" onSubmit={novoSubmit}>
            
                {/* <input type="text" name="nome" id="nome" placeholder='Nome'/>
                <br /> */}
                <input type="text" name="username" id="user" placeholder='Username' value={formState.username} onChange={mudancaForm}/>
                <br />
                <input type="password" name="password" id="pass" placeholder='Password' value={formState.password} onChange={mudancaForm}/>
                <br /><br />
                <input type="submit" value="Entrar" className='sub'/>
                <a href="http://127.0.0.1:5173/cadastro"><button type='button' className='sub-cad'>Cadastro</button></a>

                {autenticado ? <button type='button' onClick={logout} className='sub-logout'>Sair</button> : ''}

            </form>

        </>
        

    )

}

export default Form