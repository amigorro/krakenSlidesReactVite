import React, { useState } from 'react'
import { ContextAreaDeTrabajo } from '../context/ContextAreaDeTrabajo'
import AreaDeTrabajo from './AreaDeTrabajo/AreaDeTrabajo'
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'

const Routeo = () => {
  
     console.log('fs: ', window.fs)
     //const defPath = 'D:\\code\\tecnologia\\pato\\';
     //window.fs.ensureDirSync(defPath);




     const [modulo, setModulo] = useState("MenuPrincipal")
     const [idProyectoActual, setIdProyectoActual] = useState()
     const [idUsuario, setIdUsuario] = useState(1)
     const [sesion, setSesion] = useState(1)
     const [modalTipoSlide, setModalTipoSlide] = useState(false)
     const [slideSelected, setSlideSelected] = useState({})
     const [slides, setSlides] = useState([])
     const [edicion, setEdicion] = useState(false)
     const [plantillaSeleccionada, setPlantillaSeleccionada] = useState()

     /* Elementos de las plantillas */
     const [plnTitulo, setPlnTitulo] = useState('Titulo')
     const [plnTexto1, setPlnTexto1] = useState('Texto 1')
     const [valPlant_Titulo, setValPlant_Titulo] = useState('')
     const [valoresBDslide, setValoresBDslide] = useState({})
     const [ordenSlides, setOrdenSlides] = useState([])
     const [ordenPrueba, setOrdenPrueba] = useState([])
     
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
                         }}>
                         { dirigir() } 
               </ContextAreaDeTrabajo.Provider>
          </>
  )
}

export default Routeo