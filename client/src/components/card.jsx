import React from 'react'
import Mouse from "../Assets/mouses.jpg"
import Keyboard from "../Assets/Keyboard.jpg"
import { useState } from "react"

const Card = (props) => {

  const cards = [
    {
      img : "",
      category : "mouse",
      price : "Rp.200.000",
      stock : 600
    },
    {
      img : "",
      category : "keyboard",
      price : "Rp.400.000",
      stock : 300
    },
    {
      img : "",
      category : "doll",
      price : "Rp.100.000",
      stock : 800
    }
  ]

  return (
    <div>
      <div className="text" style={{marginTop : '70px', marginLeft : '30px'}}>
          <h1 style={{color : 'rgba(208, 21, 62, 0.8)', fontSize : '20px'}}>Product</h1>
        </div>

      <div className="All" style={{display : 'flex', flexWrap : 'wrap'}}>

        {cards.map((value)=>{
          return <div className="card1" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Mouse} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>{value.category}</h1>
            <p style={{color : 'white', fontSize : '10px'}}>{value.price}</p>
            <p style={{color : 'white', fontSize : '10px'}}>{value.stock}</p>
          </div>
        </div>
        })}

      </div>

    </div>
  )
}

export default Card;