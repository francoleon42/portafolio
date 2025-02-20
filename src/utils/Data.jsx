

import Certificate1 from '../assets/img/imgCertificados/certificate-1.jpeg';
import Certificate2 from '../assets/img/imgCertificados/certificate-2.jpeg';
import Certificate3 from '../assets/img/imgCertificados/certificate-3.jpeg';
import Certificate4 from '../assets/img/imgCertificados/certificate-4.jpeg';

import imgAbout from "../assets/img/imgPersonal/imgAbout.jpeg"
import imgHome from "../assets/img/imgPersonal/imgHome.jpeg"

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

import { FaExternalLinkAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";


import DataProjects from './DataProjects';
import DataSkills from './DataSkills';
import  cv from  '../assets/pdf/cv.pdf'


export const projects = DataProjects;
export const skills = DataSkills;

export const fotoHome = imgHome;
export const fotoAbout = imgAbout;
export const CV = cv;



export const secciones = [
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
    icon: <IoIosMail />,
  },
  {
    id: 3,
    path: 'https://www.linkedin.com/in/franco-leon-ba73552a6/',
    title: 'Visitar el perfil de Franco Costantini en Linkedin',
    icon: <FaLinkedinIn />,
  },
  {
    id: 4,
    path: 'https://api.whatsapp.com/send?phone=541157179268',
    title: 'Enviale un whatsapp a Franco Costantini',
    icon: <IoLogoWhatsapp />,
  },
  {
    id: 5,
    path: 'https://github.com/francoleon42',
    title: 'Visitar el perfil de Franco Costantini en GitLab',
    icon: <FaGithub />,
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

