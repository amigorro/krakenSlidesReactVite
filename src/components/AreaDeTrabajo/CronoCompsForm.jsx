import React, {useContext, useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

export const Tecnicas = () => {
  return (
     <div>
          <div className='crono_subtlt'>Técnicas didácticas </div>
                    
          <label><input type="checkbox" id="tec1" value="1"/> Interrogativa</label>
          <label><input type="checkbox" id="tec2" value="1"/> Demostrativa</label>
          <label><input type="checkbox" id="tec3" value="1"/> Expositiva</label>
          <label><input type="checkbox" id="tec4" value="1"/> Dinámica grupal</label>
          <label><input type="checkbox" id="tec5" value="1"/> Lectura individual</label>
          <label><input type="checkbox" id="tec6" value="1"/> Lectura comentada</label>
          <label><input type="checkbox" id="tec7" value="1"/> Lluvia de ideas</label>
          <label><input type="checkbox" id="tec8" value="1"/> Dramatización</label>
          <label><input type="checkbox" id="tec9" value="1"/> Trabajo en equipo</label>
     </div>
  )
}

export const MsgConfirmEliminar = () => {

     const {
          setEliminarCrono,
          confirmEliminarCrono, setConfirmEliminarCrono,
        } = useContext(ContextAreaDeTrabajo);


     return (
          <div className="alertMsgElimCrono" >
               <div className='msgElimCrono' > ¿Estás seguro de eliminar el cronograma? <div onClick={ () => setConfirmEliminarCrono(true) } className="btnSiNoElimnCrono" >Sí</div><div onClick={ () => setEliminarCrono(false) } className="btnSiNoElimnCrono">No</div> </div>
          </div>
     )
   }


