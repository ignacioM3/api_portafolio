import { useEffect, useState } from 'react'
import { Card } from './Card'


const Portafolio = () => {
    const [proyectos, setProyectos] = useState([]);
    const [load, setLoad] = useState(false);
    

    useEffect(() => {
        const fetchProyect = async () => {
            setLoad(!load)
            const url = "https://my-json-server.typicode.com/ignacioM3/api_portafolio/proyectos"
            try {
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setProyectos(resultado)
            } catch (error) {
                console.log(error)
            }
            setLoad(false)
        }
        fetchProyect()
    }, [])

    



    return (
        <div className='portafolio' id='portafolio'>
            <div className="portafolio-headings">
                <h2>My Portafolio</h2>
                <div className="divider">
                </div>
            </div>
            <div className="conteiner-card">
                <div className="row">
                    {
                        load ? <p>Cargando</p> : Object.keys(proyectos).length === 0 ? <p>No Hay Resultados</p> : (
                            
                                proyectos.map(card => (
                                    <Card key={card.id}{...card} />
                                ))
                            
                        ) 
                    }

                </div>

            </div>

            {/* <Contact/> */}
        </div>
    )
}

export default Portafolio