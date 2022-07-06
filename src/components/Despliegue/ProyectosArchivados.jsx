import React, { useState, useEffect } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'
import './ProyectosArchivados.css'


const ProyectosArchivados = () => {

     const [archivados, setArchivados] = useState([])
     

     useEffect( () =>{
           console.log("Render Archivados [useEffect] ")               
           obtenerRegistrosArchivados(1)
     }, []  )

     const obtenerRegistrosArchivados = async (id_usuario) =>{
          //
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM "APP_PROYECTOS" INNER JOIN "TBL_FIGURA" ON APP_PROYECTOS.id_figura = TBL_FIGURA.id_figura AND APP_PROYECTOS.status=2 AND APP_PROYECTOS.id_usuario = ?', [id_usuario], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    console.log("len: " + len)
                    if(len > 0){
                         let archivados = []
                         for (i = 0; i < len; i++){
                              if (i==0){localStorage.removeItem("proyectosArchivados");}
                              archivados.push(results.rows.item(i))
                              pry={
                                   id: results.rows.item(i).id_proyecto,
                                   nombre: results.rows.item(i).nombre_proyecto,
                              }
                              GuardarEnStorage('proyectosArchivados', pry)
                         }
                         
                         let proyectosArch = JSON.parse(localStorage.getItem("proyectosArchivados"))
                         setArchivados(proyectosArch)
                    }
               }, null);
          });
          
     }


     return (
          <div className='despPryCont'>
        <div  className='despPryCont-tlt'> Proyectos archivados </div>
        <div className='contRegistros' >
            <ul className='regArchivado'>
                {
                    
                  archivados != null ?
                  archivados.map( proy =>{
                        return(
                            <li className='regArchivadoItem' key={proy.id} >
                                <div className='regArchivadoItem-info'>
                                    <div className='regArchivadoItem-info-pry' >{proy.nombre.length > 70 ? proy.nombre.substring(0, 70)+"..." :  proy.nombre}</div>
                                    <div className='regArchivadoItem-info-puesto'>{proy.puesto}</div>
                                </div>
                                <div className='regArchivadoItem-fecha' >{proy.fecha}</div>
                                <div className='regArchivadoItem-btns'>
                                    <div><i className="fa-solid fa-trash-can"></i></div>
                                    <div><i className="fa-solid fa-heart-pulse"></i></div>
                                </div>
                            </li>
                            
                        )
                    
                    })
                    
                    :                  

                    <div>
                        <h2>No hay proyectos archivados</h2>
                        
                    </div>
                }
            </ul>
        </div>
    </div>
  )
}

export default ProyectosArchivados