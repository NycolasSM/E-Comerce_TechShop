import React, { useState } from 'react'

import Nav from '../../components/Header/Nav.jsx';
import TopBarInfo from '../../components/Header/TopBarInfo.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carousel from '../../components/Header/CarouselAdvertising/CarouselAdvertising.jsx';
import HomeCategoriesSession from './components/SessionTitles';
import FilterCategories from './components/FilterCategories.jsx';
import FilterBrands from './components/FilterBrands.jsx'
import ProductCard from './components/ProductCard.jsx'
import CardFiltersSelected from './components/CardFiltersSelected.jsx';

// import ProductPage from '../ProductInfo/ProductPage.jsx';

const Home = () => {

  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")

  const filterCategory = (category) => {
    setCategory(category)
  }

  const filterBrand = (brand) => {
    setBrand(brand)
  }

  const removeCategoryFilter = () => {
    setCategory("")
  }

  const removeBrandFilter = () => {
    setBrand("")
  }

  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <Carousel />
      <HomeCategoriesSession title="Procure pela Categoria" more="Filtre pela Categorias" />
      <FilterCategories filterCategory={filterCategory} />
      <br />
      <br />
      <HomeCategoriesSession title="Sua Marca Favorita" more="Filtre pela marcas" />
      <FilterBrands filterBrand={filterBrand} />
      <br />
      <br />
      <div id="scroll"></div>
      <HomeCategoriesSession title="Conheça os Produtos" more="" />
      <CardFiltersSelected category={category} brand={brand} removeCategoryFilter={removeCategoryFilter} removeBrandFilter={removeBrandFilter} />
      <ProductCard category={category} brand={brand} />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Home