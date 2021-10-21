import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './ProductCard.css'

import CardProducts from '../../../components/Cards/CardProducts.jsx'

const ProductCard = ({
  category = '',
  brand = '',
}) => {

  const [products, setProduct] = useState([])

    useEffect(() => {
      fetch("http://localhost:3001/products/")
        .then(resp => resp.json())
        .then(data => {
          setProduct(data)
        })
    }, [])

    function aplyFilterCategory(element) {
      let categoryFilter = category.toLowerCase().trim()
      let elementCategory = element.category.toLowerCase().trim()

      if (category === "") {
        return element
      } else {
        return elementCategory === categoryFilter
      }
    }

    function aplyFilterBrands(element) {
      let brandFilter = brand.toLowerCase().trim()
      let elementBrand = element.brand.toLowerCase().trim()

      if (brand === "") {
        return element
      } else {
        return elementBrand === brandFilter
      }
    }

    let productsFiltered = products.filter(aplyFilterCategory).filter(aplyFilterBrands)

    return (
      <div className="limitPageWidth">
        <section className="flexCardsProduct" id="idTeste">
          {products.length > 0 ? ("") : ("Carregando ")}
          {productsFiltered.map(product => (
            <Link key={product.id} className="link" to={`/product/${product.id}`}><CardProducts className="Product" key={product.id} title={product.name} subTitle={product.description} imageSrc={product.imgs[0].src} value={product.value} altText="ProductIcon" /></Link>
          ))}
        </section>
      </div>
    )
  }

  export default ProductCard
