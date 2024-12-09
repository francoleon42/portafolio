import React from 'react'
import { networks } from '../../utils/Data'
import './contact.css'


const Contact = () => {
  return (
    <footer id='contact' className='contact '>
      <div className="contact__content grid">
        <h2>¡Hablemos!</h2>
        <ul className='contact__container'>
          {networks.map(({icon, path, title}, index) => {
            return (
              <li key={index} className='network'>
                <a 
                  href={path}
                  title={title}
                  target='_blank'
				  rel="noreferrer"
                >{icon}</a>
              </li>
            )
          })}
        </ul>
        <small className='footer'>&copy;<b>Franco León Costantini</b> - Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Contact

/**
 *     
 */
