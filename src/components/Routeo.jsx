import React, { useState } from 'react'
import { ContextAreaDeTrabajo } from '../context/ContextAreaDeTrabajo'
import AreaDeTrabajo from './AreaDeTrabajo/AreaDeTrabajo'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'

const Routeo = () => {




     const [modulo, setModulo] = useState("MenuPrincipal")
     const [idProyectoActual, setIdProyectoActual] = useState()
     const [idUsuario, setIdUsuario] = useState(1)
     const [sesion, setSesion] = useState(1)
     const [modalTipoSlide, setModalTipoSlide] = useState(false)
     const [slideSelected, setSlideSelected] = useState({})
     const [slides, setSlides] = useState([])
     const [edicion, setEdicion] = useState(false)
     const [plantillaSeleccionada, setPlantillaSeleccionada] = useState()
   
     /** Info gestión de slides */
     const [paginacion, setPaginacion] = useState()


     /* Cronogramas */
     const [despCronograma, setDespCronograma] = useState(false)
     const [tipoCronograma, setTipoCronograma] = useState('off')
     const [eliminarCrono, setEliminarCrono] = useState(false)
     const [confirmEliminarCrono, setConfirmEliminarCrono] = useState(false)
          const [cv_crono_flag, setCv_crono_flag] = useState(false)
          const [cv_crono_tipo, setCv_crono_tipo] = useState('')
          const [cv_crono_objetivo, setCv_crono_objetivo] = useState()
          const [cv_crono_instrucciones, setCv_crono_instrucciones] = useState()
          const [cv_crono_tiempo, setCv_crono_tiempo] = useState()
          const [cv_crono_materiales, setCv_crono_materiales] = useState()
          const [cv_crono_notas, setCv_crono_notas] = useState()
          const [cv_crono_tec1, setCv_crono_tec1] = useState()
          const [cv_crono_tec2, setCv_crono_tec2] = useState()
          const [cv_crono_tec3, setCv_crono_tec3] = useState()
          const [cv_crono_tec4, setCv_crono_tec4] = useState()
          const [cv_crono_tec5, setCv_crono_tec5] = useState()
          const [cv_crono_tec6, setCv_crono_tec6] = useState()
          const [cv_crono_tec7, setCv_crono_tec7] = useState()
          const [cv_crono_tec8, setCv_crono_tec8] = useState()
          const [cv_crono_tec9, setCv_crono_tec9] = useState()
     
     
          /* Elementos de las plantillas */
     const [plnTitulo, setPlnTitulo] = useState('Titulo')
     const [plnTexto1, setPlnTexto1] = useState('Texto 1')
     const [valPlant_Titulo, setValPlant_Titulo] = useState('')
     const [valoresBDslide, setValoresBDslide] = useState({})
     const [ordenSlides, setOrdenSlides] = useState([])
     const [ordenPrueba, setOrdenPrueba] = useState([])
     /** Objetos de imagen para edición de slides */
     const [slideImg1, setSlideImg1] = useState('default')
     const [slideImg2, setSlideImg2] = useState()
     const [slideImg3, setSlideImg3] = useState()
     const [slideImg4, setSlideImg4] = useState()
     const [slideImg5, setSlideImg5] = useState()
     const [slideImg6, setSlideImg6] = useState()
     const [urlImg1, setUrlImg1] = useState()
     const [urlImg2, setUrlImg2] = useState()
     const [urlImg3, setUrlImg3] = useState()
     const [urlImg4, setUrlImg4] = useState()
     const [urlImg5, setUrlImg5] = useState()
     const [urlImg6, setUrlImg6] = useState()
     const [urlImg7, setUrlImg7] = useState()
     const [urlImg8, setUrlImg8] = useState()
     /* Para las variables de textos */
     const [slideTexto1, setSlideTexto1] = useState()
     const [slideTexto2, setSlideTexto2] = useState()
     const [slideTexto3, setSlideTexto3] = useState()
     const [slideTexto4, setSlideTexto4] = useState()
     const [slideTexto5, setSlideTexto5] = useState()
     const [slideTexto6, setSlideTexto6] = useState()

     /** respuestas */
     const [resp1, setResp1] = useState('')
     const [valResp1, setValResp1] = useState()
     const [resp2, setResp2] = useState('')
     const [valResp2, setValResp2] = useState()
     const [resp3, setResp3] = useState('')
     const [valResp3, setValResp3] = useState()
     const [resp4, setResp4] = useState('')
     const [valResp4, setValResp4] = useState()
     const [resp5, setResp5] = useState('')
     const [valResp5, setValResp5] = useState()
     const [resp6, setResp6] = useState('')
     const [valResp6, setValResp6] = useState()
     const [resp7, setResp7] = useState('')
     const [valResp7, setValResp7] = useState()
     const [resp8, setResp8] = useState('')
     const [valResp8, setValResp8] = useState()

     /* MENUS */
     const [listadoOpcionesMenu, setListadoOpcionesMenu] = useState([]);
     const [slidesSeleccionables, setSlidesSeleccionables] = useState([]);
     const [slideSeleccionado, setSlideSeleccionado] = useState('');
     const [modalEditarOpcMenu, setModalEditarOpcMenu] = useState(false);
     const [editarSlide, setEditarSlide] = useState('');
     const [txtUpdateMenu, setTxtUpdateMenu] = useState('');

     /** Glosario */
     const [modalGlosario, setModalGlosario] = useState(false)


     
     const dirigir = ()=>{
          
          switch (modulo){
               case "MenuPrincipal":     
                    return <MenuPrincipal/>
               break;
               case "AreaTrabajo":
                    return <AreaDeTrabajo/>
               break;

          }
         
     }


     return (
          <> 
               <ContextAreaDeTrabajo.Provider 
                    value={{
                              modulo, setModulo, 
                              idProyectoActual, setIdProyectoActual,
                              idUsuario, setIdUsuario,
                              sesion, setSesion,
                              modalTipoSlide, setModalTipoSlide,
                              slideSelected, setSlideSelected,
                              slides,setSlides,
                              edicion, setEdicion,
                              plantillaSeleccionada, setPlantillaSeleccionada,
                              plnTitulo, setPlnTitulo,
                              valPlant_Titulo, setValPlant_Titulo,
                              valoresBDslide, setValoresBDslide,
                              ordenSlides, setOrdenSlides,
                              ordenPrueba, setOrdenPrueba,

                              despCronograma, setDespCronograma,
                              tipoCronograma, setTipoCronograma,
                              eliminarCrono, setEliminarCrono,
                              confirmEliminarCrono, setConfirmEliminarCrono,
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

                                   slideImg1, setSlideImg1,
                                   slideImg2, setSlideImg2,
                                   slideImg3, setSlideImg3,
                                   slideImg4, setSlideImg4,
                                   slideImg5, setSlideImg5,
                                   slideImg6, setSlideImg6,
                                   urlImg1, setUrlImg1,
                                   urlImg2, setUrlImg2,
                                   urlImg3, setUrlImg3,
                                   urlImg4, setUrlImg4,
                                   urlImg5, setUrlImg5,
                                   urlImg6, setUrlImg6,
                                   urlImg7, setUrlImg7,
                                   urlImg8, setUrlImg8,

                                   slideTexto1, setSlideTexto1,
                                   slideTexto2, setSlideTexto2,
                                   slideTexto3, setSlideTexto3,
                                   slideTexto4, setSlideTexto4,
                                   slideTexto5, setSlideTexto5,
                                   slideTexto6, setSlideTexto6,

                                   resp1, setResp1,
                                   valResp1, setValResp1,
                                   resp2, setResp2,
                                   valResp2, setValResp2,
                                   resp3, setResp3,
                                   valResp3, setValResp3,
                                   resp4, setResp4,
                                   valResp4, setValResp4,
                                   resp5, setResp5,
                                   valResp5, setValResp5,
                                   resp6, setResp6,
                                   valResp6, setValResp6,
                                   resp7, setResp7,
                                   valResp7, setValResp7,
                                   resp8, setResp8,
                                   valResp8, setValResp8,
                                   
                                   listadoOpcionesMenu, setListadoOpcionesMenu,
                                   slidesSeleccionables, setSlidesSeleccionables,
                                   slideSeleccionado, setSlideSeleccionado,
                                   modalEditarOpcMenu, setModalEditarOpcMenu,
                                   editarSlide, setEditarSlide,
                                   txtUpdateMenu, setTxtUpdateMenu,

                                   modalGlosario, setModalGlosario,
                              
                              /** Información de gestión de slides */
                              paginacion, setPaginacion,
                              
                         

                         }}>
                         { dirigir() } 
               </ContextAreaDeTrabajo.Provider>
          </>
  )
}

export default Routeo