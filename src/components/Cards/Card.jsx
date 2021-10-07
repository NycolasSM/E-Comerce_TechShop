import React from 'react'
import './Card.css'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardCategory = ({
  title,
  className = '',
  imageSrc = '',
  altText = '',
}) => {

  const productValue = 850

  const productValue12x = (Math.floor(productValue / 12))

  const isProduct = (
    <div className="ProductCardContainer">
      <hr className="ProductCardLine" />
      <h3 className="ProductCardTitle">{title}</h3>
      <p className="ProductCardValue">R$ {productValue}.00</p>
      <p className="ProductCardValueInstallment">12x R$ {productValue12x}.00 sem juros</p>
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
