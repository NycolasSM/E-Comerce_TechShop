import React from 'react'

import './SiginUpForm.css'
import { cpfMask } from '../CpfMask'

const SiginUpForm = () => {

  const [form, setForm] = React.useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    cpfOrCnpj: "",
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    })
  }

  function handleChangeCpf(event) {
    setForm({
      ...form,
      [event.target.id]: cpfMask(event.target.value)
    })
  }

  return (
    <div className="formSize">
      <form className="signUpForm">
        <h2>QUERO ME CADASTRAR</h2>
        {/* <label htmlFor="email">Email :</label> */}
        <input
          placeholder="E-mail"
          type="text"
          id="email"
          value={form.nome}
          onChange={handleChange}
        />
        {/* <label htmlFor="email">Nome do Usuario :</label> */}
        <input
          placeholder="Nome do Usuário"
          type="text"
          id="name"
          value={form.name}
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
        {/* <label htmlFor="email">Confirmação de senha :</label> */}
        <input
          placeholder="Confirme sua senha"
          type="password"
          id="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {/* <label htmlFor="email">Confirmação de senha :</label> */}
        <input
          placeholder="CPF"
          type="text"
          id="cpfOrCnp"
          value={form.cpfOrCnp}
          onChange={handleChangeCpf}
        />
        <div className="options">
          <button>
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
