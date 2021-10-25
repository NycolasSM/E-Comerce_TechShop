import React, { useEffect, useState } from 'react'
import './FavoriteItens.css'

import CardFavoriteItens from './CardFavoriteItens'

const FavoriteItens = () => {

  const [favoriteList, setFavoriteList] = useState([])

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
          setFavoriteList(data.favoriteItens)
        })
      )
  }, [userId])

  return (
    <div className="limitPageWidth">
      <div className="CartItensContainer">
        <ul className="cardItensCartList">
          {favoriteList.map(product => (
            <li key={product.productId}><CardFavoriteItens key={product.productId} title={product.title} img={product.previewProductImg} id={product.productId} value={product.value} /></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FavoriteItens
