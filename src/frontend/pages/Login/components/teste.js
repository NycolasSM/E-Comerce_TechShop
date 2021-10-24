const teste = [
  {
    "nome": "teste1",
    "senha": "teste1"
  },
  {
    "nome": "teste2",
    "senha": "teste2"
  },
  {
    "nome": "teste3",
    "senha": "teste3"
  },  {
    "nome": "teste4",
    "senha": "teste5"
  }
]

const login = {
  "nome": "teste2",
  "senha": "teste2"
}

teste.forEach(function(usuario) {
  if (usuario.nome === login.nome && usuario.senha === login.senha) {
    console.log(usuario)
  }
})