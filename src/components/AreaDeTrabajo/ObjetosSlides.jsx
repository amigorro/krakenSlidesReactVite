import {useContext,useRef,useState,useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { ActualizarRegBdSlideContenidos } from '../helpers/GuardaEnBD';
import {moverDesdeInput} from '../helpers/GestionArchivos';
import './ObjetosSlides.css'
import {ObjetoRespuestaRadioG} from './ObjetoRespuestaRadioG'

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
               <div>Texto:</div>
               <textarea 
                    name="" 
                    id="" 
                    value={params.variab === 'texto1' ? slideTexto1 : params.variab === 'texto2' ? slideTexto2 : params.variab === 'texto3' ? slideTexto3 : params.variab === 'texto4' ? slideTexto4 : params.variab === 'texto5' ? slideTexto5 : params.variab === 'texto6' ? slideTexto6 : '' }
                    onChange={ (e) => { params.variab === 'texto1' && setSlideTexto1(e.target.value) || params.variab === 'texto2' && setSlideTexto2(e.target.value) || params.variab === 'texto3' && setSlideTexto3(e.target.value) || params.variab === 'texto4' && setSlideTexto4(e.target.value) || params.variab === 'texto5' && setSlideTexto5(e.target.value) || params.variab === 'texto6' && setSlideTexto6(e.target.value) }}
                    onBlur={ (e)=>{ updateText(e.target.value)} }
                    cols="70" 
                    rows="10"
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 2:</div>
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 3: { props.elim == "true" && <div onClick={ () => resetImage(3,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 4: { props.elim == "true" && <div onClick={ () => resetImage(4,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 5: { props.elim == "true" && <div onClick={ () => resetImage(5,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 6: { props.elim == "true" && <div onClick={ () => resetImage(6,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 7: { props.elim == "true" && <div onClick={ () => resetImage(7,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
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
                         if( results.rows.item(0).imagen8 =='image.png' ){
                              url = `./../../logos/image_icon.png?${new Date().getTime()}`
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
          <div className='contImagen' >
               <div>
                    <div>Imagen 8: { props.elim == "true" && <div onClick={ () => resetImage(8,idProyectoActual,slideSelected.id)}> eliminar </div> } </div>
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




export const BtnAddImage = () => {
     
     return (
          <div className='btnAddImage' >Agregar otra imagen</div>
     )

}