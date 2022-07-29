import React, {useContext, useEffect,useState} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const CardNombreSlide = (props) => {

     const {
          slides, 
     } = useContext(ContextAreaDeTrabajo);



  return (
    <div> {
     slides.map( (slide, index) => {
               if(slide.id === props.id2){                    
                    return <div key={index} >{slide.nombre}</div>
               }
          })

     } 
     </div>
  )
}
