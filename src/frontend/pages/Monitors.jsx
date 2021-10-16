import React from 'react'

import Nav from '../components/Header/Nav.jsx';
import TopBarInfo from '../components/Header/TopBarInfo.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Carousel from '../components/Header/CarouselAdvertising/CarouselAdvertising.jsx'
import HomeCategoriesSession from '../components/Home/HomeCategoriesSession.jsx';
import ProductCard from '../components/Cards/ProductCard.jsx'
import ButtonBackToHome from '../components/Buttons/ButtonBackToHome.jsx';

import EspacoBranco from '../components/Home/espacoBranco.jsx';

console.log(window.location.href)

const Monitors = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <Carousel />
      <ButtonBackToHome />
      <HomeCategoriesSession title="Monitors" more="" />
      <ProductCard category={"Monitor"} brand={""} />
      <EspacoBranco />
      <Footer />
    </div>
  )
}

export default Monitors
