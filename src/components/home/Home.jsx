import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-scroll';
import './home.css';
import {fotoHome} from "../../utils/Data" 

const Home = () => {
  return (
    <section id='home' className='banner__wrapper grid'>
      <div className="home__img">
        <img src={fotoHome} alt="" className='home__profile' loading="lazy" />
      </div>

      <div className="home__content">
        <div className='home__text'>
          <h1>
            <span>Franco</span> Costantini
          </h1>
          <h2 className="banner__job">Desarrollador Web</h2>
          <div className="home__button">
          <Link 
            to='about' 
            className='btn'
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}   
          >
            ¡Conoceme!
            <span><FaArrowDown/></span>
          </Link>
        </div>
        </div>
        

      </div>
    </section>
  )
}

export default Home