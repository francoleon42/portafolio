import imgGifa from '../assets/img/imgGifa.jpeg';
import imgIspeak from '../assets/img/imgIspeak.jpeg';
import imgGestorHeladeria from '../assets/img/imgGestorHeladeria.jpeg';
import imgGestorDeTareas from '../assets/img/imgGestorDeTareas.jpeg';
import imgClusteringHumano from '../assets/img/imgClusteringHumano.jpeg';
import imgAnimeapp from '../assets/img/imgAnimeapp.jpeg';

import { FaExternalLinkAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

import { FaJava, FaReact, FaGit, FaLinux, FaHtml5, FaCss3Alt, FaProjectDiagram } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiSequelize, SiJavascript, SiPostgresql, SiMysql, SiSpring, SiPostman, SiJunit5, SiCypress, SiHibernate, SiSecurityscorecard, SiSpringsecurity } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";

import { DiMysql } from 'react-icons/di';
import { GiH2O } from 'react-icons/gi';
import { TbH2 } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';

export const DataProjects = [
    {
      id: 1,
      img: imgGifa,
      title: 'GIFA - Web',
      
      
      skillsBackend: [
  
        { type: <FaJava />,name:"Java" },
        { type: <SiSpring /> ,name:"Spring"},
        { type: <SiMysql /> ,name:"Mysql"},
        { type: <SiHibernate /> ,name:"Hibernate"},
        { type: <SiSpringsecurity /> ,name:"Sring security"},
        { type: <SiJunit5 /> ,name:"Junit5"},
        { type: <SiPostman />,name:"Postman" },
      ],
  
      skillsFrontend: [
        { type: <FaReact /> ,name:"React"},
        { type: <SiJavascript /> ,name:"Javascript"}
      ],
  
      links: [
        {
          id: 1,
          titulo: "Code-back",
          icon: <FaGithub />,
          path: 'https://github.com/francoleon42/gifa-back'
        },
        {
          id: 2,
          titulo: "Code-front",
          icon: <FaGithub />,
          path: 'https://github.com/francoleon42/gifa-front'
        },
        {
          id: 3,
          titulo: "Explicacion",
          icon: <MdLibraryBooks />,
          path: "gifa.adoc"
        }
      ]
    },
  //////////
  /////////
    {
      id: 2,
      img: imgIspeak,
      title: 'I speak - Web',
      skillsBackend: [
        { type: <FaJava />,name:"Java" },
        { type: <SiSpring /> ,name:"Spring"},
        { type: <SiPostman /> ,name:"Postman"},
        { type: <GrMysql /> ,name:"Mysql"},
        { type: <SiHibernate /> ,name:"Hibernate"},
        { type: <SiSpringsecurity /> ,name:"Sring security"},
      ],
      skillsFrontend: [
        { type: <FaHtml5 /> ,name:"Html5"},
        { type: <FaCss3Alt /> ,name:"CSS"}
        
      ],
      links:[
        {
          id: 1,
          titulo:"Codigo-FullStack",
          icon: <FaGithub />,
          path: 'https://github.com/francoleon42/I-speak'
        },
      ]
    },

    //////////
    //////////

    {
      id: 5,
      img: imgGestorHeladeria,
      title: 'Control de stock para heladeria',
      
      
      skillsBackend: [
          { type: <SiNestjs /> , name:"Nestjs"},
          { type: <SiTypescript />,name:"Typescript" },
          { type: <SiPostgresql /> ,name:"Postgresql"},
          { type: <SiSequelize /> ,name:"Sequelize"},
        
      ],
      skillsFrontend: [
        { type: <FaReact />,name:"React" },
        { type: <SiJavascript />,name:"JavaScript" },
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          titulo:"code-backend",
          path: 'https://github.com/francoleon42/heladeria-api'
        },
        {
          id: 2,
          titulo:"code-front",
          icon: <FaExternalLinkAlt />,
          path: 'https://francoleon42.github.io/heladeriaFront/'
        }
      ],
      
      
      
    },

    /////////////
    ////////////

    {
      id: 3,
      img: imgGestorDeTareas,
      title: 'Gestor de tareas - Web',
      skillsBackend: [
        { type: <FaJava />,name:"Java" },
        { type: <SiSpring />,name:"Spring" },
        { type: <SiPostgresql />,name:"Postgresql" },
        { type: <SiHibernate />,name:"Hibernate" },
        { type: <SiSpringsecurity/> , name:"Spring Security" },
        { type: <SiJunit5 /> ,name:"Junit5"},
        { type: <SiPostman />, name:"Postman"},
      ],
      skillsFrontend: [
        { type: <FaReact />, name:"React" },
        { type: <SiJavascript />,name:"JavaScript" },
        { type: <SiCypress />,name:"Cypress" }
      ],
      links:[
        {
          id: 1,
          titulo:"codigo-?",
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/gestorparatareas'
        }
      ]
    },

    //////////
    //////////

    {
      id: 4,
      img: imgClusteringHumano,
      title: 'Clustering Humano - Desktop',
      
      skillsBackend: [
        { type: <FaJava />, name:"Java" },
        { type: <FaProjectDiagram />, name:"Alg.Grafos"}
        
      ],
      skillsFrontend: [
      ],
      links: [
        {
          id: 1,
          titulo:"codigo-fullStack",
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/clustering-humano/-/tree/master?ref_type=heads'
        },
      ]
    },

    ///////////
    //////////

    {
      id: 5,
      img: imgAnimeapp,
      title: 'AnimeApp',
      skillsBackend: [
      ],
      skillsFrontend: [
        { type: <FaReact />, name: "React" },
        { type: <SiJavascript />, name: "JavaScript" },
        { type: <SiCypress />, name: "Cypress" }
      ],
      links: [
        {
          id: 1,
          titulo:"code-fullStack",
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/animeapp'
        },
        {
          id: 2,
          titulo:"deploy",
          icon: <FaExternalLinkAlt />,
          path: 'https://frankleon42.gitlab.io/animeapp/'
        }
      ],
    },
  
  ]

  export default DataProjects;