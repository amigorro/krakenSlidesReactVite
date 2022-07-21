import React, {useState,useEffect,useContext} from 'react'
import './CatalogoSlides.css'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo'
import { nanoid } from 'nanoid'
import  diapo3  from '../../assets/plantillas/diapo3.png'





const CatalogoSlides = ({setModalTipoSlide}) => {

  const {sesion, setSesion,setModulo,idProyectoActual,setSlideSelected, slidesAct,plantillaSeleccionada, setPlantillaSeleccionada} = useContext(ContextAreaDeTrabajo);
  const [plantillas, setPlantillas] = useState([])
  const [categoriaSel, setCategoriaSel] = useState(1)


  useEffect( () =>{     
    getPlantillas()
  }  , [categoriaSel]  )


  const getPlantillas = () => {
    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function(tx) {
             tx.executeSql('SELECT * FROM PLANTILLAS', [], function(tx, results) {
                  //console.log('results', results)
                  let len = results.rows.length, i;
                  let plant;                 
                  
                       let archivados = []
                       for (i = 0; i < len; i++){                            
                        if (i==0){localStorage.removeItem("plantillas");}
                        plant={
                                 id: results.rows.item(i).id_plantilla,
                                 tipo: results.rows.item(i).tipo,
                                 nombre_plantilla: results.rows.item(i).nombre_plantilla,
                                 miniatura: results.rows.item(i).miniatura,
                                 titulo: results.rows.item(i).titulo,
                                 subtitulo: results.rows.item(i).subtitulo,
                                 texto1: results.rows.item(i).texto1,
                                 texto2: results.rows.item(i).texto2,
                                 texto3: results.rows.item(i).texto3,
                                 texto4: results.rows.item(i).texto4,
                                 texto5: results.rows.item(i).texto5,
                                 texto6: results.rows.item(i).texto6,
                                 imagen1: results.rows.item(i).imagen1,
                                 imagen2: results.rows.item(i).imagen2,
                                 imagen3: results.rows.item(i).imagen3,
                                 imagen4: results.rows.item(i).imagen4,
                                 imagen5: results.rows.item(i).imagen5,
                                 imagen6: results.rows.item(i).imagen6,
                                 imagen7: results.rows.item(i).imagen7,
                                 imagen8: results.rows.item(i).imagen8,
                                 audio: results.rows.item(i).audio,
                                 video: results.rows.item(i).video

                            }
                            GuardarEnStorage('plantillas', plant)
                       }
                       
                       let plantillasTot = JSON.parse(localStorage.getItem("plantillas"))
                       setPlantillas(plantillasTot)
                  
             }, null);
        });
  
  }

  const limpiarPlantillaSel = () => {
    setModalTipoSlide(false) 
    setPlantillaSeleccionada(null)
  }

  const seleccionarPlantilla = (plantilla) => {
    setPlantillaSeleccionada(plantilla)
    
  }

  const cerrarModal = () =>{
    console.error("plantillaSeleccionada: " + plantillaSeleccionada)
    console.error("Sesión actual: " + sesion)    
    setModalTipoSlide(false)
    

    /* Ingresamos el registro en la ba  se de datos */
    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function(tx) {
          let id_plantilla = nanoid(10)
          tx.executeSql('INSERT INTO DATOS_INTRODUCIDOS (id_usuario,id_proyecto,sesion,slide,plantilla) VALUES (?,?,?,?,?)', [1,idProyectoActual,sesion,id_plantilla, plantillaSeleccionada], function(tx, results) {
            console.log('results', results)
            setSlideSelected({
              id : id_plantilla
         }) 
            //limpiarPlantillaSel()
          }, null);
        })

  }


  return (
    <>
      
      <div className='CatalogoSlidesCont' >
          <div className='CatalogoSlides-Desp'>
              <div 
                  className='CatalogoSlides-header-cerrar' 
                  onClick={ 
                      () => limpiarPlantillaSel()                        
                  }
              ><i className="fa-solid fa-xmark"></i></div>
              <header className='CatalogoSlides-header' >
                  <div className='CatalogoSlides-header-tlt' >Nombre de la categoría</div>  
                  <div className='CatalogoSlides-header-menu'>
                      <ul>
                          <li onClick={ () => setCategoriaSel(1) }>Texto & imagenes</li>
                          <li onClick={ () => setCategoriaSel(2) }>Pregunta</li>
                          <li onClick={ () => setCategoriaSel(3) }>Audio y video</li>
                          <li onClick={ () => setCategoriaSel(4) }>Menú</li>
                      </ul>
                  </div>                  
              </header>
              <div className='CatalogoSlides-mins'  >
                  {
                    
                    plantillas.filter( (plantilla) => {
                      return plantilla.tipo == categoriaSel
                    }
                    ).map( (plantilla,index) => {
                      return (
                          <div  className={plantillaSeleccionada == plantilla.id ? 'CatalogoSlides-mins-item plantillaSelectBorder': 'CatalogoSlides-mins-item'} 
                                name={plantilla.miniatura} 
                                key={index} 
                                id={plantilla.id}
                                onClick={ () => seleccionarPlantilla(plantilla.id)   }
                                
                          >
                              <div className='CatalogoSlides-mins-img' >
                                  <img src={'./assets/plantillas/'+plantilla.miniatura} alt='miniatura' />
                              </div>                              
                          </div>
                      )
                    }
                    )
                  }
              </div>

              {
                plantillaSeleccionada ? (
                  <button 
                    className='CatalogoSlides-btn-add' 
                    onClick={ () => cerrarModal() }
                  >Seleccionar plantilla</button>)
                : null
              }
              
          </div>
      </div>
    </>
  )
}

export default CatalogoSlides