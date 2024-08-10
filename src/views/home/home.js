import React, { useEffect, useState } from 'react'
import "./home.css"
import PlantCard from '../../components/plantcard/plantcard'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import AddImg from "./add.png"
import { Link } from 'react-router-dom'

function Home() {
    const [plants, setPlants]=useState([])

    const loadPlants= async()=>{
        toast.loading("Loading Plants")
        const response=await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

        toast.dismiss()
        toast.success("Plants Loaded successfully")
        setPlants(response.data.data)
    }

    useEffect(()=>{
        loadPlants()
    },[])
  return (
    <div className='platns-container'>
        <h1>Plants</h1>
        {
            plants.map((plant,i)=>{
                const{
                    _id,
                    name,
                    price,
                    image,
                    description
                }=plant
                return(
                    <PlantCard 
                       key={i}
                      _id={_id}
                      name={name}
                      price={price}
                      image={image}
                      description={description}
                      loadPlants={loadPlants}
                    />
                )
            })
        }
        <Link to="/add">
            <img src={AddImg} className='add-img' alt='add'/>
        </Link>
        <Toaster/>
    </div>
  )
}

export default Home