import React, {useContext} from 'react'
import './quill.css'
import { useQuill } from 'react-quilljs';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

const CronogramaFormulario = ( props ) => {

  const {
    sesion, setSesion,    
    idProyectoActual,
    slideSelected, setSlideSelected,    
    despCronograma, setDespCronograma,
    tipoCronograma, setTipoCronograma
  } = useContext(ContextAreaDeTrabajo);


    const  tipo  = props.tipo;
    let titulo=''

    /* Opciones Editor Quill */
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
        [{ list: 'ordered'}, { list: 'bullet' }],
      ],
    };    

    const placeholder = 'Ingresa el texto para un slide epico aquí...';  
    const { quill, quillRef } = useQuill({placeholder,modules});

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
                  <input type='text' />
                
                  <div>Instrucciones:</div>
                  <div className='editorQuill' ><div ref={quillRef} /></div> 

                  <div>Tiempo:</div>
                  <input type='number' />

                  <div>Notas:</div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            )
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

    }



    const actualizarRegBdSlideContenidos = async (variable,valor) =>{
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function(tx) {
          tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
            console.log('results', results)                    
          }, null);
      });
    }





  return (
    <div className='CronogramaFormulario-desp' >
          <div>X</div>
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