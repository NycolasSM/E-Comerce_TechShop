import React from 'react'
import { Link } from "react-scroll";

import CardIconDefault from './icons/CardIconDefault.png'
import BrandIconRedDragon from './icons/BrandIconRedDragon.png'
import BrandIconHyperX from './icons/BrandIconHyperX.png'
import BrandIconCorsair from './icons/BrandIconCorsair.png'
import BrandIconLogitech from './icons/BrandIconLogitech.png'
import BrandIconRazer from './icons/BrandIconRazer.png'
import BrandIconPositivoGamer from './icons/BrandIconPositivoGamer.png'

import Card from '../../../components/Cards/Card.jsx'

let icons = {
  "": CardIconDefault,
  "RedDragon": BrandIconRedDragon,
  "HyperX": BrandIconHyperX,
  "Corsair": BrandIconCorsair,
  "Logitech": BrandIconLogitech,
  "Razer": BrandIconRazer,
  "PositivoGamer": BrandIconPositivoGamer,
};



const FilterBrands = ({
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

export default FilterBrands
