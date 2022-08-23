import React from 'react';
import './Glosario.css';
import { GlosarioDescripcion } from './GlosarioDescripcion';
import { GlosarioForm } from './GlosarioForm';
import { GlosarioTerminos } from './GlosarioTerminos';

const GlosarioCont = () => {
  return (
    <div className='GlosarioCont' >
          <div className='GlosarioCont-contenido'>
               <div><GlosarioForm/></div>
               <div><GlosarioTerminos/></div>
               <div><GlosarioDescripcion/></div>
          </div>
    </div>
  )
}

export default GlosarioCont