import "./cerebroDigital.css";
import segundoCerebroImg from "../../assets/img/segundoCerebro.jpeg";
import {DataCerebroDigital} from "./../../utils/DataAbout&Brain";

export default function CerebroDigital() {
  return (
    <div id="cerebroDigital" className="card-container">
      <div className="card">
        <img
          className="card-image"
          alt="Relaxing app background"
          src= {segundoCerebroImg}
        />
        <div className="card-content">
          <p className="card-subtitle">{DataCerebroDigital.titulo}</p>
          <h4 className="card-title">{DataCerebroDigital.texto}</h4>
          <a href={DataCerebroDigital.repositorio} class="btn btn-primary">{DataCerebroDigital.textoRepo}</a>
        </div>
      </div>
    </div>
  );
}

