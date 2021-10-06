import React from 'react'
import './HomeCategoriesSession.css'

const HomeCategories = (props) => {
  return (
    <div className="limitPageWidth">
      <section className="homeCategory">
        {props.title}
        <span>{props.more}</span>
      </section>
    </div>
  )
}

export default HomeCategories
