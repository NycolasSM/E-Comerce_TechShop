import React from 'react'
import './HomeCardsBrands.css'

import CardBrand from '../Cards/CardBrand.jsx'

const HomeCardsCategories = () => {
  return (
    <div className="limitPageWidth">
      <section className="flexCardsBrands">
        <CardBrand title="RedDragon" icon="RedDragon" />
        <CardBrand title="HyperX" icon="HyperX" />
        <CardBrand title="Corsair" icon="Corsair" />
        <CardBrand title="Logitech" icon="Logitech" />
        <CardBrand title="Razer" icon="Razer" />
        <CardBrand title="Positivo Gamer" icon="PositivoGamer" />
      </section>
    </div>
  )
}

export default HomeCardsCategories
