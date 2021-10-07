import React from 'react'
import './CardCategory.css'

const CardCategory = ({
  title,
  className = '',
  imageSrc,
  altText =  '' 
}) => {
  return (
    <div className={`categoryCard ${className}`} >
      <img src={imageSrc} alt={altText} />
      <div className="cardTitle">
        {title}
      </div>
    </div>
  )
}

export default CardCategory
