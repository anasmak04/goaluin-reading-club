import React, { useState } from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""

  })

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/api/user/login", { email, password },
        {headers : {'Content-Type': 'application/json'}}   
      )
      localStorage.setItem("token", res.data.accessToken)
      console.log(localStorage.getItem("token"))
      navigate("/Home");
    }
    catch (err) {
      console.log(err);
    }

   
  }

 
  return (
    <div className="signin-container">
      <p>welcome back</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="email" value={email} type="text" placeholder='jhon@example.com' />
        <input onChange={handleChange} name="password" value={password} type="password" placeholder='password' />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login