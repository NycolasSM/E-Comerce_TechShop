import React from 'react'

import Nav from '../components/Header/Nav.jsx';
import TopBarInfo from '../components/Header/TopBarInfo.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import CarouselAdvertising from '../components/Header/CarouselAdvertising/CarouselAdvertising.jsx'
import HomeCategoriesSession from '../components/Home/HomeCategoriesSession.jsx';
import HomeCardsCategories from '../components/Home/HomeCardsCategories.jsx';
import HomeCardsBrands from '../components/Home/HomeCardsBrands.jsx'

import EspacoBranco from '../components/Home/espacoBranco.jsx';

const home = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <CarouselAdvertising />
      <HomeCategoriesSession title="Procure pela Categoria" more="Todas as Categorias"/>
      <HomeCardsCategories />
      <br />
      <br />
      <HomeCategoriesSession title="Sua Marca Favorita" more="Todas as marcas"/>
      <HomeCardsBrands />
      <br />
      <br />
      <HomeCategoriesSession title="Os Melhores Produtos Para Você" more="Conheça mais" />
      <EspacoBranco />
      <Footer />
    </div>
  )
}

export default home
