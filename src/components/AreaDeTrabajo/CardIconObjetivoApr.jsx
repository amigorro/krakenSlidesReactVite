import React, {useContext, useEffect,useState} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const CardIconObjetivoApr = ({id2}) => {
     const [iconito, setIconito] = useState('');
     const {
          idUsuario,idProyectoActual,sesion,slides, 
     } = useContext(ContextAreaDeTrabajo);

     let identificadorTipo='';
     let iconoTipo='';     

     useEffect( () =>{
          buscaRegistroEnBD();          
     },[]);

     const buscaRegistroEnBD = () => {
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM ObjetivoApr WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idUsuario,idProyectoActual,sesion,id2], function(tx, results) {
                    
                    let len = results.rows.length ;
                    console.log("llegamos al select:"+idUsuario,idProyectoActual,sesion,id2,len)
                    if(len > 0){
                         console.warn("PERROOOOOOO")
                         if( results.rows.item(0).contenido ){
                              
                              setIconito('<i className="fa-duotone fa-outdent CardCont-ico "></i>')
                         } else {
                              setIconito(' ');
                         }
                    } else {
                         setIconito(' ');
                    }
                    
               }, null);
          });
     }



  return (
     <div className='CardCont-Tipo-Info-icons-ico'>{ iconito }</div>
  )
}
