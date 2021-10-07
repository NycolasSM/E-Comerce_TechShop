import React from 'react'
import './ProductCard.css'

import CardIconDefault from './icons/CardIconDefault.png'
import MouseGamerRedDragonCobra from './ProductsImgs/MouseGamerCobra.png'
import MouseGamerRedDragonGriffin from './ProductsImgs/MouseGamerRedDragonGriffin.png'
import TecladoGamerMecanicoKumaraK552 from './ProductsImgs/TecladoGamerMecanicoKumaraK552.png'
import TecladoGamerRedDragonKarura from './ProductsImgs/TecladoGamerRedDragonKarura.png'
import MousePadGamerInfernalDragon from './ProductsImgs/MousePadGamerInfernalDragon.png'
import HeadSetGamerRedDraonZeusX from './ProductsImgs/HeadSetGamerRedDraonZeusX.png'

import Card from './Card.jsx'

let icons = {
  "": CardIconDefault,
  "MouseGamerRedDragonCobra": MouseGamerRedDragonCobra,
  "MouseGamerRedDragonGriffin": MouseGamerRedDragonGriffin,
  "TecladoGamerMecanicoKumaraK552": TecladoGamerMecanicoKumaraK552,
  "TecladoGamerRedDragonKarura": TecladoGamerRedDragonKarura,
  "MousePadGamerInfernalDragon": MousePadGamerInfernalDragon,
  "HeadSetGamerRedDraonZeusX": HeadSetGamerRedDraonZeusX,
};

const ProductCard = () => {
  return (
    <div className="limitPageWidth">
      <section className="flexCardsProduct">
        <Card className="Product" title="RedDragon Cobra" imageSrc={icons["MouseGamerRedDragonCobra"]} altText="ProductIcon" />
        <Card className="Product" title="RedDragon Griffin" imageSrc={icons["MouseGamerRedDragonGriffin"]} altText="ProductIcon" />
        <Card className="Product" title="TecladoKumaraK552" imageSrc={icons["TecladoGamerMecanicoKumaraK552"]} altText="ProductIcon" />
        <Card className="Product" title="TecladoRedDragonKarura" imageSrc={icons["TecladoGamerRedDragonKarura"]} altText="ProductIcon" />
        <Card className="Product" title="RedDragon Cobra" imageSrc={icons["MouseGamerRedDragonCobra"]} altText="ProductIcon" />
        <Card className="Product" title="MousePadInfernalDragon" imageSrc={icons["MousePadGamerInfernalDragon"]} altText="ProductIcon" />
        <Card className="Product" title="TecladoKumaraK552" imageSrc={icons["TecladoGamerMecanicoKumaraK552"]} altText="ProductIcon" />
        <Card className="Product" title="HeadSetRedDraonZeusX" imageSrc={icons["HeadSetGamerRedDraonZeusX"]} altText="ProductIcon" />
        <Card className="Product" title="Razer" imageSrc={icons["MouseGamerRedDragonGriffin"]} altText="ProductIcon" />
      </section>
    </div>
  )
}

export default ProductCard
