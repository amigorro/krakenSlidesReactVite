import React from 'react'
import AppBar from '../AppBar/AppBar';
import './Login.css';
import LoginValidate from '../LoginValidate/LoginValidate';
import { render } from 'react-dom';

const Login = () => {

  const [loginok, setLoginok] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const validaDatos = async (e) => { 
    e.preventDefault();
    //const form = e.target;

    console.log(`${ user } - ${ pass }`);
    
    if (user === 'admin' && pass === 'admin') {
      console.log('Login ok - Es damin');
    }
    else if (!user.trim()  || !pass.trim()  ) {
      setLoginok(false);
      console.log('Login off - No se ingreso ningun dato');
      
    }
    else if( user.trim()  && pass.trim()  ) {
      console.log("Ya se armó");
      setLoginok(true);

    } 


    

  }



  return (
      <div>
        <AppBar />
        <form className="login">
          <div className="login-inputs">
          <div><img src="../assets/logos/logo_inegi.png" className="login-logoINEGI" alt="Logo iniegi"></img></div>
          <div><img src="../assets/logos/logo.png" className="login-inputs-logo" alt="Logo iniegi"></img></div>
          
          <div className="login-inputs-section" >
            <div  className="login-inputs-txt">Usuario</div>
            <input  
                type = "text"
                spellCheck = "false"
                className = "login-inputs-inp"
                onChange={(e)=>setUser(e.target.value)}
            ></input>
          </div>          
          <div className="login-inputs-section" >
            <div className="login-inputs-txt">Contraseña</div>
            <input 
                className="login-inputs-inp"  
                type="password"
                onChange={(e)=>setPass(e.target.value)}
            >
            </input>
          </div>
            <button className="login-inputs-btn" 
                    type="submit" 
                    onClick={ validaDatos  }  
            >Ingresar</button>
          
          </div>
        </form>

        <LoginValidate />
        <div className="login-version"><i className="fa-brands fa-octopus-deploy"></i> Kraken Slides v2.3.0</div>

      </div>
  )
}

export default Login 




