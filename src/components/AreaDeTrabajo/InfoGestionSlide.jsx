import React, {useState,useContext} from 'react'
import EditarSlide from './EditarSlide'
import './InfoGestionSlide.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


const InfoGestionSlide = () => {

     const {modalTipoSlide, setModalTipoSlide,slideSelected, setSlideSelected,setSlides,idUsuario,idProyectoActual,sesion,edicion, setEdicion,despCronograma, setDespCronograma} = useContext(ContextAreaDeTrabajo);     
     

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
               <div  className="areaTrabajo-cont-gestion-paginacion-txt">Paginación:</div>
               <input  className="areaTrabajo-cont-gestion-paginacion-inp"  spellCheck="false" type="number"/>
          </div>
          <div className="areaTrabajo-cont-gestion-avanzaRetrocede">
               <div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn">Regresar:<div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn-specs" ></div></div>
               <div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn">Avanzar:<div className="areaTrabajo-cont-gestion-avanzaRetrocede-btn-specs"></div></div>
          </div>
           
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={ () => setDespCronograma(true) }
                    >Cronograma</div>
               <div className="areaTrabajo-cont-gestion-btn btn-gestion">Objetivo tematico</div>
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

    </div>
  )
}

export default InfoGestionSlide