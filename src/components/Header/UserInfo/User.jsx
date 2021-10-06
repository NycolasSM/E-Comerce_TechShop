import React from 'react'
import './User.css'

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = (props) => {

  let userName = props.name

  return (
    <div className="userContainer">
      <FontAwesomeIcon className="userHeaderIcon" icon={faUser} />
      <span className="userName">{userName ? userName : "Faça o Login"}</span>
    </div>
  )
}

export default User
