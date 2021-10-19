import React from "react";
import { Link } from "react-scroll";

import Slider from "infinite-react-carousel"

import "./CarouselAdvertising.css";

import AdsMousesTecladosLogitech from './imgs/AdsMousesTecladosLogitech.png'
import AdsMousesTecladosRedDragon from './imgs/AdsMousesTecladosRedDragon.png'

const Carousel = () => {

  let settings = {
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    swipe: false,
    pauseOnHover: false,
  }

  let items = [
    { id: 1, alt: 'AdvertisingBanner', img: AdsMousesTecladosLogitech },
    { id: 2, alt: 'AdvertisingBanner', img: AdsMousesTecladosRedDragon },
    { id: 3, alt: 'AdvertisingBanner', img: AdsMousesTecladosLogitech },
    { id: 4, alt: 'AdvertisingBanner', img: AdsMousesTecladosRedDragon },
  ]

  return (
    <div>
      <div className="backgroundAdvertising"></div>

      <div className="carrouselContainer">
        <Slider {...settings}>
          {items.map(item =>
            <Link
              to="scroll"
              smooth={true}
              duration={500}
              key={item.id}
            >
              <div key={item.id}><img className="carrouselAdvertisingImg" alt={item.alt} src={item.img} /></div>
            </Link>)}
        </Slider>
      </div>

    </div>

  );
}

export default Carousel;