import React, { useContext, useState, useEffect } from 'react'
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
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { motion } from 'framer-motion';
import GlosarioCont from '../Glosario/GlosarioCont.jsx';
import logo1 from '../../assets/megaproyectos/pry_censo2020.png'


const ProyectosActivos = () => {
    
    const [proyectos, setProyectos] = useState([])

    const [proyectoParaTools, setProyectoParaTools] = useState('')
    const {modulo, setModulo,idProyectoActual, setIdProyectoActual,setSlideSelected,setSesion,modalGlosario, setModalGlosario} = useContext(ContextAreaDeTrabajo);
    

    useEffect( () =>{        
        getDataProyectosBD(1)
    }, []  )

 


    const getDataProyectosBD = async (id_usuario) =>{
        
        const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function(tx) {
             tx.executeSql('SELECT * FROM APP_PROYECTOS WHERE status=1 AND id_usuario = ?', [id_usuario], function(tx, results) {
                  //console.log('results', results)
                  let len = results.rows.length, i;
                  let pry;
                  console.log("len: " + len)
                  if(len > 0){
                       let archivados = []
                       for (i = 0; i < len; i++){
                            if (i==0){localStorage.removeItem("proyectosActivos");}
                            archivados.push(results.rows.item(i))
                            pry={
                                 id: results.rows.item(i).id_proyecto,
                                 nombre: results.rows.item(i).nombre_proyecto,
                            }
                            GuardarEnStorage('proyectosActivos', pry)
                       }
                       
                       let proyectosAct = JSON.parse(localStorage.getItem("proyectosActivos"))
                        setProyectos(proyectosAct)
                  }
             }, null);
        });
        
   }


    const abrirAreaDeTrabajo = (id) =>{
        setModulo("AreaTrabajo");
        setIdProyectoActual(id);
        setSlideSelected({});
        setSesion()
        console.log("id proyecto seleccionado: " + id)
        return <Routeo />
    }

    const abrirGlosario = (id) =>{
        setModalGlosario(true)
        setProyectoParaTools(id)
    }



  return (
    <div className='despPryCont' >
        <motion.h1 className='despPryCont-tlt' 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
                duration: 0.7,
                ease: "easeInOut",
                type: "spring",
                delay: 0.2
            }}
        >
            Proyectos activos
        </motion.h1>
        
        {
            proyectos != null ?
                    proyectos.map( proy =>{
                        return(

                            <div key={proy.id} className="cardpry" >
                                <div className="cardpry-img" ><img src={logo1} alt="Censo2020" className="cardpry-img-pic" /></div>
                                <div className="cardpry-infoPry" >
                                    <div className="cardpry-name" >{
                                        
                                        proy.nombre.length > 70 ? proy.nombre.substring(0, 70)+"..." :  proy.nombre
                                    
                                    }</div>
                                    <div className="cardpry-figura">Líder de proyecto 1</div>
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
                                    <div className="cardpry-footer-buttons-01-item" 
                                        onClick={() => abrirGlosario(proy.id)}
                                    ><i className="fa-duotone fa-spell-check"></i></div>
                                    </div>
                                    <div className="cardpry-footer-buttons-02" >
                                    <div className="cardpry-footer-buttons-02-btnIni" 
                                         name="${row.id_proyecto}" 
                                         onClick={                                             
                                            () => abrirAreaDeTrabajo(proy.id) 
                                        }
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

        { modalGlosario && <GlosarioCont/>  }
    </div>  
    
  )
}

export default ProyectosActivos