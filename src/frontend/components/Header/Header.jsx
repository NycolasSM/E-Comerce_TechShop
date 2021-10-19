import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

import Logo from './LogoTechShop.png'
import SearchBar from './SearchBar.jsx'
import User from './UserInfo/User.jsx'
import Favorites from './UserInfo/Favorites';
import Cart from './UserInfo/Cart.jsx'


export default function TopBar() {

  const [userName, setUserName] = useState("")
  const [cartTotal, setCartTotal] = useState(0)
  const [favoritesAmount, setFavoritesAmount] = useState()

  // ?_limit=6 ---- para aplicar um limite de itens na requisição

  useEffect(() => {
    fetch("http://localhost:3001/pageData/")
      .then(resp => resp.json())
      .then(data => {
        setUserName(data[0].name)
        setCartTotal(data[0].cart.map(a => a.value).reduce( (accum, curr) => accum + curr, 0 ))
        setFavoritesAmount(data[0].favoriteItens.length)
      })
  }, [])

  // caso nao esteja logado retornar no banco de daos "name": "notLoggedIn",

  return (
    <div >
      <div className="HeaderUserInfo">
        <Link className="link" to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <SearchBar />
        <div className="userInfos">
          <User name={userName} />
          <Favorites amount={favoritesAmount} />
          <Cart amount={cartTotal} />
        </div>
      </div>
      <hr className="linha" />
    </div>
  );
}