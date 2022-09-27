import React, {useEffect,useState, useContext} from 'react'
import './Visor.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import defa from './../../assets/plantillas/subst/default.png';
const Visor = () => {
  const [imageSelected,setImageSelected] = useState('')
  const {    
    idProyectoActual,sesion,
    slideSelected,
    plantillaSeleccionada, setPlantillaSeleccionada,
    plnTitulo,plnTexto1,
    paginacion, setPaginacion,

    valPlant_Titulo, setValPlant_Titulo,
    urlImg1,urlImg2,urlImg3,urlImg4,urlImg5,urlImg6,urlImg7,urlImg8,
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
    
          resp1, resp2, resp3,resp4,resp5,resp6,resp7,resp8, 
          valResp1,valResp2,valResp3,valResp4,valResp5,valResp6,valResp7,valResp8,
    
  } = useContext(ContextAreaDeTrabajo);


  const cargaElementosPlantilla = () => {
    console.log("plantillaSeleccionada"+plantillaSeleccionada)
    let respuestasRadio1='',respuestasRadio2='',respuestasRadio3='',respuestasRadio4='',respuestasRadio5='',respuestasRadio6='',respuestasRadio7='',respuestasRadio8='';

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
        case "4":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                                <div className="vis_titulo" >{valPlant_Titulo}</div>
                                <img className="vis_imagen90" src={urlImg1} />
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "5":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                                  <div className="vis_titulo" >{valPlant_Titulo}</div>
                                  <div className="vis_textoRodeando" dangerouslySetInnerHTML={{__html: `<img class="vis_imagen50L" src=${urlImg1} />`+valoresBDslide.texto1    }} >
                                  </div>                                                      
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "6":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                                    <img className="vis_imagen100" src={urlImg1} />                                                                                     
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "7":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                              <div className="vis_tituloGde" >{valPlant_Titulo}</div>
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "8":
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                                    <div className="vis_titulo" >{valPlant_Titulo}</div>
                                    <div className="vis_textoColsIntro" dangerouslySetInnerHTML={{__html: valoresBDslide.texto1}} ></div>
								                    <div className="vis_rowImages1" >
                                        <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg1} /></div>
                                        <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg2} /></div>
                                        <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg3} /></div>
                                        {
                                          (urlImg4 !== "" && urlImg4 != "./../../logos/image_icon.png") ? <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg4} /></div> : null 
                                        }
                                    </div>
                                    <div className="vis_rowImages1" >
                                        { (urlImg5 !== "" && urlImg5 != "./../../logos/image_icon.png") ? <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg5} /></div> : null }
                                        { (urlImg6 !== "" && urlImg6 != "./../../logos/image_icon.png") ? <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg6} /></div> : null }
                                        { (urlImg7 !== "" && urlImg7 != "./../../logos/image_icon.png") ? <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg7} /></div> : null }
                                        { (urlImg8 !== "" && urlImg8 != "./../../logos/image_icon.png") ? <div className="vis_cntImg20" ><img className="vis_imagen20" src={urlImg8} /></div> : null }
                                    </div>
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "9":
          let regImages = "";
                                        
          if ( (urlImg1 !== "" && urlImg1 != "./../../logos/image_icon.png") && (urlImg4 == "" || urlImg4 == "./../../logos/image_icon.png")){
            regImages = <><div class="vis_imagenRowElement01" ><img class="vis_imagenPrb01" src={urlImg1} /></div></>;
          } else if ( (urlImg4 !== "" && urlImg4 != "./../../logos/image_icon.png") && (urlImg1 == "" || urlImg1 == "./../../logos/image_icon.png") ){
            regImages = <><div class="vis_imagenRowElement01" ><img class="vis_imagenPrb01" src={urlImg4} /></div></>;
          } else if (  (urlImg1 !== "" && urlImg1 != "./../../logos/image_icon.png")  &&  (urlImg4 !== "" && urlImg4 != "./../../logos/image_icon.png")  ){
            regImages = <> <div class="vis_imagenRowElement02" ><img class="vis_imagenPrb02" src={urlImg1} /></div> <div class="vis_imagenRowElement02" ><img class="vis_imagenPrb02" src={urlImg4} /></div> </>                      ;
          }
          
          else {
            regImages = "";
          }
          

          return<>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                                  <div className="vis_titulo" >{valPlant_Titulo}</div>
                                  <div className="vis_contStatic09Row" >
                                    <div className="vis_textoColsIntro" dangerouslySetInnerHTML={{__html: valoresBDslide.texto1}} ></div>
                                    <div className="vis_textoRowElement0${numReg}" ></div>	
                                    {regImages}
                                  </div>
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "10":   /* Pregunta RADIO simple */
        
        resp1  ? respuestasRadio1 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="1"  value="" /><label className='vis_labelRespuesta' for="1" >{resp1} { valResp1 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp2  ? respuestasRadio2 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="2"  value="" /><label className='vis_labelRespuesta' for="2" >{resp2} { valResp2 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp3  ? respuestasRadio3 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="3"  value="" /><label className='vis_labelRespuesta' for="3" >{resp3} { valResp3 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp4  ? respuestasRadio4 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="4"  value="" /><label className='vis_labelRespuesta' for="4" >{resp4} { valResp4 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp5  ? respuestasRadio5 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="5"  value="" /><label className='vis_labelRespuesta' for="5" >{resp5} { valResp5 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp6  ? respuestasRadio6 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="6"  value="" /><label className='vis_labelRespuesta' for="6" >{resp6} { valResp6 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp7  ? respuestasRadio7 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="7"  value="" /><label className='vis_labelRespuesta' for="7" >{resp7} { valResp7 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp8  ? respuestasRadio8 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="8"  value="" /><label className='vis_labelRespuesta' for="8" >{resp8} { valResp8 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
          
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >                                  
                                    <div className="vis_titulo" >{ valPlant_Titulo }</div>
                                    <div className="vis_txtPregunta" >{ slideTexto1 }</div>
                                    <div className="vis_contRadioChecSimple" >
                                        { respuestasRadio1 }
                                        { respuestasRadio2 }
                                        { respuestasRadio3 }
                                        { respuestasRadio4 }
                                        { respuestasRadio5 }
                                        { respuestasRadio6 }
                                        { respuestasRadio7 }
                                        { respuestasRadio8 }
                                    </div>
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "11":  /** Pregunta Radio tipo omagenes */
          let regImagesRadio1= "",regImagesRadio2= "",regImagesRadio3= "",regImagesRadio4= "",regImagesRadio5 = "";
          
          let iconSelectResp1 ='';
          let iconSelectResp2 ='';
          let iconSelectResp3 ='';
          let iconSelectResp4 ='';
          let iconSelectResp5 ='';
          
          (valResp1 == 1) ? iconSelectResp1=<div className='iconSelectedRadioImagen' ><i className="fa-sharp fa-solid fa-badge-check"></i></div> : iconSelectResp1 = null;
          (valResp2 == 1) ? iconSelectResp2=<div className='iconSelectedRadioImagen' ><i className="fa-sharp fa-solid fa-badge-check"></i></div> : iconSelectResp2 = null;
          (valResp3 == 1) ? iconSelectResp3=<div className='iconSelectedRadioImagen' ><i className="fa-sharp fa-solid fa-badge-check"></i></div> : iconSelectResp3 = null;
          (valResp4 == 1) ? iconSelectResp4=<div className='iconSelectedRadioImagen' ><i className="fa-sharp fa-solid fa-badge-check"></i></div> : iconSelectResp4 = null;
          (valResp5 == 1) ? iconSelectResp5=<div className='iconSelectedRadioImagen' ><i className="fa-sharp fa-solid fa-badge-check"></i></div> : iconSelectResp5 = null;
   

          ( urlImg1 && urlImg1 != "./../../logos/image_icon.png" ) ? regImagesRadio1=<><div onClick={()=> setImageSelected(1)} className={imageSelected==1 ? "vis_imagenRowElement66 imageSelectedRadio" :"vis_imagenRowElement66" } ><img className="vis_imagenPrb01" src={urlImg1} />{iconSelectResp1}</div></>:regImagesRadio1=<><div className="vis_imagenRowElement01" ><img className="vis_imagenPrb01" src={defa} /></div></>;
          ( urlImg2 && urlImg2 != "./../../logos/image_icon.png" ) ? regImagesRadio2=<><div onClick={()=> setImageSelected(2)} className={imageSelected==2 ? "vis_imagenRowElement66 imageSelectedRadio" :"vis_imagenRowElement66" } ><img className="vis_imagenPrb01" src={urlImg2} />{iconSelectResp2}</div></>:regImagesRadio2=<><div className="vis_imagenRowElement01" ><img className="vis_imagenPrb01" src={defa} /></div></>;
          ( urlImg3 && urlImg3 != "./../../logos/image_icon.png" ) ? regImagesRadio3=<><div onClick={()=> setImageSelected(3)} className={imageSelected==3 ? "vis_imagenRowElement66 imageSelectedRadio" :"vis_imagenRowElement66" } ><img className="vis_imagenPrb01" src={urlImg3} />{iconSelectResp3}</div></>:regImagesRadio3=<><div className="vis_imagenRowElement01" ><img className="vis_imagenPrb01" src={defa} /></div></>;
          ( urlImg4 && urlImg4 != "./../../logos/image_icon.png" ) ? regImagesRadio4=<><div onClick={()=> setImageSelected(4)} className={imageSelected==4 ? "vis_imagenRowElement66 imageSelectedRadio" :"vis_imagenRowElement66" } ><img className="vis_imagenPrb01" src={urlImg4} />{iconSelectResp4}</div></>:regImagesRadio4=<></>;
          ( urlImg5 && urlImg5 != "./../../logos/image_icon.png" ) ? regImagesRadio5=<><div onClick={()=> setImageSelected(5)} className={imageSelected==5 ? "vis_imagenRowElement66 imageSelectedRadio" :"vis_imagenRowElement66" } ><img className="vis_imagenPrb01" src={urlImg5} />{iconSelectResp5}</div></>:regImagesRadio5=<></>;
          
          console.log(urlImg1,urlImg2,urlImg3,urlImg4,urlImg5)
          

          return<>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >
                                  <div className="vis_titulo" >{valPlant_Titulo}</div>
                                  <div className="vis_txtPregunta" >{ slideTexto1 }</div>
                                  <div className="vis_contRadioImage" >
                                      {regImagesRadio1}
                                      {regImagesRadio2}
                                      {regImagesRadio3}
                                      {regImagesRadio4}
                                      {regImagesRadio5}
                                    </div>	
                              </div> 
                      </div>
                    </div>
                  </>
        break;
        case "12":   /* Pregunta RADIO simple */
        
        resp1  ? respuestasRadio1 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="1"  value="" /><label className='vis_labelRespuesta' for="1" >{resp1} { valResp1 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp2  ? respuestasRadio2 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="2"  value="" /><label className='vis_labelRespuesta' for="2" >{resp2} { valResp2 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp3  ? respuestasRadio3 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="3"  value="" /><label className='vis_labelRespuesta' for="3" >{resp3} { valResp3 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp4  ? respuestasRadio4 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="4"  value="" /><label className='vis_labelRespuesta' for="4" >{resp4} { valResp4 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp5  ? respuestasRadio5 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="5"  value="" /><label className='vis_labelRespuesta' for="5" >{resp5} { valResp5 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp6  ? respuestasRadio6 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="6"  value="" /><label className='vis_labelRespuesta' for="6" >{resp6} { valResp6 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp7  ? respuestasRadio7 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="7"  value="" /><label className='vis_labelRespuesta' for="7" >{resp7} { valResp7 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
        resp8  ? respuestasRadio8 = <><input className='vis_inputPregunta' type="radio" name="radioChecSimple" id="8"  value="" /><label className='vis_labelRespuesta' for="8" >{resp8} { valResp8 == '1' && <div className='iconSelected' ><i className='fa-duotone fa-badge-check'></i></div>  }</label></>: null
          
          return  <>
                    <div className='visorVistaPrCont' >
                      <div className='visor-Paginacion' >{paginacion}</div>
                      <div className='visorContenidos' >
                              <div className="vis_contSlide" >                                  
                                    <div className="vis_titulo" >{ valPlant_Titulo }</div>
                                    <div className="vis_txtPregunta" >{ slideTexto1 }</div>
                                    <div className='vis_contRespTipo12' >
                                        <div className="vis_contRadioChecSimple radio12" >
                                            { respuestasRadio1 }
                                            { respuestasRadio2 }
                                            { respuestasRadio3 }
                                            { respuestasRadio4 }
                                            { respuestasRadio5 }
                                            { respuestasRadio6 }
                                            { respuestasRadio7 }
                                            { respuestasRadio8 }
                                        </div>
                                        <img className="vis_imagenCols_radio12" src={urlImg1} />
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