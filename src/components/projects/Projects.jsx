import React from 'react'
import { projects } from '../../utils/Data'
import './projects.css'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id='projects' className='projects container'>
      <div className='projects__content grid'>
        <h2>Proyectos personales</h2>

        <div className="card__container grid">
          {projects.map(({ img, title, skillsBackend, skillsFrontend, links }, index) => {
            return (
              <article className="card__article" key={index}>
                <img src={img} alt="img" className='card__img' />
                <div className="card__data">
                  <p className='card__title'>{title}</p>

                  {skillsBackend.length > 0 && (
                    <div className='card__icons skills'>
                      <h4 className='card_titulo_tipo_skill'>Backend:</h4>
                      <span></span>
                      {skillsBackend.map((element, index) => (
                          <div key={index} className="skill-item">
                          <div className="skill-type">{element.type}</div>
                          <small className="skill-text">{element.name}</small>
                        </div>
                      ))}
                    </div>
                  )}

                  {skillsFrontend.length > 0 && (
                    <div className='card__icons skills'>
                      <h4 className='card_titulo_tipo_skill'>Frontend:</h4>
                      <span></span>
                      {skillsFrontend.map((element, index) => (
                         <div key={index} className="skill-item">
                         <div className="skill-type">{element.type}</div>
                         <small className="skill-text">{element.name}</small>
                       </div>
                      ))}
                    </div>
                  )}

                  {links.length > 0 && (
                    <div className="card__icons">
                      {links.map(({ icon, path, titulo }, index) => (
                        <div key={index}>
                          {/* Verifica si el path termina en .adoc antes de renderizar el enlace */}
                          {path.endsWith('.adoc') ? (
                            <Link className="icon__link" to={`render/${path}`}>
                              {icon}
                            </Link>
                            // <a className="icon__link" href={`render/${path}`} >{icon}</a>
                          ) : (
                            <a className='icon__link' href={path}>{icon}</a>
                            // Si no es un archivo .adoc, solo muestra el título sin enlace
                          )}

                          <p className="icon_link_titulo">{titulo}</p>
                        </div>
                      ))}
                    </div>
                  )}


                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
