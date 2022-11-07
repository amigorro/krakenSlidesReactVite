import React, {useContext, useEffect,useState} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const CardIconCronograma = ({id2}) => {
     const [iconito, setIconito] = useState(false);
     const {
          idUsuario,idProyectoActual,sesion,slides, 
          modalGlosario,
     } = useContext(ContextAreaDeTrabajo);

     let icoObj2=<i class="fa-regular fa-calendar-clock CardCont-ico "></i>

     useEffect( () =>{
          buscaRegistroEnBD();          
     },[modalGlosario]);

     const buscaRegistroEnBD = () => {
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM TBL_CRONOGRAMA WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND id_slide = ?  ', [idUsuario,idProyectoActual,sesion,id2], function(tx, results) {
                    console.warn(`SELECT * FROM TBL_CRONOGRAMA WHERE id_usuario = ${idUsuario} AND id_proyecto = ${idProyectoActual} AND sesion = ${sesion}  AND id_slide = ${id2} `)	
                    let len = results.rows.length ;
                    console.log("llegamos al select GLOSARIO:"+idUsuario,idProyectoActual,sesion,id2,len)
                    if(len > 0){
                         console.warn("PERROOOOOOO")
                         if( results.rows.item(0).tipo ){
                              
                              setIconito(true)
                         } else {
                              setIconito(false);
                         }
                    } else {
                         setIconito(false);
                    }
                    
               }, null);
          });
     }



  return (
     <div className='CardCont-Tipo-Info-icons-ico'>{ iconito && icoObj2  }</div>
  )
}
