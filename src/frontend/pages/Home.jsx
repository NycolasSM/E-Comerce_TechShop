import React, { useState } from 'react'

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

  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")

  const filterCategory = (category) => {
    setCategory(category)
  }

  const filterBrand = (brand) => {
    setBrand(brand)
  }

  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <Carousel />
      <HomeCategoriesSession title="Procure pela Categoria" more="Todas as Categorias" />
      <HomeCardsCategories filterCategory={filterCategory} />
      <br />
      <br />
      <HomeCategoriesSession title="Sua Marca Favorita" more="Todas as marcas" />
      <HomeCardsBrands filterBrand={filterBrand} />
      <br />
      <br />
      <div id="scroll"></div>
      <HomeCategoriesSession title="Conheça os Produtos" more="Ver mais" />
      {/* fazer um card para mostrar os filtros utilizados */}
      <ProductCard category={category} brand={brand} />
      <EspacoBranco />
      <Footer />
    </div>
  )
}

export default Home