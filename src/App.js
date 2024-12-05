import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Asegúrate de importar correctamente
import NavBar from "./components/navBar/NavBar";
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";
import Footer from './components/contact/Contact'
import Whatsapp from "./components/messages/whatsapp";
import Themes from "./components/themes/Themes";
import CerebroDigital from "./components/cerebroDigital/cerebroDigital"
import Experiencia from "./components/experiencia/experiencia";
import AdocRenderer from "./components/projects/adocRenderer";


function App() {
  return (
    <Router basename="/portafolio">
      <div className="app"> {/* Clase para los estilos generales de la aplicación */}

        <main className="sections"> {/* Clase para estilizar las secciones */}
          <Routes>
            {/* Ruta raíz "/" */}
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <Home />
                  <About />
                  <CerebroDigital />
                  <Experiencia />
                  <Projects />
                  <Skills />
                  <Certificates />
                  <Footer />
                  <Whatsapp />
                  <Themes />
                </>
              }
            />

            <Route path="/render/:adocPath" element={<AdocRenderer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

