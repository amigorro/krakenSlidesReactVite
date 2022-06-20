import React from 'react'
import './Cardpry.css'

const Cardpry = () => {
  return (
    <div className='CardCont' >
          <div className='CardCont-Tipo'>TS</div>
          <div className='CardCont-Tipo-Info' >
               <div className='CardCont-Tipo-Info-Name' >Nombre del slide</div>
               <div className='CardCont-Tipo-Info-icons' >
                    <div className='CardCont-Tipo-Info-icons-ico' >ic</div>
                    <div className='CardCont-Tipo-Info-icons-ico'>ic</div>
                    <div className='CardCont-Tipo-Info-icons-ico'>ic</div>
                    <div className='CardCont-Tipo-Info-icons-order'>1</div>
               </div>
          </div>
    </div>
  )
}

export default Cardpry