import "../CerebroDigital/cerebroDigital.css";
import segundoCerebroImg from "../../assets/img/segundoCerebro.jpeg"

export default function CerebroDigital() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          className="card-image"
          alt="Relaxing app background"
          src= {segundoCerebroImg}
        />
        <div className="card-content">
          <p className="card-subtitle">Cerebro Digital</p>
          <h4 className="card-title">Bienvenido a mi "Cerebro Digital", donde he recopilado las notas y aprendizajes clave que me han permitido construir mi perfil como desarrollador web. Aquí encontrarás tanto los conceptos fundamentales como las herramientas avanzadas que he adquirido y utilizado en mis proyectos. 
  Cada idea y cada técnica que comparto en este espacio ha sido aplicada para resolver problemas reales, optimizar procesos y crear soluciones efectivas en el desarrollo web. Este repositorio de conocimiento refleja cómo cada línea de código, cada patrón de diseño y cada práctica de desarrollo ha fortalecido mi habilidad para enfrentar retos tecnológicos y mejorar la experiencia del usuario.</h4>
          <a href="https://github.com/francoleon42/brain-desarrollo" class="btn btn-primary">View brain </a>
        </div>
      </div>
    </div>
  );
}

