import React, { useEffect, useState } from 'react'
import './ItensCart.css'

import CardItensCart from './CardItensCart'

const ItensCart = () => {

  const [productsCart, setProducts] = useState([])

  const [userId, setUserId] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:3001/pageData/`)
      .then(resp => resp.json())
      .then(data => {
        setUserId(data[0].userId)
      })
      .then(
        fetch(`http://localhost:3001/users/${userId}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setProducts(data.cart)
        })
      )
  }, [userId])

  return (
    <div className="limitPageWidth">
      <div className="CartItensContainer">
        <ul className="cardItensCartList">
          {productsCart.map(product => (
            <li key={product.productId}><CardItensCart key={product.productId} title={product.title} img={product.previewProductImg} id={product.productId} value={product.value} /></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ItensCart
