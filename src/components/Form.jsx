import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const [form, setForm] = useState({});
    
    const handleChange =(e)=>{
        
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
       // console.log(JSON.stringify(form));
    }
    const navigate = useNavigate();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:8080/form',{
            method:'POST',
            body : JSON.stringify(form),
            headers :{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json();
        console.log(data);
        navigate('/');
    }
  return (
    <div>
      <div class="form-container">
    <h1>Create New Item</h1>
    <form class="form" onSubmit={handleSubmit}>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" placeholder="Enter title" onChange={handleChange}/>

      <label for="description">Description</label>
      <textarea id="description" name="description" placeholder="Enter description" rows="4" onChange={handleChange}></textarea>
     
      <label for="image">Catagory</label>
      <input type="text" id="cat" name="cat" placeholder="Enter catagory" onChange={handleChange}/>
      
      <label for="image">Image URL</label>
      <input type="text" id="image" name="img" placeholder="Enter image URL" onChange={handleChange}/>
      
     

      

      <button type="submit">Submit</button>
    </form>
  </div>

    </div>
  )
}

export default Form
