
import {useContext} from 'react';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo'

export const ObjetoRespuestaRadioG = ( params ) => {
  
  const {
    slideSelected,idProyectoActual,
    resp1, setResp1,
    valResp1, setValResp1,
  } = useContext(ContextAreaDeTrabajo); 

  const actualizaResp = (e) => {
    let variableDb = '';
    switch (params.numObj){
      case "1":
        variableDb = 'txt01_respuesta';
        break;
      case "2":
        variableDb = 'txt02_respuesta';
        break;
      case "3":
        variableDb = 'txt03_respuesta';
        break;
      case "4":
        variableDb = 'txt04_respuesta';
        break;
      case "5":
        variableDb = 'txt05_respuesta';
        break;
      case "6":
        variableDb = 'txt06_respuesta';
        break;
      case "7":
        variableDb = 'txt07_respuesta';
        break;
      case "8":
        variableDb = 'txt08_respuesta';
        break;
    }


    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
    db.transaction(function(tx) {
         tx.executeSql(`UPDATE TBL_RESPUESTA SET ${variableDb} = ? WHERE slide = ?  AND id_proyecto = ? `, [e,slideSelected.id,idProyectoActual], function(tx, results) {                         
         }, null);
    });
  }
  

  return (
      <div>
          <div>Respuesta {  params.numObj  }:</div> { params.elim=='true' && <div>trash</div> }
          <input 
            type="text" 
            onChange={ (e) => { actualizaResp(e.target.value) } }
          /> 
          
      </div>
  )
}



/**
 * ! BORRAR este componente, es solo para referencia
 * 
 */
export const ObjSld_imagen8 = (props) => {
  const inputRefimg8 = useRef(null);     
  const {
       slideSelected,sesion,idProyectoActual,idUsuario,urlImg8, setUrlImg8,
  } = useContext(ContextAreaDeTrabajo); 

  const resetImage = (numImage) => {          
       let url = `./../../logos/image_icon.png`
       let idImage=''
       setUrlImg8(url); 
       idImage='imagen8'
       
       const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
            db.transaction(function(tx) {
                 tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
                 }, null);
            });
  }


  const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
       return new Promise(function(resolve, reject){               
            const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
            db.transaction(function(tx) {
                 tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                      let carpeta = idProyectoActual;
                      let url='';
                      if( results.rows.item(0).imagen8 =='image.png' ){
                           url = `./../../logos/image_icon.png?${new Date().getTime()}`
                      } else{
                           url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen8}?${new Date().getTime()}`
                      }
                      setUrlImg8(url)
                      resolve("ok")
                 }, null);
            });
       })
  }

  return (
       <div className='contImagen' >
            <div>
                 <div>Imagen 8: { props.elim == "true" && <div onClick={ () => resetImage(8,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
                 <input
                      id="input-imagen8"
                      type="file"
                      ref={inputRefimg8}
                      className="input-imagen"
                      onChange={(e) => {                                   
                                moverDesdeInput(inputRefimg8, slideSelected.id+'-i8',idProyectoActual,slideSelected.id,idProyectoActual,'i8')
                                .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                           }
                      }
                 />
                 <label htmlFor="input-imagen8"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg8 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
            </div>
            <div className='previewImg' ><img src={ urlImg8 } id="imgSlide8"  className="img-prev" /></div>               
       </div>
  )
}