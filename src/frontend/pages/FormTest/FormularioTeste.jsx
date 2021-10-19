import React from 'react'

import TopBarInfo from '../../components/Header/TopBarInfo.jsx';
import Header from '../../components/Header/Header.jsx';

const FormularioTeste = () => {

  // forma de fazer formulario mais otimizado
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    mensagem: "",
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div>
      <form>
        <TopBarInfo />
        <Header />
        <h1>FormularioTeste</h1>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="mensagem">Mensagem</label>
        <textarea 
          id="mensagem"
          value={form.mensagem}
          onChange={handleChange}  
        />
      </form>

      <div>
        <p>Nome: {form.nome}</p>
        <p>Email:{form.email}</p>
        <p>Mensagem:{form.mensagem}</p>
      </div>
    </div>
  )
}

export default FormularioTeste
