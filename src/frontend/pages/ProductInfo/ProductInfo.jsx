import React from 'react'

import './ProductInfo.css'

import { faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TopBarInfo from '../../components/Header/TopBarInfo.jsx';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Header/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProductCardSeeMore from './components/ProductCardSeeMore';

// import imgDefault from './img/imgDefault.png'

import imgTest from './img/MouseGamerCobra.png'
import imgTest2 from './img/MouseGamerCobra2.png'
import imgTest3 from './img/MouseGamerCobra3.png'
import imgTest4 from './img/MouseGamerCobra4.png'

const ProductInfo = ({
  title,
  value,
  category,
  brand
}) => {

  function setPreview(event) {
    let activeImages = document.getElementsByClassName('active')
    let preview = document.getElementById('imgPreview')

    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active')
    }

    event.target.classList.add('active')
    preview.src = event.target.src
  }

  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <div className="limitPageWidth">
        <div className="productInfoContainer">
          <div className="productInfoPath">
            <span className="productPath">Home</span>
            {/* neste campo pretendo fazer um link mesmo que quando o usuario clicar ira incaminhar para a pagina productList */}
            <span className="productPath">Mouses</span>
            <span className="productPath">RedDragon</span>
          </div>
          <section className="productInfoSection">
            <div className="productInfoPreviewSection">
              <img className="productInfoPreview" id="imgPreview" src={imgTest} alt="PreviewProductImg" />
              <img className="productInfoThumbnail" onMouseEnter={setPreview} id="imgNav" src={imgTest} alt="ThumbnailProductImg" />
              <img className="productInfoThumbnail" onMouseEnter={setPreview} id="imgNav" src={imgTest2} alt="ThumbnailProductImg" />
              <img className="productInfoThumbnail" onMouseEnter={setPreview} id="imgNav" src={imgTest3} alt="ThumbnailProductImg" />
              <img className="productInfoThumbnail" onMouseEnter={setPreview} id="imgNav" src={imgTest4} alt="ThumbnailProductImg" />
            </div>
            <div className="productInfoBuySection">
              <h3 className="productInfoBuySectionTitle">Mouse Gamer Cobra M711 RGB</h3>
              <p className="productInfoBuySectionValue">R$ 124,90</p>
              <p className="productInfoBuySectionValueWithDiscount"><span>ou </span>12x <span> de</span> R$ 10,75 <span> sem Juros</span></p>
              <p className="productInfoBuySectionFreightCalculation">
                <FontAwesomeIcon icon={faTruck} />
                <span>
                  Calcular Frete:
                </span>
                <input type="text" name="Frete" id="Frete" />
                <p className="productInfoBuySectionFreightCalculationValue" >R$19,90 - PAC ( 7 dias)</p>
              </p>
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
                <button><FontAwesomeIcon icon={faShoppingCart} />+</button>
              </div>
            </div>
          </section>
          <section className="productInfoDetailsSection" >
            <h2 className="productInfoDetailsTitle" >Características</h2>
            <div className="productInfos">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic deleniti id consectetur laboriosam. Unde harum eum omnis impedit tempore ex quidem qui minus, culpa vel quae, corrupti quisquam fuga dolore?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error assumenda voluptatem sequi beatae deleniti laborum quis, est ullam cupiditate provident distinctio neque! Mollitia, perferendis. Facilis, culpa. Provident voluptate qui similique!</p>
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
              <ProductCardSeeMore category="Mouse" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductInfo
