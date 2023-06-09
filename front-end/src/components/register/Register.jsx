import React, { useState } from 'react'
import "./style.css"

import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Register() {
  let navigate = useNavigate()


  const [user,setUser] = useState({
    username: "",
    email: "",
    password : ""
  })

  const {username,email,password} = user;

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        await axios.post("http://localhost:7000/api/user/register",{username,email,password},
          {headers : {'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'}}        
        )
          navigate('/Login')
      }
    catch(err){
        console.log(err)
    }
}

  return (
    <div className="signup-container">
      
    <p>welcome back</p>

    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="username" value={username} type="text"  placeholder='name'/>
      <input onChange={handleChange} name="email" value={email}  type="text"  placeholder='jhon@example.com'/>
      <input onChange={handleChange} name="password" value={password}  type="password"  placeholder='password'/>
      <button type='submit'>register</button>
    </form>

  </div>
  )
}

export default Register