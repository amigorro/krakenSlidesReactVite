import React, {useContext} from 'react'
import '../AreaDeTrabajo/quill.css'
import { useQuill } from 'react-quilljs';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


export const GlosarioForm = () => {
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
  const {modulo, setModulo,idProyectoActual, setIdProyectoActual,setSlideSelected,setSesion,modalGlosario, setModalGlosario} = useContext(ContextAreaDeTrabajo);

  const { quill, quillRef } = useQuill({placeholder,modules});
  




  return (
    <div className='GL-FormCont' >
          <div>Glosario</div>

          <div>Concepto:</div>
          <input type="text" />

          <div>Letra:</div>
          <input type="text" />

          <div className='editorQuill' ><div className='editorQuillItem' ref={quillRef} /></div>



          <div>Guardar</div>
          <div
            onClick={() => {setModalGlosario(false)}}
          >Salir</div>
    </div>
  )
}
