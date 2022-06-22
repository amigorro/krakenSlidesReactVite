import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { select, insert, update,  deleteReg } from '../../querys.js'

const ProyectosActivos = () => {
    
    const [proyectos, setProyectos] = useState([])

    useEffect( () =>{
        console.log("iniciando este rollo")
        getDataProyecto();
    }, []  )





  const getDataProyecto = (id_usuario) =>{	
    
    
        const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function (tx) {
                  
              var query = "SELECT * FROM APP_PROYECTOS ;";
              
              tx.executeSql(query, [],function (tx, resultSet) {        

                {/**
                  for(var x = 0; x < resultSet.rows.length; x++) {                        
                        setProyectos(proys => [...proyectos, resultSet.rows.item(x).nombre_proyecto] )
                  }
                  */}
                  setProyectos(resultSet.rows)
              }) 
              
          });	
        
        const listado = proyectos.map(function(num) {
            return {Math.sqrt(num);}
        });
    
  } 

  const imprimetarjeta = (nombrePry) =>{
        console.log(`nombre del proyecto ${}`)
  }


  
  function imprimeTarjetasDeProyectos(){
    return new Promise(function (resolve, reject) {
        console.log("Función para imprimir tarjetas de proyectos");

        const user = 1;

        let jsonQuery = {
            "cols" : "id_proyecto, nombre_proyecto, fecha, id_figura, megaproyecto  ",
            "where" : {
                "variables" : "id_usuario,status",
                "valores": `${user} __1`,
                "condiciones": "="
            }
        }
        
        select('APP_PROYECTOS', jsonQuery)
          .then(function(respObj){

                let i = 0;
                respObj.forEach(function(row,i){
                        console.log(row)
                            /*
                          $( "#despCardsPry" ).append(`<div class="cardpry" >
                                    <div class="cardpry-img" ><img src="./images/pry_censo2020.fw.webp" alt="Censo2020" class="cardpry-img-pic" ></div>
                                    <div class="cardpry-infoPry" >
                                    <div class="cardpry-name" >${row.nombre_proyecto}</div>
                                    <div class="cardpry-figura">Líder de proyecto</div>
                                    </div>
                                    <div class="cardpry-footer" >
                                    <div class="cardpry-footer-ss">
                                        <div>Sesiones: <span class="cardpry-footer-ss-b" id="ses_${row.id_proyecto}" >12</span></div>
                                        <div>Slides: <span class="cardpry-footer-ss-b" id="numSlides_${row.id_proyecto}" >1045</span></div>
                                        <div class="cardpry-footer-fecha" >${row.fecha}</div>
                                    </div>
                                    <div class="cardpry-footer-buttons">
                                        <div class="cardpry-footer-buttons-01">
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-code-merge"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-cloud-arrow-up"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-share-nodes"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-file-arrow-up"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-flask"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-eye"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-block-quote"></i></div>
                                        <div class="cardpry-footer-buttons-01-item" ><i class="fa-duotone fa-spell-check"></i></div>
                                        </div>
                                        <div class="cardpry-footer-buttons-02" >
                                        <div class="cardpry-footer-buttons-02-btnIni" name="${row.id_proyecto}" >Go !!</div>
                                        <div class="cardpry-footer-buttons-02-btnConf"><i class="fa-duotone fa-ellipsis"></i></div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>`
                          ) 
                        */
        
                        
                    /*
                    cuentaSesiones(row.id_proyecto)
                        .then(algo => cuentaSlides(row.id_proyecto))
                    */
                        
                    
                        
                        
                })
                resolve()
            })
            .catch(function(errMsj){
                console.error(errMsj)
            })
            
    });
}
  
  

  return (
    <div>
        <div>Proyectos</div>
        {
            
            console.log(proyectos )
                
            
        }
    </div>  
  )
}

export default ProyectosActivos