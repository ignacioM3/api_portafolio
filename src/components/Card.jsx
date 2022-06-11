import React from 'react'
const imagesPath = require.context('../assets/')

export const Card = ({name, description, gitHub, page, img}) => {

    const containerStyle = {
        backgroundImage:`url(${img})`
    }
    
    return (
        <div className="card-margin">
            <div className="card">
                <div className="card-img" style={containerStyle}>

                </div>
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
