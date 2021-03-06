import React from 'react'


export const Card = ({name, description, gitHub, page, img}) => {

    const containerStyle = {
        backgroundImage:`url(src/assets/${img})`
    }
    
    return (
        <div className="card-margin">
            <div className="card">
                <img className="card-img" src={`../assets/${img}`} alt="Imagen de portafolio" />
                <div className="card-title">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="proyect-link">
                    <a href={gitHub} target="__blank">
                        <i class="fa-brands fa-github"></i>
                    </a>{
                        page &&
                        <a href={page} target="__blank">
                            <i class="fa-solid fa-globe"></i>
                        </a> 
                    }
                </div>

            </div>
        </div>
    )
}
