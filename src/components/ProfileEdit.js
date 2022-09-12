import React, { useState } from 'react'

export const ProfileEdit = ({profileEdit}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('activeUser'))) 
  
    const requestOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },

        body: JSON.stringify({
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            data_nascimento: user.data_nascimento,
            telefone: user.telefone,
            tipo_pessoa: user.tipo_pessoa,

        })
    }

    const put = () => {
        const url = "https://ufg-cadastros-api.herokuapp.com/cadastros/"+user.id;
        
        if(window.confirm("Deseja realmente editar este usuario?") === true){
            fetch(url, requestOptions)
                .then(alert("O usuário foi alterado com sucesso!"))
                .catch(error => console.log(error))

            sessionStorage.setItem('activeUser', JSON.stringify(user))    
            profileEdit(false);
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
                    <h1>Edite suas informações!</h1>
                      <label htmlFor="nome">Nome</label>
                      <input onChange={onChange}  value={user.nome}id='nome-profile' type="text" name="nome" placeholder="Nome" required/>
                  </div>
                  <div className="textfield">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange}  value={user.email} type="text" id='email-profile' name="email" placeholder="Email" required></input>
                  </div>
                  <div className='inline-content'>
                    <div className="textfield">
                    <label htmlFor='tipoPessoa'>Você é: </label>
                    <select onChange={onChange} value={user.tipo_pessoa}className="select-pessoa" name="tipo_pessoa" id="pessoa" required>
                        <option disabled>Escolha uma opção</option>
                        <option value="Paciente">Paciente</option>
                        <option value="Médico">Médico</option>
                        <option value="Acompanhante">Acompanhante</option>
                    </select>    
                    </div>
                    <div id='inline-edit' className="textfield">
                        <label htmlFor="data_nascimento">Data de nascimento</label>
                        <input onChange={onChange}  value={user.data_nascimento} type="date" id='data-nascimento-profile' name="data_nascimento" placeholder="Data de Nascimento" ></input>
                    </div>
                  </div>
                  <div className="textfield">
                    <label htmlFor="tipo_pessoa">Telefone</label>
                    <input onChange={onChange}  value={user.telefone} type="text" id='telefone-profile' name="telefone" placeholder="Telefone" required></input>
                  </div>
                  <div className="textfield">
                    <label htmlFor="tipo_pessoa">Senha</label>
                    <input onChange={onChange}  value={user.senha} type="password" id='senha-profile' name="senha" placeholder="Senha" required></input>
                  </div>
  
                  <div className='btns'>
                    <button onClick={put} className='btn-editar'>Salvar</button>
                    <button onClick={() =>{profileEdit(false)}} className='btn-excluir'>Cancelar edição</button>
                  </div>
  
                </form>
              </div>
          </div>
      </div>
  )
}
