import React, {useState,useContext} from 'react'
import EditarSlide from './EditarSlide'
import './InfoGestionSlide.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


const InfoGestionSlide = () => {

     const [edicion, setEdicion] = useState(false)
     const {modalTipoSlide, setModalTipoSlide} = useContext(ContextAreaDeTrabajo);     

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
               <button 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={() => setEdicion(true)}
               >Editar</button>              
               <div className="areaTrabajo-cont-gestion-btn btn-gestion btn-eliminarSlide">Eliminar Slide</div>          
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion btn-nuevoSlide quitarMarginTop"
                    onClick={() => setModalTipoSlide(true)}
               >Nuevo slide</div>
          
          {
               edicion === true ?
                    <EditarSlide/>
               :
                    null
          }

    </div>
  )
}

export default InfoGestionSlide