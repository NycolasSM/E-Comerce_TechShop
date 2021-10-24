import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './frontend/pages/Home/Home.jsx';
import Login from './frontend/pages/Login/Login.jsx';
import FormularioTeste from './frontend/pages/FormTest/FormularioTeste.jsx';
import ProductsFiltered from './frontend/pages/ProductsList/ProductsFiltered.jsx';
import ProductPage from './frontend/pages/ProductInfo/ProductPage.jsx'
import CartItensList from './frontend/pages/CartItensList/CartItensList.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>   {/* o switch é usado para asegurar que apenas uma das paginas serao exibidas, pode ser substituido por exatic na frente do route porem umas das diferenças é que nesse contexto qualquer url que nao aprontar exatamente para um endereço ele ira para o home */}
        <Route path="/sigin" component={Login} />
        <Route path="/formtest" component={FormularioTeste} />
        <Route path="/productsList" component={ProductsFiltered} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path='/cart' component={CartItensList} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
