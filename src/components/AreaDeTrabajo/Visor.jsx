import React, {useEffect,useState, useContext} from 'react'
import './Visor.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

const Visor = () => {

  const {    
    idProyectoActual,sesion,
    slideSelected,
    plantillaSeleccionada, setPlantillaSeleccionada,
    plnTitulo,plnTexto1,
    paginacion, setPaginacion,

    valPlant_Titulo, setValPlant_Titulo,
    urlImg1,urlImg2,
    slideTexto1,slideTexto2,slideTexto3,slideTexto4,slideTexto5,slideTexto6,

    valoresBDslide, setValoresBDslide,
          cv_crono_flag, setCv_crono_flag,
          cv_crono_tipo, setCv_crono_tipo,
          cv_crono_objetivo, setCv_crono_objetivo,
          cv_crono_instrucciones, setCv_crono_instrucciones,
          cv_crono_tiempo, setCv_crono_tiempo,
          cv_crono_materiales, setCv_crono_materiales,
          cv_crono_notas, setCv_crono_notas,
          cv_crono_tec1, setCv_crono_tec1,
          cv_crono_tec2, setCv_crono_tec2,
          cv_crono_tec3, setCv_crono_tec3,
          cv_crono_tec4, setCv_crono_tec4,
          cv_crono_tec5, setCv_crono_tec5,
          cv_crono_tec6, setCv_crono_tec6,
          cv_crono_tec7, setCv_crono_tec7,
          cv_crono_tec8, setCv_crono_tec8,
          cv_crono_tec9, setCv_crono_tec9,
  } = useContext(ContextAreaDeTrabajo);


  const cargaElementosPlantilla = () => {
    console.log("plantillaSeleccionada"+plantillaSeleccionada)
    
      switch (plantillaSeleccionada){        
        case "1":
          return <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                      <div className="vis_contSlide" >
                        <div className="vis_titulo" >{valPlant_Titulo}</div>
                        <div className="vis_texto" dangerouslySetInnerHTML={{__html: valoresBDslide.texto1}} ></div>
                      </div>
                      </div>
                    </div>            
                    
                 </>
        break;
        case "2":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                        <div className="vis_contSlide" >
                          <div className="vis_titulo" >{valPlant_Titulo}</div>                      
                            <div className="vis_textoRodeando" dangerouslySetInnerHTML={{__html: `<img class="vis_imagen50R" src=${urlImg1} />`+valoresBDslide.texto1    }} >
                            </div>		
                        </div> 
                      </div>
                    </div>   
                  </>
        break;
        case "3":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                      <div className="vis_contSlide" >
                      <div className="vis_titulo" >{valPlant_Titulo}</div>
                        <div className="vis_contenedorColsCont" >
                          <div className="vis_textoColsIntro" dangerouslySetInnerHTML={{__html: valoresBDslide.texto1}}></div>	        
                            <div className="vis_contenedorCols" >                          
                              <div className="vis_contenedorCols-col">
                                <div className="vis_contenedorCols-col-tlt">{slideTexto3}</div>
                                <img className="vis_imagenCols" src={urlImg1} />
                                <div className="vis_textoCols">{slideTexto5}</div>
                              </div>
                              <div className="vis_contenedorCols-col">
                                <div className="vis_contenedorCols-col-tlt" >{slideTexto4}</div>
                                <img className="vis_imagenCols" src={urlImg2} />
                                <div className="vis_textoCols">{slideTexto6}</div>
                              </div>
                          </div>
                        </div>
                      </div>  
                      </div>
                    </div>
                  </>
        break;
      }

  }









  return (
    <div className='VisorCont' >      
        <div className="areaTrabajo-cont-visor-display" >
              {
                plantillaSeleccionada ? 
                  cargaElementosPlantilla()                    
                :
                    <div className="areaTrabajo-cont-visor-display-no-plantilla">
                      <h1>No se ha cargado ninguna plantilla</h1>
                    </div>
              }
        </div>
        <div className="areaTrabajo-cont-visor-btns">
          { cv_crono_flag && <div className="areaTrabajo-cont-visor-btns-item"><i className="fa-duotone fa-calendar-check icoGde"></i></div> }
          
          <div className="areaTrabajo-cont-visor-btns-item"><i className="fa-duotone fa-outdent icoGde"></i></div>                  
        </div>
        <div className="areaTrabajo-cont-visor-msgRev">Mensaje de revisión</div>
      
    </div>
  )
}

export default Visor