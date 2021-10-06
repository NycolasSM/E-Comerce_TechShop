import React from 'react'
import './HomeCardsCategories.css'

import CardCategory from '../Cards/CardCategory.jsx'

const HomeCardsCategories = () => {
  return (
    <div className="limitPageWidth">
      <section className="flexCardsCategories">
        <CardCategory title="Computadores" icon="Computer" />
        <CardCategory title="Monitores" icon="Monitor" />
        <CardCategory title="Teclados" icon="Keyboard" />
        <CardCategory title="Mouses" icon="Mouse" />
        <CardCategory title="MousePads" icon="MousePad" />
        <CardCategory title="Fones de Ouvido" icon="HeadPhone" />
      </section>
    </div>
  )
}

export default HomeCardsCategories
