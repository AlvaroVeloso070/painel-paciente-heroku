import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProfileInfo.css'

export const ProfileInfo = ({profileEdit}) => {

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('activeUser'))) 
  const navigate = useNavigate();

  function deleteData (data){
    let text = "Deseja realmente deletar o usuário "+user.nome+" ?"; 
    if(window.confirm(text) === true){
        const url = "https://ufg-cadastros-api.herokuapp.com/cadastros/"+data;
        const requestOptions = {
            method: 'DELETE'};

        fetch(url, requestOptions)
            .then(alert("O usuário foi removido com sucesso!"))
            .catch(erro => console.log(erro))
            sessionStorage.setItem('activeUser',[])
            navigate('/');
    }
}

  function onChange(event) {
    const{name, value} = event.target;

    setUser({...user, [name]: value}); 
}
  return (
    <div>
        <div className='profile-content'>
            <div className='left-content'>
              <h1>Minhas informações</h1>
              <div className='bg'></div>
            </div>
            <div className='right-content'>
              <form className='form-edit'>
                <div className="textfield">
                  <h1>Informações</h1>
                    <label htmlFor="nome">Nome</label>
                    <input onChange={onChange} readOnly value={user.nome}id='nome-profile' type="text" name="nome" placeholder="Nome" required/>
                </div>
                <div className="textfield">
                  <label htmlFor="email">Email</label>
                  <input onChange={onChange} readOnly value={user.email} type="text" id='email-profile' name="email" placeholder="Email" required></input>
                </div>
                <div className='inline-content'>
                  <div className="textfield">
                    <label htmlFor="tipo_pessoa">Função</label>
                    <input onChange={onChange} readOnly value={user.tipo_pessoa} type="text" id='tipo-pessoa-profile' name="email" placeholder="Email" required></input>
                  </div>
                  <div id='inline-edit' className="textfield">
                    <label htmlFor="data_nascimento">Data de nascimento</label>
                    <input onChange={onChange} readOnly value={user.data_nascimento} type="text" id='data-nascimento-profile' name="data_nascimento" placeholder="Data de Nascimento" required></input>
                  </div>
                </div>
                <div className="textfield">
                  <label htmlFor="tipo_pessoa">Telefone</label>
                  <input onChange={onChange} readOnly value={user.telefone} type="text" id='telefone-profile' name="telefone" placeholder="Telefone" required></input>
                </div>
                <div className="textfield">
                  <label htmlFor="tipo_pessoa">Senha</label>
                  <input onChange={onChange} readOnly value={user.senha} type="password" id='senha-profile' name="senha" placeholder="Senha" required></input>
                </div>

                <div className='btns'>
                  <button onClick={()=>{profileEdit(true)}} className='btn-editar'>Editar dados</button>
                  <button onClick={() =>{deleteData(user.id)}} className='btn-excluir'>Excluir cadastro</button>
                </div>

              </form>
            </div>
        </div>
    </div>
  )
}
