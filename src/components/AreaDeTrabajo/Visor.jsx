import React from 'react'
import './Visor.css'

const Visor = () => {
  return (
    <div className='VisorCont' >      
        <div className="areaTrabajo-cont-visor-display" ></div>
        <div className="areaTrabajo-cont-visor-btns">
          <div className="areaTrabajo-cont-visor-btns-item"><i className="fa-duotone fa-calendar-check icoGde"></i></div>
          <div className="areaTrabajo-cont-visor-btns-item"><i className="fa-duotone fa-outdent icoGde"></i></div>                  
        </div>
        <div className="areaTrabajo-cont-visor-msgRev">Mensaje de revisión</div>
      
    </div>
  )
}

export default Visor