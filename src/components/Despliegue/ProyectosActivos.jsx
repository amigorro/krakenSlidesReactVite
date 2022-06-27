import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { select, insert, update,  deleteReg } from '../../querys.js'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage.jsx';
import {
    BrowserRouter ,     
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from "react-router-dom";
import './ProyectosActivos.css'
import Routeo from '../Routeo.jsx';

const ProyectosActivos = ({setModulo}) => {
    
    const [proyectos, setProyectos] = useState([])

    useEffect( () =>{
        console.log("iniciando este rollo")
        getDataProyectosBD()
    }, []  )

    const obtenerListadoProyectos = () =>{
        let proyectosAct = JSON.parse(localStorage.getItem("proyectosActivos"))
        setProyectos(proyectosAct)
    }

    const getDataProyectosBD = async (id_usuario) =>{	
        localStorage.removeItem("proyectosActivos");
        const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function (tx) {
            const query = "SELECT * FROM APP_PROYECTOS ;";
            tx.executeSql(query, [],function (tx, resultSet) {        
                let peli;
                for(var x = 0; x < resultSet.rows.length; x++) {                        
                        //setProyectos(proys => [...proyectos, resultSet.rows.item(x).nombre_proyecto] )
                        peli = {
                            id: resultSet.rows.item(x).id_proyecto,
                            nombre: resultSet.rows.item(x).nombre_proyecto                            
                        }
                        GuardarEnStorage("proyectosActivos", peli )
                }
                
            })
            obtenerListadoProyectos()
        });
        
    } 

    const abrirAreaDeTrabajo = (id) =>{
        setModulo("AreaTrabajo")
        return <Routeo/>
    }

    
  return (
    <div className='despPryCont' >
        <div className='despPryCont-tlt' >Proyectos activos</div>
        
        {
            proyectos != null ?
                    proyectos.map( proy =>{
                        return(

                            <div key={proy.id} className="cardpry" >
                                <div className="cardpry-img" ><img src="./assets/megaproyectos/pry_censo2020.png" alt="Censo2020" className="cardpry-img-pic" /></div>
                                <div className="cardpry-infoPry" >
                                    <div className="cardpry-name" >{
                                        
                                        proy.nombre.length > 70 ? proy.nombre.substring(0, 70)+"..." :  proy.nombre
                                    
                                    }</div>
                                    <div className="cardpry-figura">Líder de proyecto</div>
                                </div>
                                <div className="cardpry-footer" >
                                <div className="cardpry-footer-ss">
                                    <div>Sesiones: <span className="cardpry-footer-ss-b" id="ses_${row.id_proyecto}" >12</span></div>
                                    <div>Slides: <span className="cardpry-footer-ss-b" id="numSlides_${row.id_proyecto}" >1045</span></div>
                                    <div className="cardpry-footer-fecha" >Fecha</div>
                                </div>
                                <div className="cardpry-footer-buttons">
                                    <div className="cardpry-footer-buttons-01">
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-code-merge"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-cloud-arrow-up"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-share-nodes"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-file-arrow-up"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-flask"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-eye"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-block-quote"></i></div>
                                    <div className="cardpry-footer-buttons-01-item" ><i className="fa-duotone fa-spell-check"></i></div>
                                    </div>
                                    <div className="cardpry-footer-buttons-02" >
                                    <div className="cardpry-footer-buttons-02-btnIni" 
                                         name="${row.id_proyecto}" 
                                         onClick={ () => abrirAreaDeTrabajo() }
                                    >Go !!
                                         
                                    </div>
                                    <div className="cardpry-footer-buttons-02-btnConf"><i className="fa-duotone fa-ellipsis"></i></div>
                                    </div>
                                </div>                                
                                </div>
                            </div>
                        
                        )
                    
                    })
                    :                  

                    <div>
                        <h2>Crea tu primer proyecto <Link to="/nuevo" >aquí</Link></h2>
                        
                    </div>
            
        }
    </div>  
  )
}

export default ProyectosActivos