import React, { useEffect, useState } from 'react';
import Asciidoctor from 'asciidoctor';
import { useParams, useNavigate } from 'react-router-dom';
import './adocRenderer.css'; // Asegúrate de que el archivo esté en la misma carpeta


const asciidoctor = Asciidoctor();

const AdocRenderer = () => {
  const { adocPath } = useParams();
  const [htmlContent, setHtmlContent] = useState('Cargando...');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(adocPath)

  useEffect(() => {
    const fetchAdoc = async () => {
      try {
        const response = await fetch(`/portafolio/adocs/${adocPath}`); // Ruta al archivo en `public/`
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo AsciiDoc.');
        }
        const adocContent = await response.text();
        const html = asciidoctor.convert(adocContent);
        setHtmlContent(html);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAdoc();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>

      <header className="adoc-header">
        <button onClick={() => navigate('/')} className="back-button"> Volver al menu </button>
      </header>
      <div

        className="adoc-container"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default AdocRenderer;
