import React from 'react'

import TopBarInfo from '../components/Header/TopBarInfo.jsx';
import Header from '../components/Header/Header.jsx';
import LoginSiginUp from '../components/Login/LoginSiginUp'

import Footer from '../components/Footer/Footer.jsx';


const Login = () => {
  return (
    <div>
      <TopBarInfo />
      <Header />
      <br/>
      <LoginSiginUp />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Login
