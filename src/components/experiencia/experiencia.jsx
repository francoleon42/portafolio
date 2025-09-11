import "./experiencia.css";
import { DataExperiencia } from "../../utils/DataExperiencia"

export default function Experiencia() {
    return (
        <div id="experiencia" class="experience-section">
            <h2>Experiencia Profesional</h2>

            {DataExperiencia.map((exp, index) => (
                <div className="job" key={index}>
                    <div className="titulo">
                        <h3>{exp.titulo}</h3>
                        <p className="date">{exp.fecha}</p>
                    </div>
                    <p className="company">{exp.empresa}</p>

                    <ul className="responsibilities">
                        {exp.responsabilidades.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>

    );
}

