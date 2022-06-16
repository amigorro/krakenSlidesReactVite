import React from 'react'
import './LoginValidate.css';

const LoginValidate = () => {
   
    return (
      <>
        <div className="login-msgErr" >
            <i className="fa-solid fa-siren-on login-icoValid "></i> 
            No se obtuvo respuesta del servidor, por favor revisa que te encuentres en red INEGI e intenta de nuevo.
        </div>
     </>
    )
  
  
}

export default LoginValidate