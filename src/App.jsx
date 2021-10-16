import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './frontend/pages/Home.jsx';
import Login from './frontend/pages/Login.jsx';
import FormularioTeste from './frontend/pages/FormularioTeste.jsx';
import Testes from './frontend/pages/Teste.jsx'
import PropagandaLogitech from './frontend/pages/PropagandaLogitech.jsx'
import PropagandaRedDragon from './frontend/pages/PropagandaRedDragon.jsx';
import Mouses from './frontend/pages/Mouses.jsx';
import Keyboards from './frontend/pages/Keyboards.jsx';
import Headsets from './frontend/pages/Headsets.jsx';
import Monitors from './frontend/pages/Monitors.jsx';
import Computers from './frontend/pages/Computers.jsx';
import Mousepads from './frontend/pages/Mousepads.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>   {/* o switch é usado para asegurar que apenas uma das paginas serao exibidas, pode ser substituido por exatic na frente do route porem umas das diferenças é que nesse contexto qualquer url que nao aprontar exatamente para um endereço ele ira para o home */}
        <Route path="/sigin" component={Login} />
        <Route path="/formtest" component={FormularioTeste} />
        <Route path="/tests" component={Testes} />
        <Route path="/propagandaLogitech" component={PropagandaLogitech} />
        <Route path="/propagandaRedDragon" component={PropagandaRedDragon} />
        <Route path="/Monitors" component={Monitors} />
        <Route path="/Keyboards" component={Keyboards} />
        <Route path="/Mouses" component={Mouses} />
        <Route path="/Mousepads" component={Mousepads} />
        <Route path="/Headsets" component={Headsets} />
        <Route path="/Computers" component={Computers} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
