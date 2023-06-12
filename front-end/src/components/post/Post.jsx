import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import "./style.css"
import axios from 'axios';
function Post() {

  let navigate = useNavigate();


  const [post , setPost] = useState({
    title : "",
    description :  ""
  });

  const {title,description} = post;


  const handleChange = (e) => {
    setPost({...post,[e.target.name]:e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault()
  try{
      await axios.post("http://localhost:7000/api/user/post",{title,description})
        navigate('/Home')
    }
  catch(err){
      console.log(err)
  }
}




  return (
    <div className="signin-container">
      <p>New Post</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" value={title} type="text" placeholder='enter a title'/>
        <textarea onChange={handleChange} name="description" value={description} cols="30" rows="10" placeholder='enter a description'></textarea>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default Post