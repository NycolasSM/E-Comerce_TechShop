import React from 'react'

import CardIconDefault from '../Cards/icons/CardIconDefault.png'
import BrandIconRedDragon from '../Cards/icons/BrandIconRedDragon.png'
import BrandIconHyperX from '../Cards/icons/BrandIconHyperX.png'
import BrandIconCorsair from '../Cards/icons/BrandIconCorsair.png'
import BrandIconLogitech from '../Cards/icons/BrandIconLogitech.png'
import BrandIconRazer from '../Cards/icons/BrandIconRazer.png'
import BrandIconPositivoGamer from '../Cards/icons/BrandIconPositivoGamer.png'

import Card from '../Cards/Card.jsx'

let icons = {
  "": CardIconDefault,
  "RedDragon": BrandIconRedDragon,
  "HyperX": BrandIconHyperX,
  "Corsair": BrandIconCorsair,
  "Logitech": BrandIconLogitech,
  "Razer": BrandIconRazer,
  "PositivoGamer": BrandIconPositivoGamer,
};



const HomeCardsCategories = () => {
  return (
    <div className="limitPageWidth">
      <section className="flexCards">
        <Card className="Brand" title="RedDragon" imageSrc={icons["RedDragon"]} altText="BrandIcon" />
        <Card className="Brand" title="HyperX" imageSrc={icons["HyperX"]} altText="BrandIcon" />
        <Card className="Brand" title="Corsair" imageSrc={icons["Corsair"]} altText="BrandIcon" />
        <Card className="Brand" title="Logitech" imageSrc={icons["Logitech"]} altText="BrandIcon" />
        <Card className="Brand" title="Razer" imageSrc={icons["Razer"]} altText="BrandIcon" />
        <Card className="Brand" title="Positivo Gamer" imageSrc={icons["PositivoGamer"]} altText="BrandIcon" />
      </section>
    </div>
  )
}

export default HomeCardsCategories
