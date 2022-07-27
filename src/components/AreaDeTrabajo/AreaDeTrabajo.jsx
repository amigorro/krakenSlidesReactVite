import React, {useContext, useState, useEffect} from 'react'
import './AreaDeTrabajo.css'
import AppBar from '../AppBar/AppBar'
import Cardpry from './Cardpry'
import Visor from './Visor'
import InfoGestionSlide from './InfoGestionSlide'
import CatalogoSlides from './CatalogoSlides'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

import Routeo from '../Routeo'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { motion, AnimatePresence,Reorder, useDragControls  } from 'framer-motion';
import { PruebaOrder } from './PruebaOrder'

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



const AreaDeTrabajo = () => {
     
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
               ordenPrueba, setOrdenPrueba
          } = useContext(ContextAreaDeTrabajo);

     const [slide, setSlide] = useState(null)
     
     const [existeSesiones, setExisteSesiones] = useState(false)
     
     const [modalAddSesion, setModalAddSesion] = useState(false)

     
     const [sesiones, setSesiones] = useState([])
     const [nuevaSesion, setNuevaSesion] = useState(false)
     
     

     const regresaMenu = ()=>{
          setModulo("MenuPrincipal")
          setSesion()
          setSlideSelected({})
          
          setSlides([])
          localStorage.removeItem("slidesEnSesion")

          return(<Routeo/>)
     }


     useEffect( () =>{            
          getSlides();   
          getSlidesBD();     
          getSesiones();
     }, [modalTipoSlide]  )


     useEffect( () =>{
          getSlides();   
          getSlidesBD();  
     }, [sesion]  )

     useEffect( () =>{
          console.log('ordenSlides', ordenSlides)
     }, [ordenSlides]  )



     const getSesiones = async () =>{
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT DISTINCT sesion FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ?  ', [idProyectoActual], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    
                    if(len > 0){
                         let sesionesEnElProyecto = []
                         for (i = 0; i < len; i++){
                              if (i==0){localStorage.removeItem("sesionesEnProyecto");}
                              sesionesEnElProyecto.push(results.rows.item(i))
                              pry={
                                   sesion: results.rows.item(i).sesion
                                   
                              }
                              
                              GuardarEnStorage('sesionesEnProyecto', pry)
                              
                         }
                         
                         let slidesAct = JSON.parse(localStorage.getItem("sesionesEnProyecto"))
                         setSesiones(slidesAct)
                         
                    }
               }, null);
          });
          
     }
     
     const getSlides = async () =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT COUNT(*) AS existe FROM "DATOS_INTRODUCIDOS" WHERE id_usuario=1 AND id_proyecto = ?', [idProyectoActual], function(tx, results) {
                    
                    if(results.rows.item(0).existe > 0){
                         setExisteSesiones(true)
                         
                    } else {
                         setExisteSesiones(false)
                         setModalAddSesion(false)
                    }
                    
                    
                    
               }, null);
          });
     }


     const esEnter = (e) =>{
          e.preventDefault()
          if(e.keyCode == 13){                                             
               setSesion(e.target.value)
               setExisteSesiones(true) 
               setModalTipoSlide(true)
               setNuevaSesion(false)
          }
     }

 



     const getSlidesBD = async () =>{          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?   ', [idProyectoActual,sesion], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    
                    
                    if(len > 0){
                         let slidesDeLaSesion = []
                         let registrosCard = []
                         setOrdenPrueba([])
                         for (i = 0; i < len; i++){
                              if (i==0){
                                   localStorage.removeItem("slidesEnSesion");
                                   localStorage.removeItem("orden");
                                   
                              }
                              slidesDeLaSesion.push(results.rows.item(i))
                              pry={
                                   id: results.rows.item(i).slide,                                   
                                   nombre: results.rows.item(i).nombre_lamina,
                                   tipo_contenido: results.rows.item(i).tipo_contenido,
                                   plantilla: results.rows.item(i).plantilla,
                                   orden: i,
                              }
                              
                              registrosCard.push(results.rows.item(i).slide)
                              GuardarEnStorage('slidesEnSesion', pry)
                              GuardarEnStorage('orden', i)
                         }
                         
                         let slidesAct = JSON.parse(localStorage.getItem("slidesEnSesion"))
                              setOrdenPrueba(registrosCard)
                              setSlides(slidesAct)
                              
                    }
               }, null);
          });
          
     }


     const imprimeSelectSesiones = () =>{
          const tamSesiones = localStorage.getItem("sesionesEnProyecto")
          //console.log("tamSesiones: " + tamSesiones)

          if(tamSesiones == null || tamSesiones == "" || !tamSesiones){
               return(
                    <option className='ADT_cont-cards-select-inp-item' value="">No hay sesiones</option>
               )
          }else if( tamSesiones.length > 0 || tamSesiones != null){               
               let sesionesEnElProyecto = JSON.parse(localStorage.getItem("sesionesEnProyecto"))
               let sesiones = []
               const numAscending = [...sesionesEnElProyecto].sort((a, b) => a.sesion - b.sesion);
               numAscending.map( (item,index) =>{
                    sesiones.push(<option className='ADT_cont-cards-select-inp-item' key={index} value={item.sesion}> {item.sesion}</option>)
               } )
               return sesiones     
          }
          
          else {
               return(<option className='ADT_cont-cards-select-inp-item' value="">No hay sesiones</option>)
          }
          

     }

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


     const actualizaArregloSlides =()=>{
          console.log("ACTUALIZA ARREGLO SLIDES")
     }

     const controls = useDragControls()
     

  return (
     <>
          <AppBar />
          <div id='ADT_cont' className='ADT_cont' >
               <header id='ADT_header' className='ADT_cont-header' > 
                    <img src="./assets/logos/logo.png" 
                         className="ADT_cont-header-logo" 
                         alt=""
                         onClick={ () => regresaMenu() }
                    />
                    <div> 
                         <div> Productos cartográficos </div>
                         <div> Instructor de operativos especiales</div>
                    </div>
                    <div> Tarjeta usuario </div>
               </header>
               <div id='ADT_contenido' className='grid grid-cols-5  gap-4 w-screen' > 
                    
                    <div className='bg-gray-900   ADT_cont-cards col-start-1 col-span-1 ' >
                         <div className='ADT_cont-cards-select'>
                              {
                                   existeSesiones ?
                                        <>
                                             {
                                                  nuevaSesion ?(
                                                       <div className='addSesionInitial' >
                                                            <div className='txtAddSesion' >Ingresa el número de sesión</div>
                                                            <input 
                                                                 type="number" 
                                                                 name="addSesion"
                                                                 className='inputAddSesion'
                                                                 onKeyUp={ e => esEnter(e)  }                                             
                                                            />
                                                            <div
                                                                 onClick={ () => setNuevaSesion(false) }     
                                                                 >[ X ]
                                                            </div>
                                                       </div>
                                                  )
                                                  :
                                                  (
                                                       <>
                                                       <select  
                                                            className='ADT_cont-cards-select-inp' 
                                                            onChange={ (e) => {  
                                                                 setSesion(e.target.value)  
                                                                 setSlideSelected({})
                                                                 setSlides([])
                                                            } }
                                                            value={
                                                                 sesion
                                                            }
                                                            >
                                                            { imprimeSelectSesiones()}
                                                       </select>
                                                       <div 
                                                            className='ADT_cont-cards-select-add'
                                                            onClick={ () => setNuevaSesion(true) }
                                                            >
                                                            <i className="fa-solid fa-circle-plus "></i>
                                                       </div>
                                                       <div className='ADT_cont-cards-select-add'>
                                                            <i className="fa-solid fa-circle-plus "></i>
                                                       </div>
                                                       </>
                                                  )
                                             }
                                             
                                        </>
                                        :    
                                        <div className='addSesionInitial' >
                                             <div className='txtAddSesion' >Ingresa el número de sesión</div>
                                             <input 
                                                  type="number" 
                                                  name="addSesion"
                                                  className='inputAddSesion'
                                                  onKeyUp={ e => esEnter(e)  }                                             
                                             />
                                        </div>
                              }



                              




                         </div>
                         
                         <Reorder.Group axis='y' layoutScroll values={ slides } onReorder={ (  setSlides   ) } className='ADT_cont-cards-despl' >
                              
                              {
                                   slides != null && slides ==25 ?
                                        slides.map( (slide, index) => {
                                             return(     
                                                  <Reorder.Item 
                                                       custom={{ delay: (index + 1) * 5.7 }}
                                                       variants={ variants }
                                                       initial='hidden'
                                                       animate='visible'
                                                       layoutId={ index }
                                                       key={index} 
                                                       layout
                                                  >                                             
                                                  <motion.div 
                                                       className={ slideSelected.id == slide.id  ? 'CardCont slideSelected' : 'CardCont ' }
                                                       onClick={ () => { 
                                                            setSlideSelected({
                                                                 id : slide.id,
                                                                 nombre: slide.nombre
                                                            }) 
                                                            setEdicion(false)
                                                            setPlantillaSeleccionada(slide.plantilla)
                                                            cargaValoresSlide(slide.id)
                                                            console.log('slideSelected', slideSelected.id)
                                                       } }
                                                  >
                                                       <div className='CardCont-Tipo' onPointerDown={(e) => controls.start(e)} > </div>
                                                       <div className='CardCont-Tipo-Info' >
                                                            <div className='CardCont-Tipo-Info-Name' >{slideSelected.id == slide.id ? slideSelected.nombre : slide.nombre }</div>
                                                            <div className='CardCont-Tipo-Info-icons' >
                                                                 <div className='CardCont-Tipo-Info-icons-ico'><i className='fa-duotone fa-calendar-check CardCont-ico '></i></div>
                                                                 <div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-outdent CardCont-ico "></i></div>
                                                                 <div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-message-check CardCont-ico "></i></div>
                                                                 <div className='CardCont-Tipo-Info-icons-order idExplode'>{slide.id}</div>
                                                            </div>
                                                       </div>
                                                  </motion.div>
                                                  </Reorder.Item>
                                                  
                                             )
                                        }
                                        )
                                        :
                                        <h2>No hay slides</h2>

                              }
                              
                         </Reorder.Group>
                         
                    </div>
                    <div className='   h-full col-start-2 col-span-2 ' >
                                                                                                        { ordenPrueba ?  <PruebaOrder /> : null }
                         <Visor/>
                    </div>
                    <div className=' h-full end col-span-2 ' >
                    {
                         existeSesiones && !modalTipoSlide && sesion && slideSelected.id ?    <InfoGestionSlide/>
                         : 
                              existeSesiones &&  sesion ?
                                   <>
                                        <div className='textoCentrado' >
                                             <div>     Selecciona o crea un slide para continuar</div>
                                        <br/>
                                        <div 
                                             className="areaTrabajo-cont-gestion-btn btn-gestion btn-nuevoSlide quitarMarginTop"
                                             onClick={() => setModalTipoSlide(true)}
                                        >Nuevo slide</div>
                                        </div>
                                        
                                   </>
                              :
                                   existeSesiones && !sesion ?
                                        <div className='textoCentrado' >Selecciona una sesión para continuar</div>
                                        :
                                             <div className='textoCentrado'   >Agrega una sesión para continuar</div>
                              

                         
                         
                    }
                    </div>
                    {
                         modalTipoSlide ?  <CatalogoSlides setModalTipoSlide={setModalTipoSlide} /> : null
                    }
                         
                                         

               </div>
          </div>
     </>
  )
}

export default AreaDeTrabajo