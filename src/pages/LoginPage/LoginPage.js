import React from "react";
import './LoginPage.css';
import {LoginForm} from "../../components/LoginForm";

const LoginPage = () => {
  return(
    <div className="page">
      <div className="main">
        <div className="left-section">
          <h1>Faça Login,<br/>ou crie seu cadastro!</h1>
        </div>
        <div className="right-section">
          <LoginForm/>
        </div>
      </div> 
    </div>
  );
}

export default LoginPage;