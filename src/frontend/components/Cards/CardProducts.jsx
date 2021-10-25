import React from 'react'

import './CardProducts.css'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardProducts = ({
  title,
  subTitle = '',
  value,
  className = '',
  imageSrc = '',
  altText = '',
  category,
}) => {

  const productValue12x = (Math.floor(value / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))

  function converterValorParaReal(numero) {
    if (typeof numero == 'number') {
      let numeroConvertido = numero.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      return numeroConvertido
    } else {
      return numero
    }
  }

  return (
    <div>
        <div  category={category} className={`card ${className}`} >
          <img className="cardImg" src={imageSrc} alt={altText} />
          <div className="ProductCardContainer">
            <hr className="ProductCardLine" />
            <p className="ProductCardTitle">{title}</p>
            <p className="ProductCardSubTItle">{subTitle}</p>
            <p className="ProductCardValue">{converterValorParaReal(value)}</p>
            <p className="ProductCardValueInstallment">12x {productValue12x} sem juros</p>
          </div>
        </div>
      <div className="ProductCardButtons">
        <button className="ProductCardBuyButton">Comprar</button>
        <button className="ProductCardCartButton"><FontAwesomeIcon icon={faShoppingCart} /></button>
      </div>
    </div>
  )
}

export default CardProducts
