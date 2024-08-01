import React from 'react'
import './whatsapp.css'
import { FaWhatsapp } from "react-icons/fa";
const whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=541157179268" className="float" target="_blank" rel="noreferrer noopener">
        <FaWhatsapp className='my-float'/>
    </a>
  )
}

export default whatsapp