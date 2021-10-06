import React from 'react'

import './LoginForm.css'

import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LoginForm = () => {

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div className="formSize">
      <form className="loginForm">
        <h2>JÁ TENHO CADASTRO</h2>
        {/* <label htmlFor="email">Email :</label> */}
        <input
          placeholder="E-mail"
          type="text"
          id="email"
          value={form.nome}
          onChange={handleChange}
        />
        {/* <label htmlFor="email">Senha :</label> */}
        <input
          placeholder="Senha"
          type="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <div className="loginOptions">
          <button>
            Login
          </button>
          <span>Esqueceu minha senha</span>
        </div>
        <div className="loginWithSocialMedia">
          <h3>ACESSAR COM MINHAS REDES SOCIAIS</h3>
          <div className="LoginSocialMediaOptions">
            <button>
              <FontAwesomeIcon className="LoginSocialMediaIcon" icon={faFacebookSquare} />
              Entrar com o Facebook
            </button>
            <button>
              <FontAwesomeIcon className="LoginSocialMediaIcon" icon={faGoogle} />
              Entrar com o Google
            </button>
          </div>
        </div>
      </form>
      <br />
      <div>
        <h4>Visualização do Formulário</h4>
        <p>Email: {form.email}</p>
        <p>Senha: {form.password}</p>
      </div>
      <br />
    </div>
  )
}

export default LoginForm
