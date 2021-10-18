import React, { useState, useEffect } from 'react'
import './ProductCard.css'

import Card from './Card.jsx'

const ProductCard = ({
  category = '',
  brand = '',
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

    function aplyFilterCategory(element) {
      if (category === "") {
        return element
      } else {
        return element.category === category
      }
    }

    function aplyFilterBrands(element) {
      if (brand === "") {
        return element
      } else {
        return element.brand === brand
      }
    }



    let productsFiltered = products.filter(aplyFilterCategory).filter(aplyFilterBrands)

    return (
      <div className="limitPageWidth">
        <section className="flexCardsProduct" id="idTeste">
          {products.length > 0 ? ("") : ("Carregando ")}
          {productsFiltered.map(product => (
            <Card className="Product" key={product.id} title={product.name} subTitle={product.description} imageSrc={product.imgs[0].src} value={product.value} altText="ProductIcon" />
          ))}
        </section>
      </div>
    )
  }

  export default ProductCard
