import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './SiginUpForm.css'

const SiginUpForm = () => {


  // {
  //   "id": 2,
  //   "email": "test@test.com",
  //   "password": "test",
  //   "name": "test",
  //   "cpf": "123.456.789.00",
  //   "cart": [
  //     {
  //      "productid": "3",
  //     },
  //   ],
  //   "favoriteItens": [
  //     {
  //       "productid": "2"
  //     },
  //   ]
  // }

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/users/')
      .then(resp => {
        setUsers(resp.data)
      })
  }, [])

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    cpfOrCnpj: "",
    cart: [],
    favoriteItens: []
  })

  function formChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let passwordConfirm = false
    let userNameIsSet = false
    let emailIsSet = false
    let emailIsValid = true

    function verifyEmail() {
      users.forEach(function(user) {
        if (user.email === form.email) {
          alert('email ja cadastrado')
          emailIsValid = false
        }
      })
    }

    function verifyIfUserIsSet() {
      if (form.name === "") {
        alert("precisa inserir um nome")
        userNameIsSet = false
      } else {
        userNameIsSet = true
      }
    }

    function verifyIfEmailIsSet() {
      if (form.email === "") {
        alert("precisa inserir um email")
        emailIsSet = false
      } else {
        emailIsSet = true
      }
    }

    function verifyPasswordEquals() {
      if (form.password === form.confirmPassword) {
        passwordConfirm = true
      } else {
        alert("senhas não conferem")
        passwordConfirm = false
      }
    }

    verifyEmail()
    verifyIfUserIsSet()
    verifyIfEmailIsSet()
    verifyPasswordEquals()

    if (passwordConfirm === true && userNameIsSet === true && emailIsSet === true && emailIsValid === true) {
      axios.post("http://localhost:3001/users", form)
        .then(() => window.location.reload())
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div className="formSize">
      <form className="signUpForm" onSubmit={onSubmitForm}>
        <h2>QUERO ME CADASTRAR</h2>
        <div>
          <label htmlFor="signEmail"></label>
          <input
            placeholder="E-mail"
            type="text"
            id="signEmail"
            name="email"
            onChange={formChange}
          />
        </div>
        <div>
          <label htmlFor="userName"></label>
          <input
            placeholder="Nome do Usuário"
            type="text"
            id="userName"
            name="name"
            onChange={formChange}
          />
        </div>
        <div>
          <label htmlFor="userPassword"></label>
          <input
            placeholder="Senha"
            type="password"
            id="userPassword"
            name="password"
            onChange={formChange}
          />
        </div>
        <div>
          <label htmlFor="userPasswordVerification"></label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            id="userPasswordVerification"
            name="confirmPassword"
            onChange={formChange}
          />
        </div>
        <input
          placeholder="CPF (campo desativado)"
          type="text"
          id="cpfOrCnp"
          name="cpfOrCnpj"
          onChange={formChange}
          disabled
        />
        <div className="options">
          <button type="submit" >
            Registrar
          </button>
        </div>
      </form>
      <br />
    </div>
  )
}

export default SiginUpForm
