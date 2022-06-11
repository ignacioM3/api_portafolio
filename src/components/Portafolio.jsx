import { useEffect, useState } from 'react'
import { Card } from './Card'


const Portafolio = () => {
    const [proyectos, setProyectos] = useState([]);
    const [load, setLoad] = useState(false);
    

    useEffect(() => {
        const fetchProyect = async () => {
            setLoad(true)
            const url = import.meta.env.VITE_API_URL
            try {
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setProyectos(resultado)
                setLoad(false)
            } catch (error) {
                console.log(error)
            }
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
                        !load ? (
                            
                                proyectos.map(card => (
                                    <Card key={card.id}{...card} />
                                ))
                            
                        ) : null
                    }

                </div>

            </div>

            {/* <Contact/> */}
        </div>
    )
}

export default Portafolio