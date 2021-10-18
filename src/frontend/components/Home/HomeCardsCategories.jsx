import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

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

const HomeCardsCategories = ({
  filterCategory,
}) => {

  return (
    <div className="limitPageWidth">
      <Link
        to="scroll"
        smooth={true}
        duration={400}
      >
        <section className="flexCards">
          <div onClick={() => filterCategory("Monitor")} >
            <Card className="" category="Monitor" title="Monitores" imageSrc={icons["Monitor"]} altText="CategoryIcon" />
          </div>
          <div onClick={() => filterCategory("Keyboard")} >
            <Card className="" category="Keyboard" title="Teclados" imageSrc={icons["Keyboard"]} altText="CategoryIcon" />
          </div>
          <div onClick={() => filterCategory("Mouse")} >
            <Card className="" category="Mouse" title="Mouses" imageSrc={icons["Mouse"]} altText="CategoryIcon" />
          </div>
          <div onClick={() => filterCategory("Mousepad")} >
            <Card className="" category="Mousepads" title="MousePads" imageSrc={icons["MousePad"]} altText="CategoryIcon" />
          </div>
          <div onClick={() => filterCategory("Headset")} >
            <Card className="" category="Headset" title="Fones de Ouvido" imageSrc={icons["HeadPhone"]} altText="CategoryIcon" />
          </div>
          <div onClick={() => filterCategory("KitPc")} >
            <Card className="" category="KitPC" title="Computadores" imageSrc={icons["Computer"]} altText="CategoryIcon" />
          </div>
        </section >
      </Link>
    </div >
  )
}

export default HomeCardsCategories
