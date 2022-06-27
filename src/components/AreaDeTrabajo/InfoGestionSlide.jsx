import React from 'react'
import './InfoGestionSlide.css'

const InfoGestionSlide = () => {
  return (
    <div className='gestionCont' >
          <div className="areaTrabajo-cont-gestion-nombreSlide">
               <div className="areaTrabajo-cont-gestion-nombreSlide-txt">Nombre slide</div>
               <input    className="areaTrabajo-cont-gestion-nombreSlide-inp" 
                         spellCheck="false"
                         type="text" 
                         name="" 
                         id=""
               />
          </div>
          <div className="areaTrabajo-cont-gestion-paginacion">
               <div  className="areaTrabajo-cont-gestion-paginacion-txt">Paginación:</div>
               <input  className="areaTrabajo-cont-gestion-paginacion-inp"  spellCheck="false" type="number"/>
          </div>
          <div className="areaTrabajo-cont-gestion-avanzaRetrocede">
               <div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn">Regresar:<div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn-specs" ></div></div>
               <div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn">Avanzar:<div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn-specs"></div></div>
          </div>
              
          <div className="areaTrabajo-cont-gestion-btn btn-gestion">Cronograma</div>
          <div className="areaTrabajo-cont-gestion-btn btn-gestion">Objetivo tematico</div>
          <div className="areaTrabajo-cont-gestion-btn btn-gestion">Editar</div>              
          <div className="areaTrabajo-cont-gestion-btn btn-gestion btn-eliminarSlide">Eliminar Slide</div>
          <div className="divisor" ></div>
          <div className="areaTrabajo-cont-gestion-btn btn-gestion quitarMarginTop">Nuevo slide</div>
    </div>
  )
}

export default InfoGestionSlide