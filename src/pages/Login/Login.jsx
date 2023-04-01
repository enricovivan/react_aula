import './Login.css'

import Form from "../../components/Form/Form";
import BtnAndUpdate from '../../components/Button/ButtonAndUpdate';
import { useState, useContext } from 'react';
import { AutenticacaoContext } from '../../contexts/auth';

function Login(){

    return (

        <>
            <nav className='navbar-login'>
                <h1 className='title-login'>HOME</h1>
                <ul>
                    <li className='li-ul'><a href="#" className='a-li white'>Tabelas</a></li>
                </ul>
            </nav>
            
            <hr />
            <br />

            <article className='centered-div'>
                <section className='text-center'>
                    <h2 className='beauty'>Faça Login</h2>
                    <br />
                    <Form></Form>
                </section>
            </article>            


        </>

    )

}

export default Login