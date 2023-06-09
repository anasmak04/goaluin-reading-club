import React from 'react'
import "./style.css"
function Login() {
  return (
    <div className="signin-container">
      
      <p>welcome back</p>

      <form>
        <input type="text"  placeholder='jhon@example.com'/>
        <input type="password"  placeholder='password'/>
        <button>login</button>
      </form>

    </div>
  )
}

export default Login