import {useContext,useRef,useState,useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { ActualizarRegBdSlideContenidos } from '../helpers/GuardaEnBD';
import {moverDesdeInput} from '../helpers/GestionArchivos';
import './ObjetosSlides.css'

export const ObjSld_titulo = () => {

     const {
          setEdicion,
          plantillaSeleccionada,
          slideSelected,sesion,idProyectoActual,idUsuario,
          plnTitulo, setPlnTitulo,
          valPlant_Titulo, setValPlant_Titulo,
          valoresBDslide, setValoresBDslide,

          slideImg1, setSlideImg1,
          slideImg2, setSlideImg2,
          slideImg3, setSlideImg3,
          slideImg4, setSlideImg4,
          slideImg5, setSlideImg5,
          slideImg6, setSlideImg6,
        } = useContext(ContextAreaDeTrabajo); 

  return (
    <div>
          <div>Título:</div>
          <input 
               type="text" 
               placeholder="Título"
               className="input-titulo"
               value={ valPlant_Titulo ? valPlant_Titulo : '' }
               onChange={(e) => {                          
                 setValPlant_Titulo(e.target.value )
               }}
               onBlur={()=>{  
                 ActualizarRegBdSlideContenidos("titulo",valPlant_Titulo,slideSelected,sesion,idProyectoActual,idUsuario)                          
               }}
          />
    </div>
  )
}


export const ObjSld_imagen1 = () => {

     const inputRefimg1 = useRef(null);
     const [urlImg1, setUrlImg1] = useState('');
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,
          slideImg1, setSlideImg1,
          slideImg2, setSlideImg2,
          slideImg3, setSlideImg3,
          slideImg4, setSlideImg4,
          slideImg5, setSlideImg5,
          slideImg6, setSlideImg6,          
     } = useContext(ContextAreaDeTrabajo); 


     useEffect( () =>{            
          obtenerUrlImagen(slideSelected.id)          
     }, [urlImg1]  )

     const obtenerUrlImagen = (id) => {
          
          let carpeta = idProyectoActual;
          let url='';
          if( slideImg1=='image.png' ){
               url = `c:/image.png?${new Date().getTime()}`
          } else{
               url = `c:/flskrk/${carpeta}/${slideImg1}?${new Date().getTime()}`
          }

          setUrlImg1(url)
     }


     return (
          <div className='contImagen' >
               <div>
                    <div>Imagen 1:</div>
                    <input
                         id="input-imagen1"
                         type="file"
                         ref={inputRefimg1}
                         className="input-imagen"
                         onChange={(e) => {
                                   moverDesdeInput(inputRefimg1, slideSelected.id+'-i1',idProyectoActual,slideSelected.id,idProyectoActual,'i1')
                                   .then( algo =>  obtenerUrlImagen(slideSelected.id, algo))
                              }
                         }
                    />
                    <label htmlFor="input-imagen1"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg1 ? slideImg1 :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg1 } id="imgSlide1"  className="img-prev" /></div>
               
          </div>
     )

}