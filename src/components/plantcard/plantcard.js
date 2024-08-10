import React from 'react'
import "./plantcard.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function PlantCard({_id,name,price,image,description,loadPlants}) {

  const dltPlant=async(plantID)=>{
    const response=await axios.delete(`${process.env.REACT_APP_API_URL}/plants/${plantID}`)
    toast.success(response.data.message)

    loadPlants()
  }
  return (
    <div className='plant-container'>
        <h1 className='palnt-name'>{name}</h1>
        <p>{price}</p>       

        <Link to={`/update/${_id}`} className='edit-btn'>Edit</Link>
        <button 
        type='button'
        className='dlt-btn'
        onClick={()=>{
           dltPlant(_id)
        }}
        >Delete</button>
        <Toaster/>
    </div>
  )
}

export default PlantCard