import React from 'react'
import './AreaDeTrabajo.css'
import AppBar from '../AppBar/AppBar'
import Cardpry from './Cardpry'
import Visor from './Visor'

const AreaDeTrabajo = () => {
  return (
     <>
          <AppBar />
          <div id='ADT_cont' className='ADT_cont' >
               <header id='ADT_header' className='h-16 bg-slate-900 w-screen text-slate-500' > 
                    <img src="" alt="" />
                    <div> Info Proyecto </div>
                    <div> Tarjeta usuario </div>
               </header>
               <div id='ADT_contenido' className='grid grid-cols-5  gap-4 w-screen' > 
                    <div className='bg-gray-900   ADT_cont-cards col-start-1 col-span-1 ' >
                         <div>
                              sesion 1
                         </div>
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
                    <div className='   h-full col-start-2 col-span-2 ' >
                         <Visor/>
                    </div>
                    <div className=' h-full end col-span-2 ' >c</div>
               </div>
          </div>
     </>
  )
}

export default AreaDeTrabajo