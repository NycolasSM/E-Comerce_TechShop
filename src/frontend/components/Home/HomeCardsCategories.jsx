import React, { useState } from 'react'

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

  const [filter, setFilter] = useState()

  // function handleCLick(event) {
  //   // setFilter(text)
  //   console.log(event.target)
  // }

  return (
    <div className="limitPageWidth">
      <section className="flexCards">        
        <Card className="" category="Monitor" title="Monitores" imageSrc={icons["Monitor"]} altText="CategoryIcon"/>
        <Card className="" category="Keyboard" title="Teclados" imageSrc={icons["Keyboard"]} altText="CategoryIcon" />
        <Card className="" category="Mouse" title="Mouses" imageSrc={icons["Mouse"]} altText="CategoryIcon" />
        <Card className="" category="Mousepads" title="MousePads" imageSrc={icons["MousePad"]} altText="CategoryIcon" />
        <Card className="" category="Headset" title="Fones de Ouvido" imageSrc={icons["HeadPhone"]} altText="CategoryIcon" />
        <Card className="" category="KitPC" title="Computadores" imageSrc={icons["Computer"]} altText="CategoryIcon" />
      </section>
    </div>
  )
}

export default HomeCardsCategories
