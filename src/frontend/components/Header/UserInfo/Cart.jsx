import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cart = (props) => {

  let amount = props.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return (
    <Link className="link" to="/cart">
      <div className="cartContainer">
        <FontAwesomeIcon className="carIcon" icon={faShoppingCart} />
        <div className="cartInfo">
          <p>Seu Carrinho</p>
          <p>{amount ? amount : "(Sem itens)"}</p>
        </div>
      </div>
    </Link>
  )
}

export default cart
