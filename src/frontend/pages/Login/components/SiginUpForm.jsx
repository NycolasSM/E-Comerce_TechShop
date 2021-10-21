import React, { useState } from 'react'
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
  //  "product": "Mouse Red Dragon",
  //  "value": 137.9
  //     },
  //   ],
  //   "favoriteItens": [
  //     {
  //       "product": "Mouse Red Dragon"
  //     },
  //   ]
  // }


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

    setForm({ ...form, [name]: value})
  }

  function onSubmitForm(event) {
    event.preventDefault();

    axios.post("http://localhost:3001/users", form)
      .catch(err => {
        console.log(err)
      })
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
          placeholder="CPF"
          type="text"
          id="cpfOrCnp"
          name="cpfOrCnpj"
          onChange={formChange}
        />
        <div className="options">
          <button type="submit" >
            Registrar
          </button>
        </div>
      </form>
      <br />
      <div>
        <h4>Visualização do Formulário</h4>
        <p>Email: {form.email}</p>
        <p>Nome: {form.name}</p>
        <p>Senha: {form.password}</p>
        <p>Confirmação de Senha: {form.confirmPassword}</p>
        <p>CPF: {form.cpfOrCnpj}</p>
      </div>
      <br />
    </div>
  )
}

export default SiginUpForm
