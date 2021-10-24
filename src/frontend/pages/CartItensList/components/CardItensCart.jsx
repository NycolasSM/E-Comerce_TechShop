import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './CardItensCart.css'

import { faCalendarTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardItensCart = ({
  id,
  title,
  value,
  img
}) => {

  const [userId, setUserId] = useState("0")

  useEffect(() => {
    fetch(`http://localhost:3001/pageData/`)
      .then(resp => resp.json())
      .then(data => {
        setUserId(data[0].userId)
      })

  }, [userId])


  // function removeItemToCart(id) {
  //   let formCart = {}
  //   axios.get(`http://localhost:3001/users/${userId}`)
  //     .then(resp => {
  //       formCart = resp.data
  //       // formCart.cart[id] = {}
  //       axios.put(`http://localhost:3001/users/${userId}`, formCart)
  //         .catch(error => console.log(error))
  //         .then(() => window.location.reload())
  //     })
  // }

  let valueConverted = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return (
    <div className="cardItensCartContainer">
      <div className="cardItensCart">
        <Link className="link" to={`/product/${id}`}>
          <div className="cardItensCartInfo">
            <img className="cardItensCartImg" src={img} alt="" />
            <div>id: {id}</div>
            <div>Nome: {title}</div>
            <div>valor: {valueConverted}</div>
          </div>
        </Link>
      </div>
      <div className="cardItensCartButtons">
      {/* onClick={() => removeItemToCart(id) */}
        <FontAwesomeIcon icon={faCalendarTimes} />
      </div>
    </div >

  )
}

export default CardItensCart
