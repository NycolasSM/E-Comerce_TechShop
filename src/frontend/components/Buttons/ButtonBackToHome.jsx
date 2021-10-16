import React from 'react'
import { Link } from 'react-router-dom';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './ButtonBackToHome.css'

const ButtonBackToHome = () => {
  return (
    <div className=" limitPageWidth">
      <button className="buttonBackToHome">
        <Link className="link" to="/">
          <FontAwesomeIcon className="userHeaderIcon" icon={faHome} />
          Voltar
        </Link>
      </button>
    </div>
  )
}

export default ButtonBackToHome
