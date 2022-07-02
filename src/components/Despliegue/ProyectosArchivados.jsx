import React, { useState, useEffect } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'
import './ProyectosArchivados.css'

const ProyectosArchivados = () => {
  
  const [archivados, setArchivados] = useState([])
  
  useEffect( () =>{
      console.log("Render Archivados")
      getDataProyectosArchivadosBD(1)
  }, []  )
  
  const getDataProyectosArchivadosBD = async (id_usuario) =>{	
      localStorage.removeItem("proyectosArchivados");
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function (tx) {
          //const query = `SELECT * FROM APP_PROYECTOS WHERE status=2 AND id_usuario=${id_usuario} ;`;
          const query = `SELECT * FROM "APP_PROYECTOS" INNER JOIN "TBL_FIGURA" ON APP_PROYECTOS.id_figura = TBL_FIGURA.id_figura AND APP_PROYECTOS.status=2 AND APP_PROYECTOS.id_usuario=${id_usuario}  `;
          


          tx.executeSql(query, [],function (tx, resultSet) {        
              let peli;
              for(var x = 0; x < resultSet.rows.length; x++) {                        
                      //setProyectos(proys => [...proyectos, resultSet.rows.item(x).nombre_proyecto] )
                      peli = {
                          id: resultSet.rows.item(x).id_proyecto,
                          nombre: resultSet.rows.item(x).nombre_proyecto,
                          puesto: resultSet.rows.item(x).nombre_figura,
                          fecha: resultSet.rows.item(x).fecha,
                      }
                      GuardarEnStorage("proyectosArchivados", peli )
              }
              
          })
          obtenerListadoProyectosArch()
      });
      
  } 

  const obtenerListadoProyectosArch = () =>{
    let proyectosArch = JSON.parse(localStorage.getItem("proyectosArchivados"))
    setArchivados(proyectosArch)
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