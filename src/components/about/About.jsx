import React from 'react'
import  CV from  '../../assets/pdf/cv-developer.pdf'
import {FaDownload} from 'react-icons/fa'
import profile2 from '../../assets/img/profile-2.webp'
import './about.css'

const About = () => {
  return (
    <section id='about' className='about container'>
      <div className='about__content grid'>
        <div className='about__info'>
          <h2 className='about__title'>Sobre <span>Mi</span></h2>
          <div className="about__description">
            <p>¡Hola! Soy Franco León Costantini</p>
            <p> recido en Buenos Aires, Argentina.</p>
            <p>Me considero una persona dedicada, entusiasta y curiosa por las tecnologías y
              tambien amante de aprender y resolver problemas.
            </p>
            <p>Cuando no estoy escribiendo líneas de código, probablemente estoy descifrando la lógica de los chistes de programación. ¿Sabías que el 80% de los errores se encuentran entre el teclado y la silla?
            </p>
          </div>
          <a href={CV} download='' className="btn">Descargar CV<span><FaDownload/></span></a>
        </div>
        <div className="about__img">
          <div className='border-img'>
            <img src={profile2} alt="img__profile2" className='about__profile' loading="lazy" />
          </div>
        </div>
      </div>
    </section>
          
  )
}

export default About