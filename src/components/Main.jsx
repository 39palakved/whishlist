import React from 'react'
import './style.css'
import { Navigate, useNavigate } from 'react-router-dom'
import Viewpage from './Viewpage';

const Main = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
       navigate('/form') ;  
    }
  return (
    <div>
      <div class="myclass">
        <div class="mycontainer">
        <h1 class="heading1">Wishlist</h1>
        <button class="add-button" onClick={handleClick}>Add Item</button>
      
      </div>
      <div>
      <Viewpage/>
      </div>
      </div>
      


    </div>
  )
}

export default Main
