import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeComponent.css'

export const HomeComponent = () => {
    const user = JSON.parse(sessionStorage.getItem('activeUser'));
    const navigate = useNavigate();

    function redirectMedicos() {
        navigate("/medicos");
    }

    function redirectPacientes() {
        navigate("/pacientes");
    }

    function redirectCadastros() {
        navigate("/cadastros");
    }

    return (
        <div className='home'>
            <div className='content'>
                <h1 className='title'>Bem vindo, {user.nome.split(' ')[0]}!</h1>
                <div className='options'>
                    <div onClick={redirectMedicos} id='opt' className='opt-medico'>
                        <h1>Médicos</h1>
                        <img alt='medicos'src='https://i.imgur.com/3XQKPrw.png'/>
                        <span>Lista todos os profissionais da saúde cadastrados no sistema.</span>
                    </div>
                    <div onClick={redirectPacientes} id='opt' className='opt-paciente'>
                        <h1>Pacientes</h1>
                        <img alt='pacientes' src='https://i.imgur.com/9BAGI3X.png'/>
                        <span>Lista todos os pacientes internados cadastrados no sistema.</span>
                    </div>
                    <div onClick={redirectCadastros} id='opt' className='opt-cadastro'>
                        <h1>Cadastros</h1>
                        <img alt='cadastros' src='https://i.imgur.com/jHSh5us.png'/>
                        <span>Lista todos os usuários cadastrados no sistema.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
