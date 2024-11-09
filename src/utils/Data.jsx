import Work1 from '../assets/img/project-1.jpeg';
import Work2 from '../assets/img/project-2.jpeg';
import Work3 from '../assets/img/project-3.jpeg';
import Work4 from '../assets/img/project-4.jpeg';
import Work5 from '../assets/img/project-5.jpeg';

import Certificate1 from '../assets/img/certificate-1.jpeg';
import Certificate2 from '../assets/img/certificate-2.jpeg';
import Certificate3 from '../assets/img/certificate-3.jpeg';
import Certificate4 from '../assets/img/certificate-4.jpeg';

import Theme1 from '../assets/theme/purple.png';
import Theme2 from '../assets/theme/red.png';
import Theme3 from '../assets/theme/blueviolet.png';
import Theme4 from '../assets/theme/blue.png';
import Theme5 from '../assets/theme/goldenrod.png';
import Theme6 from '../assets/theme/magenta.png';
import Theme7 from '../assets/theme/yellowgreen.png';
import Theme8 from '../assets/theme/orange.png';
import Theme9 from '../assets/theme/green.png';
import Theme10 from '../assets/theme/yellow.png';

 

import {  FaExternalLinkAlt,  FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

import { FaJava, FaReact, FaGit, FaLinux , FaHtml5, FaCss3Alt, FaProjectDiagram } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiSequelize , SiJavascript, SiPostgresql, SiMysql, SiSpring, SiPostman, SiJunit5, SiCypress, SiHibernate, SiSecurityscorecard, SiSpringsecurity } from "react-icons/si";
import { DiMysql } from 'react-icons/di';
import { GiH2O } from 'react-icons/gi';
import { TbH2 } from 'react-icons/tb';

export const links = [
  {
    id: 1,
    name: 'Sobre mi',
    section: 'about',
  },
  {
    id: 2,
    name: 'Cerebro digital',
    section: 'cerebroDigital'
  },
  {
    id: 3,
    name: 'Experiencia',
    section: 'experiencia'
  },
  {
    id: 3,
    name: 'Proyectos',
    section: 'projects'
  },
  {
    id: 4,
    name: 'Skills',
    section: 'skills'
  },
  {
    id: 5,
    name: 'Certificaciones',
    section: 'certificate'
  },
  {
    id: 6,
    name: 'Contacto',
    section: 'contact'
  },
  
  
]

export const projects = [
  {
      id: 1,
      img: Work1,
      title: 'Gestor de tareas',
      skills: [
        {type: <FaReact /> },
        {type: <SiJavascript/> },
        {type: <SiCypress/> },
        {type: <FaJava/> },
        {type: <SiSpring/> },
        {type: <SiJunit5/> },
        {type: <SiPostman/> },
        {type: <SiPostgresql/> },
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/gestorparatareas'
        }
      ],
  
  
  },
  {
      id: 2,
      img: Work2,
      title: 'I speak',
      skills: [
        {type: <FaJava/> },
        {type: <SiSpring/> },
        {type: <SiPostman/> },
        {type: <SiPostgresql/> },
        {type: <FaHtml5/> },
        {type: <FaCss3Alt/> }
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/i_speak.git'
        }
      ],
    },
  {
      id: 3,
      img: Work3,
      title: 'AnimeApp',
      skills: [
        {type: <FaReact /> },
        {type: <SiJavascript/> },
        {type: <SiCypress/> }
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/animeapp'
        },
        {
          id: 2,
          icon: <FaExternalLinkAlt/>,
          path: 'https://frankleon42.gitlab.io/animeapp/'
        }
      ],
  },
  {
      id: 4,
      img: Work4,
      title: 'Clustering Humano',
  
      skills: [
        {type: <FaJava />},
        {type: <FaProjectDiagram />}
        
      ],
      links: [
        {
          id: 1,
          icon: <FaGithub />,
          path: 'https://gitlab.com/FrankLeon42/clustering-humano/-/tree/master?ref_type=heads'
        },
      ],
  },
  {
    id: 5,
    img: Work5,
    title: 'Control de stock para heladeria',

    skills: [
      
      {type: <FaReact/>},
      {type: <SiTypescript />},
      {type: <SiNestjs />},
      {type: <SiSequelize />},
      {type: <SiPostgresql />}
    ],
    links: [
      {
        id: 1,
        icon: <FaGithub />,
        path: 'https://github.com/francoleon42/heladeria-api'
      },
      {
        id: 2,
        icon: <FaExternalLinkAlt/>,
        path: 'https://francoleon42.github.io/heladeriaFront/'
      }
    ],

    
    
},
{
  id: 6,
  img: Work5,
  title: 'GIFA',

  skills: [
    
    {type: <FaJava/>},
    {type: <SiSpring />},
    {type: <DiMysql />},
    {type: <SiHibernate />},
    {type: <SiSpringsecurity />}
  ],
  links: [
    {
      id: 1,
      icon: <FaGithub />,
      path: 'https://github.com/francoleon42/heladeria-api'
    },
    {
      id: 2,
      icon: <FaExternalLinkAlt/>,
      path: 'https://francoleon42.github.io/heladeriaFront/'
    }
  ],

  
  
}
  
]

export const skills = [
  {
    id: 1,
    title: 'Java',
    icon: <FaJava className='skill__icon'/>,
  },

  {
    id: 3,
    title: 'Java Script',
    icon: <SiJavascript className='skill__icon'/>,
   
  },
  {
    id: 5,
    title: 'Spring',
    icon: <SiSpring className='skill__icon'/>,
  },
  {
    id: 6,
    title: 'Spring Security',
    icon: <SiSpringsecurity className='skill__icon'/>,
  },
  {
    id: 7,
    title: 'Postman',
    icon: <SiPostman className='skill__icon'/>,
  },
  {
    id: 8,
    title: 'Postgres',
    icon: <SiPostgresql className='skill__icon'/>,
  },
  {
    id: 9,
    title: 'Mysql',
    icon: <SiMysql className='skill__icon'/>,
  },
  {
    id: 10,
    title: 'React',
    icon: <FaReact className='skill__icon'/>,
  },
  {
    id: 11,
    title: 'Cypress',
    icon: <SiCypress className='skill__icon'/>,
  },
  {
    id: 12,
    title: 'Junit',
    icon: <SiJunit5 className='skill__icon'/>,
  },

  {
    id: 13,
    title: 'Git',
    icon: <FaGit className='skill__icon'/>,
  },
  {
    id: 14,
    title: 'Linux',
    icon: <FaLinux className='skill__icon'/>,
  },
  
  
  ]

export const certificates = [
  {
    id: 1,
    img: Certificate1,
    style: 'image_1'
  },

  {
    id: 2,
    img: Certificate2,
    style: 'image_2'
  },

  {
    id: 3,
    img: Certificate3,
    style: 'image_3'
  },

  {
    id: 4,
    img: Certificate4,
    style: 'image_4'
  },

];

export const networks = [
  {
    id: 1,
    path: 'mailto:francoleonadress@gmail.com',
    title: 'Enviar un correo electrónico a Franco León Costantini',
    icon: <IoIosMail/>,
  },
  {
    id: 3,
    path: 'https://www.linkedin.com/in/franco-leon-ba73552a6/',
    title: 'Visitar el perfil de Franco Costantini en Linkedin',
    icon: <FaLinkedinIn/>,
  },
  {
    id: 4,
    path: 'https://api.whatsapp.com/send?phone=541157179268',
    title: 'Enviale un whatsapp a Franco Costantini',
    icon: <IoLogoWhatsapp/>,
  },
  {
    id: 5,
    path: 'https://gitlab.com/FrankLeon42',
    title: 'Visitar el perfil de Franco Costantini en GitLab',
    icon: <FaGithub/>,
  },
]

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

