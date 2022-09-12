import React, { useState } from 'react'

export const EditPaciente = ({closeEdit}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    function onChange(event) {
        const{name, value} = event.target;

        setUser({...user, [name]: value}); 
    }

    const requestOptions = {
        method: 'PUT',
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

    const put = () => {
        const url = "https://ufg-painel-paciente-api.herokuapp.com/pacientes/"+user.id;
        
        fetch(url, requestOptions)
        .then(alert("O usuário foi alterado com sucesso!"))
        .catch(error => console.log(error))
    }
  return (
    <div className='form-paciente'>
        <form id="form-alterar-paciente" className='alterar-medico'>
            <h1>Alterar dados</h1>
            <div className='lado1'>
                <div id='id-form' className='textfield'>
                    <label htmlFor="id">ID</label>
                    <input readOnly onChange={onChange}  value={user.id} type="text" id='id-form' name='id' placeholder='#'/>
                </div>
                <div id='nome-form' className="textfield">
                    <label htmlFor="nome">Nome</label>
                    <input onChange={onChange}  value={user.nome} id='nome-form' type="text" name="nome" placeholder="Nome"/>
                </div>
                <div id='cpf-form' className="textfield">
                    <label htmlFor="cpf">CPF</label>
                    <input onChange={onChange}  value={user.cpf} id='cpf-form' type="text" name="cpf" placeholder="CPF"/>
                </div>
                <div className='textfield' id="dataNascimento">
                    <label htmlFor="dataNascimento">Data de nascimento: </label>
                    <input onChange={onChange} value={user.dataNascimento} type="date" name="data_nascimento" id="dataNascimento-form"  />
                </div>
                <div className='textfield' id="dataNascimentoLabel">
                    <label htmlFor="dataEntrada">Data de entrada: </label>
                    <input onChange={onChange} value={user.dataEntrada} type="date" name="data_entrada" id="dataEntrada-form"  />
                </div>
            </div>
            <div id='lado'className='lado'>
                <div className="textfield">
                    <label htmlFor="telefone">Telefone</label>
                    <input onChange={onChange} value={user.telefone} type="text" id='telefone-form' name="telefone" placeholder="Telefone" ></input>
                </div>
                <div className="textfield">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={user.email} type="text" id='email-form' name="email" placeholder="Email"></input>
                </div>
                <div className="textfield">
                    <label htmlFor="sintomas">Sintomas</label>
                    <input onChange={onChange} value={user.sintomas} type="text" id='sintomas-form' name="sintomas" placeholder="Sintomas"></input>
                </div>
                
            </div>
            <div className='btns-form'>
                <button className='btn-alterar' onClick={put}>Alterar</button>
                <button className='btn-cancelar' onClick={() => {closeEdit=false}}>Cancelar</button>
            </div>
        </form>
    </div>
  )
}
