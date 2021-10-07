import React from 'react'
import './HomeCardsCategories.css'
import CardIconDefault from '../Cards/icons/CardIconDefault.png'
import CardIconComputer from '../Cards/icons/CardIconComputer.png'
import CardIconKeyboard from '../Cards/icons/CardIconKeyboard.png'
import CardIconMonitor from '../Cards/icons/CardIconMonitor.png'
import CardIconMouse from '../Cards/icons/CardIconMouse.png'
import CardIconMousePad from '../Cards/icons/CardIconMousePad.png'
import CardIconHeadPhone from '../Cards/icons/CardIconHeadPhone.png'
import CardCategory from '../Cards/CardCategory.jsx'

const icons = {
  "default": CardIconDefault,
  "Computer": CardIconComputer,
  "Keyboard": CardIconKeyboard,
  "Monitor": CardIconMonitor,
  "Mouse": CardIconMouse,
  "MousePad": CardIconMousePad,
  "HeadPhone": CardIconHeadPhone,
};

const HomeCardsCategories = () => {
  return (
    <div className="limitPageWidth">
      <section className="flexCardsCategories">        
        <CardCategory title="Monitores" imageSrc={icons["Monitor"]} altText="CategoryIcon" />
        <CardCategory title="Teclados" imageSrc={icons["Keyboard"]} altText="CategoryIcon" />
        <CardCategory title="Mouses" imageSrc={icons["Mouse"]} altText="CategoryIcon" />
        <CardCategory title="MousePads" imageSrc={icons["MousePad"]} altText="CategoryIcon" />
        <CardCategory title="Fones de Ouvido" imageSrc={icons["HeadPhone"]} altText="CategoryIcon" />
        <CardCategory title="Computadores" imageSrc={icons["Computer"]} altText="CategoryIcon" />
      </section>
    </div>
  )
}

export default HomeCardsCategories
