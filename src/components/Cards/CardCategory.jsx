import React from 'react'
import './CardCategory.css'

import CardIconDefault from './icons/CardIconDefault.png'
import CardIconComputer from './icons/CardIconComputer.png'
import CardIconKeyboard from './icons/CardIconKeyboard.png'
import CardIconMonitor from './icons/CardIconMonitor.png'
import CardIconMouse from './icons/CardIconMouse.png'
import CardIconMousePad from './icons/CardIconMousePad.png'
import CardIconHeadPhone from './icons/CardIconHeadPhone.png'

const CardCategory = (props) => {

  let cardTitle = props.title

  let icons = [ 
    {
      name : "default",
      source : CardIconDefault, 
    },
    {
      name : "Computer",
      source : CardIconComputer, 
    },
    {
      name : "Keyboard",
      source : CardIconKeyboard, 
    },
    {
      name : "Monitor",
      source : CardIconMonitor, 
    },
    {
      name : "Mouse",
      source : CardIconMouse, 
    },
    {
      name : "MousePad",
      source : CardIconMousePad, 
    },
    {
      name : "HeadPhone",
      source : CardIconHeadPhone, 
    }
]

  function nameFilter(name) {
    return name.name === props.icon
  }

  return (
    <div className="categoryCard">
      <img src={icons.find(nameFilter).source} alt="CategoryIcon" />
      <div className="cardTitle">
        {cardTitle}
      </div>
    </div>
  )
}

export default CardCategory
