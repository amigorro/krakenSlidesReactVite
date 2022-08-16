import React, {useContext, useEffect} from 'react'
import './quill.css'
import { useQuill } from 'react-quilljs';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { MsgConfirmEliminar } from './CronoCompsForm';

const CronogramaFormulario = ( props ) => {

  const {
    idUsuario,
    sesion, setSesion,    
    idProyectoActual,
    slideSelected, setSlideSelected,    
    despCronograma, setDespCronograma,
    tipoCronograma, setTipoCronograma,
    eliminarCrono, setEliminarCrono,
    confirmEliminarCrono, setConfirmEliminarCrono,
  } = useContext(ContextAreaDeTrabajo);
  
  
  
    const [bdObjetivo, setBdObjetivo] = React.useState('');
    const [bdInstrucciones, setBdInstrucciones] = React.useState('');
    const [bdTiempo, setBdTiempo] = React.useState('');
    const [bdNotas, setBdNotas] = React.useState('');
    const [bdMateriales, setBdMateriales] = React.useState('');
    const [bdTec1, setBdTec1] = React.useState(false);
    const [bdTec2, setBdTec2] = React.useState(false);
    const [bdTec3, setBdTec3] = React.useState(false);
    const [bdTec4, setBdTec4] = React.useState(false);
    const [bdTec5, setBdTec5] = React.useState(false);
    const [bdTec6, setBdTec6] = React.useState(false);
    const [bdTec7, setBdTec7] = React.useState(false);
    const [bdTec8, setBdTec8] = React.useState(false);
    const [bdTec9, setBdTec9] = React.useState(false);
    const [bdTec10, setBdTec10] = React.useState(false);



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
    cargaValoresCronograma(slideSelected.id)    
  } , [tipoCronograma] )

  useEffect( () =>{
    if (quill) {
      cargaValoresQuill(slideSelected.id) 
       
      quill.on('text-change', (delta, oldDelta, source) => {                
        setBdInstrucciones(quill.root.innerHTML)        
        actualizarRegBdSlideCronogramas("instrucciones",quill.root.innerHTML)
      });
    }          
  }, [quill]  )

  
  useEffect( () =>{    

      if ( eliminarCrono){
        console.warn("cronograma: id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND id_slide = ?"+slideSelected.id,sesion,idProyectoActual,idUsuario)
      }


  } , [confirmEliminarCrono] )



    const  tipo  = props.tipo;
    let titulo=''

    const revisaCheck = (id) => {
        switch (id) {
          case "tec1":
            bdTec1 ? ( setBdTec1(false), actualizarRegBdSlideCronogramas("tec1",null))  :  (setBdTec1(true), actualizarRegBdSlideCronogramas("tec1",1))
            break; 
          case "tec2":
            bdTec2 ? ( setBdTec2(false), actualizarRegBdSlideCronogramas("tec2",null))  :  (setBdTec2(true), actualizarRegBdSlideCronogramas("tec2",1))
            break;
          case "tec3":
            bdTec3 ? ( setBdTec3(false), actualizarRegBdSlideCronogramas("tec3",null))  :  (setBdTec3(true), actualizarRegBdSlideCronogramas("tec3",1))
            break;
          case "tec4":
            bdTec4 ? ( setBdTec4(false), actualizarRegBdSlideCronogramas("tec4",null))  :  (setBdTec4(true), actualizarRegBdSlideCronogramas("tec4",1))
            break;
          case "tec5":
            bdTec5 ? ( setBdTec5(false), actualizarRegBdSlideCronogramas("tec5",null))  :  (setBdTec5(true), actualizarRegBdSlideCronogramas("tec5",1))
            break;
          case "tec6":
            bdTec6 ? ( setBdTec6(false), actualizarRegBdSlideCronogramas("tec6",null))  :  (setBdTec6(true), actualizarRegBdSlideCronogramas("tec6",1))
            break;  
          case "tec7":
            bdTec7 ? ( setBdTec7(false), actualizarRegBdSlideCronogramas("tec7",null))  :  (setBdTec7(true), actualizarRegBdSlideCronogramas("tec7",1))
            break;
          case "tec8":
            bdTec8 ? ( setBdTec8(false), actualizarRegBdSlideCronogramas("tec8",null))  :  (setBdTec8(true), actualizarRegBdSlideCronogramas("tec8",1))
            break;
          case "tec9":
            bdTec9 ? ( setBdTec9(false), actualizarRegBdSlideCronogramas("tec9",null))  :  (setBdTec9(true), actualizarRegBdSlideCronogramas("tec9",1))
            break;
        }
    }
    

    switch (tipo) {
        case 'encuadre':
            titulo = 'Encuadre del tema'
            break;
        case 'instruccion':
            titulo = 'Instrucción'
            break;
        case 'ejercicio':
            titulo = 'Ejercicio o práctica'
            break;
        case 'actividad':
            titulo = 'Actividad verificadora'
            break;
    }


    const imprimeObjetos = () =>{

      switch (tipo) {
        case 'encuadre':
            return(
                <div>
                  <div className='crono_subtlt' >Objetivo:</div>
                  <input 
                      type='text' 
                      className='cronogramasInputText' 
                      defaultValue={bdObjetivo}
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("objetivo",e.target.value)                          
                      }}
                      />
                
                  <div className='crono_subtlt' >Instrucciones:</div>
                  <div className='editorQuill cronogramasQuill ' ><div ref={quillRef} /></div> 

                  <div className='crono_subtlt' >Tiempo:</div>
                  <input 
                      type='number' 
                      defaultValue={bdTiempo}
                      className='cronogramasTiempo' 
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("tiempo",e.target.value)                          
                      }}
                  />

                  <div className='crono_subtlt'>Notas:</div>
                  <textarea 
                      name="" 
                      id="" 
                      cols="80" 
                      defaultValue={bdNotas}
                      className='cronogramasNotas' 
                      rows="5"
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                      }}
                  >   
                  </textarea>
              </div>
            )
        case 'instruccion':
            return(
              <div>
                <div className='crono_subtlt' >Objetivo:</div>
                  <input 
                      type='text' 
                      className='cronogramasInputText' 
                      defaultValue={bdObjetivo}
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("objetivo",e.target.value)                          
                      }}
                      />
                
                  <div className='crono_subtlt' >Instrucciones:</div>
                  <div className='editorQuill cronogramasQuill ' ><div ref={quillRef} /></div> 
                  
                  
                  <div className='crono_subtlt' >Técnicas didácticas </div>
                  <div className='contTecnicas' >
                        <div className={ bdTec1 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec1") }                      
                        >Interrogativa</div>
                        
                        <div className={ bdTec2 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec2") }                      
                        >Demostrativa</div>
                        <div className={ bdTec3 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec3") }                      
                        >Expositiva</div>
                        <div className={ bdTec4 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec4") }                      
                        >Dinámica grupal</div>
                        <div className={ bdTec5 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec5") }                      
                        >Lectura individual</div>
                        <div className={ bdTec6 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec6") }
                        >Lectura comentadal</div>
                        <div className={ bdTec7 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec7") }
                        >Lluvia de ideas</div>
                        <div className={ bdTec8 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec8") }
                        >Dramatización</div>
                        <div className={ bdTec9 ? 'crono_check_label crono_check_label_checked' : 'crono_check_label' } 
                            onClick={ () => revisaCheck("tec9") }
                        >Trabajo en equipo</div>
                  </div>

                  <div className='crono_subtlt' >Tiempo:</div>
                  <input 
                      type='number' 
                      defaultValue={bdTiempo}
                      className='cronogramasTiempo' 
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("tiempo",e.target.value)                          
                      }}
                  />

                  <div className='crono_subtlt' >Materiales:</div>
                  <textarea 
                      name="" 
                      id="" 
                      cols="80" 
                      //defaultValue={bdNotas}
                      //className='cronogramasNotas' 
                      rows="5"
                      onBlur={(e)=>{  
                        //actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                      }}
                  >   
                  </textarea>


                  <div className='crono_subtlt' >Notas:</div>
                  <textarea 
                      name="" 
                      id="" 
                      cols="80" 
                      defaultValue={bdNotas}
                      className='cronogramasNotas' 
                      rows="5"
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                      }}
                  >   
                  </textarea>
              </div>
            )
            break;
        case 'ejercicio':
          return(
            <div>
              <div className='crono_subtlt' >Objetivo:</div>
                <input 
                    type='text' 
                    className='cronogramasInputText' 
                    defaultValue={bdObjetivo}
                    onBlur={(e)=>{  
                      actualizarRegBdSlideCronogramas("objetivo",e.target.value)                          
                    }}
                    />
              
                <div className='crono_subtlt' >Instrucciones:</div>
                <div className='editorQuill cronogramasQuill ' ><div ref={quillRef} /></div> 
                
                <div className='crono_subtlt'>Técnicas didácticas </div>
                
                <label><input type="checkbox" id="tec1" value="1"/> Interrogativa</label>
                <label><input type="checkbox" id="tec2" value="1"/> Demostrativa</label>
                <label><input type="checkbox" id="tec3" value="1"/> Expositiva</label>
                <label><input type="checkbox" id="tec4" value="1"/> Dinámica grupal</label>
                <label><input type="checkbox" id="tec5" value="1"/> Lectura individual</label>
                <label><input type="checkbox" id="tec6" value="1"/> Lectura comentada</label>
                <label><input type="checkbox" id="tec7" value="1"/> Lluvia de ideas</label>
                <label><input type="checkbox" id="tec8" value="1"/> Dramatización</label>
                <label><input type="checkbox" id="tec9" value="1"/> Trabajo en equipo</label>
                

                <div className='crono_subtlt'>Tiempo:</div>
                <input 
                    type='number' 
                    defaultValue={bdTiempo}
                    className='cronogramasTiempo' 
                    onBlur={(e)=>{  
                      actualizarRegBdSlideCronogramas("tiempo",e.target.value)                          
                    }}
                />

                <div className='crono_subtlt'>Materiales:</div>
                <textarea 
                    name="" 
                    id="" 
                    cols="80" 
                    //defaultValue={bdNotas}
                    //className='cronogramasNotas' 
                    rows="5"
                    onBlur={(e)=>{  
                      //actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                    }}
                >   
                </textarea>


                <div className='crono_subtlt' >Notas:</div>
                <textarea 
                    name="" 
                    id="" 
                    cols="80" 
                    defaultValue={bdNotas}
                    className='cronogramasNotas' 
                    rows="5"
                    onBlur={(e)=>{  
                      actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                    }}
                >   
                </textarea>
            </div>
          )
            break;
        case 'actividad':
          return(
            <div>
                <div className='crono_subtlt' >Instrucciones:</div>
                <div className='editorQuill cronogramasQuill ' ><div ref={quillRef} /></div> 
                
                <div className='crono_subtlt'>Técnicas didácticas </div>
                
                <label><input type="checkbox" id="tec1" value="1"/> Interrogativa</label>
                <label><input type="checkbox" id="tec2" value="1"/> Demostrativa</label>
                <label><input type="checkbox" id="tec3" value="1"/> Expositiva</label>
                <label><input type="checkbox" id="tec4" value="1"/> Dinámica grupal</label>
                <label><input type="checkbox" id="tec5" value="1"/> Lectura individual</label>
                <label><input type="checkbox" id="tec6" value="1"/> Lectura comentada</label>
                <label><input type="checkbox" id="tec7" value="1"/> Lluvia de ideas</label>
                <label><input type="checkbox" id="tec8" value="1"/> Dramatización</label>
                <label><input type="checkbox" id="tec9" value="1"/> Trabajo en equipo</label>
                

                <div className='crono_subtlt' >Tiempo:</div>
                <input 
                    type='number' 
                    defaultValue={bdTiempo}
                    className='cronogramasTiempo' 
                    onBlur={(e)=>{  
                      actualizarRegBdSlideCronogramas("tiempo",e.target.value)                          
                    }}
                />

                <div className='crono_subtlt'>Materiales:</div>
                <textarea 
                    name="" 
                    id="" 
                    cols="80" 
                    //defaultValue={bdNotas}
                    //className='cronogramasNotas' 
                    rows="5"
                    onBlur={(e)=>{  
                      //actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                    }}
                >   
                </textarea>


                <div className='crono_subtlt'>Notas:</div>
                <textarea 
                    name="" 
                    id="" 
                    cols="80" 
                    defaultValue={bdNotas}
                    className='cronogramasNotas' 
                    rows="5"
                    onBlur={(e)=>{  
                      actualizarRegBdSlideCronogramas("notas",e.target.value)                          
                    }}
                >   
                </textarea>
            </div>
          )
            break;
      }

    }

    const cargaValoresQuill  = (slideId) =>{
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function(tx) {
           tx.executeSql('SELECT * FROM TBL_CRONOGRAMA WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND id_slide = ?  ', [idProyectoActual,sesion,slideId], function(tx, results) {
                console.log("SELECT:"+idProyectoActual,sesion,slideId)
                let len = results.rows.length ;
                                
                if(len > 0){                                  
                  setBdInstrucciones(results.rows.item(0).instrucciones) 
                  quill.clipboard.dangerouslyPasteHTML(results.rows.item(0).instrucciones);                 
                }
           }, null);
      });
 }     

    const cargaValoresCronograma = (slideId) =>{
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function(tx) {
           tx.executeSql('SELECT * FROM TBL_CRONOGRAMA WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND id_slide = ?  ', [idProyectoActual,sesion,slideId], function(tx, results) {
                console.log("SELECT:"+idProyectoActual,sesion,slideId)
                let len = results.rows.length ;
                                
                if(len > 0){                
                  console.log("obj"+results.rows.item(0).objetivo)
                  setBdObjetivo(results.rows.item(0).objetivo)
                  //setBdInstrucciones(results.rows.item(0).instrucciones)
                  setBdTiempo(results.rows.item(0).tiempo)
                  setBdNotas(results.rows.item(0).notas)
                  setBdMateriales(results.rows.item(0).materiales)
                  setBdTec1(results.rows.item(0).tec1)
                  setBdTec2(results.rows.item(0).tec2)
                  setBdTec3(results.rows.item(0).tec3)
                  setBdTec4(results.rows.item(0).tec4)
                  setBdTec5(results.rows.item(0).tec5)
                  setBdTec6(results.rows.item(0).tec6)
                  setBdTec7(results.rows.item(0).tec7)
                  setBdTec8(results.rows.item(0).tec8)
                  setBdTec9(results.rows.item(0).tec9)
                  setBdTec10(results.rows.item(0).tec10)
                }
           }, null);
      });
 }     



 const eliminaRegCronograma = async (crono) =>{
  const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
  db.transaction(function(tx) {
      tx.executeSql(`UPDATE TBL_CRONOGRAMA SET ${variable} = ?, tipo = ? WHERE id_slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, tipoCronograma,slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
        console.log('results', results)                    
      }, null);
  });
}

    const actualizarRegBdSlideCronogramas = async (variable,valor) =>{
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function(tx) {
          tx.executeSql(`UPDATE TBL_CRONOGRAMA SET ${variable} = ?, tipo = ? WHERE id_slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, tipoCronograma,slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
            console.log('results', results)                    
          }, null);
      });
    }


    const cerrarFormularioCronograma = () =>{
      setDespCronograma(false)
      setDespCronograma(false)
      setTipoCronograma('off')
            
    }




  return (
    <div className='CronogramaFormulario-desp' >
          <div onClick={ () => cerrarFormularioCronograma() } className='crono_cerrar' >X</div>
          <div className='crono_tlt'>{ titulo }</div>
          <div className='CronogramaFormulario-desp-objetos' >
              {
                  imprimeObjetos()
              }
          </div>
          <div className='contBtnCrono'>
              <div className='btnElimCrono' onClick={ () => setEliminarCrono(true) } >Eliminar cronograma  </div> { eliminarCrono && <MsgConfirmEliminar />  }
              <div className='btnRegCrono' onClick={ () => setTipoCronograma('off') } >Regresar</div>
          </div>
    </div>
  )
}

export default CronogramaFormulario