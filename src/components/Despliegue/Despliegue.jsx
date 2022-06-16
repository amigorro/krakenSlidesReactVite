import React from 'react'
import './Despliegue.css'
import AppBar from '../AppBar/AppBar'

const Despliegue = () => {
  return (
    <>
     <AppBar />
          <div id="proyectos" className="cntProyectos" >
               <div className="cntProyectos-menu" >
                    <div className="cntProyectos-menu-cntlogo">
                         <img  src="../../../assets/logos/logo.png" className="cntProyectos-menu-logoKrk" alt=""></img>
                    </div>
                    <div>
                         <div className="cntProyectos-menu-cont" >
                              <section className="cntProyectos-menu-cont-section1">
                                   <div className="cntProyectos-menu-cont-tlt" >Proyectos</div>
                                   <div className="cntProyectos-menu-cont-reg" id="menu-nuevoPry" ><div id="ico_opNew" className="cntProyectos-menu-cont-reg-ico icolor"><i className="fa-duotone fa-folder-plus"></i></div><div className="cntProyectos-menu-cont-reg-txt" >Nuevo</div></div>
                                   <div className="cntProyectos-menu-cont-reg"><div className="cntProyectos-menu-cont-reg-ico"><i className="fa-duotone fa-folder-open"></i></div><div className="cntProyectos-menu-cont-reg-txt">Activos</div></div>
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
               <div className="cntProyectos-despliegue-tlt">Proyectos:</div>
               <div className="despCardsPry" id="despCardsPry" >            </div>

               <div className="version" >
                    <div className="version-app">
                         <div className="version-kraken"> KrakenSlides </div>
                         <div id="dat_version" >3.2.0</div> 
                    </div>
                    <div id="dat_fechaVersion" className="version-fecha" >[05-Sep-2022]</div>
               </div>
          </div>
    

    </>
  )
}

export default Despliegue