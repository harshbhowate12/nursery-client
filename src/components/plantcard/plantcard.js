import React from 'react'
import "./plantcard.css"

function PlantCard({_id,name,price,image,description}) {
  return (
    <div className='plant-container'>
        <h1 className='palnt-name'>{name}</h1>
        <p>{price}</p>       
    </div>
  )
}

export default PlantCard