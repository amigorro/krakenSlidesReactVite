import React, {useState,useContext,useEffect} from 'react'
import './Cronograma.css'
import CronogramaFormulario from './CronogramaFormulario'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { nanoid } from 'nanoid'

const Cronograma = () => {

     const {
          sesion, setSesion,
          setModulo,
          setEdicion,
          idProyectoActual,
          modalTipoSlide, setModalTipoSlide,
          slideSelected, setSlideSelected,
          slides, setSlides,
          valPlant_Titulo, setValPlant_Titulo,
          plantillaSeleccionada, setPlantillaSeleccionada,
          setValoresBDslide,
          ordenSlides, setOrdenSlides,
          ordenPrueba, setOrdenPrueba,
          despCronograma, setDespCronograma,
          tipoCronograma, setTipoCronograma
     } = useContext(ContextAreaDeTrabajo);

     const [cronogramaActual, setCronogramaActual] = useState()

     useEffect( () =>{     
          insertaRegistroCronograma()
        }  , [cronogramaActual]  )
      

     const insertaRegistroCronograma = () =>{
          console.log("Dando de alta un cronograma")
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {     
               let id_cronograma = nanoid(10)          
               tx.executeSql('INSERT OR IGNORE INTO TBL_CRONOGRAMA (id_proyecto,id_cronograma,id_slide,sesion,id_usuario) VALUES (?,?,?,?,?)', [idProyectoActual,id_cronograma,slideSelected.id,sesion,1], function(tx, results) {
                    console.log('results', results)
                    /**
                    setSlideSelected({
                         id : id_plantilla
                    })  */
               
               }, null);
          })
     }





  return (
     <div className='CronogramaCont' >
          <div className='CronogramaCont-desp'>
               <div className='CronogramaCont-desp-cerrar' onClick={ () => setDespCronograma(false) }  >X</div>
               <div className='CronogramaCont-desp-tlt' >Guia didáctica [Cronograma]</div>
               <div className='CronogramaCont-desp-menu' >
                    <div className='CronogramaCont-desp-menu-item' onClick={ () => setTipoCronograma('encuadre') }  >Encuadre del tema</div>
                    <div className='CronogramaCont-desp-menu-item' >Instrucción</div>
                    <div className='CronogramaCont-desp-menu-item' >Ejercicio o práctica</div>
                    <div className='CronogramaCont-desp-menu-item' >Actividad verificadora</div>
               </div>
               <div className='CronogramaCont-desp-menu-indicacion' >Elige el tipo de indicación a desarrollar</div>
               { tipoCronograma === 'encuadre' && <CronogramaFormulario tipo='encuadre'  /> }
          </div>

               


     </div>
  )
}

export default Cronograma