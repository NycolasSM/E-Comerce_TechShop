import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

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



const HomeCardsCategories = ({
  filterBrand,
}) => {
  return (
    <div className="limitPageWidth">
      <Link
        to="scroll"
        smooth={true}
        duration={500}
      >
        <section className="flexCards">
          <div onClick={() => filterBrand("RedDragon")}>
            <Card className="Brand" title="RedDragon" imageSrc={icons["RedDragon"]} altText="BrandIcon" />
          </div>
          <div onClick={() => filterBrand("HyperX")}>
            <Card className="Brand" title="HyperX" imageSrc={icons["HyperX"]} altText="BrandIcon" />
          </div>
          <div onClick={() => filterBrand("Corsair")}>
            <Card className="Brand" title="Corsair" imageSrc={icons["Corsair"]} altText="BrandIcon" />
          </div>
          <div onClick={() => filterBrand("Logitech")}>
            <Card className="Brand" title="Logitech" imageSrc={icons["Logitech"]} altText="BrandIcon" />
          </div>
          <div onClick={() => filterBrand("Razer")}>
            <Card className="Brand" title="Razer" imageSrc={icons["Razer"]} altText="BrandIcon" />
          </div>
          <div onClick={() => filterBrand("PositivoGamer")}>
            <Card className="Brand" title="Positivo Gamer" imageSrc={icons["PositivoGamer"]} altText="BrandIcon" />
          </div>
        </section>
      </Link>

    </div>
  )
}

export default HomeCardsCategories
