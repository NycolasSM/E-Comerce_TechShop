import React from 'react'

import TopBarInfo from '../../components/Header/TopBarInfo.jsx';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Header/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FavoriteItens from './components/FavoriteItens.jsx';


const CartItensList = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <FavoriteItens/>
      <Nav />
      <Footer />
    </div>
  )
}

export default CartItensList
