import React from 'react'
import './Despliegue.css'
import AppBar from '../AppBar/AppBar'
import NuevoProyecto from './NuevoProyecto'
import ProyectosActivos from './ProyectosActivos'
import ProyectosArchivados from './ProyectosArchivados'
import {
     BrowserRouter ,     
     Route,
     Routes,
     Link,
     NavLink,
     Outlet
} from "react-router-dom";
import AreaDeTrabajo from '../AreaDeTrabajo/AreaDeTrabajo'
import MenuPrincipal from '../MenuPrincipal/MenuPrincipal'

const Despliegue = () => {
  return (
    <>
     <AppBar />
     <BrowserRouter>
          <MenuPrincipal/>
          {/*}
          <Routes>
               <Route path='/AreaTrabajo' element={<AreaDeTrabajo/>}  />                   
  </Routes>*/}
          
     </BrowserRouter>

    </>
  )
}

export default Despliegue