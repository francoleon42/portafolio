import React from 'react'
import {FaDownload} from 'react-icons/fa'
import './about.css'
import  {CV} from "../../utils/Data" 
// import {fotoAbout} from "../../utils/Data" 
import { DataAbout } from "../../utils/DataAbout&Brain"

const About = () => {
  return (
    <section id='about' className='about container'>
      <div className='about__content grid'>
        <div className='about__info'>
          <h2 className='about__title'>Sobre <span>Mi</span></h2>
          <div className="about__description">
            <p>{DataAbout.presentacion}</p>
            <p>{DataAbout.textoUno}</p>
            <p>{DataAbout.textoDos}</p>
            <p>{DataAbout.textoTres}</p>
          </div>
          <a href={CV} download='Franco_Leon_Costantini_CV.pdf' className="btn">Descargar CV<span><FaDownload/></span></a>
        </div>
        {/* <div className="about__img">
          <div className='border-img'>
            <img src={fotoAbout} alt="img__profile2" className='about__profile' loading="lazy" />
          </div>
        </div> */}
      </div>
    </section>
          
  )
}

export default About