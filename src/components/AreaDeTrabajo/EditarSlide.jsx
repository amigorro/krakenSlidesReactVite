import React, {useEffect, useContext} from 'react'
import './EditarSlide.css'
import './quill.css'
//import Quill from 'quill';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import { useQuill } from 'react-quilljs';
//import { readFile} from './fsExtra';
import { moverArchivo, renombrarArchivo } from '../helpers/GestionArchivos';

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

      switch (plantillaSeleccionada){
        case "1":
          console.warn("prueba switch")
          break;
        case "2":
          
          break;
      }

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




    const actualizarRegBdSlideContenidos = async (variable,valor) =>{
      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
      db.transaction(function(tx) {
          tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
            console.log('results', results)                    
          }, null);
      });
    }


    
/*
    function moverArchivo(rutaArchivo, destino){
      let realNewPath = path.join(destino, path.basename(rutaArchivo));
      return new Promise(function(resolve, reject){
        fs.move(rutaArchivo, realNewPath, { overwrite: true })
          .then(function(){
            resolve(path.normalize(realNewPath))
          })
          .catch(function(err){
            reject(err)
          })
      })
    }
*/
    const mueveFile = (archivo) => {
      let TmpPath = URL.createObjectURL(archivo);
      console.log("path 01: "+TmpPath)
      console.log("path 02: "+{archivo})
      //moverArchivo(URL.createObjectURL(e.target.files[0]),'C:/krakenSlides32/assets')
    }


    const cargaObjetosForm = () => {
      console.log("plantillaSeleccionada"+plantillaSeleccionada)
        switch (plantillaSeleccionada){
          case "1":
            return  <>
                      <input 
                        type="text" 
                        placeholder="Título"
                        className="input-titulo"
                        value={valPlant_Titulo}
                        onChange={(e) => {                          
                          setValPlant_Titulo(e.target.value )
                        }}
                        onBlur={()=>{  
                          actualizarRegBdSlideContenidos("titulo",valPlant_Titulo)                          
                        }}
                      />
                      <div onClick={ () => renombrarArchivo('D:/borrar_testfilekraken/ddd.txt','C:/krakenSlides32/prueb/perro.txt') } >Mover archivo</div>
                      <br />
                      <input 
                          type="file" 
                          name="imagen01" 
                          accept="image/png, .jpeg, .jpg"
                          onChange={(e) => mueveFile(e.target.files[0])  }
                          
                      />
                    </>
          break;
          case "2":
            return  <>
                      <input 
                        type="text" 
                        placeholder="Título"
                        className="input-titulo"
                        value={valPlant_Titulo}
                        onChange={(e) => {                          
                          setValPlant_Titulo(e.target.value )                          
                        }}
                        onBlur={()=>{  
                          actualizarRegBdSlideContenidos("titulo",valPlant_Titulo)                          
                        }}
                      />
                      <br /><br /><br />
                      <div className='editorQuill' ><div ref={quillRef} /></div> 
                     
                      
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