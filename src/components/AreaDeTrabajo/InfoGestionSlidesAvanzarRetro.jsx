import React, {useState,useContext,useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import './InfoGestionSlidesAvanzarRetro.css'


export const AvanzarSlide = () => {
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
          modalAvanzar, setModalAvanzar,
          modalRetroceder, setModalRetroceder,
          slideAvanzar, setSlideAvanzar,
          slideRetroceder, setSlideRetroceder,
          seleccionables, setSeleccionables,
     
     } = useContext(ContextAreaDeTrabajo);

     return (
          <>
               <div  className="areaTrabajo-cont-gestion-paginacion-txt">Avanzar:</div>
               <div 
                    className='cajitaConIdSlide' 
                    onClick={ () => setModalAvanzar(true) }
               ></div>
               {  modalAvanzar ? abrirModalAvRet() : null   }
               
          </>
     )
}


const abrirModalAvRet = () => {
     console.log("abrirModalAvRet")
     return (
          <>               
               <ModalAvRet />
          </>
     )
}



export const RetrocederSlide = () => {
     return (
          <>
               <div  className="areaTrabajo-cont-gestion-paginacion-txt">Retroceder:</div>
               <div className='cajitaConIdSlide' ></div>
          </>
     )
}

export const ModalAvRet = () => {
     const {
          slideSelected, setSlideSelected,
          idUsuario,
          idProyectoActual,
          sesion,         
          /** info Gestión slides: */
          modalAvanzar, setModalAvanzar,
          modalRetroceder, setModalRetroceder,
          slideAvanzar, setSlideAvanzar,
          slideRetroceder, setSlideRetroceder,
          seleccionables, setSeleccionables,
     } = useContext(ContextAreaDeTrabajo);
     
     
     useEffect( () =>{ 
          setSeleccionables()  
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {               
               tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE  id_proyecto = ? AND id_usuario = ? AND sesion = ? ', [idProyectoActual,idUsuario,sesion], function(tx, results) {                    
                    let len = results.rows.length, i;                                        
                    if(len > 0){ 
                         let opciones = [];                        
                         for (i = 0; i < len; i++){  
                              if( results.rows.item(i).id_usuario ){
                                   opciones.push(results.rows.item(i))  
                              }                                                                
                              console.table(opciones)                         }
                              setSeleccionables(opciones)
                    }
                    
               }, null);
          });
          
     }, []  )

     

     



     return (
          <div className="modalAvRet">
               proyecto: { idProyectoActual }
               Sesion: { sesion }
               slide: { slideSelected.id }
               usuario: { idUsuario }
               {    
                    seleccionables ?
                         seleccionables.map( (item, index) => {
                              return (  
                                   <div key={index} className='regSlectable' > {item.nombre_lamina}</div>                                                                      
                              )
                         })
                    : null
               }
               <div onClick={ () => setModalAvanzar(false) }  >Cerrar</div>
               
          </div>
     )
}