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
               > { slideAvanzar && slideAvanzar } </div>
               {  modalAvanzar ? abrirModalAvRet("avanzar") : null   }
               
          </>
     )
}


const abrirModalAvRet = (movimiento) => {
     
     return (
          <>               
               <ModalAvRet tipo={movimiento} />
          </>
     )
}



export const RetrocederSlide = () => {
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
               <div  className="areaTrabajo-cont-gestion-paginacion-txt">Retroceder:</div>
               <div 
                    className='cajitaConIdSlide' 
                    onClick={ () => setModalRetroceder(true) }
               >{ slideRetroceder && slideRetroceder }</div>
               {  modalRetroceder ? abrirModalAvRet("anterior") : null   }
          </>
     )
}

export const ModalAvRet = (param) => {
     const {
          slideSelected, setSlideSelected,
          slideSeleccionado,
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
     
     console.log("ModalAvRet",param.tipo)
     
     useEffect( () =>{ 
          setSeleccionables()  
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {               
               tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE  id_proyecto = ? AND id_usuario = ? AND sesion = ? ', [idProyectoActual,idUsuario,sesion], function(tx, results) {                    
                    let len = results.rows.length, i;                                        
                    if(len > 0){ 
                         let opciones = [{ slide:'-', nombre_lamina:"Quitar valor actual" }];                        
                         for (i = 0; i < len; i++){  
                              if( results.rows.item(i).id_usuario ){
                                   opciones.push(results.rows.item(i))  
                              }                                                                
                              console.table(opciones)                         
                         }
                         setSeleccionables(opciones)
                    }
                    
               }, null);
          });
          
     }, []  )

     const guardarAvRet = () => {
          console.log("guardarAvRet")
          let variableEleegida='', idSlideSel='';
          if(param.tipo === "avanzar"){
               setModalAvanzar(false)
               variableEleegida='siguiente';
               (slideAvanzar !== '-') ? idSlideSel = slideAvanzar : idSlideSel = '';               
          }else{
               setModalRetroceder(false)
               variableEleegida='anterior';
               (slideRetroceder !== '-') ? idSlideSel = slideRetroceder : idSlideSel = '';               
          }

          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               console.log("AVANZAR RETROCEDER ACTUALIZADO 01")
               tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variableEleegida} = ? WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ? AND slide = ? `, [ idSlideSel ,idProyectoActual,idUsuario,sesion,slideSelected.id], function(tx, results) {
                    //console.warn(`UPDATE DATOS_INTRODUCIDOS SET ${variableEleegida} = ? WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ? AND slide = ?`,idSlideSel ,idProyectoActual,idUsuario,sesion,slideSelected.id)
                    
               }, null);
          });


     }
     

     return (
          <div className='modalAvRet-cont' >
               <div className="modalAvRet">
                    <div className='tltModal' >{
                         param.tipo === "avanzar" ? "Selecciona el slide a donde se dirigirá al avanzar" : "Selecciona el slide a donde se dirigirá al regresar"
                    }</div>
                    <div className='modalAvRet-regs' >
                    {    
                         seleccionables ?
                              seleccionables.map( (item, index) => {
                                   return (  
                                        <div 
                                             key={index} 
                                             className={ 
                                                  (param.tipo === "avanzar" && slideAvanzar === item.slide && slideAvanzar ) ? "regSlectable-Selected" :
                                                  (param.tipo === "anterior" && slideRetroceder === item.slide && slideRetroceder ) ? "regSlectable-Selected" : "regSlectable"
                                             }
                                             onClick={ () =>{
                                                  if(param.tipo === "avanzar"){
                                                       setSlideAvanzar(item.slide)  
                                                       console.log("slideAvanzar",slideAvanzar)                                                     
                                                  }else{
                                                       setSlideRetroceder(item.slide)                                                       
                                                       console.log("slideRetroceder",slideRetroceder)                                                     
                                                  }
                                             } }
                                             >
                                             <span className='codeSlide' ><span className='codeSlideCorchete'>[</span>{item.slide}<span className='codeSlideCorchete'>]</span></span> 
                                                  <div> 
                                                       {
                                                            item.tipo_contenido=='Static' ? <div className='CardCont-Tipo' ><i className="fa-regular fa-browser"></i></div> : 
                                                            item.tipo_contenido=='AudioVideo' ? <div className='CardCont-TipoAudioVideo' ><i className="fa-solid fa-waveform"></i></div> : 
                                                            item.tipo_contenido=='Menu' ? <div className='CardCont-TipoMenu' ><i className="fa-solid fa-bars"></i></div> : 
                                                            item.tipo_contenido=='Pregunta' ? <div className='CardCont-TipoPregunta' ><i className="fa-sharp fa-solid fa-question"></i></div> : null
                                                       }     
                                                  </div>
                                                  {item.nombre_lamina}
                                        </div>                                                                      
                                   )
                              })
                         : null
                    }
                    </div>
                    <div 
                         onClick={ () => guardarAvRet() }  
                         className='modalAvRet-btnGuardar'
                    >Guardar</div>
                    
               </div>
          </div>
     )
}