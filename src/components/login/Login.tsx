import React from 'react'
import AppBar from '../AppBar/AppBar';
import './Login.css';

const Login = () => {
  return (
      <div>
        <AppBar />
        <div className="login">
          <div className="login-inputs">
          <div><img src="../assets/logos/logo_inegi.png" className="login-logoINEGI" alt="Logo iniegi"></img></div>
          <div><img src="../assets/logos/logo.png" className="login-inputs-logo" alt="Logo iniegi"></img></div>
          
          <div className="login-inputs-section" >
            <div  className="login-inputs-txt">Usuario</div>
            <input  
                type = "text"
                spellCheck = "false"
                className = "login-inputs-inp"
            ></input>
          </div>
          
          <div className="login-inputs-section" >
            <div className="login-inputs-txt">Contraseña</div>
            <input 
                className="login-inputs-inp"  
                type="password"
            >
            </input>
          </div>
            <div className="login-inputs-btn">Ingresar</div>
          


          </div>
        </div>

        <div className="login-msgErr" ><i className="fa-solid fa-siren-on login-icoValid "></i> No se obtuvo respuesta del servidor, por favor revisa que te encuentres en red INEGI e intenta de nuevo.</div>
        <div className="login-version"><i className="fa-brands fa-octopus-deploy"></i> Kraken Slides v2.3.0</div>

      </div>
  )
}

export default Login 




