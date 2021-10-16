import React from "react";
import { Link } from 'react-router-dom';

import Slider from "infinite-react-carousel"

import "./CarouselAdvertising.css";

import AdsMousesTecladosLogitech from './src/AdsMousesTecladosLogitech.png'
import AdsMousesTecladosRedDragon from './src/AdsMousesTecladosRedDragon.png'

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
    { id: 1, alt: 'AdvertisingBanner', link: "./propagandaLogitech", img: AdsMousesTecladosLogitech },
    { id: 2, alt: 'AdvertisingBanner', link: "./propagandaRedDragon", img: AdsMousesTecladosRedDragon },
    { id: 3, alt: 'AdvertisingBanner', link: "./propagandaLogitech", img: AdsMousesTecladosLogitech },
    { id: 4, alt: 'AdvertisingBanner', link: "./propagandaRedDragon", img: AdsMousesTecladosRedDragon },
  ]

  return (
    <div>
      <div className="backgroundAdvertising"></div>
      <div className="carrouselContainer">
        <Slider {...settings}>
          {items.map(item => <div key={item.id}><Link to={item.link}><img className="carrouselAdvertisingImg" alt={item.alt} src={item.img} /></Link></div>)}
        </Slider>
      </div>
    </div>

  );
}

export default Carousel;