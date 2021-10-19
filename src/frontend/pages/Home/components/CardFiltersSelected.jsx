import React from 'react'

import './CardFiltersSelected.css'

const CardFiltersSelected = ({
  category = '',
  brand = '',
  removeCategoryFilter,
  removeBrandFilter
}) => {


  function isSetCategory() {
    if (category === '') {
      return
    } else {
      return (
        <button onClick={() => removeCategoryFilter()} className="filterSelected">
          <span>{category}</span>
        </button>
      )
    }
  }

  function isSetBrand() {
    if (brand === '') {
      return
    } else {
      return (
        <button onClick={() => removeBrandFilter()} className="filterSelected">
          <span>{brand}</span>
        </button>
      )
    }
  }


  return (
    <div className="limitPageWidth">
      <div className="cardFiltersSelected">
        {isSetCategory()}
        {isSetBrand()}
      </div>
    </div>
  )
}

export default CardFiltersSelected
