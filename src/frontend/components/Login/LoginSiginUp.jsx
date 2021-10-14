import React from 'react'

import './LoginSiginUp.css'

import Login from './LoginForm'
import Register from './SiginUpForm'

const LoginSiginUp = () => {
  return (
    <div className="limitFormWidth">
      <div className="LoginSingUp">
        <Login />
        <div className="verticalLine"></div>
        <Register />
      </div>
    </div>
  )
}

export default LoginSiginUp
