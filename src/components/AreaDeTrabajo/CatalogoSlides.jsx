import React from 'react'
import './CatalogoSlides.css'

const CatalogoSlides = () => {
  return (
    <div className='CatalogoSlidesCont' >
        <div className='CatalogoSlides-Desp'>
            <header>
                <div>Nombre de la categoría</div>  
                <div>
                    <ul>
                        <li>Texto & imagenes</li>
                        <li>Pregunta</li>
                        <li>Audio y video</li>
                        <li>Menú</li>
                    </ul>
                </div>
            </header>
            <div>
                <div>miniatura 1</div>
                <div>miniatura 2</div>
                <div>miniatura 3</div>
                <div>miniatura 4</div>
                <div>miniatura 5</div>
                <div>miniatura 6</div>
                <div>miniatura 7</div>
            </div>
        </div>
    </div>
  )
}

export default CatalogoSlides