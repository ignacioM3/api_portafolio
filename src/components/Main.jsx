import imgPerfil from '../assets/img-CV.png'
import pdfIgnacio from '../assets/Cv-IgnacioMarquez.pdf'
export const Main = () => {
  return (
    <main className='main' id="home">
      <h1 className="mobile-h1">I'm <span>Ignacio</span> Marquez</h1>
      <div className="info-content">
        <h1>I'm <span>Ignacio</span> Marquez</h1>
        <p>Bienvenido a mi portafolio! Soy desarrollador full stack jr en progreso! con ganas de emprender nuevos retos y aprender nuevas tecnologias en el proceso.</p>
        <div className="skill">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-node"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-solid fa-database"></i>
        </div>
        <a download href={pdfIgnacio}>
          <button className="download-cv" >Download CV</button>
        </a>
      </div>
      <img src={imgPerfil} alt="Ignacio Marquez" />
    </main>
  )
}
