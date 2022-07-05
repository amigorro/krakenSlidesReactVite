import React from 'react'
import './AreaDeTrabajo.css'
import AppBar from '../AppBar/AppBar'
import Cardpry from './Cardpry'
import Visor from './Visor'
import InfoGestionSlide from './InfoGestionSlide'
import Routeo from '../Routeo'

const AreaDeTrabajo = ({setModulo}) => {
  
     const regresaMenu = ()=>{
          setModulo("MenuPrincipal")
          return(<Routeo/>)
     }
  
  
  
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
                              <select  className='ADT_cont-cards-select-inp' >
                                   <option value="1" className='ADT_cont-cards-select-inp-item'>Sesión 1</option>
                                   <option value="2" className='ADT_cont-cards-select-inp-item'>Sesión 2</option>
                                   <option value="3" className='ADT_cont-cards-select-inp-item'>Sesión 3</option>
                                   <option value="4" className='ADT_cont-cards-select-inp-item'>Sesión 4</option>
                              </select>
                              <div className='ADT_cont-cards-select-add'>
                                   <i className="fa-solid fa-circle-plus "></i>
                              </div>
                         </div>
                         <div className='ADT_cont-cards-despl' >
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                              <Cardpry />
                         </div>
                    </div>
                    <div className='   h-full col-start-2 col-span-2 ' >
                         <Visor/>
                    </div>
                    <div className=' h-full end col-span-2 ' >
                         <InfoGestionSlide/>
                    </div>
               </div>
          </div>
     </>
  )
}

export default AreaDeTrabajo