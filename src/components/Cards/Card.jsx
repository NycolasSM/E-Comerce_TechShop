import React from 'react'
import './Card.css'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardCategory = ({
  title,
  subTitle = '',
  value,
  className = '',
  imageSrc = '',
  altText = '',
}) => {

  const productValue12x = (Math.floor(value / 12).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))

  function converterValorParaReal(numero) {
    if(typeof numero == 'number') {
      let numeroConvertido = numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      return numeroConvertido
    } else {
      return numero
    }
  }

  const isProduct = (
    <div className="ProductCardContainer">
      <hr className="ProductCardLine" />
      <p className="ProductCardTitle">{title}</p>
      <p className="ProductCardSubTItle">{subTitle}</p>
      <p className="ProductCardValue">{converterValorParaReal(value)}</p>
      <p className="ProductCardValueInstallment">12x R$ {productValue12x}</p>
      <div className="ProductCardButtons">
        <button className="ProductCardBuyButton">Comprar</button>
        <button className="ProductCardCartButton"><FontAwesomeIcon icon={faShoppingCart} /></button>
      </div>
    </div>
  )

  return (
    <div className={`card ${className}`} >
      <img src={imageSrc} alt={altText} />
      <div className="cardTitle">{className === "" ? title : className === "Brand" ? title : ""}</div>
      {className === "Product" ? isProduct : ""}
    </div>
  )
}

export default CardCategory
