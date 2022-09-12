import React, { useState } from 'react'

export const CreatePaciente = ({closeCreate}) => {

    const url = "https://ufg-painel-paciente-api.herokuapp.com/pacientes"
    const [user, setUser] = useState([])
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },

        body: JSON.stringify({
            nome: user.nome,
            cpf: user.cpf,
            dataNascimento: user.dataNascimento,
            telefone: user.telefone,
            email: user.email,
            sintomas: user.sintomas,
            dataEntrada: user.dataEntrada

        })
    }

    function onChange(event) {
        const{name, value} = event.target;

        setUser({...user, [name]: value}); 
    }

    const post = () =>{
        console.log(user)
        fetch(url, requestOptions)
        .then(alert("O usuário foi inserido com sucesso!"))
        .catch(error => console.log(error))
    }
  return (
    <div>
        <form className='alterar-medico'>
            <h1>Inserir um paciente</h1>
            <div className='lado1'>
                <div id='id-form' className='textfield'>
                    <label htmlFor="id">ID</label>
                    <input readOnly onChange={onChange} type="text" id='id-form' name='id' placeholder='#'/>
                </div>
                <div id='nome-form' className="textfield">
                    <label htmlFor="nome">Nome</label>
                    <input onChange={onChange} id='nome-form' type="text" name="nome" placeholder="Nome"/>
                </div>
                <div id='cpf-form' className="textfield">
                    <label htmlFor="cpf">CPF</label>
                    <input onChange={onChange} id='cpf-form' type="text" name="cpf" placeholder="CPF"/>
                </div>
                <div className='textfield' id="dataNascimento">
                    <label htmlFor="dataNascimento">Data de nascimento: </label>
                    <input onChange={onChange}  type="date" name="dataNascimento" id="dataNascimento-form"  />
                </div>
                <div className='textfield' id="dataNascimentoLabel">
                    <label htmlFor="dataEntrada">Data de entrada: </label>
                    <input onChange={onChange} type="date" name="dataEntrada" id="dataEntrada-form"  />
                </div>
            </div>
            <div id='lado'className='lado'>
                <div className="textfield">
                    <label htmlFor="telefone">Telefone</label>
                    <input onChange={onChange}  type="text" id='telefone-form' name="telefone" placeholder="Telefone" ></input>
                </div>
                <div className="textfield">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} type="text" id='email-form' name="email" placeholder="Email"></input>
                </div>
                <div className="textfield">
                    <label htmlFor="sintomas">Sintomas</label>
                    <input onChange={onChange}  type="text" id='sintomas-form' name="sintomas" placeholder="Sintomas"></input>
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
