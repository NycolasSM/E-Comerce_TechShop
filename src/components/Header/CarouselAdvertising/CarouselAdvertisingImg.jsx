import React from 'react'
import './CarouselAdvertisingImg.css'

import AdsMousesTecladosLogitech from './AdsMousesTecladosLogitech.png'
import AdsMousesTecladosRedDragon from './AdsMousesTecladosRedDragon.png'

export const CarouselAdvertisingImg = () => {
  return (
    <div className="advertisingImg">
      <img src={AdsMousesTecladosLogitech} alt="Adversising Banner" />
      {/* (Campo para Propaganda) */}
    </div>
  )
}

export default CarouselAdvertisingImg