import React, {useContext,useState,useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import './VisorCronograma.css'

export const VisorCronograma = () => {

          const {
          modalTipoSlide, setModalTipoSlide,
          slideSelected, setSlideSelected,
          setSlides,
          idUsuario,
          idProyectoActual,
          sesion,
          edicion, setEdicion,
          despCronograma, setDespCronograma,
          cv_crono_flag,         
               
          eliminarCrono, setEliminarCrono,
          confirmEliminarCrono, setConfirmEliminarCrono,          
          cv_crono_tipo, setCv_crono_tipo,
          cv_crono_objetivo, setCv_crono_objetivo,
          cv_crono_instrucciones, setCv_crono_instrucciones,
          cv_crono_tiempo, setCv_crono_tiempo,
          cv_crono_materiales, setCv_crono_materiales,
          cv_crono_notas, setCv_crono_notas,
          cv_crono_tec1, setCv_crono_tec1,
          cv_crono_tec2, setCv_crono_tec2,
          cv_crono_tec3, setCv_crono_tec3,
          cv_crono_tec4, setCv_crono_tec4,
          cv_crono_tec5, setCv_crono_tec5,
          cv_crono_tec6, setCv_crono_tec6,
          cv_crono_tec7, setCv_crono_tec7,
          cv_crono_tec8, setCv_crono_tec8,
          cv_crono_tec9, setCv_crono_tec9,
          
          bntVis_cronograma, setBntVis_cronograma,
          bntVis_slide, setBntVis_slide,
          visorObjetivos, setVisorObjetivos,

     } = useContext(ContextAreaDeTrabajo);     

     useEffect( () =>{
          //setBntVis_slide(true);
          //setVisorObjetivos(false);
     },[]);



     

  return (
     <div className="areaTrabajo-cont-visor-display" >
               <div className='flexTlt' >Cronograma <span className='cronoTipo' >[{cv_crono_tipo}]</span> </div>
               <div className='flexDosColumnas' >
                    <div className='flexCol1' >
                         <div><strong>Objetivo:</strong> {cv_crono_objetivo} </div>
                         <div className='CronoInst' ><strong>Instrucciones:</strong> <div dangerouslySetInnerHTML={{__html: cv_crono_instrucciones}}></div></div>                         
                    </div>
                    <div className='flexCol2' >
                         <div> <strong>Técnicas: </strong>
                              {cv_crono_tec1 && <div className='tenicasItem' >Interrogativa</div>}
                              {cv_crono_tec2 && <div className='tenicasItem'>Demostrativa</div>}
                              {cv_crono_tec3 && <div className='tenicasItem'>Expositiva</div>}
                              {cv_crono_tec4 && <div className='tenicasItem'>Dinámica grupal</div>}
                              {cv_crono_tec5 && <div className='tenicasItem'>Lectura individual</div>}
                              {cv_crono_tec6 && <div className='tenicasItem'>Lectura comentada</div>}
                              {cv_crono_tec7 && <div className='tenicasItem'>Lluvia de ideas</div>}
                              {cv_crono_tec8 && <div className='tenicasItem'>Dramatización</div>}
                              {cv_crono_tec9 && <div className='tenicasItem'>Trabajo en equipo</div>}
                         </div>
                         <div> <strong>Materiales:</strong><br /><span className='tenicasItem'> {cv_crono_materiales}</span></div>
                    </div>
               </div>
               <div className='flexRenglon2Cols' >
                              <div className='cronoTiempo' ><strong>Tiempo:</strong> <br/>{cv_crono_tiempo} minutos.</div>
                              <div className='cronoNotas' ><strong>Notas:</strong> {cv_crono_notas}</div>
                         </div>
               
     </div>
  )
}
