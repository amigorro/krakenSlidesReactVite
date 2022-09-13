import React, {useState,useEffect,useContext} from 'react'
import './CatalogoSlides.css'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo'
import { nanoid } from 'nanoid'
import  diapo3  from '../../assets/plantillas/diapo3.png'
import plant01 from './../../assets/plantillas/subst/dp01.png';
import plant02 from './../../assets/plantillas/subst/dp02.png';
import plant03 from './../../assets/plantillas/subst/dp03.png';
import plant04 from './../../assets/plantillas/subst/dp04.png';
import plant05 from './../../assets/plantillas/subst/dp05.png';
import plant06 from './../../assets/plantillas/subst/dp06.png';
import plant07 from './../../assets/plantillas/subst/dp07.png';
import plant08 from './../../assets/plantillas/subst/dp08.png';
import plant09 from './../../assets/plantillas/subst/dp09.png';
import plant10 from './../../assets/plantillas/subst/pr01.png';
import defa from './../../assets/plantillas/subst/default.png';

const CatalogoSlides = ({setModalTipoSlide}) => {

  const {
          sesion, setSesion,setModulo,idProyectoActual,setSlideSelected, slidesAct,plantillaSeleccionada, setPlantillaSeleccionada,
          setSlideImg1,setDespCronograma,setEdicion,slideSelected,
          setValoresBDslide,setValPlant_Titulo,
        } = useContext(ContextAreaDeTrabajo);
  const [plantillas, setPlantillas] = useState([])
  const [categoriaSel, setCategoriaSel] = useState(1)


  useEffect( () =>{     
    getPlantillas()
  }  , [categoriaSel]  )


  const getPlantillas = () => {
    //console.log("getPlantillas::::: BORRAR")
    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function(tx) {
             tx.executeSql('SELECT * FROM PLANTILLAS', [], function(tx, results) {
                  
                  //console.log('results', results)
                  let len = results.rows.length, i;
                  let plant;                 
                  
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
    setEdicion(false)   
    setModalTipoSlide(false)
    

    /* Ingresamos el registro en la ba  se de datos */
    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function(tx) {
          let id_plantilla = nanoid(10)
            tx.executeSql('INSERT INTO DATOS_INTRODUCIDOS (id_usuario,id_proyecto,sesion,slide,plantilla) VALUES (?,?,?,?,?)', [1,idProyectoActual,sesion,id_plantilla, plantillaSeleccionada], function(tx, results) {
            //console.log('results', results)
            setSlideSelected({
              id : id_plantilla
            })
            setSlideImg1('image.png')
            cargaValoresSlide(id_plantilla)
            //setDespCronograma(false)
            //setEdicion(false)
            /*
            setDespCronograma(false),
            setEdicion(false),                                                      
            cargaValoresSlide(item),
            cargaValoresCronograma(item)
            */
            //limpiarPlantillaSel()
          }, null);
        })

  }



  /** 
   *  TODO: Si esta función jala, ponerla como helper
   */
   const cargaValoresSlide = (slideId) =>{
          
    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
    db.transaction(function(tx) {
         tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = ? AND sesion = ?  AND slide = ?  ', [idProyectoActual,sesion,slideId], function(tx, results) {
              //console.log('results', results)
              let len =0;

             // if ( results.rows ) {
                   len = 10;
              //}
              
              let pry;
              if( len > 0 ){      

                   setValoresBDslide({
                        num_chacks_sel: results.rows.item(0).num_chacks_sel,
                        tipo_contenido: results.rows.item(0).tipo_contenido,
                        plantilla: results.rows.item(0).plantilla,
                        nombre_lamina: results.rows.item(0).nombre_lamina,
                        titulo: results.rows.item(0).titulo,
                        subtitulo1: results.rows.item(0).subtitulo1,
                        texto1: results.rows.item(0).texto1,
                        texto2: results.rows.item(0).texto2,
                        texto3: results.rows.item(0).texto3,
                        texto4: results.rows.item(0).texto4,
                        texto5: results.rows.item(0).texto5,
                        texto6: results.rows.item(0).texto6,
                        imagen1: results.rows.item(0).imagen1,
                        imagen2: results.rows.item(0).imagen2,
                        imagen3: results.rows.item(0).imagen3,
                        imagen4: results.rows.item(0).imagen4,
                        imagen5: results.rows.item(0).imagen5,
                        imagen6: results.rows.item(0).imagen6,
                        imagen7: results.rows.item(0).imagen7,
                        imagen8: results.rows.item(0).imagen8,
                        audio: results.rows.item(0).audio,
                        video: results.rows.item(0).video,
                        tabla: results.rows.item(0).tabla,
                        anterior: results.rows.item(0).anterior,
                        siguiente: results.rows.item(0).siguiente,
                        orden: results.rows.item(0).orden,
                        paginacion: results.rows.item(0).paginacion
                   })
                   setValPlant_Titulo(results.rows.item(0).titulo)
                   setSlideImg1(results.rows.item(0).imagen1)
                   console.log("TITULO DEL SLIDE:::::::::: "+results.rows.item(0).titulo+" PROYECTO:::"+idProyectoActual+" SESION:::"+sesion+" SLIDE:::"+slideId+":::::")                                         
              }






         }, null);
    });
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
                                  <img src={
                                      plantilla.miniatura == 'pl01' ? plant01 :
                                      plantilla.miniatura == 'pl02' ? plant02 :
                                      plantilla.miniatura == 'pl03' ? plant03 :
                                      plantilla.miniatura == 'pl04' ? plant04 :
                                      plantilla.miniatura == 'pl05' ? plant05 :
                                      plantilla.miniatura == 'pl06' ? plant06 :
                                      plantilla.miniatura == 'pl07' ? plant07 :
                                      plantilla.miniatura == 'pl08' ? plant08 :
                                      plantilla.miniatura == 'pl09' ? plant09 :
                                      plantilla.miniatura == 'pr01' ? plant10 :
                                      defa
                                  } alt='miniatura' />
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