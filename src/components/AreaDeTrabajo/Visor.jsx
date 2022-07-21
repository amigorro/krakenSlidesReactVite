import React, {useEffect,useState, useContext} from 'react'
import './Visor.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

const Visor = () => {

  const {    
    plantillaSeleccionada, setPlantillaSeleccionada,
    plnTitulo
  } = useContext(ContextAreaDeTrabajo);


  const cargaElementosPlantilla = () => {
    console.log("plantillaSeleccionada"+plantillaSeleccionada)
      switch (plantillaSeleccionada){
        case "1":
          return <div className="v-titulo">{plnTitulo}</div>
        break;
      }

  }




  return (
    <div className='VisorCont' >      
        <div className="areaTrabajo-cont-visor-display" >
              {
                plantillaSeleccionada ?
                  cargaElementosPlantilla()                    
                :
                    <div className="areaTrabajo-cont-visor-display-no-plantilla">
                      <h1>No se ha cargado ninguna plantilla</h1>
                    </div>
              }
        </div>
        <div className="areaTrabajo-cont-visor-btns">
          <div className="areaTrabajo-cont-visor-btns-item"><i className="fa-duotone fa-calendar-check icoGde"></i></div>
          <div className="areaTrabajo-cont-visor-btns-item"><i className="fa-duotone fa-outdent icoGde"></i></div>                  
        </div>
        <div className="areaTrabajo-cont-visor-msgRev">Mensaje de revisión</div>
      
    </div>
  )
}

export default Visor