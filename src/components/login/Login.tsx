import React from 'react'
import AppBar from '../AppBar/AppBar';
import './Login.css';

const Login = () => {
  return (
      <div>
        <AppBar />
        <div className="login">
          <div>
          <div>{/*<img src="./images/app/logo_inegi.png" className="login-logoINEGI" alt="Logo iniegi"></img>*/}</div>
          
          <div className="login-inputs-section" >
            <div  className="login-inputs-txt">Usuario</div>
            <input  type="text"></input>
          </div>
          
          <div className="login-inputs-section" >
            <div className="login-inputs-txt">Contraseña</div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"  type="password"></input>
          </div>
            <div className="login-inputs-btn">Ingresar</div>
          


          </div>
        </div>
      </div>
  )
}

export default Login 