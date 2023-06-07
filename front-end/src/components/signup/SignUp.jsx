import React from 'react'
import "./style.css"

function SignUp() {
  return (
    <div className="signup-container">
      
    <p>welcome back</p>

    <form>
      <input type="text"  placeholder='name'/>
      <input type="text"  placeholder='jhon@example.com'/>
      <input type="password"  placeholder='password'/>
      <button>login</button>
    </form>

  </div>
  )
}

export default SignUp