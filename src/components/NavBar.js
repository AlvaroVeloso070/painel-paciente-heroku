import React from 'react'
import './NavBar.css';
import {FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='nav-bar'>
      <nav className='nav'>
        <img className='logo' src='https://i.imgur.com/HBDe1Wd.png' alt="logo"/>
        <div className='links'>
            <Link to={'/home'} className='link-home'>Inicio</Link>
            <Link to={"/about"} className='link-sobre' href=''>Sobre</Link>
            <Link to={"/profile"} className='link-profile' href="">Meu perfil</Link>
            <Link to={"/"} onClick={() =>{sessionStorage.setItem('activeUser', [])}} className='btn-sair' href="">Sair <FiLogOut/></Link>
        </div>
      </nav>
    </div>
  )
}
