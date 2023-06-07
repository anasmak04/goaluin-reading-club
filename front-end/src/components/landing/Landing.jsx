import React from 'react'
import "./style.css"
import pictureItem from "../../assets/item.png"
function Landing() {
  return (
    <div className="container">
      <div className="parent-box">

        <div className="box-content">
        <p className='title'>Joining The <br /> Reading club</p>
        <button className="btn">GET STARTED</button>

        </div>

        <div className="box-picture">
          <img src={pictureItem} alt="itemPicture" />
        </div>

      </div>
    </div>
  )
}

export default Landing