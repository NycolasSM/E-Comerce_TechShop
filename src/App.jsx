import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import FormularioTeste from './pages/FormularioTeste.jsx';
import Testes from './pages/Teste.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>   {/* o switch é usado para asegurar que apenas uma das paginas serao exibidas, pode ser substituido por exatic na frente do route porem umas das diferenças é que nesse contexto qualquer url que nao aprontar exatamente para um endereço ele ira para o home */}
        <Route path="/sigin" component={Login} />
        <Route path="/formtest" component={FormularioTeste} />
        <Route path="/tests" component={Testes} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
