import React, {useEffect, useContext} from 'react'
import './EditarSlide.css'
import './quill.css'

import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { useQuill } from 'react-quilljs';

import { moverArchivo, renombrarArchivo } from '../helpers/GestionArchivos';
import { ObjSld_titulo,ObjSld_imagen1,ObjSld_imagen2,ObjSld_imagen3, BtnAddImage } from './ObjetosSlides';

const EditarSlide = () => {

  const {
          setEdicion,
          plantillaSeleccionada,
          slideSelected,sesion,idProyectoActual,idUsuario,
          plnTitulo, setPlnTitulo,
          valPlant_Titulo, setValPlant_Titulo,
          valoresBDslide, setValoresBDslide
        } = useContext(ContextAreaDeTrabajo);     

        
        /* Opciones Editor Quill */
        const modules = {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
            [{ list: 'ordered'}, { list: 'bullet' }],
          ],
        };      
        const placeholder = 'Ingresa el texto para un slide epico aquí...';      
        const formats = ['bold', 'italic', 'underline', 'strike'];
        
        const { quill, quillRef } = useQuill({placeholder,modules});
        
        

    useEffect( () =>{
      /* 
      switch (plantillaSeleccionada){
        case "1":
          console.warn("prueba switch")
          break;
        case "2":
          
          break;
      }
      */
     
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML(valoresBDslide.texto1);
        quill.on('text-change', (delta, oldDelta, source) => {
          console.log(quill.getText()); // Get text only
          console.log(quill.getContents()); // Get delta contents
          console.log(quill.root.innerHTML); // Get innerHTML using quill
          //console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
          setValoresBDslide({            
            texto1: quill.root.innerHTML
          })

          actualizarRegBdSlideContenidos("texto1",quill.root.innerHTML)
        });
      }          
    }, [quill]  )



    /* Posible borrar de acá esta función */
    const actualizarRegBdSlideContenidos = async (variable,valor) =>{
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function(tx) {
          tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
            console.log('results', results)                    
          }, null);
      });
    }



    const cargaObjetosForm = () => {
      console.log("plantillaSeleccionada"+plantillaSeleccionada)
        switch (plantillaSeleccionada){
          case "1":
            return  <>
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                    </>
                    break;
          case "2":
            return  <>
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      <ObjSld_imagen1 />
                    </>
          break;
          case "3":
            return  <>
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      <span>subtitulo1</span>
                      <ObjSld_imagen1 />
                      <textarea></textarea>
                      <span>subtitulo1</span>
                      <ObjSld_imagen2 />
                      <textarea></textarea>
                      <ObjSld_imagen3 elim="true" />
                    </>
          break;
        }

    }

    



  return (
    <div className='EditarSlide'>

        <div
            onClick={() =>setEdicion(false) }
            >Cerrar
        </div>
        {
          plantillaSeleccionada ?
            cargaObjetosForm()
          :
              <h3>No se ha encontrado la plantilla del slide</h3>
        } 
        

        
        
    </div>
  )
}

export default EditarSlide