import React from 'react'

const NuevoProyecto = () => {
  return (
          <div className="nuevoProyecto" >
            <div className="nuevoProyecto-marcoCont">
              
              <div className="nuevoProyecto-tlt"><i className="fa-duotone fa-folder-plus headerProyectos-secButtons-item-icon"></i> Nuevo Proyecto</div>
              <hr className="nuevoProyecto-tlt-hr"/>
            </div>
            <div className="nuevoProyecto-marcoContDesp" >
              <div className="nuevoProyecto-Cname" >
                <div className="nuevoProyecto-nombre">Nombre del curso:</div>                
                <input id="np_nombre" type="text" spellCheck="false"  className="nuevoProyecto-nombre-input2 input"/>
              </div>
              
              <div className="nuevoProyecto-Cname" >
                <div className="nuevoProyecto-nombre">Proyecto:</div>
                <select id="np_mega" name="pyg"  className="nuevoProyecto-nombre-input select" >
                  <option value="0">- Selecciona -</option>
                  <option value="5">Censo de Población y Vivienda 2020</option>
                  <option value="6">Encuesta Intercensal 2025</option>                            
                  <option value="6">Censo Agropecuario</option>
                </select>
              </div>
              <div className="nuevoProyecto-Cname">
                <div className="nuevoProyecto-nombre">Figura / puesto:</div>
                <select id="np_puesto" name="pyg" className="nuevoProyecto-nombre-input select" >
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
                  <div id="crearProyecto" className="boton1">Crear proyecto</div>
                  <div id="pryCancel" className="boton1" >Cancelar</div>
              </div>
              <div className="np_despVal" ></div>
            </div>
          </div>
  )
}

export default NuevoProyecto