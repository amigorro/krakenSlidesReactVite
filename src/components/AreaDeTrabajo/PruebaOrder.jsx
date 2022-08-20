import React, {useState, useContext,useEffect} from 'react'
import { motion, AnimatePresence,Reorder, useDragControls  } from 'framer-motion';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { CardNombreSlide } from './CardNombreSlide';


const variants = {
     hidden: {
          opacity: 0,
     },
     visible: (delay) => ( {
          opacity: 1,
          transition: {
               delay,
               ease: 'easeInOut',
          },
     }),
     exit: {
          opacity: 0,
          transition: {
               ease: 'easeInOut',
          },
     },
}



export const PruebaOrder = () => {

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
          setDespCronograma,
               cv_crono_flag, setCv_crono_flag,
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
     } = useContext(ContextAreaDeTrabajo);
     

     useEffect( () =>{            
          guardaOrdenSlides()  
          console.error("SE guarda ordeen de los slides")        
     }, [ordenPrueba]  )


     const cargaValoresSlide = (slideId) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idProyectoActual,sesion,slideId], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    
                    if(len > 0){                
                         setValoresBDslide({
                              num_chacks_sel: results.rows.item(0).num_chacks_sel,
                              tipo_contenido: results.rows.item(0).tipo_contenido,
                              plantilla: results.rows.item(0).plantilla,
                              nombre_lamina: results.rows.item(0).nombre_lamina,
                              titulo: results.rows.item(0).titulo,
                              subtitulo1: results.rows.item(0).subtitulo1,
                              texto1: results.rows.item(0).texto1,
                              texto2: results.rows.item(0).texto2,
                              texto3: results.rows.item(0).texto3,
                              texto4: results.rows.item(0).texto4,
                              texto5: results.rows.item(0).texto5,
                              texto6: results.rows.item(0).texto6,
                              imagen1: results.rows.item(0).imagen1,
                              imagen2: results.rows.item(0).imagen2,
                              imagen3: results.rows.item(0).imagen3,
                              imagen4: results.rows.item(0).imagen4,
                              imagen5: results.rows.item(0).imagen5,
                              imagen6: results.rows.item(0).imagen6,
                              imagen7: results.rows.item(0).imagen7,
                              imagen8: results.rows.item(0).imagen8,
                              audio: results.rows.item(0).audio,
                              video: results.rows.item(0).video,
                              tabla: results.rows.item(0).tabla,
                              anterior: results.rows.item(0).anterior,
                              siguiente: results.rows.item(0).siguiente,
                              orden: results.rows.item(0).orden,
                              paginacion: results.rows.item(0).paginacion
                         })
                         setValPlant_Titulo(results.rows.item(0).titulo)
                         console.log("TITULO DEL SLIDE:::::::::: "+results.rows.item(0).titulo+" PROYECTO:::"+idProyectoActual+" SESION:::"+sesion+" SLIDE:::"+slideId+":::::")                                         
                    }
               }, null);
          });
     }     
     


     
     
     const cargaValoresCronograma = (slideId) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM TBL_CRONOGRAMA WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND id_slide = ?  ', [idProyectoActual,sesion,slideId], function(tx, results) {
                    setCv_crono_flag(false)
                    setCv_crono_tipo('')
                    let len = results.rows.length ;                                   
                    if(len > 0){                                                           
                         setCv_crono_flag(true)
                         setCv_crono_tipo(results.rows.item(0).tipo)
                         setCv_crono_objetivo(results.rows.item(0).objetivo)
                         setCv_crono_instrucciones(results.rows.item(0).instrucciones)
                         setCv_crono_tiempo(results.rows.item(0).tiempo)
                         setCv_crono_materiales(results.rows.item(0).materiales)
                         setCv_crono_notas(results.rows.item(0).notas)
                         setCv_crono_tec1(results.rows.item(0).tec1)
                         setCv_crono_tec2(results.rows.item(0).tec2)
                         setCv_crono_tec3(results.rows.item(0).tec3)
                         setCv_crono_tec4(results.rows.item(0).tec4)
                         setCv_crono_tec5(results.rows.item(0).tec5)
                         setCv_crono_tec6(results.rows.item(0).tec6)
                         setCv_crono_tec7(results.rows.item(0).tec7)
                         setCv_crono_tec8(results.rows.item(0).tec8)
                         setCv_crono_tec9(results.rows.item(0).tec9)
                    }
               }, null);
          });
     }



     const guardaOrdenSlides = () =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
          let lista = document.getElementById("listaCardsSlides");
          if (lista){
               let items = lista.getElementsByTagName('li')
               let props = {};
               let itemId = ''; 
               for(let i = 0; i < items.length; i++){
                 props = items[i].getBoundingClientRect();
                 itemId = items[i].id;
                 console.log('ItemInfo: id = "%s", x = %s ', itemId, i);

                    /**
                     * Guardar en la base de datos el orden de los slides
                     */
                     
                         tx.executeSql('UPDATE DATOS_INTRODUCIDOS SET orden = ? WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [i,idProyectoActual,sesion,itemId], function(tx, results) {
                              console.log('results', results)
                         }, null);
                    


               }
             } else {
               console.warn('El elemento: %s NO fue encontrado dentro del HTML listaCardsSlides')
             }

      
     });
     }

    



     const ImprimeTarjetasOrdenables = () => {
          
          return(
               <Reorder.Group values={ordenPrueba} onReorder={  setOrdenPrueba  }>
                         { 
                              ordenPrueba.map( (item, index) => (
                                   <Reorder.Item 
                                        custom={{ delay: (index + 1) * 5.7 }}
                                        variants={ variants }
                                        initial='hidden'
                                        animate='visible'
                                        layoutId={ index }
                                        key={item} 
                                        id={item} 
                                        layout
                                        value={item}
                                   >                    
                                        
                                        <motion.div 
                                             className={  slideSelected.id == item  ? 'CardCont slideSelected' : 'CardCont ' }
                                             onClick={ () => {                                              
                                                  /*
                                                  setSlideSelected({
                                                       id : item
                                                  })*/ 
                                                  setDespCronograma(false)
                                                  setEdicion(false)
                                                  cargaValoresSlide(item)
                                                  cargaValoresCronograma(item)
                                                  
                                                  slides.map( (slide, index) => {
                                                       if(slide.id === item){                    
                                                            setPlantillaSeleccionada(slide.plantilla)
                                                            setSlideSelected({ 
                                                                 id : item,
                                                                 nombre: slide.nombre,
                                                            })
                                                            console.warn(`Plantilla seleccionada: ${slide.plantilla}`)
                                                       }
                                                  })



                                             } }
                                        >
                                             <div className='CardCont-Tipo' /*onPointerDown={(e) => controls.start(e)}*/  > </div>
                                             <div className='CardCont-Tipo-Info' >
                                                  <div className='CardCont-Tipo-Info-Name' > <CardNombreSlide id2={item} /> </div>
                                                  <div className='CardCont-Tipo-Info-icons' >
                                                       <div className='CardCont-Tipo-Info-icons-ico'><i className='fa-duotone fa-calendar-check CardCont-ico '></i></div>
                                                       <div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-outdent CardCont-ico "></i></div>
                                                       <div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-message-check CardCont-ico "></i></div>
                                                       <div className='CardCont-Tipo-Info-icons-order idExplode'>{item}</div>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   </Reorder.Item>  
                              ))
                         }
               </Reorder.Group>
          )
     }




          return (
               
               ImprimeTarjetasOrdenables()
                    
          )
     


  
}




