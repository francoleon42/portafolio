import "./App.css";
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
const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <main className="sections">
        <Home/>
        <About/>
        <CerebroDigital/>
        <Experiencia/>
        <Projects/>
        <Skills/>
        <Certificates/>
        <Footer/>
        <Whatsapp/>
        <Themes/>
      </main>
    </div>
  )
}

export default App;
