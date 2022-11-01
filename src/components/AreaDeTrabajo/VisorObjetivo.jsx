import React, {useContext,useState} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const VisorObjetivo = () => {

     

     const {
          modalTipoSlide, setModalTipoSlide,
          slideSelected, setSlideSelected,
          setSlides,
          idUsuario,
          idProyectoActual,
          sesion,
          edicion, setEdicion,
          despCronograma, setDespCronograma,
          cv_crono_flag,cv_crono_tipo,
          setTipoCronograma,
     
          /** info Gestión slides: */
          paginacion, setPaginacion,
     
          /** Objetivo aprendizaje */
          modalObjetivoApr, setModalObjetivoApr,
          tipoObj, setTipoObj,
          tipoCont, setTipoCont,
          temporaqlidad, setTemporaqlidad,
          aprendiz, setAprendiz,
          verbo1, setVerbo1,
          verbo2, setVerbo2,
          verbo3, setVerbo3,
          verbo4, setVerbo4,
          verbo5, setVerbo5,
          verbo6, setVerbo6,
          contenido, setContenido,
          finalidad, setFinalidad,
          actividad, setActividad,
          
          bntVis_cronograma, setBntVis_cronograma,
          bntVis_slide, setBntVis_slide,
          visorObjetivos, setVisorObjetivos,

     } = useContext(ContextAreaDeTrabajo);     

     useEffect( () =>{
          setBntVis_slide(true);
          setVisorObjetivos(false);
     },[]);



     

  return (
     <div className="areaTrabajo-cont-visor-display" >
               <div>Objetivo de aprendizaje</div>
               <div className="areaTrabajo-cont-visor-display-no-plantilla">
                         <div className='vistaPreviaObjetivo-concatenado' >  <div dangerouslySetInnerHTML={{__html: 
                                        (temporaqlidad? temporaqlidad : '' )+" "+
                                        (aprendiz ? aprendiz:'')+" "+
                                        (verbo1 ? verbo1 : '')+
                                        (verbo2 ? verbo2 : '')+
                                        (verbo3 ? verbo3 : '')+
                                        (verbo4 ? verbo4 : '')+
                                        (verbo5 ? verbo5 : '')+
                                        (verbo6 ? verbo6 : '')+ " "+                                        
                                        (contenido ? contenido.substring(3, contenido.length-4 ) : " ")  +" "+
                                        (finalidad ? finalidad : '')  }} ></div> </div>
                    <div>
                         Tipo de objetivo: {tipoObj==3 ? 'Especifico / temático' :  tipoObj==2 ? 'Particular' : tipoObj==1 ? 'General' : ' ' }
                    </div>
                    <div>
                         Tipo de contenido: {tipoCont==1 ? 'Declarativo' :  tipoCont==2 ? 'Procedimental' : tipoCont==3 ? 'Actitudinal' : ' ' }
                    </div>
                    <div>
                    Actividad de evaluación: {actividad}
                    </div>
               </div>
          
     </div>
  )
}
