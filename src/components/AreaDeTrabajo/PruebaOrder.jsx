import React, {useState, useContext,useEffect} from 'react'
import { motion, AnimatePresence,Reorder, useDragControls  } from 'framer-motion';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { CardNombreSlide } from './CardNombreSlide';
import { CardIconTipo } from './CardIconTipo';
import { CardIconObjetivoApr } from './CardIconObjetivoApr';

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
          idUsuario,
          sesion, setSesion,
          setModulo,
          setEdicion,
          idProyectoActual,
          modalTipoSlide, setModalTipoSlide,
          slideSelected, setSlideSelected,
          slides, setSlides,
          valPlant_Titulo, setValPlant_Titulo,
          paginacion, setPaginacion,
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

               slideImg1, setSlideImg1,
               slideImg2, setSlideImg2,
               slideImg3, setSlideImg3,
               slideImg4, setSlideImg4,
               slideImg5, setSlideImg5,
               slideImg6, setSlideImg6,
               urlImg1, setUrlImg1,
               urlImg2, setUrlImg2,
               urlImg3, setUrlImg3,
               urlImg4, setUrlImg4,
               urlImg5, setUrlImg5,
               urlImg6, setUrlImg6,
               urlImg7, setUrlImg7,
               urlImg8, setUrlImg8,

               slideTexto1, setSlideTexto1,
               slideTexto2, setSlideTexto2,
               slideTexto3, setSlideTexto3,
               slideTexto4, setSlideTexto4,
               slideTexto5, setSlideTexto5,
               slideTexto6, setSlideTexto6,

               resp1, setResp1,
               valResp1, setValResp1,
               resp2, setResp2,
               valResp2, setValResp2,
               resp3, setResp3,
               valResp3, setValResp3,
               resp4, setResp4,
               valResp4, setValResp4,
               resp5, setResp5,
               valResp5, setValResp5,
               resp6, setResp6,
               valResp6, setValResp6,
               resp7, setResp7,
               valResp7, setValResp7,
               resp8, setResp8,
               valResp8, setValResp8,
               setSlidesSeleccionables,
               setListadoOpcionesMenu ,
               listadoOpcionesMenu,

               slideAvanzar, setSlideAvanzar,
               slideRetroceder, setSlideRetroceder,

               /** Objetivo temático  */
               setModalObjetivoApr,
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

               /** nav Visor  */
               bntVis_objetivo, setBntVis_objetivo,setVisorObjetivos,setBntVis_slide,setVisorCronograma

     } = useContext(ContextAreaDeTrabajo);
     

     useEffect( () =>{            
          guardaOrdenSlides()  
          //console.error("Se guarda ordeen de los slides")        
     }, [ordenPrueba]  )


     const cargaValoresSlide = (slideId) =>{
          
          /** Limpiamos valores del estado */
          setResp1('')
          setResp2('')
          setResp3('')
          setListadoOpcionesMenu([''])
          setTipoObj('')
          setTipoCont('')
          setTemporaqlidad('')
          setAprendiz('')
          setVerbo1('')
          setVerbo2('')
          setVerbo3('')
          setVerbo4('')
          setVerbo5('')
          setVerbo6('')
          setContenido('')
          setFinalidad('')
          setActividad('')
          //setUrlImg1(''), setUrlImg2(''), setUrlImg3(''), setUrlImg4(''), setUrlImg5(''), setUrlImg6(''), setUrlImg7(''), setUrlImg8('')
          

          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND slide = ?   ', [idProyectoActual,sesion,slideId], function(tx, results) {
                    //console.log('results', results)
                    let len =0;

                    if ( results.rows.length ) {
                         len = 10;
                    }
                    
                    if( len > 0 ){      

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
                         if ( !results.rows.item(0).titulo || results.rows.item(0).titulo == ''  ) {
                              setValPlant_Titulo('')
                            }else{
                              setValPlant_Titulo(results.rows.item(0).titulo)
                            }

                         //setSlideImg1(results.rows.item(0).imagen1)
                         
                         /*
                         if ( !results.rows.item(0).texto1 || results.rows.item(0).texto1 == ''  ) {
                              setSlideTexto1(' ')
                            }else{
                              setSlideTexto1(results.rows.item(0).texto1)
                            } */

                         setSlideTexto1(results.rows.item(0).texto1)
                         setSlideTexto2(results.rows.item(0).texto2)
                         setSlideTexto3(results.rows.item(0).texto3)
                         setSlideTexto4(results.rows.item(0).texto4)
                         setSlideTexto5(results.rows.item(0).texto5)
                         setSlideTexto6(results.rows.item(0).texto6)

                         setSlideAvanzar(results.rows.item(0).siguiente)
                         setSlideRetroceder(results.rows.item(0).anterior)
                         
                         if (!results.rows.item(0).paginacion){
                              setPaginacion('')
                         } else { setPaginacion(results.rows.item(0).paginacion) }
                         
                         let urlimg1='';
                         if( results.rows.item(0).imagen1 =='image.png'  || !results.rows.item(0).imagen1 ){
                              urlimg1 = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{ urlimg1 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen1}?${new Date().getTime()}` }
                         setUrlImg1(urlimg1)
                         
                         let urlimg2='';
                         if( results.rows.item(0).imagen2 =='image.png' || !results.rows.item(0).imagen2  ){
                              urlimg2 = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{ urlimg2 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen2}` }
                         setUrlImg2(urlimg2)

                         let urlimg3='';
                         if( results.rows.item(0).imagen3 =='image.png' || !results.rows.item(0).imagen3  ){
                              urlimg3 = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{ urlimg3 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen3}?${new Date().getTime()}` }
                         setUrlImg3(urlimg3)

                         let urlimg4='';
                         if( results.rows.item(0).imagen4 =='image.png' || !results.rows.item(0).imagen4  ){
                              urlimg4 = `./../../logos/image_icon.png`
                         } else{ urlimg4 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen4}?${new Date().getTime()}` }
                         setUrlImg4(urlimg4)

                         let urlimg5='';
                         if( results.rows.item(0).imagen5 =='image.png' || !results.rows.item(0).imagen5  ){
                              urlimg5 = `./../../logos/image_icon.png`
                         } else{ urlimg5 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen5}?${new Date().getTime()}` }
                         setUrlImg5(urlimg5)

                         let urlimg6='';
                         if( results.rows.item(0).imagen6 =='image.png' || !results.rows.item(0).imagen6  ){
                              urlimg6 = `./../../logos/image_icon.png`
                         } else{ urlimg6 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen6}?${new Date().getTime()}` }
                         setUrlImg6(urlimg6)

                         let urlimg7='';
                         if( results.rows.item(0).imagen7 =='image.png' || !results.rows.item(0).imagen7  ){
                              urlimg7 = `./../../logos/image_icon.png`
                         } else{ urlimg7 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen7}?${new Date().getTime()}` }
                         setUrlImg7(urlimg7)

                         let urlimg8='';
                         if( results.rows.item(0).imagen8 =='image.png' || !results.rows.item(0).imagen8  ){
                              urlimg8 = `./../../logos/image_icon.png`
                         } else{ urlimg8 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen8}?${new Date().getTime()}` }
                         setUrlImg8(urlimg8)

                         /* Cargamos los estados de los slides de tipo pregunta */
                         if ( results.rows.item(0).tipo_contenido=='Pregunta' ){                              
                              console.warn("carga respuestas")
                              db.transaction(function(tx) {
                                   console.warn("dentro de obj DB: "+idProyectoActual,sesion,slideId)
                                   tx.executeSql('SELECT * FROM TBL_RESPUESTA WHERE id_usuario = 1 AND id_proyecto = ? AND slide = ? AND sesion = ? ', [idProyectoActual,slideId,sesion], function(tx, results) {
                                        console.warn("ejecuta SQL")
                                        
                                        setResp1(results.rows.item(0).txt01_respuesta)
                                        setResp2(results.rows.item(0).txt02_respuesta)
                                        setResp3(results.rows.item(0).txt03_respuesta)
                                        setResp4(results.rows.item(0).txt04_respuesta)
                                        setResp5(results.rows.item(0).txt05_respuesta)
                                        setResp6(results.rows.item(0).txt06_respuesta)
                                        setResp7(results.rows.item(0).txt07_respuesta)
                                        setResp8(results.rows.item(0).txt08_respuesta)
                                        setValResp1(results.rows.item(0).valor01)
                                        setValResp2(results.rows.item(0).valor02)
                                        setValResp3(results.rows.item(0).valor03)
                                        setValResp4(results.rows.item(0).valor04)
                                        setValResp5(results.rows.item(0).valor05)
                                        setValResp6(results.rows.item(0).valor06)
                                        setValResp7(results.rows.item(0).valor07)
                                        setValResp8(results.rows.item(0).valor08)
                                        console.warn('RESPSSSS:'+results.rows.item(0).txt01_respuesta)
                                   }, null);
                              });
                         }


                         /* Cargamos los estados de los slides de tipo Menu */
                         let opciones2 = []
                         if ( results.rows.item(0).tipo_contenido=='Menu' ){  
                              
                              tx.executeSql('SELECT * FROM MENUS M LEFT JOIN DATOS_INTRODUCIDOS D ON  M.skip=D.slide WHERE  M.id_proyecto = ? AND M.id_usuario = ? AND M.sesion = ? AND M.slide = ? ', [idProyectoActual,1,sesion,slideId], function(tx, results) {
                                   let len = results.rows.length, i;                                        
                                        for (i = 0; i < len; i++){                          
                                             console.warn("PERRUUU - "+results.rows.item(i)["nombre_lamina"]+" UUU "+results.rows.item(i)['txt'])    
                                             opciones2.push(results.rows.item(i))                              
                                        }
                                        setListadoOpcionesMenu(opciones2)
                              }, null);
                         
                         }
                         /* Cargamos los estados de los slides de tipo AudioVideo */
                         if ( results.rows.item(0).tipo_contenido=='AudioVideo' ){                              
                              let urlimg1='';
                                   if( results.rows.item(0).imagen1 =='image.png'  || !results.rows.item(0).imagen1 ){
                                        urlimg1 = `./../../logos/image_icon.png`
                                   } else{ urlimg1 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen1}?${new Date().getTime()}` }
                                   setUrlImg1(urlimg1)
                              
                         }


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
                    let len = 0;    
                    if( results.rows.length ){
                         len =10;
                    }
                    
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
     const cargaValoresObjetivos = (slideId) =>{
          console.log("cargando objetivos")
          setBntVis_objetivo(false)
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               console.warn("Entrando a fn DB",idUsuario,idProyectoActual,sesion,slideId)
               tx.executeSql('SELECT * FROM ObjetivoApr WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idUsuario,idProyectoActual,sesion,slideId], function(tx, results) {
                    console.warn("entrando a QRY Objetivos")
                    setModalObjetivoApr(false)
                    
                    let len = 0;    
                    if( results.rows.length ){
                         len =10;
                    }
                    
                    if(len > 0){                                                                                    
                         setTipoObj(results.rows.item(0).tipoObj)
                         setTipoCont(results.rows.item(0).tipoCont)
                         setTemporaqlidad(results.rows.item(0).temporaqlidad)
                         setAprendiz(results.rows.item(0).aprendiz)
                         setVerbo1(results.rows.item(0).verbo1)
                         setVerbo2(results.rows.item(0).verbo2)
                         setVerbo3(results.rows.item(0).verbo3)
                         setVerbo4(results.rows.item(0).verbo4)
                         setVerbo5(results.rows.item(0).verbo5)
                         setVerbo6(results.rows.item(0).verbo6)
                         setContenido(results.rows.item(0).contenido)
                         setFinalidad(results.rows.item(0).finalidad)
                         setActividad(results.rows.item(0).actividad)
                         setBntVis_objetivo(true)
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
                             // console.log('results', results)
                             /**
                              * ? Alternativa para mover el scroll a la posición maxima del bottom                             
                              * const buffer = document.getElementById("listaCardsSlides");
                              * buffer.scrollTop = buffer.scrollHeight;                              
                             **/                              
                                     
                         }, null);
                    


               }
             } else {
               console.warn('El elemento: %s NO fue encontrado dentro del HTML listaCardsSlides')
             }

      
     });
     }

     const buscaRegistroEnBD = (id2) => {
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM ObjetivoApr WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idUsuario,idProyectoActual,sesion,id2], function(tx, results) {
                    
                         if( results.rows.item(0).contenido ){
                              return(<div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-outdent CardCont-ico "></i></div>)
                              //setIconito(true)
                         } else {
                              setIconito(false);
                              return('');
                         }
                    


               }, null);
          });
     }



     const ImprimeTarjetasOrdenables = () => {
          
          return(          <Reorder.Group values={ordenPrueba} onReorder={  setOrdenPrueba  }>
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
                                             name={'card-'+item}
                                        >                    
                                             
                                             <motion.div 
                                                  className={  slideSelected.id == item  ? 'CardCont slideSelected' : 'CardCont ' }
                                                  onClick={ () => {                                              
                                                       
                                                       setDespCronograma(false),
                                                       setEdicion(false),                                                      
                                                       cargaValoresSlide(item),
                                                       cargaValoresCronograma(item),
                                                       cargaValoresObjetivos(item)
                                                       
                                                       slides.map( (slide, index) => {
                                                            if(slide.id === item){                    
                                                                 setPlantillaSeleccionada(slide.plantilla)
                                                                 setSlideSelected({ 
                                                                      id : item,
                                                                      nombre: slide.nombre,
                                                                 })
                                                                 
                                                                 //console.warn(`Plantilla seleccionada: ${slide.plantilla}`)
                                                            }
                                                            
                                                       })



                                                  } }
                                             >
                                                  <CardIconTipo id2={item} />
                                                  <div className='CardCont-Tipo-Info' >
                                                       <div className='CardCont-Tipo-Info-Name' > <CardNombreSlide id2={item} /> </div>
                                                       <div className='CardCont-Tipo-Info-icons' >
                                                            <div className='CardCont-Tipo-Info-icons-ico'><i class="fa-regular fa-calendar-clock CardCont-ico "></i></div>                                                            
                                                            <CardIconObjetivoApr id2={item}  />
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




