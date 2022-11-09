import React,{useContext,useEffect,useState} from 'react'
import './ObjetivoTematico.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { useQuill } from 'react-quilljs';
import {BorrarRegsTabla} from '../helpers/GuardaEnBD.jsx'

export const ObjetivoTematico = () => {

     const {
          modalTipoSlide, setModalTipoSlide,
          slideSelected, setSlideSelected,
          setSlides,
          idUsuario,
          idProyectoActual,
          sesion,
          edicion, setEdicion,
          despCronograma, setDespCronograma,
          cv_crono_flag,cv_crono_tipo,
          setTipoCronograma,
     
          /** info Gestión slides: */
          paginacion, setPaginacion,
     
          /** Objetivo aprendizaje */
          modalObjetivoApr, setModalObjetivoApr,
          tipoObj, setTipoObj,
          tipoCont, setTipoCont,
          temporaqlidad, setTemporaqlidad,
          aprendiz, setAprendiz,
          verbo1, setVerbo1,
          verbo2, setVerbo2,
          verbo3, setVerbo3,
          verbo4, setVerbo4,
          verbo5, setVerbo5,
          verbo6, setVerbo6,
          contenido, setContenido,
          finalidad, setFinalidad,
          actividad, setActividad,
     
     } = useContext(ContextAreaDeTrabajo);     

     const [elimObjFlag, setElimObjFlag] = useState(false)


     /* Opciones Editor Quill */
     const placeholder = 'contenido...';      
     const modules = {
     toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ align: [] }],
          [{ list: 'ordered'}, { list: 'bullet' }],
     ],
     };    
     const { quill, quillRef } = useQuill({placeholder,modules});

     useEffect( () =>{
          creaRegistroObjetivo();
          cargaValoresObjetivos2();
     },[]);

     useEffect( () =>{
          if (quill) {
            cargaValoresQuillObjetivo(slideSelected.id) 
             
            quill.on('text-change', (delta, oldDelta, source) => {                
              setContenido(quill.root.innerHTML)        
              actualizarRegBdSlideObjetivos("contenido",quill.root.innerHTML)
            });
          }          
        }, [quill]  )

     const cargaValoresQuillObjetivo  = (slideId) =>{
          setContenido('')
     const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
     db.transaction(function(tx) {
          tx.executeSql('SELECT * FROM ObjetivoApr WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idUsuario,idProyectoActual,sesion,slideSelected.id], function(tx, results) {
               console.log("SELECT:"+idProyectoActual,sesion,slideSelected.id)
               let len = results.rows.length ;
                                   
               if(len > 0){                                  
                    setContenido(results.rows.item(0).contenido) 
                    quill.clipboard.dangerouslyPasteHTML(results.rows.item(0).contenido);                 
               }
          }, null);
     });
     }

     const cargaValoresObjetivos2 = (slideId) =>{
          console.warn('cargaValoresObjetivos2')
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               console.warn('cargaValoresObjetivos2 - entro en fuction db',idUsuario,idProyectoActual,sesion,slideSelected.id)
               tx.executeSql('SELECT * FROM ObjetivoApr WHERE id_usuario = ? AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idUsuario,idProyectoActual,sesion,slideSelected.id], function(tx, results) {
                    
                    console.warn('cargaValoresObjetivos2 - entro tx')
                    let len = 0;    
                    if( results.rows.length ){
                         len =10;
                    }
                    
                    if(len > 0){                                                                                    
                         setTipoObj(results.rows.item(0).tipoObj)
                         setTipoCont(results.rows.item(0).tipoCont)
                         setTemporaqlidad(results.rows.item(0).temporaqlidad)
                         setAprendiz(results.rows.item(0).aprendiz)
                         setVerbo1(results.rows.item(0).verbo1)
                         setVerbo2(results.rows.item(0).verbo2)
                         setVerbo3(results.rows.item(0).verbo3)
                         setVerbo4(results.rows.item(0).verbo4)
                         setVerbo5(results.rows.item(0).verbo5)
                         setVerbo6(results.rows.item(0).verbo6)
                         setContenido(results.rows.item(0).contenido)
                         setFinalidad(results.rows.item(0).finalidad)
                         setActividad(results.rows.item(0).actividad)
                    }
               }, null);
          });
     }





     const actualizarRegBdSlideObjetivos = async (variable,valor) =>{
          console.log("actualizarRegBdSlideObjetivos",variable,valor)
          
          switch (variable) {
               case "tipoObj":
                    setTipoObj(valor)
                    break;
               case "tipoCont":
                    setTipoCont(valor)
                    break;
               case "temporaqlidad":
                    setTemporaqlidad(valor)
                    break;
               case "aprendiz":
                    setAprendiz(valor)                    
                    break;
               case "finalidad":
                    setFinalidad(valor)
                    break;
               case "actividad":
                    setActividad(valor)
                    break;
          }



          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`UPDATE ObjetivoApr SET ${variable} = ? WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ? AND slide = ?`, [valor,idProyectoActual,idUsuario,sesion,slideSelected.id], function(tx, results) {
                    console.log('updateando')                    
               }, null);
          });
     }

     const actualizarRegBdSlideObjetivosVerbos = async (variable,valor) =>{
          let variablesVerbos='';
          switch (variable) {
               case 'verbo1':
                    variablesVerbos = `,verbo2='',verbo3='',verbo4='',verbo5='',verbo6='' `;
                    setVerbo1(valor);
                    setVerbo2('');
                    setVerbo3('');
                    setVerbo4('');
                    setVerbo5('');
                    setVerbo6('');
                    break;
               case 'verbo2':
                    variablesVerbos = `,verbo1='',verbo3='',verbo4='',verbo5='',verbo6='' `;
                    setVerbo1('');
                    setVerbo2(valor);
                    setVerbo3('');
                    setVerbo4('');
                    setVerbo5('');
                    setVerbo6('');
                    break;
               case 'verbo3':
                    variablesVerbos = `,verbo1='',verbo2='',verbo4='',verbo5='',verbo6='' `;
                    setVerbo1('');
                    setVerbo2('');
                    setVerbo3(valor);
                    setVerbo4('');
                    setVerbo5('');
                    setVerbo6('');
                    break;
               case 'verbo4':
                    variablesVerbos = `,verbo1='',verbo2='',verbo3='',verbo5='',verbo6='' `;
                    setVerbo1('');
                    setVerbo2('');
                    setVerbo3('');
                    setVerbo4(valor);
                    setVerbo5('');
                    setVerbo6('');
                    break;
               case 'verbo5':
                    variablesVerbos = `,verbo1='',verbo2='',verbo3='',verbo4='',verbo6='' `;
                    setVerbo1('');
                    setVerbo2('');
                    setVerbo3('');
                    setVerbo4('');
                    setVerbo5(valor);
                    setVerbo6('');
                    break;
               case 'verbo6':
                    variablesVerbos = `,verbo1='',verbo2='',verbo3='',verbo4='',verbo5='' `;
                    setVerbo1('');
                    setVerbo2('');
                    setVerbo3('');
                    setVerbo4('');
                    setVerbo5('');
                    setVerbo6(valor);
                    break;
          }


          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`UPDATE ObjetivoApr SET ${variable} = ? ${variablesVerbos} WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ? AND slide = ?`, [valor,idProyectoActual,idUsuario,sesion,slideSelected.id], function(tx, results) {
                    console.log('updateando')                    
               }, null);
          });
     }

     
     const creaRegistroObjetivo = async (variable,valor) =>{          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`INSERT INTO ObjetivoApr (id_proyecto, id_usuario, sesion, slide) VALUES (?,?,?,?)`, [idProyectoActual,idUsuario,sesion,slideSelected.id], function(tx, results) {
                    console.log('results', results)                    
               }, null);
               
          });
     }

     const eliminarObjetivoFunciones = async () =>{
          BorrarRegsTabla(2,slideSelected.id,sesion,idProyectoActual,idUsuario)
          setModalObjetivoApr(false);  
     }


  return (
     <div className='contObjTematico' >
          <div className='contObjTematico-desp'>
               <div 
                    className='contObjTematico-desp-cerrar' 
                    onClick={() => setModalObjetivoApr(false)}
                    >
               <i className="fa-solid fa-xmark"></i></div>
               
               <div className='contObjTematico-desp-tlt' >Objetivo de aprendizaje</div>
               <div className='dosColumnas'>
                    <div className='contObjTematico-desp-form' >
                         
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' > Tipo de objetivo</div>
                              <select   
                                        onChange={ (e)=> actualizarRegBdSlideObjetivos('tipoObj', e.target.value) } 
                                        className='contObjTematico-desp-form-select' 
                                        value={tipoObj ? tipoObj : '0'}
                                        name="" 
                                        id=""
                                        >
                                   <option value="0" className='disebleOption' disabled selected  >Seleccione</option>
                                   <option value="1">General</option>
                                   <option value="2">Particular</option>
                                   <option value="3">Específico / temático</option>
                              </select>
                         </div>
                         
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' >Tipo de contenido</div>
                              <select 
                                   className='contObjTematico-desp-form-select' 
                                   onChange={ (e)=> actualizarRegBdSlideObjetivos('tipoCont', e.target.value) } 
                                   name="" 
                                   value={tipoCont ? tipoCont : '0'}
                                   id="">
                                   <option value="0" className='disebleOption' disabled selected  >Seleccione</option>
                                   <option value="1" >Declarativo</option>
                                   <option value="2"  >Procedimental</option>
                                   <option value="3"  >Actitudinal</option>
                              </select>
                         </div>

                         <div className='contObjTematico-desp-form-regtlt' >
                              Redacción del objetivo
                         </div>
                         
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' >Temporalidad <span className='txtbajito' >¿cuándo?</span> </div>
                              <input 
                                   className='contObjTematico-desp-form-input' 
                                   type="text" 
                                   defaultValue={temporaqlidad}
                                   onChange={ (e)=> setTemporaqlidad(e.target.value) }
                                   onBlur={ (e)=> actualizarRegBdSlideObjetivos('temporaqlidad', e.target.value) } 
                                   />
                         </div>
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' >Aprendiz <span className='txtbajito' >¿quién?</span></div>
                              <input 
                                   className='contObjTematico-desp-form-input' 
                                   type="text"
                                   defaultValue={aprendiz} 
                                   onChange={ (e)=> actualizarRegBdSlideObjetivos('aprendiz', e.target.value) } 
                                   />
                         </div>
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' >Verbo de acción <span className='txtbajito' >¿qué?</span></div> 
                                        <div className='contenedorSelects' >
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo1', e.target.value) } 
                                                  value={verbo1 ? verbo1 : '0'}
                                                  name="" 
                                                  id=""
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >CONOCIMIENTO</option>
                                                  <option value="repetirá">Repetirá</option>
                                                  <option value="reproducirá">Reproducirá</option>
                                                  <option value="adquirirá">Adquirirá</option>
                                                  <option value="recordará">Recordará</option>
                                                  <option value="reconocerá">Reconocerá</option>
                                                  <option value="identificará">Identificará</option>
                                                  <option value="localizará">Localizará</option>
                                                  <option value="hallará">Hallará</option>
                                                  <option value="nombrará">Nombrará</option>
                                                  <option value="marcará">Marcará</option>
                                                  <option value="apuntará">Apuntará</option>
                                                  <option value="subrayará">Subrayará</option>
                                                  <option value="registrará">Registrará</option>
                                                  <option value="enlistará">Enlistará</option>
                                                  <option value="enunciará">Enunciará</option>
                                                  <option value="declarará">Declarará</option>
                                                  <option value="expresará">Expresará</option>
                                                  <option value="relatará">Relatará</option>
                                                  <option value="escribirá">Escribirá</option>
                                                  <option value="describirá">Describirá</option>
                                                  <option value="definirá">Definirá</option>
                                             </select>
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo2', e.target.value) } 
                                                  value={verbo2 ? verbo2 : '0'}
                                                  name="1" 
                                                  id="e"
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >COMPRENSIÓN</option>
                                                  <option value="revisará">Revisará</option>
                                                  <option value="reafirmará">Reafirmará</option>
                                                  <option value="comprenderá">Comprenderá</option>
                                                  <option value="entenderá">Entenderá</option>
                                                  <option value="tdentificará">Identificará</option>
                                                  <option value="localizará">Localizará</option>
                                                  <option value="expresará">Expresará</option>
                                                  <option value="narrará">Narrará</option>
                                                  <option value="describirá">Describirá</option>
                                                  <option value="traducirá">Traducirá</option>
                                                  <option value="transcribirá">Transcribirá</option>
                                                  <option value="ilustrará">Ilustrará</option>
                                                  <option value="dibujará">Dibujará</option>
                                                  <option value="discutirá">Discutirá</option>
                                                  <option value="explicará">Explicará</option>
                                                  <option value="interpretará">Interpretará</option>
                                                  <option value="inferirá">Inferirá</option>
                                             </select>
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo3', e.target.value) } 
                                                  value={verbo3 ? verbo3 : '0'}
                                                  name="2" 
                                                  id="e"
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >APLICACIÓN</option>
                                                  <option value="ilustrará">Ilustrará</option>
                                                  <option value="esbozará">Esbozará</option>
                                                  <option value="trazará">Trazará</option>
                                                  <option value="dramatizará">Dramatizará</option>
                                                  <option value="construirá">Construirá</option>
                                                  <option value="explicará">Explicará</option>
                                                  <option value="interpretará">Interpretará</option>
                                                  <option value="mostrará">Mostrará</option>
                                                  <option value="desarrollará">Desarrollará</option>
                                                  <option value="inferirá">Inferirá</option>
                                                  <option value="iventariará">Iventariará</option>
                                                  <option value="relacionará">Relacionará</option>
                                                  <option value="transferirá">Transferirá</option>
                                                  <option value="aplicará">Aplicará</option>
                                                  <option value="ejecutará">Ejecutará</option>
                                                  <option value="construirá">Construirá</option>
                                                  <option value="usará">Usará</option>
                                                  <option value="operará">Operará</option>
                                                  <option value="empleará">Empleará</option>
                                                  <option value="prácticará">Prácticará</option>
                                             </select>
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo4', e.target.value) } 
                                                  value={verbo4 ? verbo4 : '0'}
                                                  name="3" 
                                                  id="e"
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >ANÁLISIS</option>
                                                  <option value="coordinará">Coordinará</option>
                                                  <option value="regulará">Regulará</option>
                                                  <option value="regularizará">Regularizará</option>
                                                  <option value="ordenará">Ordenará</option>
                                                  <option value="acoplará">Acoplará</option>
                                                  <option value="vinculará">Vinculará</option>
                                                  <option value="concatenará">Concatenará</option>
                                                  <option value="manipulará">Manipulará</option>
                                             </select>
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo5', e.target.value) } 
                                                  value={verbo5 ? verbo5 : '0'}
                                                  name="4" 
                                                  id="e"
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >SÍNTESIS</option>
                                                  <option value="sistematizará">Sistematizará</option>
                                                  <option value="simplificará">Simplificará</option>
                                                  <option value="reducirá">Reducirá</option>
                                                  <option value="mecanizará">Mecanizará</option>
                                                  <option value="codificará">Codificará</option>
                                                  <option value="computarizará">Computarizará</option>
                                             </select>
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo6', e.target.value) } 
                                                  value={verbo6 ? verbo6 : '0'}
                                                  name="5" 
                                                  id="e"
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >EVALUACIÓN</option>
                                                  <option value="solucionará"   className='disebleOptionNormal'>Solucionará</option>
                                                  <option value="ideará"        className='disebleOptionNormal'>Ideará</option>
                                                  <option value="esquematizará" className='disebleOptionNormal'>Esquematizará</option>
                                                  <option value="inventará"     className='disebleOptionNormal'>Inventará</option>
                                                  <option value="improvisará"   className='disebleOptionNormal'>Improvisará</option>
                                                  <option value="creará"        className='disebleOptionNormal'>Creará</option>
                                                  <option value="diseñará"      className='disebleOptionNormal'>Diseñará</option>
                                             </select>
                                        </div>
                                   </div>

                              <div className=' objetivoQuill' >
                                   <div className='contObjTematico-desp-form-reg-tlt' >Contenido <span className='txtbajito' >¿cuál?</span></div> 
                                   <div className='editorQuill editorQuill2 ' ><div ref={quillRef} /></div>         
                              </div>
                              <div className='contObjTematico-desp-form-reg' >
                                   <div className='contObjTematico-desp-form-reg-tlt' >Finalidad <span className='txtbajito' >¿cómo? y/o ¿para qué?</span></div>
                                   <input 
                                        className='contObjTematico-desp-form-input' 
                                        onChange={ (e)=> actualizarRegBdSlideObjetivos('finalidad', e.target.value) } 
                                        type="text" 
                                        value={finalidad ? finalidad : ''}
                                   />
                              </div>
                              <div className='contObjTematico-desp-form-reg' >
                                   <div className='contObjTematico-desp-form-reg-tlt' >Actividad de evaluación</div>
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={  (e)=> actualizarRegBdSlideObjetivos('actividad', e.target.value) } 
                                                  value={actividad ? actividad : '0'}
                                                  name="" 
                                                  id=""
                                             >
                                                  <option value="0" className='disebleOption' disabled  >Seleccione</option>
                                                  <option value="prueba">Prueba</option>
                                                  <option value="examen">Examen</option>
                                                  <option value="tarea">Tarea</option>
                                                  <option value="proyecto">Proyecto</option>
                                             </select>
                              </div>



                    </div>
                    <div className='vistaPreviaObjetivo' >
                         
                         <div className='vistaPreviaObjetivo-concatenado' >  <div dangerouslySetInnerHTML={{__html: 
                                        (temporaqlidad? temporaqlidad : '' )+" "+
                                        (aprendiz ? aprendiz:'')+" "+
                                        (verbo1 ? verbo1 : '')+
                                        (verbo2 ? verbo2 : '')+
                                        (verbo3 ? verbo3 : '')+
                                        (verbo4 ? verbo4 : '')+
                                        (verbo5 ? verbo5 : '')+
                                        (verbo6 ? verbo6 : '')+ " "+                                        
                                        (contenido ? contenido.substring(3, contenido.length-4 ) : " ")  +" "+
                                        (finalidad ? finalidad : '')  }} ></div> </div>
                         <br/><br/>
                         <div className='btnElimObjetivo' onClick={ ()=>setElimObjFlag(true) } >Eliminar Objetivo de aprendizaje</div>
                         {
                              elimObjFlag && 
                                   <div className='msgElimObj' >
                                        ¿Confirma eliminar el objetivo de aprendizaje?
                                        <div className='deplBtnsOnjsMsg' >
                                             <div 
                                                  className='btnElimObjetivoSi' 
                                                  onClick={ 
                                                       ()=>eliminarObjetivoFunciones()        
                                                  } 
                                                  >Eliminar</div>
                                             <div className='btnElimObjetivoNo' onClick={ ()=>setElimObjFlag(false) } >Cancelar</div>
                                        </div>
                                        
                                   </div>
                         }
                    </div>
               </div>

          </div>
     </div>
  )
}
 