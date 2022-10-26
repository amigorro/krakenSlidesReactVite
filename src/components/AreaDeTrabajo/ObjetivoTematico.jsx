import React,{useContext,useEffect} from 'react'
import './ObjetivoTematico.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { useQuill } from 'react-quilljs';

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
     
     } = useContext(ContextAreaDeTrabajo);     

     /* Opciones Editor Quill */
     const placeholder = 'Instrucciones';      
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
     },[]);

     const actualizarRegBdSlideObjetivos = async (variable,valor) =>{
          console.log("actualizarRegBdSlideObjetivos",variable,valor)
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
                    break;
               case 'verbo2':
                    variablesVerbos = `,verbo1='',verbo3='',verbo4='',verbo5='',verbo6='' `;
                    break;
               case 'verbo3':
                    variablesVerbos = `,verbo1='',verbo2='',verbo4='',verbo5='',verbo6='' `;
                    break;
               case 'verbo4':
                    variablesVerbos = `,verbo1='',verbo2='',verbo3='',verbo5='',verbo6='' `;
                    break;
               case 'verbo5':
                    variablesVerbos = `,verbo1='',verbo2='',verbo3='',verbo4='',verbo6='' `;
                    break;
               case 'verbo6':
                    variablesVerbos = `,verbo1='',verbo2='',verbo3='',verbo4='',verbo5='' `;
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
                              <select   defaultValue='' 
                                        onChange={ (e)=> actualizarRegBdSlideObjetivos('tipoObj', e.target.value) } 
                                        className='contObjTematico-desp-form-select' name="" id="">
                                   <option value="0" className='disebleOption' disabled  >Seleccione</option>
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
                                   id="">
                                   <option value="0" className='disebleOption' disabled selected >Seleccione</option>
                                   <option value="1">Declarativo</option>
                                   <option value="2">Procedimental</option>
                                   <option value="3">Actitudinal</option>
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
                                   onChange={ (e)=> actualizarRegBdSlideObjetivos('temporaqlidad', e.target.value) } 
                                   />
                         </div>
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' >Aprendiz <span className='txtbajito' >¿quién?</span></div>
                              <input 
                                   className='contObjTematico-desp-form-input' 
                                   type="text" 
                                   onChange={ (e)=> actualizarRegBdSlideObjetivos('aprendiz', e.target.value) } 
                                   />
                         </div>
                         <div className='contObjTematico-desp-form-reg' >
                              <div className='contObjTematico-desp-form-reg-tlt' >Verbo de acción <span className='txtbajito' >¿qué?</span></div> 
                                        <div className='contenedorSelects' >
                                             <select 
                                                  className='contObjTematico-desp-form-select' 
                                                  onChange={ (e)=> actualizarRegBdSlideObjetivosVerbos('verbo1', e.target.value) } 
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
                                                  name="5" 
                                                  id="e"
                                                  >
                                                  <option value="0" className='disebleOption' disabled  >EVALUACIÓN</option>
                                                  <option value="solucionará">Solucionará</option>
                                                  <option value="ideará">Ideará</option>
                                                  <option value="esquematizará">Esquematizará</option>
                                                  <option value="inventará">Inventará</option>
                                                  <option value="improvisará">Improvisará</option>
                                                  <option value="creará">Creará</option>
                                                  <option value="diseñará">Diseñará</option>
                                             </select>
                                        </div>
                                   </div>

                              <div className=' objetivoQuill' >
                                   <div className='contObjTematico-desp-form-reg-tlt' >Contenido <span className='txtbajito' >¿cuál?</span></div> 
                                   <div className='editorQuill editorQuill2 ' ><div ref={quillRef} /></div>         
                              </div>
                              <div className='contObjTematico-desp-form-reg' >
                                   <div className='contObjTematico-desp-form-reg-tlt' >Finalidad <span className='txtbajito' >¿cómo? y/o ¿para qué?</span></div>
                                   <input className='contObjTematico-desp-form-input' type="text" />
                              </div>
                              <div className='contObjTematico-desp-form-reg' >
                                   <div className='contObjTematico-desp-form-reg-tlt' >Actividad de evaluación</div>
                                             <select className='contObjTematico-desp-form-select' name="" id="">
                                                  <option value="0" className='disebleOption' disabled selected >Seleccione</option>
                                                  <option value="">Prueba</option>
                                                  <option value="">Examen</option>
                                                  <option value="">Tarea</option>
                                                  <option value="">Proyecto</option>
                                             </select>
                              </div>



                    </div>
                    <div>
                         <div> Texto de prueba... </div>
                         <div>Eliminar Objetivo de aprendizaje</div>
                    </div>
               </div>

          </div>
     </div>
  )
}
 