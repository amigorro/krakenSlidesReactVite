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
     const [urlImg1, setUrlImg1] = useState('./../../logos/image_icon.png');
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,
          slideImg1, setSlideImg1,
          slideImg2, setSlideImg2,
          slideImg3, setSlideImg3,
          slideImg4, setSlideImg4,
          slideImg5, setSlideImg5,
          slideImg6, setSlideImg6,          
     } = useContext(ContextAreaDeTrabajo); 

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){
               console.log(' %c #4   Llegamos a: obtenerUrlImagen %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         console.log(` %c #5   se ejecuta consulta, image: ${results.rows.item(0).imagen1} %c`, 'color:white;background-color:#f74e4e;font-size:16px', '');
                         
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen1 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen1}?${new Date().getTime()}`
                         }

                         setUrlImg1(url)

                         resolve("ok")
                    }, null);
               });
          })
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
                                   //console.log(' %c #1   cambio en input image %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
                                   moverDesdeInput(inputRefimg1, slideSelected.id+'-i1',idProyectoActual,slideSelected.id,idProyectoActual,'i1')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen1"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg1 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg1 } id="imgSlide1"  className="img-prev" /></div>
               
          </div>
     )

}


export const ObjSld_imagen2 = () => {

     const inputRefimg1 = useRef(null);
     const [urlImg2, setUrlImg2] = useState('./../../logos/image_icon.png');
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,
          slideImg1, setSlideImg1,
          slideImg2, setSlideImg2,
          slideImg3, setSlideImg3,
          slideImg4, setSlideImg4,
          slideImg5, setSlideImg5,
          slideImg6, setSlideImg6,          
     } = useContext(ContextAreaDeTrabajo); 

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){
               console.log(' %c #4   Llegamos a: obtenerUrlImagen %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         console.log(` %c #5   se ejecuta consulta, image: ${results.rows.item(0).imagen2} %c`, 'color:white;background-color:#f74e4e;font-size:16px', '');
                         
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen2 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen2}?${new Date().getTime()}`
                         }

                         setUrlImg2(url)

                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <div className='contImagen' >
               <div>
                    <div>Imagen 2:</div>
                    <input
                         id="input-imagen2"
                         type="file"
                         ref={inputRefimg1}
                         className="input-imagen"
                         onChange={(e) => {
                                   //console.log(' %c #1   cambio en input image %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
                                   moverDesdeInput(inputRefimg1, slideSelected.id+'-i2',idProyectoActual,slideSelected.id,idProyectoActual,'i2')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen2"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg2 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg2 } id="imgSlide2"  className="img-prev" /></div>
               
          </div>
     )

}








export const BtnAddImage = () => {
     
     return (
          <div className='btnAddImage' >Agregar otra imagen</div>
     )

}