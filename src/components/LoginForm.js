import React, {useState, useEffect}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

export const LoginForm = () => {



  const inicialValues = {
    "email": "",
    "senha": ""
  }
  const [values, setValues] = useState(inicialValues);

  var registered = false;

  const url = "https://ufg-cadastros-api.herokuapp.com/cadastros";
  const [data, setData] = useState([]);


  let navigate = useNavigate();

  function onChange(event) {
    const{name, value} = event.target;

    setValues({...values, [name]: value}); 
}
  function tryLogin() {
    try{
      data.forEach((item) => {
        if(item.email === values.email && item.senha === values.senha){
          alert("Bem vindo "+item.nome+"!");
          registered = true;
          sessionStorage.setItem('activeUser', JSON.stringify(item));
          navigate("/home");
        }
      })
    }
    catch(e){
      alert(e)
    };

    if(registered === false){
      alert("Dados incorretos!");
    }
  }

  useEffect(() =>{

  (async () =>{
      const res = await fetch(url, {headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }});
      const data = await res.json();
      setData(data);
    })();
  },[]);

  return (
    <form className="login-form">       
            <h1>LOGIN</h1>
            <div className="textfield">
              <label htmlFor="email">Email</label>
              <input onChange={onChange} type="text" name="email" placeholder="Email" required></input>
            </div>

            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input onChange={onChange} type="password" name="senha" placeholder="Senha" required></input>
            </div> 

            <button onClick={tryLogin} className="btn-login">Login</button>

            <Link to={"/register"} className="btn-cadastrar">Ainda nao tem cadastro? Cadastre-se!</Link>

          </form>
  )
}
