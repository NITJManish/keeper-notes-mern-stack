import React from 'react'
import './style.css';
const Footer = () => {
    const currYear=new Date().getFullYear();
  return (
   <footer>
    <p>copyright @ {currYear}</p>
   </footer>
  )
}

export default Footer
