import React from 'react'
import "./style.css"
import pictureItem from "../../assets/item.png"
function Landing() {
  return (
    <div class="container2">
      <div class="content">
        <p>joining the <br /> reading club</p>
        <button>get started</button>
      </div>
      <div class="image">
        <img src={pictureItem} alt="picture item" />
      </div>
    </div>
  )
}

export default Landing