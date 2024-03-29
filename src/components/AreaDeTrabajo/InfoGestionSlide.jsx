import React, {useState,useContext} from 'react'
import EditarSlide from './EditarSlide'
import './InfoGestionSlide.css'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import CronogramaFormulario from './CronogramaFormulario';
import { ObjetivoTematico } from './ObjetivoTematico';
import { AvanzarSlide, RetrocederSlide } from './InfoGestionSlidesAvanzarRetro';
import {BorrarRegsTabla} from '../helpers/GuardaEnBD.jsx'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'


const InfoGestionSlide = () => {

     const {
               modalTipoSlide, setModalTipoSlide,
               slideSelected, setSlideSelected,
               setSlides,
               idUsuario,
               idProyectoActual,
               sesion,
               edicion, setEdicion,
               despCronograma, setDespCronograma,
               cv_crono_flag,cv_crono_tipo,
               setTipoCronograma,
               setOrdenPrueba,
               /** info Gestión slides: */
               paginacion, setPaginacion,

               /** Objetivo aprendizaje */
               modalObjetivoApr, setModalObjetivoApr,

          } = useContext(ContextAreaDeTrabajo);     
     const [flagObjetivoTem, setFlagObjetivoTem] = useState(false)

     const actualizarRegBdSlide = async (variable,valor) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
                    console.log('results', results)                    
               }, null);
          });
     }

     const eliminarSlide = async () =>{ 
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          
          db.transaction(function(tx) {
               tx.executeSql(`DELETE FROM DATOS_INTRODUCIDOS WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
                    console.log('results', results)
                    const slidesLocal = JSON.parse(localStorage.getItem("slidesEnSesion"))
                    const nuevosSlidesLocal = slidesLocal.filter((item) => item.id !== slideSelected.id)
                    localStorage.setItem("slidesEnSesion", JSON.stringify(nuevosSlidesLocal))
                    setSlideSelected('')
                    setSlides(nuevosSlidesLocal)
                    getSlidesBD()
               }, null);
          });
          
          
          BorrarRegsTabla(3,slideSelected.id,sesion,idProyectoActual,idUsuario)

        


     }



     /**
      * ? checar si la sacamos a su propio componente
      */
      const getSlidesBD = async () =>{          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT D.*, O.contenido, O.tipoObj, O.tipoCont FROM DATOS_INTRODUCIDOS D LEFT JOIN ObjetivoApr O ON D.slide = O.slide  WHERE D.id_usuario = 1 AND D.id_proyecto = ? AND D.sesion = ? ORDER BY D.orden ASC  ', [idProyectoActual,sesion], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    let flagEobj;
                    
                    if(len > 0){
                         let slidesDeLaSesion = []
                         let registrosCard = []
                         setOrdenPrueba([])
                         for (i = 0; i < len; i++){
                              if (i==0){
                                   localStorage.removeItem("slidesEnSesion");
                                   localStorage.removeItem("orden");
                                   
                              }

                              if(results.rows.item(i).tipoObj  && results.rows.item(i).tipoCont && results.rows.item(i).contenido){
                                   flagEobj=1; 
                              }else{
                                   flagEobj=0;                              
                              }    

                              slidesDeLaSesion.push(results.rows.item(i))
                              pry={
                                   id: results.rows.item(i).slide,                                   
                                   nombre: results.rows.item(i).nombre_lamina,
                                   tipo_contenido: results.rows.item(i).tipo_contenido,
                                   plantilla: results.rows.item(i).plantilla,
                                   orden: i,
                                   flagEobj: flagEobj,                                   
                              }
                              
                              registrosCard.push(results.rows.item(i).slide)
                              GuardarEnStorage('slidesEnSesion', pry)
                              GuardarEnStorage('orden', i)
                         }
                         
                         let slidesAct = JSON.parse(localStorage.getItem("slidesEnSesion"))
                              setOrdenPrueba(registrosCard)
                              setSlides(slidesAct)
                              
                    }
               }, null);
          });
          
     }





















     const confirmEliminarSlide = () => {
          if(window.confirm("¿Seguro que quieres eliminar este slide?")){
               eliminarSlide()
          }    
     }


     const abrirModalCronograma = () => {
          if ( cv_crono_tipo=='encuadre' ||  cv_crono_tipo=='instruccion' ||  cv_crono_tipo=='ejercicio' ||  cv_crono_tipo=='actividad'   ){
               console.log("Ya tiene cronograma, hay que ver como abrir directo la plantilla")

               switch (cv_crono_tipo) {
                    case 'encuadre':
                         <CronogramaFormulario tipo='encuadre'  />
                         setTipoCronograma('encuadre');
                         setDespCronograma(true)
                         break;
                    case 'instruccion':                         
                         <CronogramaFormulario tipo='instruccion'  />,
                         setTipoCronograma('instruccion'),
                         setDespCronograma(true)                         
                         break;
                    case 'ejercicio':
                         <CronogramaFormulario tipo='ejercicio'  />     
                         setTipoCronograma('ejercicio');
                         setDespCronograma(true)                         
                         break;
                    case 'actividad':
                         <CronogramaFormulario tipo='actividad'  />     
                         setTipoCronograma('actividad');
                         setDespCronograma(true)
                         break;
               }


          }else {
               setDespCronograma(true)
          }
     }


     const actualizaPaginacion = (valor) => {
          setPaginacion(valor)
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET  paginacion = ? WHERE slide = ?  AND id_proyecto = ? `, [valor,slideSelected.id,idProyectoActual], function(tx, results) {
                         console.log(' %c #2   Se updatea Paginación '+valor,slideSelected.id,idProyectoActual+' %c', 'color:white;background-color:#882829;font-size:16px', '')                                  
                    }, null);
               });
     }


  return (
    <div className='gestionCont' >
          <div className="areaTrabajo-cont-gestion-nombreSlide">
               <div className="areaTrabajo-cont-gestion-nombreSlide-txt">Nombre slide</div>
               <input    className="areaTrabajo-cont-gestion-nombreSlide-inp" 
                         spellCheck="false"
                         type="text" 
                         value={                              
                              slideSelected.nombre ? slideSelected.nombre : ""
                         }
                         onChange={(e)=>{
                              setSlideSelected({...slideSelected, nombre:e.target.value})
                              const slidesLocal = JSON.parse(localStorage.getItem("slidesEnSesion"))
                              const indiceElemento = slidesLocal.findIndex(el => el.id == slideSelected.id) 
                              slidesLocal[indiceElemento].nombre = e.target.value
                              localStorage.setItem("slidesEnSesion", JSON.stringify(slidesLocal))
                              setSlides(slidesLocal)
                         }}
                         onBlur={()=>{  
                              actualizarRegBdSlide("nombre_lamina",slideSelected.nombre)
                              console.log("Evento blur, acá actualizar BD")
                         }}
                         name=""                          
               />
          </div>
          <div className="areaTrabajo-cont-gestion-paginacion">
               {/*
               <div className='objetoControl' >
                    <div  className="areaTrabajo-cont-gestion-paginacion-txt">Paginación:</div>
                    <input  
                         className="areaTrabajo-cont-gestion-paginacion-inp"  
                         spellCheck="false" 
                         type="number"
                         value={paginacion}
                         onChange={(e)=>{ actualizaPaginacion(e.target.value) }}
                    />
               </div>*/
               }
               <div className='objetoControl' >
                    <RetrocederSlide />
               </div>
               <div className='objetoControl' >
                    <AvanzarSlide />
               </div>
               
          </div>
          
           
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={ () => abrirModalCronograma() }
                    >Cronograma</div>
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={ () => setModalObjetivoApr(true) }
               >Objetivo de aprendizaje</div>
               
               <button 
                    className="areaTrabajo-cont-gestion-btn btn-gestion"
                    onClick={() => setEdicion(true)}
               >Editar</button>              
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion btn-eliminarSlide"
                    onClick={()=>{
                         confirmEliminarSlide()
                    }}
                    >Eliminar Slide
               </div>          
               <div 
                    className="areaTrabajo-cont-gestion-btn btn-gestion btn-nuevoSlide quitarMarginTop"
                    onClick={() => setModalTipoSlide(true)}
               >Nuevo slide</div>
          
          {
               edicion === true ?
                    <EditarSlide/>
               :
                    null               
          }
          {
               modalObjetivoApr &&
                    <ObjetivoTematico />
               
               
          }

    </div>
  )
}

export default InfoGestionSlide