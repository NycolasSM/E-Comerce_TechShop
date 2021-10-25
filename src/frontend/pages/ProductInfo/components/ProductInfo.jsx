import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import './ProductInfo.css'

import { faShoppingCart, faTruck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TopBarInfo from '../../../components/Header/TopBarInfo.jsx';
import Header from '../../../components/Header/Header.jsx';
import Nav from '../../../components/Header/Nav.jsx';
import Footer from '../../../components/Footer/Footer.jsx';
import ProductCardSeeMore from './ProductCardSeeMore';

// import imgDefault from './img/imgDefault.png'

const ProductInfo = ({
  title,
  value,
  category,
  brand,
  id,
  productImgs = [],
  previewProductImg
}) => {

  const [userId, setUserId] = useState("0")

  useEffect(() => {
    fetch(`http://localhost:3001/pageData/`)
      .then(resp => resp.json())
      .then(data => {
        setUserId(data[0].userId)
      })

  }, [userId])

  function setPreview(event) {
    let activeImages = document.getElementsByClassName('active')
    let preview = document.getElementById('imgPreview')

    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active')
    }

    event.target.classList.add('active')
    preview.src = event.target.src
  }

  const productValue12x = (Math.floor(value / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))

  function converterValorParaReal(numero) {
    if (typeof numero == 'number') {
      let numeroConvertido = numero.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      return numeroConvertido
    } else {
      return numero
    }
  }

  function addItemToCart(id) {
    let formCart = {}
    axios.get(`http://localhost:3001/users/${userId}`)
      .then(resp => {
        formCart = resp.data
        formCart.cart.push({ productId: id, value: value, title: title, previewProductImg: previewProductImg })
        axios.put(`http://localhost:3001/users/${userId}`, formCart)
          .catch(error => console.log(error))
          .then(() => window.location.reload())
      })
  }

  function addFavoriteItem(id) {
    let formFavorites = {}
    axios.get(`http://localhost:3001/users/${userId}`)
      .then(resp => {
        formFavorites = resp.data
        formFavorites.favoriteItens.push({ productId: id, value: value, title: title, previewProductImg: previewProductImg })
        axios.put(`http://localhost:3001/users/${userId}`, formFavorites)
          .catch(error => console.log(error))
          .then(() => window.location.reload())
      })
  }

  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <div className="limitPageWidth">
        <div className="productInfoContainer">
          <div className="productInfoPath">
            <Link className="productPath" to="/">
              <span >Home</span>
            </Link>
            {/* neste campo pretendo fazer um link mesmo que ao usuario clicar ira incaminhar para a pagina productList */}
            <span className="productPath">{category}</span>
            <span className="productPath">{brand}</span>
          </div>
          <section className="productInfoSection">
            <div className="productInfoPreviewSection">
              <img className="productInfoPreview" id="imgPreview" src={`.${previewProductImg}`} alt="PreviewProductImg" />
              {productImgs.map(product => (
                <img key={product.id} className="productInfoThumbnail" onMouseEnter={setPreview} id="imgNav" src={`.${product.src}`} alt="ThumbnailProductImg" />
              ))}
            </div>
            <div className="productInfoBuySection">
              <h3 className="productInfoBuySectionTitle">{title}</h3>
              <hr />
              <p className="productInfoBuySectionValue">{converterValorParaReal(value)}</p>
              <div className="productInfoBuySectionValueWithDiscount"><span> ou </span>12x <span> de</span> {productValue12x}<span> sem Juros</span></div>
              <div className="productInfoBuySectionFreightCalculation">
                <FontAwesomeIcon icon={faTruck} />
                <span>
                  Calcular Frete:
                </span>
                <input type="text" name="Frete" id="Frete" />
                <p className="productInfoBuySectionFreightCalculationValue" >R$19,90 - PAC ( 7 dias)</p>
              </div>
              <p className="productInfoBuySectionInventory">Estoque disponível</p>
              <p className="productInfoBuySectionAmount">Quantidade:
                <select id="cars">
                  <option className="productInfoBuySectionAmountOption" value="1">1 Unidade</option>
                  <option className="productInfoBuySectionAmountOption" value="2">2 Unidades</option>
                  <option className="productInfoBuySectionAmountOption" value="3">3 Unidades</option>
                  <option className="productInfoBuySectionAmountOption" value="4">4 Unidades</option>
                  <option className="productInfoBuySectionAmountOption" value="5">5 Unidades</option>
                </select>
              </p>
              <div className="productInfoBuySectionButtons">
                <button >Comprar</button>
                <button onClick={() => addItemToCart(id)}><FontAwesomeIcon icon={faShoppingCart} />+</button>
                <button onClick={() => addFavoriteItem(id)}><FontAwesomeIcon icon={faHeart} />+</button>
              </div>
            </div>
          </section>
          <section className="productInfoDetailsSection" >
            <h2 className="productInfoDetailsTitle" >Características</h2>
            <div className="productInfos">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error assumenda voluptatem sequi beatae deleniti laborum quis, est ullam cupiditate provident distinctio neque! Mollitia, perferendis. Facilis, culpa. Provident voluptate qui similique!</p>
              <p>lo impedit aspernatur inventore sequi, totam ipsum saepe necessitatibus voluptatum, dolorem possimus minima expedita eveniet ratione. Voluptatibus ipsa quidem aspernatur voluptas pariatur. Hic deleniti id consectetur laboriosam. Unde harum eum omnis impedit tempore ex quidem qui minus, culpa vel quae, corrupti quisquam fuga dolore?</p>
            </div>
          </section>
          <section className="productInfoDetailsSection">
            <h2 className="productInfoDetailsTitle">Especificações</h2>
            <div className="productInfos">
              <p>Marca: Lorem</p>
              <p>Modelo: Lorem</p>
              <p>Sensor: Lorem</p>
              <p>DPI: Lorem</p>
              <p>Iluminação: Lorem</p>
            </div>
          </section>
          <section className="productInfoDetailsSection">
            <h2 className="productInfoDetailsTitle">Avaliações</h2>
            <div className="productInfos">
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
            </div>
          </section>
          <section className="productInfoSeeMoreProductsSection">
            <h2 className="productInfoDetailsTitle">Conheça também</h2>
            <div className="productsSeeMore">
              <ProductCardSeeMore category={category} />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductInfo
