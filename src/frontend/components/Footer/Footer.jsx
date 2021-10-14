import React from 'react'
import './Footer.css'

import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import formasDePagamento from './formasDePagamento.png'
import selosDeSegurança from './selosDeSegurança.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <section className="paymentMethodsFooter">
          Formas de pagamento
          <p>
            <img src={formasDePagamento} alt="formas de pagamento" />
          </p>
        </section>
        <section className="securityStickersFooter">
          Segurança
          <p>
            <img src={selosDeSegurança} alt="selos de segurança" />
          </p>
        </section>
      </div>
      <div className="footer2">
        <section className="footerAboutInstitutional">
          <ul>institucional
            <li>Quem somos</li>
            <li>Termos e Condições de Venda</li>
            <li>Política de Troca e Devoluções</li>
            <li>Política de Segurança e Privacidade</li>
            <li>Prêmios TechShop</li>
          </ul>
        </section>
        <section className="footerAboutDoubt">
          <ul>Duvidas
            <li>Como Comprar</li>
            <li>Prazos e entregas</li>
            <li>Formas de Pagamento</li>
            <li>Segurança de compra</li>
          </ul>
        </section>
        <section className="footerAboutClient">
          <ul>Cliente
            <li>Minha Conta</li>
            <li>Meus pedidos</li>
            <li>Meus tickets</li>
          </ul>
        </section>
        <section className="footerAboutHelp">
          <ul>Ajuda
            <li>Video Tutoriais</li>
            <li>Manuseio do Produto</li>
            <li>Fale Conosco</li>
          </ul>
        </section>
      </div>
      <div className="footer3">
        <section className="hvr-underline-from-center">Siga nos</section>
        <div className="socialIconsFooter">
          <i></i>
          <span><FontAwesomeIcon icon={faFacebookSquare} /></span>
          <span><FontAwesomeIcon icon={faTwitterSquare} /></span>
          <span><FontAwesomeIcon icon={faInstagramSquare} /></span>
          <span><FontAwesomeIcon icon={faYoutubeSquare} /></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
