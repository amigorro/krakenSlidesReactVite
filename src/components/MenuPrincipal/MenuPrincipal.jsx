import React, { useState } from 'react'
import './Despliegue.css'
import AppBar from '../AppBar/AppBar';
import NuevoProyecto from '../Despliegue/NuevoProyecto';
import ProyectosActivos from '../Despliegue/ProyectosActivos';
import ProyectosArchivados from '../Despliegue/ProyectosArchivados';
import {
     BrowserRouter ,     
     Route,
     Routes,
     Link,
     NavLink,
     Outlet
} from "react-router-dom";



const MenuPrincipal = ({setModulo}) => {
     return (
          <>
               <AppBar />
               <BrowserRouter>                
                    <div id="proyectos" className="cntProyectos" >
                         <div className="cntProyectos-menu" >
                              <div className="cntProyectos-menu-cntlogo">
                                   <img  src="../../../assets/logos/logo.png" className="cntProyectos-menu-logoKrk" alt=""></img>
                              </div>
                              <div>
                                   <div className="cntProyectos-menu-cont" >
                                        <section className="cntProyectos-menu-cont-section1">
                                             <div className="cntProyectos-menu-cont-tlt" >Proyectos</div>

                                             <NavLink to="/nuevo">
                                                  <div className="cntProyectos-menu-cont-reg" id="menu-nuevoPry" >
                                                       <div id="ico_opNew" className="cntProyectos-menu-cont-reg-ico icolor">
                                                            <i className="fa-duotone fa-folder-plus"></i></div>
                                                       <div className="cntProyectos-menu-cont-reg-txt" >Nuevo proyecto</div>
                                                  </div>
                                             </NavLink>
                                             <NavLink to="/activos">
                                                  <div className="cntProyectos-menu-cont-reg"><div className="cntProyectos-menu-cont-reg-ico"><i className="fa-duotone fa-folder-open"></i></div><div className="cntProyectos-menu-cont-reg-txt">Proyectos Activos</div></div>
                                             </NavLink>
                                             <div className="cntProyectos-menu-cont-reg cntProyectos-menu-cont-regBorderB"><div className="cntProyectos-menu-cont-reg-ico"><i className="fa-duotone fa-box-archive"></i></div><div className="cntProyectos-menu-cont-reg-txt">Archivados</div></div>

                                        </section>
                                        <div className="cntProyectos-menu-cont-reg"><div className="cntProyectos-menu-cont-reg-ico"><i className="fa-duotone fa-clouds"></i></div> <div className="cntProyectos-menu-cont-reg-txt">Nube</div> </div>
                                        <div className="cntProyectos-menu-cont-reg"><div className="cntProyectos-menu-cont-reg-ico icolor"><i className="fa-duotone fa-gears"></i></div> <div className="cntProyectos-menu-cont-reg-txt">Configuración</div></div>
                                        <div className="cntProyectos-menu-cont-reg cntProyectos-menu-cont-regBorderB"><div className="cntProyectos-menu-cont-reg-ico"><i className="fa-duotone fa-power-off"></i></div><div className="cntProyectos-menu-cont-reg-txt">Salir</div></div>
                                   </div> 
                              </div>
                         </div>
                    </div>

                    <div className="cntProyectos-despliegue">
                                   
                              <Routes>      
                                   <Route path='/' element={<ProyectosActivos setModulo={setModulo} />} />              
                                   <Route path='/nuevo' element={<NuevoProyecto />} />
                                   <Route path='/activos' element={<ProyectosActivos setModulo={setModulo} />} />                             
                              </Routes>   
                    </div>

                         {/*}
                         <div className="version" >
                              <div className="version-app">
                                   <div className="version-kraken"> KrakenSlides </div>
                                   <div id="dat_version" >3.2.0</div> 
                              </div>
                              <div id="dat_fechaVersion" className="version-fecha" >[05-Sep-2022]</div>
                         </div>
                         */}
                    </BrowserRouter>
          </>
     )
}

export default MenuPrincipal