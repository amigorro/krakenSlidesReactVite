import React, {useEffect, useContext} from 'react'
import './EditarSlide.css'
import './quill.css'

import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { useQuill } from 'react-quilljs';

import { moverArchivo, renombrarArchivo } from '../helpers/GestionArchivos';
import  { ObjSld_titulo,
          ObjSld_imagen1,ObjSld_imagen2,ObjSld_imagen3,ObjSld_imagen4,ObjSld_imagen5, ObjSld_imagen6, ObjSld_imagen7, ObjSld_imagen8,
          BtnAddImage, 
          Texto5, InputText,  
          PreguntaRadio01, PreguntaRadio02, 
          PreguntaCheckbox01, 
          ObjSld_audio, ObjSld_video,
        } from './ObjetosSlides';
import {Menu01} from './Menus';

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
          //console.log(quill.getText()); // Get text only
          //console.log(quill.getContents()); // Get delta contents
          //console.log(quill.root.innerHTML); // Get innerHTML using quill
          //console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
          setValoresBDslide({     texto1: quill.root.innerHTML       })

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
                      <div className='editTlt'>Texto:</div>
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                    </>
                    break;
          case "2":
            return  <>
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editTlt'>Texto:</div>
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      <ObjSld_imagen1 />
                    </>
          break;
          case "3":
            return  <>
                      <ObjSld_titulo />
                      <br />
                      <div className='editTlt'>Texto principal:</div>
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      
                      
                      <InputText variab='texto3' title="Subtítulo 1" />
                      <ObjSld_imagen1 />
                      <Texto5 variab='texto5' title="1" />
                      
                      <InputText variab='texto4' title="Subtítulo 2" />
                      <ObjSld_imagen2 />
                      <Texto5 variab='texto6' title="2" />
                      {/*<ObjSld_imagen3 elim="true" />*/}
                    </>
          break;
          case "4":
            return  <>
                      <ObjSld_titulo />
                      <ObjSld_imagen1 />
                    </>
          break;
          case "5":
            return  <>
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      <ObjSld_imagen1 />
                    </>
          break;
          case "6":
            return  <>                      
                      <ObjSld_imagen1 />
                    </>
          break;
          case "7":
            return  <>                      
                      <ObjSld_titulo />
                    </>
          break;
          case "8":
            return  <>                      
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      <ObjSld_imagen1 />
                      <ObjSld_imagen2 />
                      <ObjSld_imagen3 />
                      <ObjSld_imagen4  elim="true" />
                      <ObjSld_imagen5  elim="true" />
                      <ObjSld_imagen6  elim="true" />
                      <ObjSld_imagen7  elim="true" />
                      <ObjSld_imagen8  elim="true" />
                    </>
          break;
          case "9":
            return  <>                      
                      <ObjSld_titulo />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div>
                      <ObjSld_imagen1 />
                      <ObjSld_imagen4 elim="true" />                      
                    </>
          break;
          case "10":
            return  <>                      
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <PreguntaRadio01 />                
                    </>
          break;
          case "11":
            return  <>                      
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <ObjSld_imagen1 />
                      <PreguntaRadio02 radio='1' />                      
                      <ObjSld_imagen2 />
                      <PreguntaRadio02 radio='2' />
                      <ObjSld_imagen3 />
                      <PreguntaRadio02 radio='3' />
                      <ObjSld_imagen4  elim="true" />
                      <PreguntaRadio02 radio='4' />
                      <ObjSld_imagen5  elim="true" />
                      <PreguntaRadio02 radio='5' />
                      
                    </>
          break;
          case "12":
            return  <>                      
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <ObjSld_imagen1 />
                      <PreguntaRadio01 />                      
                    </>
          break;
          case "13":
            return  <>                      
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <PreguntaCheckbox01 />
                    </>
          break;
          case "14":
            return  <>                      
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <ObjSld_audio />
                    </>
          break;
          case "15":
            return  <>                  
                      <ObjSld_video />
                      <ObjSld_imagen2 num="1" />
                    </>
          break;
          case "16":
            return  <>          
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <Menu01 />  
                    </>
          break;
          case "17":
            return  <>          
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <ObjSld_imagen1 />
                      <Menu01 />  
                    </>
          break;
          case "18":
            return  <>          
                      <ObjSld_titulo />
                      <Texto5 variab='texto1' />
                      <Menu01 />  
                    </>
          break;
        }

    }





  return (
    <div className='EditarSlide'>

        <div
            className="btnQuitEdition"
            onClick={() =>setEdicion(false) }
            ><i className="fa-sharp fa-solid btnQuitEdition-icon fa-xmark"></i> &nbsp;&nbsp; Cerrar
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