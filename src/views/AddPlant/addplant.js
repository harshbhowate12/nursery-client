import React, { useState } from 'react'
import "./addplant.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {

    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")

    const addPlant= async()=>{
        if(!name || !price || !image || !description){
            toast.error("Please enter all details")

            return
        }

        toast.loading("Adding Plant...")
        const response= await axios.post(`${process.env.REACT_APP_API_URL}/plants`,{
            name:name,
            price:price,
            image:image,
            description:description
        })
        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setPrice("")
        setImage("")
        setDescription("")
    }

  return (
    <div className='add-container'>
        <h1 className='add-head'>Add Your Plant Information..</h1>

        <form>
            <input 
            type='text'
            placeholder='Enter Plant name..'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='plant-input' 
            />

            <input 
            type='number'
            placeholder='Enter Plant price..'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className='plant-input' 
            />
             
            <input 
            type='text'
            placeholder='Enter Plant description..'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className='plant-input' 
            />

            <input 
            type='text'
            placeholder='Enter Image url..'
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            className='plant-input' 
            />
             <img src={image} className='inp-img' alt=''/>

            <button type='button' onClick={addPlant} className='add-btn'>Add Plant</button>
        </form>

        <Link to="/" className='back-btn'>⬅️Back to Home page</Link>
        <Toaster/>
    </div>
  )
}

export default AddPlant