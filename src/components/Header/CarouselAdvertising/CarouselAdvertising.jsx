import React from 'react'
import "./CarouselAdvertising.css"
import CarouselAdvertisingImg from './CarouselAdvertisingImg.jsx'

import BackgroundAds from './BackgoundAds.png'

const CarouselAdvertising = () => {
  return (
    <section className="Advertising">
      <div className="limitBackgroundAds">
        <img src={BackgroundAds} alt="BackgroundAdsImg" />
      </div>
      <div className="backgroundAdvertising">
        <CarouselAdvertisingImg />
      </div>
    </section>
  )
}

export default CarouselAdvertising
