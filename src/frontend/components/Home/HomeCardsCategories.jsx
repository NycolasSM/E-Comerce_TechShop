import React from 'react'
import { Link } from 'react-router-dom';

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
        <Link className="link" to="/Monitors">
          <Card className="" category="Monitor" title="Monitores" imageSrc={icons["Monitor"]} altText="CategoryIcon" />
        </Link>
        <Link className="link" to="/Keyboards">
          <Card className="" category="Keyboard" title="Teclados" imageSrc={icons["Keyboard"]} altText="CategoryIcon" />
        </Link>
        <Link className="link" to="/Mouses">
          <Card className="" category="Mouse" title="Mouses" imageSrc={icons["Mouse"]} altText="CategoryIcon" />
        </Link>
        <Link className="link" to="/Mousepads">
          <Card className="" category="Mousepads" title="MousePads" imageSrc={icons["MousePad"]} altText="CategoryIcon" />
        </Link>
        <Link className="link" to="/Headsets">
          <Card className="" category="Headset" title="Fones de Ouvido" imageSrc={icons["HeadPhone"]} altText="CategoryIcon" />
        </Link>
        <Link className="link" to="/Computers">
          <Card className="" category="KitPC" title="Computadores" imageSrc={icons["Computer"]} altText="CategoryIcon" />
        </Link>
      </section>
    </div>
  )
}

export default HomeCardsCategories
