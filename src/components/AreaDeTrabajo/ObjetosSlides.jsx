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
               /*
               case 4: setUrlImg4(url); break;
               case 5: setUrlImg5(url); break;
               case 6: setUrlImg6(url); break;
               case 7: setUrlImg7(url); break;
               case 8: setUrlImg8(url); break;*/
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



export const BtnAddImage = () => {
     
     return (
          <div className='btnAddImage' >Agregar otra imagen</div>
     )

}