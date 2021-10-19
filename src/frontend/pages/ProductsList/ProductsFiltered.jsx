import React from 'react'

import Nav from '../../components/Header/Nav.jsx';
import TopBarInfo from '../../components/Header/TopBarInfo.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carousel from '../../components/Header/CarouselAdvertising/CarouselAdvertising.jsx';
import HomeCategoriesSession from '../Home/components/SessionTitles.jsx';
import ProductCard from '../Home/components/ProductCard.jsx'

import ButtonBackToHome from './Buttons/ButtonBackToHome.jsx';

const ProductsFiltered = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <Carousel />
      <ButtonBackToHome />
      <HomeCategoriesSession title="Monitors" more="" />
      <ProductCard category={"Monitor"} brand={""} />
      <Footer />
    </div>
  )
}

export default ProductsFiltered
