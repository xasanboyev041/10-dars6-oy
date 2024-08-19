import React from 'react'
import Footerimg from "../../images/footer.png";
import "./Footer.css"

const Footer = () => {
  return (
    <>
     <div className="container">
      <img className='footer-img' src={Footerimg} alt="" />
     </div>
    </>
  )
}

export default Footer