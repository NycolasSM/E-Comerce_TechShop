import React from 'react'

import CardIconDefault from '../Cards/icons/CardIconDefault.png'
import CardIconComputer from '../Cards/icons/CardIconComputer.png'
import CardIconKeyboard from '../Cards/icons/CardIconKeyboard.png'
import CardIconMonitor from '../Cards/icons/CardIconMonitor.png'
import CardIconMouse from '../Cards/icons/CardIconMouse.png'
import CardIconMousePad from '../Cards/icons/CardIconMousePad.png'
import CardIconHeadPhone from '../Cards/icons/CardIconHeadPhone.png'

import Card from '../Cards/Card.jsx'

const icons = {
  "": CardIconDefault,
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
      <section className="flexCards">        
        <Card className="" title="Monitores" imageSrc={icons["Monitor"]} altText="CategoryIcon" />
        <Card className="" title="Teclados" imageSrc={icons["Keyboard"]} altText="CategoryIcon" />
        <Card className="" title="Mouses" imageSrc={icons["Mouse"]} altText="CategoryIcon" />
        <Card className="" title="MousePads" imageSrc={icons["MousePad"]} altText="CategoryIcon" />
        <Card className="" title="Fones de Ouvido" imageSrc={icons["HeadPhone"]} altText="CategoryIcon" />
        <Card className="" title="Computadores" imageSrc={icons["Computer"]} altText="CategoryIcon" />
      </section>
    </div>
  )
}

export default HomeCardsCategories
