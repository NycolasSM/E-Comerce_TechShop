import React from 'react'
import './Favorites.css'
import { Link } from 'react-router-dom';


import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorites = (props) => {

  let favoriteAmounts = props.amount

  return (
    <Link className="link" to="/favoriteItens">
      <div className="favoriteContainer">
        <FontAwesomeIcon className="favoriteHeaderIcon" icon={faHeart} />
        <span className={favoriteAmounts ? "favoriteAmouts" : " "}>{favoriteAmounts ? favoriteAmounts : ""}</span>
      </div>
    </Link>
  )
}

export default Favorites
