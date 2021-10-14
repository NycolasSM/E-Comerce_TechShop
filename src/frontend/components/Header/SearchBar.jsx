import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.css'

const searchBar = () => {
  return (
    <div>
      <div className="searchProduct">
        <input className="searchField" type="text" placeholder="Pesquise pelo produto" />
        <button className="searchIcon"><FontAwesomeIcon icon={faSearch} />{" "}</button>
      </div>
    </div>
  )
}

export default searchBar
