import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import ProductInfo from './components/ProductInfo'

const ProductPage = () => {

  const [products, setProduct] = useState([])

  const [prevewProductImg, setPrevewProductImg] = useState()

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(resp => resp.json())
      .then(data => {
        window.scrollTo(0,230);
        setProduct(data)
        setPrevewProductImg(data.imgs[0].src)
      })
  }, [ id ])

  return (
    <div>
      <ProductInfo key={products.id} id={id} title={products.name} value={products.value} category={products.category} brand={products.brand} productImgs={products.imgs} prevewProductImg={prevewProductImg} altText="ProductIcon" />
    </div>
  )
}

export default ProductPage
