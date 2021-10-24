import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import './LoginForm.css'

import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LoginForm = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [users, setUsers] = useState([])

  const history = useHistory()

  const [userId, setUserId] = useState(0)

  const [userLogged, setUserLogged] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pageData/`)
      .then(resp => resp.json())
      .then(data => {
        setUserId(data[0].userId)
      })
  }, [userId])

  useEffect(() => {
    fetch(`http://localhost:3001/users/${userId}`)
      .then(resp => resp.json())
      .then(data => {
        setUserLogged(data)
      })
  }, [userId])

  useEffect(() => {
    axios.get('http://localhost:3001/users/')
      .then(resp => {
        setUsers(resp.data)
      })
  }, [])

  function verificarLogin() {
    let loginEmail = form.email;
    let loginPassword = form.password;
    let validate = false

    users.forEach(function (user) {
      if (user.email === loginEmail && user.password === loginPassword) {
        validate = true
        axios.put("http://localhost:3001/pageData/1", { userId: user.id })
          .catch(error => console.log(error))
          .then(history.push('/'))
      }
    })
    if (validate === false) {
      alert('dados incorreto')
    }
  }

  function logout() {
    axios.put("http://localhost:3001/pageData/1", { userId: 0 })
      .catch(error => console.log(error))
      .then(() => window.location.reload())
  }

  function formChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }

  function onSubmitForm(event) {
    event.preventDefault();

    verificarLogin()
  }

  let isNotLogged = (<div >
    <form className="loginForm" onSubmit={onSubmitForm}>
      <h2>JÁ TENHO CADASTRO</h2>
      <label htmlFor="loginEmail"></label>
      <input
        placeholder="E-mail"
        type="text"
        id="loginEmail"
        name="email"
        onChange={formChange}
      />
      <label htmlFor="loginPassword"></label>
      <input
        placeholder="Senha"
        type="password"
        id="loginPassword"
        name="password"
        onChange={formChange}
      />
      <div className="loginOptions">
        <button>
          Login
        </button>
        <span>Esqueci minha senha</span>
      </div>
      <div className="loginWithSocialMedia">
        <h3>ACESSAR COM MINHAS REDES SOCIAIS</h3>
        <div className="LoginSocialMediaOptions">
          <button>
            <FontAwesomeIcon className="LoginSocialMediaIcon" icon={faFacebookSquare} />
            Entrar com o Facebook
          </button>
          <button type="submit">
            <FontAwesomeIcon className="LoginSocialMediaIcon" icon={faGoogle} />
            Entrar com o Google
          </button>
        </div>
      </div>
    </form>
    <br />
  </div>)

  let isLogged = <div>
    <form className="logoutForm" onSubmit={logout}>
      <h2>Você esta logado</h2>
      <div>Email: {userLogged.email}</div>
      <div>Nome Do Usuário: {userLogged.name}</div>
      <div className="logout">
        <button type="submit">
          Logout
        </button>
      </div>
    </form>
  </div>

  return (
    <div className="formSize">
      {userId === 0 ? isNotLogged : isLogged}
    </div>

  )
}

export default LoginForm
