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
          ordenPrueba, setOrdenPrueba
     } = useContext(ContextAreaDeTrabajo);

     /**
      * <Reorder.Group values={items} onReorder={setItems}>
              {items.map(item => (
                <Reorder.Item key={item} value={item}>
                  {item}
                </Reorder.Item>
              ))}
            </Reorder.Group>
      * 

               IDEA PARA RESOLVER ESTE PEDO:
                    Generar un arreglo con los id de los slides de la sesión 
                    mapearlos con el reorder.group
                    Imprmir en el motion.div un nuevo componente al que le pasaremos el IS del slide para que generae los onClick e incluir los estados como el título para que reaccione al input de la captura en gestión.
                         Ojo buscar los datos del slide en otro estado que ya exista, este arreglo será un nuevo estado 



      */
          
     useEffect( () =>{            
          ImprimeTarjetasOrdenables();   
          
     }, [ordenPrueba]  )


     const propsCardSlide = (id) =>{
          let nombreSlide = "";
          
          slides.forEach(slide =>{ 
               
               if(slide.id === id){
                    nombreSlide = slide.nombre;
                    console.warn(slide.id+" | "+id+" SON IGUALES "+slide.nombre)
                    return nombreSlide;
               } 
           })
           
     }
     const folito = () =>{
          return (<div>hola</div>)
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
                                        layout
                                        value={item}
                                   >                    
                                        
                                        <motion.div 
                                             className={  slideSelected.id == item  ? 'CardCont slideSelected' : 'CardCont ' }
                                             onClick={ () => {                                              
                                                  setSlideSelected({
                                                       id : item
                                                  }) 
                                                  setEdicion(false)
                                                  //cargaValoresSlide(item)
                                                  
                                                  slides.map( (slide, index) => {
                                                       if(slide.id === item){                    
                                                            setPlantillaSeleccionada(slide.plantilla)
                                                       }
                                                  })



                                             } }
                                        >
                                             <div className='CardCont-Tipo'  > </div>
                                             <div className='CardCont-Tipo-Info' >
                                                  <div className='CardCont-Tipo-Info-Name' > <CardNombreSlide id={item} /> </div>
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




