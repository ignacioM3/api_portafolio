import React, { useState } from 'react'
import about from '../assets/about2.jpg'


export const About = () => {
    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    return (
        <div className='about' id='about'>
            <img src={about} alt="Ignacio Retrato" />

            <div className='about-info'>
                <h2>Sobre mi</h2>
                <div className="divider"></div>
                <h5>Soy Desarrollador full stack egresado de digital house, actualmente me encuentro mejorando mis habilidades en el amplio mundo de React y montando mis primeros proyectos MERN, hasta poder conseguir mi primer trabajo en el mundo IT</h5>
                <h5>Estudiante de la cultura e idioma japonés! y Criptomonedas en general. Con visión a futuro de poder estudiar y desempeñarme en el mundo de la Web 3.0  </h5>
                {
                    state &&
                    <h5>Actualmente me encuentró como meta principal ganar experiencia creando proyectos propios o buscando challenge que pongan a prueba mis capacidades de resolver las problematicas presentadas, y estudiar a futuro Typescript y NextJs para poder fortalecer mis conocimientos y habilidades en el mundo del desarrollo web</h5>
                }
                <button className='download-cv' onClick={handleClick}>{state? "Menos" : "Más"}</button>
            </div>
        </div>
    )
}
