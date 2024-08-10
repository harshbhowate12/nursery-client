import axios from 'axios'
import React,{useEffect, useState} from 'react'
import toast, {Toaster} from 'react-hot-toast'
import { useParams } from 'react-router-dom'

function UpdatePlant() {
    const {ID}=useParams()

    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")

    const updatePlant= async()=>{
        const response=await axios.put(`${process.env.REACT_APP_API_URL}/plants/${ID}`,{
            name:name,
            price:price,
            image:image,
            description:description
        })   
        toast.success(response.data.message)
    }

    const loadPlant=async(ID)=>{
        if(!ID){
            return
        }
        const response=await axios.get(`${process.env.REACT_APP_API_URL}/plants/${ID}`)

        const {name,price,image,description}=response.data.data

        setName(name)
        setPrice(price)
        setImage(image)
        setDescription(description)
    }

   useEffect(()=>{
      loadPlant(ID)
   },[ID])
  return (
    <div>
        <h1>Update Plant</h1>
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

            <button type='button' onClick={updatePlant} className='add-btn'>update Plant</button>
        </form>
        <Toaster/>
    </div>
  )
}

export default UpdatePlant