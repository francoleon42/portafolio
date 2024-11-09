import "./experiencia.css";

export default function Experiencia() {
    return (
        <div id="experiencia" class="experience-section">
            <h2>Experiencia Profesional</h2>

            <div class="job">
                <div className="titulo">
                    <h3>Profesor de Introducción a la Programación</h3>
                    <p class="company">Universidad Nacional de General Sarmiento (2024-Presente)</p>
                </div>

                <div class="responsibilities">
                    <li>Diseñar y ejecutar actividades prácticas y evaluaciones para fortalecer los conocimientos de los estudiantes.</li>
                    <li>Brindar orientación personalizada a los estudiantes durante el desarrollo de proyectos y ejercicios.</li>
                    <li>Evaluar el progreso de los estudiantes, proporcionando retroalimentación constructiva para mejorar su desempeño.</li>
                </div>
            </div>

            <div class="job">
                <div className="titulo">
                    <h3>Desarrollador Backend</h3>
                    <p class="company">Innovatech Solutions - Buenos Aires (2023-2024)</p>
                </div>

                <div class="responsibilities">
                    <li>Mejoré el rendimiento de las aplicaciones en un 20% mediante optimización de código y análisis de desempeño.</li>
                    <li>Desarrollé y mantuve APIs RESTful para integrar nuevos servicios, aumentando la funcionalidad del sistema.</li>
                    <li>Colaboré con equipos multidisciplinarios utilizando metodologías ágiles, resultando en mayor eficiencia en el desarrollo de nuevas funcionalidades.</li>
                </div>
            </div>

        </div>

    );
}

