import React, { useState, useEffect } from 'react'
import './ProductCard.css'

// import CardIconDefault from './icons/CardIconDefault.png'
// import MouseGamerRedDragonCobra from './ProductsImgs/MouseGamerCobra.png'
// import MouseGamerRedDragonGriffin from './ProductsImgs/MouseGamerRedDragonGriffin.png'
// import TecladoGamerMecanicoKumaraK552 from './ProductsImgs/TecladoGamerMecanicoKumaraK552.png'
// import TecladoGamerRedDragonKarura from './ProductsImgs/TecladoGamerRedDragonKarura.png'
// import MousePadGamerInfernalDragon from './ProductsImgs/MousePadGamerInfernalDragon.png'
// import HeadSetGamerRedDraonZeusX from './ProductsImgs/HeadSetGamerRedDraonZeusX.png'
// import HeadSetGamerSemFioLogitechG733 from './ProductsImgs/HeadSetGamerSemFioLogitechG733.png'
// import MonitorGamerBlureCaseFullHd165HzBM248GC from './ProductsImgs/MonitorGamerBlueCase23.8FullHd165HzBM248GC.png'
// import MonitorLGLed238WidescreenFullHD24mk430h from './ProductsImgs/MonitorLGLed23.8WidescreenFullHD24mk430h.png'
// import MouseGamerLogitechG305LightSpeed from './ProductsImgs/MouseGamerLogitechG305LightSpeed.png'
// import MouseGamerLogitechG403Hero from './ProductsImgs/MouseGamerLogitechG403Hero.png'
// import MousePadGamerExtraGrandeLogitechG840 from './ProductsImgs/MousePadGamerExtraGrandeLogitechG840.png'
// import MousePadGamerRedDragonArchelonP002 from './ProductsImgs/MousePadGamerRedDragonArchelonP002.png'
// import MousePadLogitechPowerPlayG943 from './ProductsImgs/MousePadLogitechPowerPlayG943.png'
// import PCGamerIntelCore58GbHd500GbGeforceKit from './ProductsImgs/PCGamerIntelCore58GbHd500GbGeforceKit.png'
// import TecladoGamerLogitechG213Prodigy from './ProductsImgs/TecladoGamerLogitechG213Prodigy.png'

import Card from './Card.jsx'

// let icons = {
//   "": CardIconDefault,
//   "MouseGamerRedDragonCobra": MouseGamerRedDragonCobra,
//   "MouseGamerRedDragonGriffin": MouseGamerRedDragonGriffin,
//   "TecladoGamerMecanicoKumaraK552": TecladoGamerMecanicoKumaraK552,
//   "TecladoGamerRedDragonKarura": TecladoGamerRedDragonKarura,
//   "MousePadGamerInfernalDragon": MousePadGamerInfernalDragon,
//   "HeadSetGamerRedDraonZeusX": HeadSetGamerRedDraonZeusX,
//   "HeadSetGamerSemFioLogitechG733": HeadSetGamerSemFioLogitechG733,
//   "MonitorGamerBlureCaseFullHd165HzBM248GC": MonitorGamerBlureCaseFullHd165HzBM248GC,
//   "MonitorLGLed238WidescreenFullHD24mk430h": MonitorLGLed238WidescreenFullHD24mk430h,
//   "MouseGamerLogitechG305LightSpeed": MouseGamerLogitechG305LightSpeed,
//   "MouseGamerLogitechG403Hero": MouseGamerLogitechG403Hero,
//   "MousePadGamerExtraGrandeLogitechG840": MousePadGamerExtraGrandeLogitechG840,
//   "MousePadGamerRedDragonArchelonP002": MousePadGamerRedDragonArchelonP002,
//   "MousePadLogitechPowerPlayG943": MousePadLogitechPowerPlayG943,
//   "PCGamerIntelCore58GbHd500GbGeforceKit": PCGamerIntelCore58GbHd500GbGeforceKit,
//   "TecladoGamerLogitechG213Prodigy": TecladoGamerLogitechG213Prodigy,
// };

const ProductCard = ({
  filter = '',
}) => {

  const [products, setProduct] = useState([])

  // ?_limit=6 ---- para aplicar um limite de itens na requisição

  useEffect(() => {
    fetch("http://localhost:3001/products/")
      .then(resp => resp.json())
      .then(data => {
        setProduct(data)
      })
  }, [])

  // let filter = "Keyboard"

  function aplicarFiltro(element) {
    if(filter === "") {
      return element
    } else {
      return element.category === filter
    }
  }

  return (
    <div className="limitPageWidth">
      <section className="flexCardsProduct">
        {products.length > 0 ? ("") : ("Carregando ")}
        {products.filter(aplicarFiltro).map(product => (
          <Card className="Product" key={product.id} title={product.name} subTitle={product.description} imageSrc={product.imgs[0].src} value={product.value} altText="ProductIcon" />
        ))}

        {/* <Card className="Product" title="RedDragon Cobra" subTitle="Mouse Gamer Cobra M711" imageSrc={icons["MouseGamerRedDragonCobra"]} value={135} altText="ProductIcon" />
        <Card className="Product" title="RedDragon Griffin" subTitle="Mouse Gamer Griffin" imageSrc={icons["MouseGamerRedDragonGriffin"]} value={110} altText="ProductIcon" />
        <Card className="Product" title="Kumara K552" subTitle="Teclado Kumara K552" imageSrc={icons["TecladoGamerMecanicoKumaraK552"]} value={230} altText="ProductIcon" />
        <Card className="Product" title="RedDragon Karura" subTitle="Teclado RedDragon Karura" imageSrc={icons["TecladoGamerRedDragonKarura"]} value={150} altText="ProductIcon" />
        <Card className="Product" title="MousePad Infernal Dragon" subTitle="MousePad Infernal Dragon" imageSrc={icons["MousePadGamerInfernalDragon"]} value={149.90} altText="ProductIcon" />
        <Card className="Product" title="RedDraon ZeusX" subTitle="HeadSet RedDraon ZeusX" imageSrc={icons["HeadSetGamerRedDraonZeusX"]} value={369} altText="ProductIcon" />
        <Card className="Product" title="HeadSet Logitech G733" subTitle="HeadSet Gamer Sem Fio" imageSrc={icons["HeadSetGamerSemFioLogitechG733"]} value={359.90} altText="ProductIcon" />
        <Card className="Product" title="MonitorGamerBlur" subTitle="Monitor Gamer Blur" imageSrc={icons["MonitorGamerBlureCaseFullHd165HzBM248GC"]} value={1899.90} altText="ProductIcon" />
        <Card className="Product" title="Monitor LGLed 24MK430H" subTitle="Monitor LGLed FullHD" imageSrc={icons["MonitorLGLed238WidescreenFullHD24mk430h"]} value={1100} altText="ProductIcon" />
        <Card className="Product" title="Logitech G305" subTitle="Mouse Gamer Logite LightSpeed" imageSrc={icons["MouseGamerLogitechG305LightSpeed"]} value={350} altText="ProductIcon" />
        <Card className="Product" title="Logitech G403 Hero" subTitle="Mouse Gamer Logitech" imageSrc={icons["MouseGamerLogitechG403Hero"]} value={378} altText="ProductIcon" />
        <Card className="Product" title="MousePad Logitech G840" subTitle="Extra Grande" imageSrc={icons["MousePadGamerExtraGrandeLogitechG840"]} value={138} altText="ProductIcon" />
        <Card className="Product" title="MousePad RedDragon" subTitle="Archelon P002" imageSrc={icons["MousePadGamerRedDragonArchelonP002"]} value={129} altText="ProductIcon" />
        <Card className="Product" title="Logitech PowerPlay G943" subTitle="MousePadLogitech" imageSrc={icons["MousePadLogitechPowerPlayG943"]} value={119} altText="ProductIcon" />
        <Card className="Product" title="Kit PCGamer Geforce" subTitle="IntelCore i5 8Gb Hd500Gb" imageSrc={icons["PCGamerIntelCore58GbHd500GbGeforceKit"]} value={2239} altText="ProductIcon" />
        <Card className="Product" title="Logitech G213" subTitle="Logitech G213 Prodigy" imageSrc={icons["TecladoGamerLogitechG213Prodigy"]} value={219} altText="ProductIcon" /> */}
      </section>
    </div>
  )
}

export default ProductCard
