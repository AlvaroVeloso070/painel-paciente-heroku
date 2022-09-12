import React, { useState } from 'react'

export const CreateMedico = ({closeCreate}) => {

    const url = "https://ufg-painel-paciente-api.herokuapp.com/medicos"
    const [user, setUser] = useState([])
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },

        body: JSON.stringify({
            nome: user.nome,
            email: user.email,
            especialidade: user.especialidade,
            username: user.email

        })
    }

    function onChange(event) {
        const{name, value} = event.target;

        setUser({...user, [name]: value}); 
    }

    const post = () =>{
        fetch(url, requestOptions)
        .then(alert("O usuário foi inserido com sucesso!"))
        .catch(error => console.log(error))
    }
  return (
    <div>
        <form className='alterar-medico'>
            <h1>Inserir um médico</h1>
            <div className='lado1'>
                <div id='id-form' className='textfield'>
                    <label htmlFor="id">ID</label>
                    <input readOnly onChange={onChange}  value={user.id} type="text" id='id-form' name='id' placeholder='#'/>
                </div>
                <div id='nome-dorm' className="textfield">
                    <label htmlFor="nome">Nome</label>
                    <input onChange={onChange}  value={user.nome} id='nome-form' type="text" name="nome" placeholder="Nome"/>
                </div>
            </div>
            <div className='lado'>
                <div className="textfield">
                    <label htmlFor="especialidade">Especialidade</label>
                    <input onChange={onChange} value={user.especialidade} type="text" id='especialidade-form' name="especialidade" placeholder="Especialidade" ></input>
                </div>
                <div className="textfield">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={user.email} type="text" id='email-form' name="email" placeholder="Email"></input>
                </div>
                
            </div>
            <div className='btns-form'>
                <button className='btn-alterar' onClick={post}>Inserir</button>
                <button className='btn-cancelar' onClick={() => {closeCreate=false}}>Cancelar</button>
            </div>
        </form>
    </div>
  )
}
