import React from 'react'
import './Favorites.css'

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorites = (props) => {

  let favoriteAmounts = props.amount
  
  return (
    <div className="favoriteContainer">
      <FontAwesomeIcon className="favoriteHeaderIcon" icon={faHeart} />
      <span className={favoriteAmounts ? "favoriteAmouts" : " "}>{favoriteAmounts}</span>
    </div>
  )
}

export default Favorites
