import React, {useContext, useEffect,useState} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const CardIconTipo = (props) => {

     const {
          slides, 
     } = useContext(ContextAreaDeTrabajo);

     let identificadorTipo='';
     let iconoTipo='';

  return (
    <div> {
     slides.map( (slide, index) => {
               if(slide.id === props.id2){                  
                    console.log("perro666",slide.tipo_contenido)  

                    switch (slide.tipo_contenido){
                         case "Static":
                              identificadorTipo="CardCont-Tipo"
                              iconoTipo=<i class="fa-regular fa-browser"></i>
                              break;
                         case "Menu":
                              identificadorTipo="CardCont-TipoMenu"
                              iconoTipo=<i class="fa-solid fa-bars"></i>
                              break;
                         case "Pregunta":
                              identificadorTipo="CardCont-TipoPregunta"
                              iconoTipo=<i class="fa-sharp fa-solid fa-question"></i>
                              break;
                         case "AudioVideo":
                              identificadorTipo="CardCont-TipoAudioVideo"
                              iconoTipo=<i class="fa-solid fa-waveform"></i>
                              break;
                    }

                    


                    return <div key={index} className={identificadorTipo} > {iconoTipo} </div>
               }
          })

     } 
     </div>
  )
}
