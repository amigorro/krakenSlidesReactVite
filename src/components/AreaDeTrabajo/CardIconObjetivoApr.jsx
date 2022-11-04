import React, {useContext, useEffect,useState} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const CardIconObjetivoApr = ({id2}) => {
     const [iconito, setIconito] = useState(false);
     const {
          idUsuario,idProyectoActual,sesion,slides, 
     } = useContext(ContextAreaDeTrabajo);
    

     useEffect( () =>{
          buscaRegistroEnBD();          
     },[]);

     const buscaRegistroEnBD = () => {
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM ObjetivoApr WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idUsuario,idProyectoActual,sesion,id2], function(tx, results) {
                    
                         if( results.rows.item(0).contenido ){
                              
                              setIconito(true)
                         } else {
                              setIconito(false);
                         }
                    
               }, null);
          });
     }



  return (
     <div className='CardCont-Tipo-Info-icons-ico'>{ iconito && <i className="fa-duotone fa-outdent CardCont-ico "></i> }</div>
  )
}
