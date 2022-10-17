import {useContext,useRef,useState,useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { ActualizarRegBdSlideContenidos } from '../helpers/GuardaEnBD';
import {moverDesdeInput} from '../helpers/GestionArchivos';
import './ObjetosSlides.css'
import {ObjetoRespuestaRadioG} from './ObjetoRespuestaRadioG'
import frecuencia from './../../assets/plantillas/subst/frecuencia.gif';
import video_anim from './../../assets/plantillas/subst/video_anim.gif';
import audio_ini from './../../assets/plantillas/subst/audio00.png';
import video_ini from './../../assets/plantillas/subst/video00.png';

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
          slideTexto1,
          slideTexto2,
          slideTexto3,
          slideTexto4,
          slideTexto5,
          slideTexto6,
        } = useContext(ContextAreaDeTrabajo); 

  return (
    <div>
          <div className='editTlt' >Título:</div>
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


export const Texto5 = (params) => {
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,          
          urlImg1, setUrlImg1,
          slideTexto1,setSlideTexto1,
          slideTexto2,setSlideTexto2,
          slideTexto3,setSlideTexto3,
          slideTexto4,setSlideTexto4,
          slideTexto5,setSlideTexto5,
          slideTexto6,setSlideTexto6,
     } = useContext(ContextAreaDeTrabajo); 

     const updateText = (e) => {
          
          console.log("updateamos texto")
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${params.variab} = ? WHERE slide = ?  AND id_proyecto = ? `, [e,slideSelected.id,idProyectoActual], function(tx, results) {
                         //console.log(' %c #2   Se updatea el nombre de la iamgen en BD '+idImage,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#f74e4e;font-size:16px', '')                                  
                    }, null);
               });
     }

     return(
          <div>
               <div className='editTlt'>Texto:</div>
               <textarea 
                    name="" 
                    id="" 
                    value={params.variab === 'texto1' ? slideTexto1 : params.variab === 'texto2' ? slideTexto2 : params.variab === 'texto3' ? slideTexto3 : params.variab === 'texto4' ? slideTexto4 : params.variab === 'texto5' ? slideTexto5 : params.variab === 'texto6' ? slideTexto6 : '' }
                    onChange={ (e) => { params.variab === 'texto1' && setSlideTexto1(e.target.value) || params.variab === 'texto2' && setSlideTexto2(e.target.value) || params.variab === 'texto3' && setSlideTexto3(e.target.value) || params.variab === 'texto4' && setSlideTexto4(e.target.value) || params.variab === 'texto5' && setSlideTexto5(e.target.value) || params.variab === 'texto6' && setSlideTexto6(e.target.value) }}
                    onBlur={ (e)=>{ updateText(e.target.value)} }
                    className="caja-texto"
               ></textarea>
          </div>
     )
}


export const InputText = (params) => {
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,                    
          slideTexto1,setSlideTexto1,
          slideTexto2,setSlideTexto2,
          slideTexto3,setSlideTexto3,
          slideTexto4,setSlideTexto4,
          slideTexto5,setSlideTexto5,
          slideTexto6,setSlideTexto6,
     } = useContext(ContextAreaDeTrabajo); 

     const updateText = (e) => {
          
          console.log("updateamos texto")
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${params.variab} = ? WHERE slide = ?  AND id_proyecto = ? `, [e,slideSelected.id,idProyectoActual], function(tx, results) {
                         //console.log(' %c #2   Se updatea el nombre de la iamgen en BD '+idImage,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#f74e4e;font-size:16px', '')                                  
                    }, null);
               });
     }

     return(
          <div>
               <div>Texto:</div>
               <input 
               type="text" 
               placeholder=""
               className="input-titulo"
               value={params.variab === 'texto1' ? slideTexto1 : params.variab === 'texto2' ? slideTexto2 : params.variab === 'texto3' ? slideTexto3 : params.variab === 'texto4' ? slideTexto4 : params.variab === 'texto5' ? slideTexto5 : params.variab === 'texto6' ? slideTexto6 : '' }
               onChange={ (e) => { params.variab === 'texto1' && setSlideTexto1(e.target.value) || params.variab === 'texto2' && setSlideTexto2(e.target.value) || params.variab === 'texto3' && setSlideTexto3(e.target.value) || params.variab === 'texto4' && setSlideTexto4(e.target.value) || params.variab === 'texto5' && setSlideTexto5(e.target.value) || params.variab === 'texto6' && setSlideTexto6(e.target.value) }}
               onBlur={ (e)=>{ updateText(e.target.value)} }
               />
          </div>
     )
}




export const ObjSld_imagen1 = () => {

     const inputRefimg1 = useRef(null);
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,          
          urlImg1, setUrlImg1          
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
          <>
          <div className='editTlt' >Imagen 1:</div>
          <div className='contImagen' >               
               <div>                    
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
          </>
     )

}


export const ObjSld_imagen2 = () => {

     const inputRefimg2 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg2, setUrlImg2,          
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
          <>
          <div className='editTlt' >Imagen 2:</div>
          <div className='contImagen' >
               <div>                    
                    <input
                         id="input-imagen2"
                         type="file"
                         ref={inputRefimg2}
                         className="input-imagen"
                         onChange={(e) => {
                                   //console.log(' %c #1   cambio en input image %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
                                   moverDesdeInput(inputRefimg2, slideSelected.id+'-i2',idProyectoActual,slideSelected.id,idProyectoActual,'i2')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen2"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg2 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg2 } id="imgSlide2"  className="img-prev" /></div>
               
          </div>
          </>
     )

}




export const ObjSld_imagen3 = (props) => {

     const inputRefimg3 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg3, setUrlImg3,          
     } = useContext(ContextAreaDeTrabajo); 

     const resetImage = (numImage) => {          
          let url = `./../../logos/image_icon.png?${new Date().getTime()}`
          let idImage=''
          switch(numImage){
               case 3: setUrlImg3(url); idImage='imagen3'; break;       
          }
          console.log(' %c resetear imagen %c', 'color:white;background-color:#788821;font-size:16px', '')
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {
                         console.log(' %c #2   Se updatea el nombre de la iamgen en BD '+idImage,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#f74e4e;font-size:16px', '')                                  
                    }, null);
               });
     }

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){
               console.log(' %c #4   Llegamos a: obtenerUrlImagen %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         console.log(` %c #5   se ejecuta consulta, image: ${results.rows.item(0).imagen3} %c`, 'color:white;background-color:#f74e4e;font-size:16px', '');
                         
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen3 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen3}?${new Date().getTime()}`
                         }
                         setUrlImg3(url)
                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <>
          <div className='editTlt flexionando' >Imagen 3: { props.elim == "true" && <div className='resetImageBtn' onClick={ () => resetImage(3,idProyectoActual,slideSelected.id)}> <i class="fa-sharp fa-solid fa-trash"></i> </div> } </div>
          <div className='contImagen' >
               <div>          
                    <input
                         id="input-imagen3"
                         type="file"
                         ref={inputRefimg3}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefimg3, slideSelected.id+'-i3',idProyectoActual,slideSelected.id,idProyectoActual,'i3')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen3"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg3 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg3 } id="imgSlide2"  className="img-prev" /></div>
               
          </div>
          </>
     )
}




export const ObjSld_imagen4 = (props) => {

     const inputRefimg4 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg4, setUrlImg4,          
     } = useContext(ContextAreaDeTrabajo); 

     const resetImage = (numImage) => {          
          let url = `./../../logos/image_icon.png`
          let idImage=''
          setUrlImg4(url); 
          idImage='imagen4'
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {
                         console.log(' %c #2   Se updatea el nombre de la iamgen en BD '+idImage,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#f74e4e;font-size:16px', '')                                  
                    }, null);
               });
     }

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){
               console.log(' %c #4   Llegamos a: obtenerUrlImagen %c', 'color:white;background-color:#f74e4e;font-size:16px', '');
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         console.log(` %c #5   se ejecuta consulta, image: ${results.rows.item(0).imagen4} %c`, 'color:white;background-color:#f74e4e;font-size:16px', '');
                         
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen4 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen4}?${new Date().getTime()}`
                         }
                         setUrlImg4(url)
                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <>
          <div className='editTlt flexionando' >Imagen 4: { props.elim == "true" && <div className='resetImageBtn' onClick={ () => resetImage(4,idProyectoActual,slideSelected.id)}> <i class="fa-sharp fa-solid fa-trash"></i> </div> } </div>
          <div className='contImagen' >
               <div>
                    <input
                         id="input-imagen4"
                         type="file"
                         ref={inputRefimg4}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefimg4, slideSelected.id+'-i4',idProyectoActual,slideSelected.id,idProyectoActual,'i4')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen4"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg4 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg4 } id="imgSlide4"  className="img-prev" /></div>
               
          </div>
          </>
     )
}


export const ObjSld_imagen5 = (props) => {

     const inputRefimg5 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg5, setUrlImg5,
     } = useContext(ContextAreaDeTrabajo); 

     const resetImage = (numImage) => {          
          let url = `./../../logos/image_icon.png`
          let idImage=''
          setUrlImg5(url); 
          idImage='imagen5'
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {
                         console.log(' %c #2   Se updatea el nombre de la iamgen en BD '+idImage,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#f74e4e;font-size:16px', '')                                  
                    }, null);
               });
     }

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){               
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         console.log(` %c #5   se ejecuta consulta, image: ${results.rows.item(0).imagen5} %c`, 'color:white;background-color:#f74e4e;font-size:16px', '');
                         
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen5 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen5}?${new Date().getTime()}`
                         }
                         setUrlImg5(url)
                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <>
          <div className='editTlt flexionando' >Imagen 5: { props.elim == "true" && <div className='resetImageBtn' onClick={ () => resetImage(5,idProyectoActual,slideSelected.id)}> <i class="fa-sharp fa-solid fa-trash"></i> </div> } </div>
          <div className='contImagen' >
               <div>                    
                    <input
                         id="input-imagen5"
                         type="file"
                         ref={inputRefimg5}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefimg5, slideSelected.id+'-i5',idProyectoActual,slideSelected.id,idProyectoActual,'i5')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen5"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg5 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg5 } id="imgSlide5"  className="img-prev" /></div>
               
          </div>
          </>
     )
}



export const ObjSld_imagen6 = (props) => {
     const inputRefimg6 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg6, setUrlImg6,
     } = useContext(ContextAreaDeTrabajo); 

     const resetImage = (numImage) => {          
          let url = `./../../logos/image_icon.png`
          let idImage=''
          setUrlImg6(url); 
          idImage='imagen6'
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {
                         
                    }, null);
               });
     }

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){               
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen6 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen6}?${new Date().getTime()}`
                         }
                         setUrlImg6(url)
                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <>
          <div className='editTlt flexionando' >Imagen 6: { props.elim == "true" && <div className='resetImageBtn' onClick={ () => resetImage(6,idProyectoActual,slideSelected.id)}> <i class="fa-sharp fa-solid fa-trash"></i> </div> } </div>
          <div className='contImagen' >
               <div>
                    <input
                         id="input-imagen6"
                         type="file"
                         ref={inputRefimg6}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefimg6, slideSelected.id+'-i6',idProyectoActual,slideSelected.id,idProyectoActual,'i6')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen6"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg6 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg6 } id="imgSlide6"  className="img-prev" /></div>               
          </div>
          </>
     )
}


export const ObjSld_imagen7 = (props) => {
     const inputRefimg7 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg7, setUrlImg7,
     } = useContext(ContextAreaDeTrabajo); 

     const resetImage = (numImage) => {          
          let url = `./../../logos/image_icon.png`
          let idImage=''
          setUrlImg7(url); 
          idImage='imagen7'
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
                    }, null);
               });
     }

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){               
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen7 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen7}?${new Date().getTime()}`
                         }
                         setUrlImg7(url)
                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <>
          <div className='editTlt flexionando' >Imagen 7: { props.elim == "true" && <div className='resetImageBtn' onClick={ () => resetImage(7,idProyectoActual,slideSelected.id)}> <i class="fa-sharp fa-solid fa-trash"></i> </div> } </div>
          <div className='contImagen' >
               <div>          
                    <input
                         id="input-imagen7"
                         type="file"
                         ref={inputRefimg7}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefimg7, slideSelected.id+'-i7',idProyectoActual,slideSelected.id,idProyectoActual,'i7')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen7"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg7 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg7 } id="imgSlide7"  className="img-prev" /></div>               
          </div>
          </>
     )
}

export const ObjSld_imagen8 = (props) => {
     const inputRefimg8 = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg8, setUrlImg8,
     } = useContext(ContextAreaDeTrabajo); 

     const resetImage = (numImage) => {          
          let url = `./../../logos/image_icon.png`
          let idImage=''
          setUrlImg8(url); 
          idImage='imagen8'
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${idImage} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
                    }, null);
               });
     }

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){               
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen8 =='image.png' || results.rows.item(0).imagen8 =='' ){
                              url = `./../../logos/image_icon.png`
                         } else{
                              url = `c:/flskrk/${carpeta}/${results.rows.item(0).imagen8}?${new Date().getTime()}`
                         }
                         setUrlImg8(url)
                         resolve("ok")
                    }, null);
               });
          })
     }

     return (
          <>
          <div className='editTlt flexionando' >Imagen 8: { props.elim == "true" && <div className='resetImageBtn' onClick={ () => resetImage(8,idProyectoActual,slideSelected.id)}> <i class="fa-sharp fa-solid fa-trash"></i> </div> } </div>
          <div className='contImagen' >
               <div>
                    <input
                         id="input-imagen8"
                         type="file"
                         ref={inputRefimg8}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefimg8, slideSelected.id+'-i8',idProyectoActual,slideSelected.id,idProyectoActual,'i8')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-imagen8"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg8 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ urlImg8 } id="imgSlide8"  className="img-prev" /></div>               
          </div>
          </>
     )
}








export const PreguntaRadio01 = () => {

     const agregarRespuesta = (idProyectoActual,sesion,idSlide) => {
     }

     


     return (
          <div className='contPregRadio01' >
               <div>                                      
                    <div>--------------</div>
                    <div>Respuestas:</div>                    
                    <ObjetoRespuestaRadioG numObj="1" />
                    <ObjetoRespuestaRadioG numObj="2" />
                    <ObjetoRespuestaRadioG elim="true" numObj="3" />
                    <ObjetoRespuestaRadioG elim="true" numObj="4" />
                    <ObjetoRespuestaRadioG elim="true" numObj="5" />
                    <ObjetoRespuestaRadioG elim="true" numObj="6" />
                    <ObjetoRespuestaRadioG elim="true" numObj="7" />
                    <ObjetoRespuestaRadioG elim="true" numObj="8" />                    
               </div>
          </div>
     )

}

export const PreguntaRadio02 = (props) => {

     const {
          slideSelected,sesion,idProyectoActual,idUsuario,          
          urlImg1, setUrlImg1,
          urlImg2, setUrlImg2,
          urlImg3, setUrlImg3,
          urlImg4, setUrlImg4,
          urlImg5, setUrlImg5,
          valResp1,valResp2,valResp3,valResp4,valResp5,valResp6,valResp7,valResp8,
          setValResp1,setValResp2,setValResp3,setValResp4,setValResp5,setValResp6,setValResp7,setValResp8,     
     } = useContext(ContextAreaDeTrabajo); 

     const guardaRespuestaBD = (opcResp) => {
          let varUpdate = '';

          switch (opcResp) {
               case 1:
                    varUpdate = 'valor01'
                    break;
               case 2:
                    varUpdate = 'valor02'
                    break;
               case 3:
                    varUpdate = 'valor03'
                    break;
               case 4:
                    varUpdate = 'valor04'
                    break;
               case 5:
                    varUpdate = 'valor05'
                    break;
               default:
                    break;
          }

          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`UPDATE TBL_RESPUESTA SET valor01 = null,valor02 = null,valor03 = null,valor04 = null,valor05 = null WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
               }, null);

               tx.executeSql(`UPDATE TBL_RESPUESTA SET ${varUpdate} = 1 WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
               }, null);               
          });
     }



     const selectedRespImage = (idResp) =>{
          setValResp1('');
          setValResp2('');
          setValResp3('');
          setValResp4('');
          setValResp5('');

          switch (idResp) {
               case 1:
                    setValResp1(1)
                    guardaRespuestaBD(1)
                    break;
               case 2:
                    setValResp2(1)
                    guardaRespuestaBD(2)
                    break;
               case 3:
                    setValResp3(1)
                    guardaRespuestaBD(3)
                    break;
               case 4:
                    setValResp4(1)
                    guardaRespuestaBD(4)
                    break;
               case 5:
                    setValResp5(1)
                    guardaRespuestaBD(5)
                    break;
               default:
                    break;
          }
     } 


     return (
          <>
               {
                    (props.radio == 1 && (urlImg1 && urlImg1!= './../../logos/image_icon.png' ) ) ? <div onClick={()=>selectedRespImage(1)} className={valResp1 == 1  ? 'seleccionaCorrectoRadioImagen respSelected2' : 'seleccionaCorrectoRadioImagen' } ><i class="fa-sharp fa-solid fa-circle-check"></i></div> : 
                    (props.radio == 2 && (urlImg2 && urlImg2!= './../../logos/image_icon.png' ) ) ? <div onClick={()=>selectedRespImage(2)} className={valResp2 == 1  ? 'seleccionaCorrectoRadioImagen respSelected2' : 'seleccionaCorrectoRadioImagen' } ><i class="fa-sharp fa-solid fa-circle-check"></i></div> : 
                    (props.radio == 3 && (urlImg3 && urlImg3!= './../../logos/image_icon.png' ) ) ? <div onClick={()=>selectedRespImage(3)} className={valResp3 == 1  ? 'seleccionaCorrectoRadioImagen respSelected2' : 'seleccionaCorrectoRadioImagen' } ><i class="fa-sharp fa-solid fa-circle-check"></i></div> : 
                    (props.radio == 4 && (urlImg4 && urlImg4!= './../../logos/image_icon.png' ) ) ? <div onClick={()=>selectedRespImage(4)} className={valResp4 == 1  ? 'seleccionaCorrectoRadioImagen respSelected2' : 'seleccionaCorrectoRadioImagen' } ><i class="fa-sharp fa-solid fa-circle-check"></i></div> : 
                    (props.radio == 5 && (urlImg5 && urlImg5!= './../../logos/image_icon.png' ) ) ? <div onClick={()=>selectedRespImage(5)} className={valResp5 == 1  ? 'seleccionaCorrectoRadioImagen respSelected2' : 'seleccionaCorrectoRadioImagen' } ><i class="fa-sharp fa-solid fa-circle-check"></i></div> : null
               }
          
          </>
     )

}


export const PreguntaCheckbox01 = (props) => {
     
          const {
               slideSelected,sesion,idProyectoActual,idUsuario,  
               resp1,resp2,resp3,resp4,resp5,resp6,resp7,resp8,
               setResp1,setResp2,setResp3,setResp4,setResp5,setResp6,setResp7,setResp8,                       
               valResp1,valResp2,valResp3,valResp4,valResp5,valResp6,valResp7,valResp8,
               setValResp1,setValResp2,setValResp3,setValResp4,setValResp5,setValResp6,setValResp7,setValResp8,     
          } = useContext(ContextAreaDeTrabajo); 
     
          const guardaRespuestaBD_val = (opcResp) => {
               let varUpdate='';
               switch (opcResp) {                              
                    case 1: valResp1== 1 ? (setValResp1(0), varUpdate = 0 ) : (setValResp1(1), varUpdate = 1 ); break;
                    case 2: valResp2== 1 ? (setValResp2(0), varUpdate = 0 ) : (setValResp2(1), varUpdate = 1 ); break;
                    case 3: valResp3== 1 ? (setValResp3(0), varUpdate = 0 ) : (setValResp3(1), varUpdate = 1 ); break;
                    case 4: valResp4== 1 ? (setValResp4(0), varUpdate = 0 ) : (setValResp4(1), varUpdate = 1 ); break;
                    case 5: valResp5== 1 ? (setValResp5(0), varUpdate = 0 ) : (setValResp5(1), varUpdate = 1 ); break;
                    case 6: valResp6== 1 ? (setValResp6(0), varUpdate = 0 ) : (setValResp6(1), varUpdate = 1 ); break;
                    case 7: valResp7== 1 ? (setValResp7(0), varUpdate = 0 ) : (setValResp7(1), varUpdate = 1 ); break;
                    case 8: valResp8== 1 ? (setValResp8(0), varUpdate = 0 ) : (setValResp8(1), varUpdate = 1 ); break;

               }
               console.log("===guardaRespuestaBD_val===",opcResp,valResp1)
               
               
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {                   
                    tx.executeSql(`UPDATE TBL_RESPUESTA SET valor0${opcResp} = ? WHERE slide = ?  AND id_proyecto = ? `, [varUpdate,slideSelected.id,idProyectoActual], function(tx, results) {                         
                         
                         console.log("Ya estamos dentro del BD");
                    }, null);               
               });
          }

          const guardaRespuestaBD_txt = (txt, variable) => {          
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {                   
                    tx.executeSql(`UPDATE TBL_RESPUESTA SET ${variable} = ? WHERE slide = ?  AND id_proyecto = ? `, [txt,slideSelected.id,idProyectoActual], function(tx, results) {                         
                    }, null);               
               });
          }


          return(
               <>
                    <div><div>Respuesta 1:</div>
                         <input 
                              onChange={(e)=>setResp1(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt01_respuesta')}
                              type="text" 
                         />
                         { resp1 ? <div className={valResp1 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' }
                                        onClick={ ()=> guardaRespuestaBD_val(1)  } ></div> : null }
                         
                    </div>
                    <div><div>Respuesta 2:</div>
                         <input 
                              onChange={(e)=>setResp2(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt02_respuesta')}
                              type="text" 
                         />
                         { resp2 ? <div className={valResp2 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(2)  }  >d</div> : null }
                         
                    </div>
                    <div><div>Respuesta 3:</div>
                         <input 
                              onChange={(e)=>setResp3(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt03_respuesta')}
                              type="text" 
                         />
                         { resp3 ? <div className={valResp3 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(3)  } >d</div> : null }
                         
                    </div>
                    <div><div>Respuesta 4:</div>
                         <input 
                              onChange={(e)=>setResp4(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt04_respuesta')}
                              type="text" 
                         />
                         { resp4 ? <div className={valResp4 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(4)  } >d</div> : null }
                         
                    </div>
                    <div><div>Respuesta 5:</div>
                         <input 
                              onChange={(e)=>setResp5(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt05_respuesta')}
                              type="text" 
                         />
                         { resp5 ? <div className={valResp5 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(5)  } >d</div> : null }
                         
                    </div>
                    <div><div>Respuesta 6:</div>
                         <input 
                              onChange={(e)=>setResp6(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt06_respuesta')}
                              type="text" 
                         />
                         { resp6 ? <div className={valResp6 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(6)  } >d</div> : null }
                         
                    </div>
                    <div><div>Respuesta 7:</div>
                         <input 
                              onChange={(e)=>setResp7(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt07_respuesta')}
                              type="text" 
                         />
                         {resp7 ? <div  className={valResp7 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(7)  } >d</div> : null }
                         
                    </div>
                    <div><div>Respuesta 8:</div>
                         <input 
                              onChange={(e)=>setResp8(e.target.value)}
                              onBlur={(e)=>guardaRespuestaBD_txt(e.target.value, 'txt08_respuesta')}
                              type="text" 
                         />
                         {resp8 ? <div  className={valResp8 == 1  ? 'cajitaValCheckbox selectedCheck' : 'cajitaValCheckbox' } 
                                        onClick={ ()=> guardaRespuestaBD_val(8)  } >d</div> : null}
                         
                    </div>
               </>
          )
}





export const BtnAddImage = () => {
     
     return (
          <div className='btnAddImage' >Agregar otra imagen</div>
     )

}




export const ObjSld_audio = (props) => {
          const inputRefAudio = useRef(null);     
          const {
               slideSelected,sesion,idProyectoActual,idUsuario,urlImg1, setUrlImg1,
          } = useContext(ContextAreaDeTrabajo); 
          
          console.log("dfdsadsadsadsa: ",urlImg1)

          const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
               return new Promise(function(resolve, reject){               
                    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
                    db.transaction(function(tx) {
                         tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                              let carpeta = idProyectoActual;
                              let url='';
                              if( results.rows.item(0).imagen1 =='image.png' ){
                                   url = `./../../logos/image_icon.png`
                              } else{
                                   url = frecuencia
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
                         <div>Selecciona el audio: </div>
                         <input
                              id="input-audio"
                              type="file"
                              accept=".mp3"
                              ref={inputRefAudio}
                              className="input-imagen"
                              onChange={(e) => {                                   
                                        moverDesdeInput(inputRefAudio, slideSelected.id+'-i1',idProyectoActual,slideSelected.id,idProyectoActual,'i1')
                                        .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                                   }
                              }
                         />
                         <label htmlFor="input-audio"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg1 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
                    </div>
                    <div className='previewImg' ><img src={ (urlImg1=='./../../logos/image_icon.png' || !urlImg1 ) ? audio_ini : frecuencia     } id="imgSlide8"  className="img-prev" /></div>               
               </div>
          )
}

export const ObjSld_video = (props) => {
     const inputRefVideo = useRef(null);     
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,urlImg1, setUrlImg1,setUrlImg2,urlImg2
     } = useContext(ContextAreaDeTrabajo); 
     
     console.log("imagen video---: ",urlImg1)

     const obtenerUrlImagen = (idProyectoActual, sesion,id) =>{
          return new Promise(function(resolve, reject){               
               const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ? AND slide = ?   ', [idProyectoActual,sesion,id], function(tx, results) {
                         let carpeta = idProyectoActual;
                         let url='';
                         if( results.rows.item(0).imagen1 =='image.png' ){
                              url = `./../../logos/image_icon.png`
                         } else{
                              url = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen1}`
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
                    <div>Selecciona el video: </div>
                    <input
                         id="input-video"
                         type="file"
                         accept=".mp4"
                         ref={inputRefVideo}
                         className="input-imagen"
                         onChange={(e) => {                                   
                                   moverDesdeInput(inputRefVideo, slideSelected.id+'-i1',idProyectoActual,slideSelected.id,idProyectoActual,'i1')
                                   .then( algo =>  obtenerUrlImagen(idProyectoActual,sesion,slideSelected.id, algo))                                   
                              }
                         }
                    />
                    <label htmlFor="input-video"><i className="fa-solid fa-arrow-up-from-bracket"></i>&nbsp;&nbsp; { urlImg1 != 'c:/image.png' ? 'ok' :  'Selecciona una imagen' }   </label>
               </div>
               <div className='previewImg' ><img src={ (urlImg1=='./../../logos/image_icon.png' || !urlImg2 ) ? video_ini : video_anim     } id="imgSlide8"  className="img-prev" /></div>               
          </div>
     )
}