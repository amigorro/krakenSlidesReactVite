import React, {useContext} from 'react'
import './ObjetivoTematico.css'
import { useQuill } from 'react-quilljs';
import './quill.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

export const BorrarPruebaQuill = () => {

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

  return (
    <div className='contObjTematico' >BorrarPruebaQuill
          <div className='editorQuill' ><div ref={quillRef} /></div>
    </div>
  )
}
