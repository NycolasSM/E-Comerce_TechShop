import React from 'react'
import './Cart.css'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cart = (props) => {

  let amount = props.amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  return (
    <div className="cartContainer">
      <FontAwesomeIcon className="carIcon" icon={faShoppingCart} />
      <div className="cartInfo">
        <p>Seu Carrinho</p>
        <p>{amount ? amount : "(Sem itens)"}</p>
      </div>
    </div>
  )
}

export default cart
