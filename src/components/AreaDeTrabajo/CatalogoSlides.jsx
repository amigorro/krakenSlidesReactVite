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
import plant11 from './../../assets/plantillas/subst/pr02.png';
import plant12 from './../../assets/plantillas/subst/pr03.png';
import plant13 from './../../assets/plantillas/subst/pr04.png';
import plant14 from './../../assets/plantillas/subst/av01.png';
import plant15 from './../../assets/plantillas/subst/av02.png';
import plant16 from './../../assets/plantillas/subst/mn01.png';
import plant17 from './../../assets/plantillas/subst/mn02.png';
import plant18 from './../../assets/plantillas/subst/mn03.png';
import defa from './../../assets/plantillas/subst/default.png';

const CatalogoSlides = ({setModalTipoSlide}) => {

  const {
          sesion, setSesion,setModulo,idProyectoActual,setSlideSelected, slidesAct,plantillaSeleccionada, setPlantillaSeleccionada,
          setSlideImg1,setDespCronograma,setEdicion,slideSelected,
          setValoresBDslide,setValPlant_Titulo,setPaginacion,
          setSlideTexto1,setSlideTexto2,setSlideTexto3,setSlideTexto4,setSlideTexto5,setSlideTexto6,
          setUrlImg1,setUrlImg2,setUrlImg3,setUrlImg4,setUrlImg5,setUrlImg6,setUrlImg7,setUrlImg8,
          setResp1,setResp2,setResp3,setResp4,setResp5,setResp6,setResp7,setResp8,
          setValResp1,setValResp2,setValResp3,setValResp4,setValResp5,setValResp6,setValResp7,setValResp8,
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
    setUrlImg1(''), setUrlImg2(''), setUrlImg3(''), setUrlImg4(''), setUrlImg5(''), setUrlImg6(''), setUrlImg7(''), setUrlImg8('')
    setResp1(''), setResp2(''), setResp3(''), setResp4(''), setResp5(''), setResp6(''), setResp7(''), setResp8('')
    setValResp1(''), setValResp2(''), setValResp3(''), setValResp4(''), setValResp5(''), setValResp6(''), setValResp7(''), setValResp8('')



    let id_plantilla = nanoid(10)
    let tipoPlant = '';
    switch (plantillaSeleccionada){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          tipoPlant = 'Static';          
            break;
        case '10':
        case '11':
        case '12':
        case '13':
          tipoPlant = 'Pregunta';          
          break;
        case '14':
        case '15':
          tipoPlant = 'AudioVideo';
          break;
        case '16':
        case '17':
        case '18':
          tipoPlant = 'Menu';
          break;
    }

    /* Ingresamos el registro en la base de datos */
    const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
        db.transaction(function(tx) {
          
            tx.executeSql('INSERT INTO DATOS_INTRODUCIDOS (id_usuario,id_proyecto,sesion,slide,plantilla,tipo_contenido,orden) VALUES (?,?,?,?,?,?,?)', [1,idProyectoActual,sesion,id_plantilla, plantillaSeleccionada,tipoPlant,999999], function(tx, results) {
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

          if( tipoPlant == 'Pregunta' ){
            tx.executeSql('INSERT INTO TBL_RESPUESTA (id_usuario,id_proyecto,sesion,slide) VALUES (?,?,?,?)', [1,idProyectoActual,sesion,id_plantilla ], function(tx, results) {
            })      
          }

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
              if ( !results.rows.item(0).titulo || results.rows.item(0).titulo == ''  ) {
                setValPlant_Titulo('')
              }else{
                setValPlant_Titulo(results.rows.item(0).titulo)
              }
              
              /*
              if ( !results.rows.item(0).texto1 || results.rows.item(0).texto1 == ''  ) {
                setSlideTexto1(' ')
              }else{
                setSlideTexto1(results.rows.item(0).texto1)
              }*/
              setSlideTexto1(results.rows.item(0).texto1)

              

              //setSlideImg1(results.rows.item(0).imagen1)

               if (!results.rows.item(0).paginacion){
                    setPaginacion('')
               } else { setPaginacion(results.rows.item(0).paginacion) }
               
               let urlimg1='';
               if( results.rows.item(0).imagen1 =='image.png'  || !results.rows.item(0).imagen1 ){
                    urlimg1 = `./../../logos/image_icon.png?${new Date().getTime()}`
               } else{ urlimg1 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen1}?${new Date().getTime()}` }
               setUrlImg1(urlimg1)
               
               let urlimg2='';
               if( results.rows.item(0).imagen2 =='image.png' || !results.rows.item(0).imagen2  ){
                    urlimg2 = `./../../logos/image_icon.png?${new Date().getTime()}`
               } else{ urlimg2 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen2}` }
               setUrlImg2(urlimg2)

               let urlimg3='';
               if( results.rows.item(0).imagen3 =='image.png' || !results.rows.item(0).imagen3  ){
                    urlimg3 = `./../../logos/image_icon.png?${new Date().getTime()}`
               } else{ urlimg3 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen3}?${new Date().getTime()}` }
               setUrlImg3(urlimg3)

               let urlimg4='';
               if( results.rows.item(0).imagen4 =='image.png' || !results.rows.item(0).imagen4  ){
                    urlimg4 = `./../../logos/image_icon.png`
               } else{ urlimg4 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen4}?${new Date().getTime()}` }
               setUrlImg4(urlimg4)

               let urlimg5='';
               if( results.rows.item(0).imagen5 =='image.png' || !results.rows.item(0).imagen5  ){
                    urlimg5 = `./../../logos/image_icon.png`
               } else{ urlimg5 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen5}?${new Date().getTime()}` }
               setUrlImg5(urlimg5)

               let urlimg6='';
               if( results.rows.item(0).imagen6 =='image.png' || !results.rows.item(0).imagen6  ){
                    urlimg6 = `./../../logos/image_icon.png`
               } else{ urlimg6 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen6}?${new Date().getTime()}` }
               setUrlImg6(urlimg6)

               let urlimg7='';
               if( results.rows.item(0).imagen7 =='image.png' || !results.rows.item(0).imagen7  ){
                    urlimg7 = `./../../logos/image_icon.png`
               } else{ urlimg7 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen7}?${new Date().getTime()}` }
               setUrlImg7(urlimg7)

               let urlimg8='';
               if( results.rows.item(0).imagen8 =='image.png' || !results.rows.item(0).imagen8  ){
                    urlimg8 = `./../../logos/image_icon.png`
               } else{ urlimg8 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen8}?${new Date().getTime()}` }
               setUrlImg8(urlimg8)


               
              /* Cargamos los estados de los slides de tipo pregunta */
              if ( results.rows.item(0).tipo_contenido=='Pregunta' ){                              
                console.warn("carga respuestas")
                db.transaction(function(tx) {
                     console.warn("dentro de obj DB: "+idProyectoActual,sesion,slideId)
                     tx.executeSql('SELECT * FROM TBL_RESPUESTA WHERE id_usuario = 1 AND id_proyecto = ? AND slide = ? AND sesion = ? ', [idProyectoActual,slideId,sesion], function(tx, results) {
                          console.warn("ejecuta SQL")
                          
                          setResp1(results.rows.item(0).txt01_respuesta)
                          setResp2(results.rows.item(0).txt02_respuesta)
                          setResp3(results.rows.item(0).txt03_respuesta)
                          setResp4(results.rows.item(0).txt04_respuesta)
                          setResp5(results.rows.item(0).txt05_respuesta)
                          setResp6(results.rows.item(0).txt06_respuesta)
                          setResp7(results.rows.item(0).txt07_respuesta)
                          setResp8(results.rows.item(0).txt08_respuesta)
                          setValResp1(results.rows.item(0).valor01)
                          setValResp2(results.rows.item(0).valor02)
                          setValResp3(results.rows.item(0).valor03)
                          setValResp4(results.rows.item(0).valor04)
                          setValResp5(results.rows.item(0).valor05)
                          setValResp6(results.rows.item(0).valor06)
                          setValResp7(results.rows.item(0).valor07)
                          setValResp8(results.rows.item(0).valor08)
                          console.warn('RESPSSSS:'+results.rows.item(0).txt01_respuesta)
                     }, null);
                });
              }

              /* Cargamos los estados de los slides de tipo audio y video */
              if ( results.rows.item(0).tipo_contenido=='AudioVideo' ){                              
                let urlimg1='';
                     if( results.rows.item(0).imagen1 =='image.png'  || !results.rows.item(0).imagen1 ){
                          urlimg1 = `./../../logos/image_icon.png`
                     } else{ urlimg1 = `c:/flskrk/${idProyectoActual}/${results.rows.item(0).imagen1}?${new Date().getTime()}` }
                     setUrlImg1(urlimg1)
                
              }
              /* Cargamos los estados de los slides de tipo Menu */
              let opciones2 = []
              if ( results.rows.item(0).tipo_contenido=='Menu' ){  
                    
                   tx.executeSql('SELECT * FROM MENUS M LEFT JOIN DATOS_INTRODUCIDOS D ON  M.skip=D.slide WHERE  M.id_proyecto = ? AND M.id_usuario = ? AND M.sesion = ? AND M.slide = ? ', [idProyectoActual,1,sesion,slideId], function(tx, results) {
                        let len = results.rows.length, i;                                        
                             for (i = 0; i < len; i++){                          
                                  console.warn("PERRUUU - "+results.rows.item(i)["nombre_lamina"]+" UUU "+results.rows.item(i)['txt'])    
                                  opciones2.push(results.rows.item(i))                              
                             }
                             setListadoOpcionesMenu(opciones2)
                   }, null);
              
              }



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
                  <div className='CatalogoSlides-header-tlt' >
                      {
                        categoriaSel == 1 ? 'Texto e imágenes' :
                        categoriaSel == 2 ? 'Preguntas' :
                        categoriaSel == 3 ? 'Audio y video' :
                        categoriaSel == 4 && 'Menús' 
                      }  
                  </div>  
                  <div className='CatalogoSlides-header-menu'>
                      <ul>
                          <li onClick={ () => setCategoriaSel(1) }><div className='CardCont-Tipo' ><i className="fa-regular fa-browser"></i></div></li>
                          <li onClick={ () => setCategoriaSel(2) }><div className='CardCont-TipoPregunta' ><i className="fa-sharp fa-solid fa-question"></i></div></li>
                          <li onClick={ () => setCategoriaSel(3) }><div className='CardCont-TipoAudioVideo' ><i className="fa-solid fa-waveform"></i></div></li>
                          <li onClick={ () => setCategoriaSel(4) }> <div className='CardCont-TipoMenu' ><i className="fa-solid fa-bars"></i></div></li>
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
                                      plantilla.miniatura == 'pr02' ? plant11 :
                                      plantilla.miniatura == 'pr03' ? plant12 :
                                      plantilla.miniatura == 'pr04' ? plant13 :
                                      plantilla.miniatura == 'av01' ? plant14 :
                                      plantilla.miniatura == 'av02' ? plant15 :
                                      plantilla.miniatura == 'mn01' ? plant16 :
                                      plantilla.miniatura == 'mn02' ? plant17 :
                                      plantilla.miniatura == 'mn03' ? plant18 :
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