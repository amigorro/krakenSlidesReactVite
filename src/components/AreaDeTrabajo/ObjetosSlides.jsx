import {useContext,useRef,useState} from 'react'
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
          valoresBDslide, setValoresBDslide
        } = useContext(ContextAreaDeTrabajo); 

  return (
    <div>
          <div>Título:</div>
          <input 
               type="text" 
               placeholder="Título"
               className="input-titulo"
               value={valPlant_Titulo}
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
                              moverDesdeInput(inputRefimg1, 'nuevoNombre')                     
                         }
                         }
                    />
                    <label htmlFor="input-imagen1"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp; Selecciona una imagen </label>
               </div>
               <div className='previewImg' ></div>
          </div>
     )

}