import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NuevoProyecto = () => {

  const[invalido,setInvalido] = useState(false)
  const navegar = useNavigate();

  const validaInfo = (e)=>{
    e.preventDefault();
    const nombrePr =e.target.inpNmbPry.value;
    const megaPr =  e.target.megaProyecto.value;
    const puesto =  e.target.figura.value;

    if ( nombrePr =="" || megaPr==0 || puesto==0 ) {
      setInvalido(true)
      console.log("nel")
    } else{
      console.log("ok")
      setInvalido(false)
      guardaProyecto(nombrePr, megaPr, puesto)
    }
  }

  const guardaProyecto =(nombrePr, megaPr, puesto)=>{
    return new Promise(function (resolve, reject) {
      var db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);	
      
      db.transaction(function(tx) {
          tx.executeSql(` insert or ignore into APP_PROYECTOS values(null,"${nombrePr}",1,"01-01-2020","${puesto}","${megaPr}",1); `);
          resolve("ok act1")
      },  function (error) {
            console.log('guardaProyecto: ' + error.message);
          }, function () {
                navegar("/activos")
             });
  });
  }









  return (
          <div className="nuevoProyecto" >
            <div className="nuevoProyecto-marcoCont">
              
              <div className="nuevoProyecto-tlt"><i className="fa-duotone fa-folder-plus headerProyectos-secButtons-item-icon"></i> Nuevo Proyecto</div>
              <hr className="nuevoProyecto-tlt-hr"/>
            </div>
            <div className="nuevoProyecto-marcoContDesp" >
              <form onSubmit={(e) => validaInfo(e) }>
              <div className="nuevoProyecto-Cname" >
                <div className="nuevoProyecto-nombre">Nombre del curso:</div>                
                <input id="np_nombre" name="inpNmbPry" type="text" spellCheck="false"  className="nuevoProyecto-nombre-input2 input"/>
              </div>
              
              <div className="nuevoProyecto-Cname" >
                <div className="nuevoProyecto-nombre">Proyecto:</div>
                <select id="np_mega" name="megaProyecto"  className="nuevoProyecto-nombre-input select" >
                  <option value="0">- Selecciona -</option>
                  <option value="5">Censo de Población y Vivienda 2020</option>
                  <option value="6">Encuesta Intercensal 2025</option>                            
                  <option value="6">Censo Agropecuario</option>
                </select>
              </div>
              <div className="nuevoProyecto-Cname">
                <div className="nuevoProyecto-nombre">Figura / puesto:</div>
                <select id="np_puesto" name="figura" className="nuevoProyecto-nombre-input select" >
                  <option value="0">- Selecciona -</option>
                  <optgroup label="Enumeración">
                      <option value="1">Líder de proyecto [LP]</option>
                      <option value="2">Coordinador de Zona [CZ]</option>
                      <option value="3">Coordinador municipal [CM]</option>
                      <option value="4">Entrevistador de Cuestionario Básico [ECB]</option>
                  </optgroup>
                  <optgroup label="Verificación">
                      <option value="5">Responsable de verificación [RV]</option>
                      <option value="6">Verificador [V]</option>                  
                  </optgroup>
                </select>
              </div>
              
              <div className="nuevoProyecto-botones">
                  <input id="crearProyecto" className="boton1" type="submit" value="Crear proyecto" />      
                  
              </div>
              <div className="np_despVal" > { (invalido==true) ? <h2>Se deben llenar todos los campos</h2> : "" } </div>
              </form>
            </div>
          </div>
  )
}

export default NuevoProyecto