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
                              edicion, setEdicion
                         }}>
                         { dirigir() } 
               </ContextAreaDeTrabajo.Provider>
          </>
  )
}

export default Routeo