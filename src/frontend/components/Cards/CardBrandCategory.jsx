import React from 'react'
import './CardBrandCategory.css'

const CardBrandCategory = ({
  title,
  className = '',
  imageSrc = '',
  altText = '',
  category,
}) => {

  return (
    <div>
      <div category={category} className={`card ${className}`} >
        <img src={imageSrc} alt={altText} />
        <div className="cardTitle" >{title}</div>
      </div>
    </div>
  )
}

export default CardBrandCategory
