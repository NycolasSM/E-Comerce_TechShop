import React from 'react'
import './CardBrand.css'

import CardIconDefault from './icons/CardIconDefault.png'
import BrandIconRedDragon from './icons/BrandIconRedDragon.png'
import BrandIconHyperX from './icons/BrandIconHyperX.png'
import BrandIconCorsair from './icons/BrandIconCorsair.png'
import BrandIconLogitech from './icons/BrandIconLogitech.png'
import BrandIconRazer from './icons/BrandIconRazer.png'
import BrandIconPositivoGamer from './icons/BrandIconPositivoGamer.png'

const CardBrand = (props) => {

  let cardTitle = props.title

  let icons = [ 
    {
      name : "Default",
      source : CardIconDefault, 
    },
    {
      name : "RedDragon",
      source : BrandIconRedDragon, 
    },
    {
      name : "HyperX",
      source : BrandIconHyperX, 
    },
    {
      name : "Corsair",
      source : BrandIconCorsair, 
    },
    {
      name : "Logitech",
      source : BrandIconLogitech, 
    },
    {
      name : "Razer",
      source : BrandIconRazer 
    },
    {
      name : "PositivoGamer",
      source : BrandIconPositivoGamer, 
    },

]

  function nameFilter(name) {
    return name.name === props.icon
  }

  return (
    <div className="brandCard">
      <img src={icons.find(nameFilter).source} alt="BrandIcon" />
      <div className="cardTitle">
        {cardTitle}
      </div>
    </div>
  )
}

export default CardBrand
