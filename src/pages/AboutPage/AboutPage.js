import React from 'react'
import './AboutPage.css'
import { NavBar } from '../../components/NavBar'
import {FaGithub} from 'react-icons/fa'

export const AboutPage = () => {
  return (
    <div>
        <NavBar/>
        <div className='about-content'>
            <h1 className='title-about'>Projeto Painel Paciente</h1>
            <p className='subtitle-about'>Universidade Federal de Goiás</p>
            <h2 className='devs-title'>Desenvoldedores</h2>
            <div className='devs'>
                <div className='dev1'>
                    <img id='foto' src="https://i.imgur.com/cq3Vele.jpg" alt="álvaro-foto" />
                    <p id='nome-dev'>Álvaro Veloso Lisboa</p>
                    <p id='curso'>Engenharia de Computação - UFG</p>
                    <p id='atribuições'>No projeto, atuou no desenvolvimento do Frontend <br/>e das API's REST.</p>
                </div>
                <div className='dev2'>
                    <img id='foto' src="https://i.imgur.com/8uMkVqr.jpg" alt="vinicius-foto" />
                    <p id='nome-dev'>Vinícius Ferreira de Oliveira</p>
                    <p id='curso'>Sistemas de Informação - UFG</p>
                    <p id='atribuições'>No projeto, atuou no desenvolvimento das API's REST.</p>
                </div>
            </div>
            <div className='about-text'>
                <h1>Sobre o projeto</h1>
                <p>Este projeto foi desenvolvido para a disciplina de Desenvolvimento FullStack, no semestre de 2022/1 na Universidade Federal de Goiás.
                <br/> Trabalhando com os conceitos da Arquitetura de Microsserviços, construímos duas API REST com SpringBoot, publicadas no <a href='heroku.com'>Heroku</a> e banco de dados PostgreSQL da plataforma. Quanto ao 
                FrontEnd, utilizamos React e seus tecnologias. Agradeceços especialmente ao professor <b>Reinaldo Junior</b>, o qual ministrou a disciplina, e nos orientou quanto à Arquitetura 
                de Microsserviços e o SpringBoot.<br/>Caso tenha se interessado, abaixo segue o link do repositório no <b>GitHub</b>, sinta-se livre para implementá-lo.</p>
                <a className='link-github' href="https://github.com/AlvaroVeloso070/painel-paciente-project"><FaGithub/> Repositório Painel Paciente</a>
            </div>
        </div>
    </div>
  )
}
