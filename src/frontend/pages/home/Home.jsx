import React from 'react'

import Nav from '../components/Header/Nav.jsx';
import TopBarInfo from '../components/Header/TopBarInfo.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Carousel from '../components/Header/CarouselAdvertising/CarouselAdvertising.jsx'
import HomeCategoriesSession from '../components/Home/HomeCategoriesSession.jsx';
import HomeCardsCategories from '../components/Home/HomeCardsCategories.jsx';
import HomeCardsBrands from '../components/Home/HomeCardsBrands.jsx'
import ProductCard from '../components/Cards/ProductCard.jsx'

import EspacoBranco from '../components/Home/espacoBranco.jsx';

const Home = () => {

  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <Carousel />
      <HomeCategoriesSession title="Procure pela Categoria" more="Todas as Categorias"/>
      <HomeCardsCategories />
      <br />
      <br />
      <HomeCategoriesSession title="Sua Marca Favorita" more="Todas as marcas"/>
      <HomeCardsBrands />
      <br />
      <br />
      <HomeCategoriesSession title="Os Melhores Produtos Para Você" more="Conheça mais" />
      <ProductCard filter={""} brand={""} />
      <EspacoBranco />
      <Footer />
    </div>
  )
}

export default Home