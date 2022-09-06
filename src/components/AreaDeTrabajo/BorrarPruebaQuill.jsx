import './ObjetivoTematico.css'
import { useQuill } from 'react-quilljs';
import './quill.css'


export const BorrarPruebaQuill = () => {


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

  return (
    <div className='contObjTematico' >BorrarPruebaQuill
        <div className='editorQuill' ><div ref={quillRef} /></div>
    </div>
  )
}
