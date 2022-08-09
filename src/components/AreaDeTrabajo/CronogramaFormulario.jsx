import React, {useContext, useEffect} from 'react'
import './quill.css'
import { useQuill } from 'react-quilljs';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

const CronogramaFormulario = ( props ) => {

  const {
    idUsuario,
    sesion, setSesion,    
    idProyectoActual,
    slideSelected, setSlideSelected,    
    despCronograma, setDespCronograma,
    tipoCronograma, setTipoCronograma
  } = useContext(ContextAreaDeTrabajo);
  
  
  
    const [bdObjetivo, setBdObjetivo] = React.useState('');
    const [bdInstrucciones, setBdInstrucciones] = React.useState('');
    const [bdTiempo, setBdTiempo] = React.useState('');
    const [bdNotas, setBdNotas] = React.useState('');
    const [bdMateriales, setBdMateriales] = React.useState('');
    const [bdTec1, setBdTec1] = React.useState('');
    const [bdTec2, setBdTec2] = React.useState('');
    const [bdTec3, setBdTec3] = React.useState('');
    const [bdTec4, setBdTec4] = React.useState('');
    const [bdTec5, setBdTec5] = React.useState('');
    const [bdTec6, setBdTec6] = React.useState('');
    const [bdTec7, setBdTec7] = React.useState('');
    const [bdTec8, setBdTec8] = React.useState('');
    const [bdTec9, setBdTec9] = React.useState('');
    const [bdTec10, setBdTec10] = React.useState('');

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

  

    const  tipo  = props.tipo;
    let titulo=''

    

    

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
                  <div>Objetivo:</div>
                  <input 
                      type='text' 
                      className='cronogramasInputText' 
                      defaultValue={bdObjetivo}
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("objetivo",e.target.value)                          
                      }}
                      />
                
                  <div>Instrucciones:</div>
                  <div className='editorQuill cronogramasQuill ' ><div ref={quillRef} /></div> 

                  <div>Tiempo:</div>
                  <input 
                      type='number' 
                      defaultValue={bdTiempo}
                      className='cronogramasTiempo' 
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("tiempo",e.target.value)                          
                      }}
                  />

                  <div>Notas:</div>
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
                <div>Objetivo:</div>
                  <input 
                      type='text' 
                      className='cronogramasInputText' 
                      defaultValue={bdObjetivo}
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("objetivo",e.target.value)                          
                      }}
                      />
                
                  <div>Instrucciones:</div>
                  <div className='editorQuill cronogramasQuill ' ><div ref={quillRef} /></div> 
                  
                  <div>Técnicas didácticas </div>
                  
                  <label><input type="checkbox" id="tec1" value="1"/> Interrogativa</label>
                  <label><input type="checkbox" id="tec2" value="1"/> Demostrativa</label>
                  <label><input type="checkbox" id="tec3" value="1"/> Expositiva</label>
                  <label><input type="checkbox" id="tec4" value="1"/> Dinámica grupal</label>
                  <label><input type="checkbox" id="tec5" value="1"/> Lectura individual</label>
                  <label><input type="checkbox" id="tec6" value="1"/> Lectura comentada</label>
                  <label><input type="checkbox" id="tec7" value="1"/> Lluvia de ideas</label>
                  <label><input type="checkbox" id="tec8" value="1"/> Dramatización</label>
                  <label><input type="checkbox" id="tec9" value="1"/> Trabajo en equipo</label>
                  

                  <div>Tiempo:</div>
                  <input 
                      type='number' 
                      defaultValue={bdTiempo}
                      className='cronogramasTiempo' 
                      onBlur={(e)=>{  
                        actualizarRegBdSlideCronogramas("tiempo",e.target.value)                          
                      }}
                  />

                  <div>Materiales:</div>
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


                  <div>Notas:</div>
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
            titulo = 'Ejercicio o práctica'
            break;
        case 'actividad':
            titulo = 'Actividad verificadora'
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
          <div onClick={ () => cerrarFormularioCronograma() } >X</div>
          <div>{ titulo }</div>
          <div className='CronogramaFormulario-desp-objetos' >
              {
                  imprimeObjetos()
              }
          </div>
          <div>
              <div>Eliminar cronograma</div>
              <div onClick={ () => setTipoCronograma('off') } >Cerrar</div>
          </div>
    </div>
  )
}

export default CronogramaFormulario