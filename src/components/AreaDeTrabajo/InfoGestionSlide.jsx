import React, {useState,useContext} from 'react'
import EditarSlide from './EditarSlide'
import './InfoGestionSlide.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import CronogramaFormulario from './CronogramaFormulario';
import { BorrarPruebaQuill } from './BorrarPruebaQuill';

const InfoGestionSlide = () => {

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

          } = useContext(ContextAreaDeTrabajo);     
     const [flagObjetivoTem, setFlagObjetivoTem] = useState(false)

     const actualizarRegBdSlide = async (variable,valor) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
                    console.log('results', results)                    
               }, null);
          });
     }

     const eliminarSlide = async () =>{ 
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`DELETE FROM DATOS_INTRODUCIDOS WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
                    console.log('results', results)
                    const slidesLocal = JSON.parse(localStorage.getItem("slidesEnSesion"))
                    const nuevosSlidesLocal = slidesLocal.filter((item) => item.id !== slideSelected.id)
                    localStorage.setItem("slidesEnSesion", JSON.stringify(nuevosSlidesLocal))
                    setSlideSelected('')
                    setSlides(nuevosSlidesLocal)
                    //setModalTipoSlide(false)
               }, null);
          });
     }




     const abrirModalCronograma = () => {
          if ( cv_crono_tipo=='encuadre' ||  cv_crono_tipo=='instruccion' ||  cv_crono_tipo=='ejercicio' ||  cv_crono_tipo=='actividad'   ){
               console.log("Ya tiene cronograma, hay que ver como abrir directo la plantilla")

               switch (cv_crono_tipo) {
                    case 'encuadre':
                         <CronogramaFormulario tipo='encuadre'  />
                         setTipoCronograma('encuadre');
                         setDespCronograma(true)
                         break;
                    case 'instruccion':                         
                         <CronogramaFormulario tipo='instruccion'  />,
                         setTipoCronograma('instruccion'),
                         setDespCronograma(true)                         
                         break;
                    case 'ejercicio':
                         <CronogramaFormulario tipo='ejercicio'  />     
                         setTipoCronograma('ejercicio');
                         setDespCronograma(true)                         
                         break;
                    case 'actividad':
                         <CronogramaFormulario tipo='actividad'  />     
                         setTipoCronograma('actividad');
                         setDespCronograma(true)
                         break;
               }


          }else {
               setDespCronograma(true)
          }
     }


     const actualizaPaginacion = (valor) => {
          setPaginacion(valor)
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET  paginacion = ? WHERE slide = ?  AND id_proyecto = ? `, [valor,slideSelected.id,idProyectoActual], function(tx, results) {
                         console.log(' %c #2   Se updatea Paginación '+valor,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#882829;font-size:16px', '')                                  
                    }, null);
               });
     }


  return (
    <div className='gestionCont' >
          <div className="areaTrabajo-cont-gestion-nombreSlide">
               <div className="areaTrabajo-cont-gestion-nombreSlide-txt">Nombre slide</div>
               <input    className="areaTrabajo-cont-gestion-nombreSlide-inp" 
                         spellCheck="false"
                         type="text" 
                         value={                              
                              slideSelected.nombre ? slideSelected.nombre : ""
                         }
                         onChange={(e)=>{
                              setSlideSelected({...slideSelected, nombre:e.target.value})
                              const slidesLocal = JSON.parse(localStorage.getItem("slidesEnSesion"))
                              const indiceElemento = slidesLocal.findIndex(el => el.id == slideSelected.id) 
                              slidesLocal[indiceElemento].nombre = e.target.value
                              localStorage.setItem("slidesEnSesion", JSON.stringify(slidesLocal))
                              setSlides(slidesLocal)
                         }}
                         onBlur={()=>{  
                              actualizarRegBdSlide("nombre_lamina",slideSelected.nombre)
                              console.log("Evento blur, acá actualizar BD")
                         }}
                         name=""                          
               />
          </div>
          <div className="areaTrabajo-cont-gestion-paginacion">
               <div className='objetoControl' >
                    <div  className="areaTrabajo-cont-gestion-paginacion-txt">Paginación:</div>
                    <input  
                         className="areaTrabajo-cont-gestion-paginacion-inp"  
                         spellCheck="false" 
                         type="number"
                         value={paginacion}
                         onChange={(e)=>{ actualizaPaginacion(e.target.value) }}
                    />
               </div>
               <div className='objetoControl' >
                    <div className="areaTrabajo-cont-gestion-paginacion-txt">Regresar:</div>
                    <div ></div>
               </div>
               <div className='objetoControl' >
                    <div  className="areaTrabajo-cont-gestion-paginacion-txt">Avanzar:</div>
                    <div ></div>
               </div>
               
          </div>
          
           
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={ () => abrirModalCronograma() }
                    >Cronograma</div>
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={ () => setFlagObjetivoTem(true) }
               >Objetivo tematico</div>
               
               <button 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={() => setEdicion(true)}
               >Editar</button>              
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion btn-eliminarSlide"
                    onClick={()=>{
                         eliminarSlide()
                    }}
                    >Eliminar Slide
               </div>          
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion btn-nuevoSlide quitarMarginTop"
                    onClick={() => setModalTipoSlide(true)}
               >Nuevo slide</div>
          
          {
               edicion === true ?
                    <EditarSlide/>
               :
                    null               
          }
          {
               flagObjetivoTem &&
                    <BorrarPruebaQuill/>
               
               
          }

    </div>
  )
}

export default InfoGestionSlide