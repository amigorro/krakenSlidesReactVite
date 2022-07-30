import React, { useState } from 'react'
import { ContextAreaDeTrabajo } from '../context/ContextAreaDeTrabajo'
import AreaDeTrabajo from './AreaDeTrabajo/AreaDeTrabajo'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'

const Routeo = () => {
  
     const [modulo, setModulo] = useState("MenuPrincipal")
     const [idProyectoActual, setIdProyectoActual] = useState()
     const [idUsuario, setIdUsuario] = useState(1)
     const [sesion, setSesion] = useState(1)
     const [modalTipoSlide, setModalTipoSlide] = useState(false)
     const [slideSelected, setSlideSelected] = useState({})
     const [slides, setSlides] = useState([])
     const [edicion, setEdicion] = useState(false)
     const [plantillaSeleccionada, setPlantillaSeleccionada] = useState()

     /* Elementos de las plantillas */
     const [plnTitulo, setPlnTitulo] = useState('Titulo')
     const [plnTexto1, setPlnTexto1] = useState('Texto 1')
     const [valPlant_Titulo, setValPlant_Titulo] = useState('')
     const [valoresBDslide, setValoresBDslide] = useState({})
     const [ordenSlides, setOrdenSlides] = useState([])
     const [ordenPrueba, setOrdenPrueba] = useState([])
     

     /* Cronogramas */
     const [despCronograma, setDespCronograma] = useState(false)
     const [tipoCronograma, setTipoCronograma] = useState('off')

     const dirigir = ()=>{
          
          switch (modulo){
               case "MenuPrincipal":     
                    return <MenuPrincipal/>
               break;
               case "AreaTrabajo":
                    return <AreaDeTrabajo/>
               break;

          }
         
     }


     return (
          <> 
               <ContextAreaDeTrabajo.Provider 
                    value={{
                              modulo, setModulo, 
                              idProyectoActual, setIdProyectoActual,
                              idUsuario, setIdUsuario,
                              sesion, setSesion,
                              modalTipoSlide, setModalTipoSlide,
                              slideSelected, setSlideSelected,
                              slides,setSlides,
                              edicion, setEdicion,
                              plantillaSeleccionada, setPlantillaSeleccionada,
                              plnTitulo, setPlnTitulo,
                              valPlant_Titulo, setValPlant_Titulo,
                              valoresBDslide, setValoresBDslide,
                              ordenSlides, setOrdenSlides,
                              ordenPrueba, setOrdenPrueba,

                              despCronograma, setDespCronograma,
                              tipoCronograma, setTipoCronograma
                         }}>
                         { dirigir() } 
               </ContextAreaDeTrabajo.Provider>
          </>
  )
}

export default Routeo