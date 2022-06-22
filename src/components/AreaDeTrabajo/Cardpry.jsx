import React from 'react'
import './Cardpry.css'

const Cardpry = () => {
  return (
    <div className='CardCont' >
          <div className='CardCont-Tipo'> </div>
          <div className='CardCont-Tipo-Info' >
               <div className='CardCont-Tipo-Info-Name' >Nombre del slide</div>
               <div className='CardCont-Tipo-Info-icons' >
                    <div className='CardCont-Tipo-Info-icons-ico' ><i className='fa-duotone fa-calendar-check CardCont-ico '></i></div>
                    <div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-outdent CardCont-ico "></i></div>
                    <div className='CardCont-Tipo-Info-icons-ico'><i className="fa-duotone fa-message-check CardCont-ico "></i></div>
                    <div className='CardCont-Tipo-Info-icons-order'>1</div>
               </div>
          </div>
    </div>
  )
}

export default Cardpry