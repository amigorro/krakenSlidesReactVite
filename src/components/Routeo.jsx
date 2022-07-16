import React, { useState } from 'react'
import { ContextAreaDeTrabajo } from '../context/ContextAreaDeTrabajo'
import AreaDeTrabajo from './AreaDeTrabajo/AreaDeTrabajo'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'

const Routeo = () => {
  
     const [modulo, setModulo] = useState("MenuPrincipal")
     const [idProyectoActual, setIdProyectoActual] = useState({})
     const [idUsuario, setIdUsuario] = useState(1)
     const [sesion, setSesion] = useState(1)

     const dirigir = ()=>{
          console.log("jello")
         
          
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
                              sesion, setSesion
                         }}>
                         { dirigir() } 
               </ContextAreaDeTrabajo.Provider>
          </>
  )
}

export default Routeo