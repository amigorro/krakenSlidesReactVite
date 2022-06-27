import React, { useState } from 'react'
import AreaDeTrabajo from './AreaDeTrabajo/AreaDeTrabajo'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'

const Routeo = () => {
  
     const [modulo, setModulo] = useState("MenuPrincipal")
  
     
     const dirigir = ()=>{
          console.log("jello")
         

          switch (modulo){
               case "MenuPrincipal":     
                    return <MenuPrincipal setModulo={setModulo} />
               break;
               case "AreaTrabajo":
                    return <AreaDeTrabajo setModulo={setModulo}/>
               break;

          }


     }


     return (
          <> { dirigir() } </>
  )
}

export default Routeo