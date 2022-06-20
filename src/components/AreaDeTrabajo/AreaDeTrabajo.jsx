import React from 'react'
import './AreaDeTrabajo.css'
import AppBar from '../AppBar/AppBar'

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
               <div id='ADT_contenido' > Contenido </div>
          </div>
     </>
  )
}

export default AreaDeTrabajo