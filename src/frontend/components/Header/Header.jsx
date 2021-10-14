import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

import Logo from './LogoTechShop.png'
import SearchBar from './SearchBar.jsx'
import User from './UserInfo/User.jsx'
import Favorites from './UserInfo/Favorites';
import Cart from './UserInfo/Cart.jsx'



export default function TopBar() {
  return (
    <div >
      <div className="HeaderUserInfo">
        <Link className="link" to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <SearchBar />
        <div className="userInfos">
          <User name="Nycolas" />
          <Favorites amount="2" />
          <Cart amount={1550.00} />
        </div>
      </div>
      <hr className="linha" />
    </div>
  );
}