import React from 'react'

import './ProductInfo.css'

import TopBarInfo from '../../components/Header/TopBarInfo.jsx';
import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Header/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';


import imgTest from './img/MouseGamerCobra.png'
import imgTest2 from './img/MouseGamerCobra2.png'
import imgTest3 from './img/MouseGamerCobra3.png'
import imgTest4 from './img/MouseGamerCobra4.png'

const ProductInfo = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <Nav />
      <div className="limitPageWidth">
        <div className="productInfoContainer">
          <h2 className="productInfoTitle">Mouse Gamer Cobra</h2>
          <div className="productInfoPreviewContainer">
            {/* <img className="productInfoPreviewImg 1" src={imgTest} alt="PreviewProductImg" />
            <img className="productInfoPreviewImg 2" src={imgTest2} alt="PreviewProductImg" />
            <img className="productInfoPreviewImg 3" src={imgTest3} alt="PreviewProductImg" />
            <img className="productInfoPreviewImg 4" src={imgTest4} alt="PreviewProductImg" /> */}
            <div className="productInfoPreviewImg" id="imgNav1">1</div>
            <div className="productInfoPreviewImg" id="imgPreview">Preview</div>
            <div className="productInfoPreviewImg" id="imgNav2">2</div>
            <div className="productInfoPreviewImg" id="imgNav3">3</div>
            <div className="productInfoPreviewImg" id="imgNav4">4</div>
            {/* style={{gridArea: 'imgPreview'}} */}
          </div>
          <div claasName="asd" id="elemento1">1</div>
          <div claasName="asd" id="elemento2">2</div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default ProductInfo
