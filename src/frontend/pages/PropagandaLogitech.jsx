import React from 'react'

import Nav from '../components/Header/Nav.jsx';
import TopBarInfo from '../components/Header/TopBarInfo.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Carousel from '../components/Header/CarouselAdvertising/CarouselAdvertising.jsx'
import HomeCategoriesSession from '../components/Home/HomeCategoriesSession.jsx';
import ProductCard from '../components/Cards/ProductCard.jsx'

import EspacoBranco from '../components/Home/espacoBranco.jsx';


const PropagandaLogitech = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <Carousel />
      <HomeCategoriesSession title="Logitech" more="" />
      <ProductCard category={""} brand={"Logitech"} />
      <EspacoBranco />
      <Footer />
    </div>
  )
}

export default PropagandaLogitech
