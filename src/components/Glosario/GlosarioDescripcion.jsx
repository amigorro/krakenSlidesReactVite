import React, {useContext} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

export const GlosarioDescripcion = () => {
     const {modulo, setModulo,idProyectoActual, setIdProyectoActual,setSlideSelected,setSesion,modalGlosario, setModalGlosario} = useContext(ContextAreaDeTrabajo);
     
  return (
    <div className='GL-DescCont' >
          <div>Concepto 1:</div>
          <div>
               descripción del concepto 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores recusandae, perspiciatis non numquam neque, enim excepturi molestiae nobis commodi earum at alias dicta amet veniam nemo velit? Odit, ab?
          </div>
          <div
               
          >Eliminar concepto</div>
    </div>
  )
}
