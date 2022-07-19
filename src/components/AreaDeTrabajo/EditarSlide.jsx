import React, {useEffect, useContext} from 'react'
import './EditarSlide.css'
import './quill.css'
import Quill from 'quill';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';


const EditarSlide = () => {

  const {setEdicion} = useContext(ContextAreaDeTrabajo);     

    useEffect( () =>{
          cargaQuill()
          console.log("EditarSlide")
    }, []  )

    
    const cargaQuill = (id) => {
      let container = document.getElementById('editor1');
      let toolbarOptions = [     ['bold', 'italic', 'underline', 'strike']
                              , [{ 'list': 'ordered'}, { 'list': 'bullet' }]
                          ];

      let options = {
          debug: 'info',
          modules: {
                toolbar: toolbarOptions
          },
          placeholder: 'Escribe en está área el contenido del slide',
          readOnly: false,
          theme: 'snow',
      };

      let editor = new Quill(container, options);

    }



  return (
    <div className='EditarSlide'>

        <div
            onClick={()=>{ setEdicion(false) }} 
            >Cerrar
        </div>
        <div className='editorQuill' ><div className='editorQuillItem' id="editor1" ></div></div>

        
        
    </div>
  )
}

export default EditarSlide