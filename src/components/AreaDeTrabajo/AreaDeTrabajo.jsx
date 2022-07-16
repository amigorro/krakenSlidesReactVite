import React, {useContext, useState, useEffect} from 'react'
import './AreaDeTrabajo.css'
import AppBar from '../AppBar/AppBar'
import Cardpry from './Cardpry'
import Visor from './Visor'
import InfoGestionSlide from './InfoGestionSlide'
import CatalogoSlides from './CatalogoSlides'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

import Routeo from '../Routeo'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';

const AreaDeTrabajo = () => {
     
     const {sesion, setSesion,setModulo,idProyectoActual} = useContext(ContextAreaDeTrabajo);     
     const [slide, setSlide] = useState(null)
     const [existeSesiones, setExisteSesiones] = useState(false)
     const [modalTipoSlide, setModalTipoSlide] = useState(false)
     const [modalAddSesion, setModalAddSesion] = useState(false)

     const [slides, setSlides] = useState([])


     const regresaMenu = ()=>{
          setModulo("MenuPrincipal")
          return(<Routeo/>)
     }
  

     useEffect( () =>{
          console.log("revisando slides del proyecto, por si hay, sacar las sesiones")
          getSlides()   
          getSlidesBD()       
     }, [modalTipoSlide]  )


     
     const getSlides = async () =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT COUNT(*) AS existe FROM "DATOS_INTRODUCIDOS" WHERE id_usuario=1 AND id_proyecto = ?', [idProyectoActual], function(tx, results) {
                    console.log('total de sesiones del proyecto:', results.rows.item(0).existe)
                    
                    if(results.rows.item(0).existe > 0){
                         setExisteSesiones(true)
                         
                    } else {
                         setExisteSesiones(false)
                         setModalAddSesion(false)
                    }
                    
                    
                    
               }, null);
          });
     }


     const esEnter = (e) =>{
          e.preventDefault()
          if(e.keyCode == 13){               
               console.log("enter")               
               console.warn(parseInt(e.target.value))
               setSesion(e.target.value)
               setExisteSesiones(true) 
               setModalTipoSlide(true)
          }
     }


     /*
     
          Sacar un count de slides del proyecto para saber si hay slides

          Hacer varios useEffect, el primero para sacar las sesiones
          El segundo para sacar los slides de la sesión mas baja




          Plan de trabajo:
               Crear un estado para saber si la sesión tiene o no slides.
                    Si tiene slides, cargar el primero del arreglo.
                    Si no tiene slides, abrir modal de selección de tipo de slide

               Utilizar librería de creción de id para guardar en automático el slide sin contennido
               Asignar al estado de slideActual el slide creado o seleccionado
               mostrar el área de gestión del slide.

     */ 


     const getSlidesBD = async () =>{
          console.warn("Entrando a getSlidesBD")
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM DATOS_INTRODUCIDOS WHERE id_usuario = 1 AND id_proyecto = 1 AND sesion = 22   ', [], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    console.log("Sesiones en el proyecto: " + len)
                    if(len > 0){
                         let slidesDeLaSesion = []
                         for (i = 0; i < len; i++){
                              if (i==0){localStorage.removeItem("slidesEnSesion");}
                              slidesDeLaSesion.push(results.rows.item(i))
                              pry={
                                   id: results.rows.item(i).slide,
                                   nombre: results.rows.item(i).nombre_lamina,
                              }
                              GuardarEnStorage('slidesEnSesion', pry)
                         }
                         
                         let slidesAct = JSON.parse(localStorage.getItem("slidesEnSesion"))
                              setSlides(slidesAct)
                    }
               }, null);
          });
          
     }


     //console.log("idProyecto seleccionado: " + idProyectoActual)
  
  return (
     <>
          <AppBar />
          <div id='ADT_cont' className='ADT_cont' >
               <header id='ADT_header' className='ADT_cont-header' > 
                    <img src="./assets/logos/logo.png" 
                         className="ADT_cont-header-logo" 
                         alt=""
                         onClick={ () => regresaMenu() }
                    />
                    <div> 
                         <div> Productos cartográficos </div>
                         <div> Instructor de operativos especiales</div>
                    </div>
                    <div> Tarjeta usuario </div>
               </header>
               <div id='ADT_contenido' className='grid grid-cols-5  gap-4 w-screen' > 
                    
                    <div className='bg-gray-900   ADT_cont-cards col-start-1 col-span-1 ' >
                         <div className='ADT_cont-cards-select'>
                              {
                                   existeSesiones ?
                                        <>
                                             <select  className='ADT_cont-cards-select-inp' >
                                                  <option value="1" className='ADT_cont-cards-select-inp-item'>Sesión 1</option>
                                                  <option value="2" className='ADT_cont-cards-select-inp-item'>Sesión 2</option>
                                                  <option value="3" className='ADT_cont-cards-select-inp-item'>Sesión 3</option>
                                                  <option value="4" className='ADT_cont-cards-select-inp-item'>Sesión 4</option>
                                             </select>
                                             <div className='ADT_cont-cards-select-add'>
                                                  <i className="fa-solid fa-circle-plus "></i>
                                             </div>
                                             <div className='ADT_cont-cards-select-add'>
                                                  <i className="fa-solid fa-circle-plus "></i>
                                             </div>
                                        </>
                                        :    
                                        <div className='addSesionInitial' >
                                             <div className='txtAddSesion' >Ingresa el número de sesión</div>
                                             <input 
                                                  type="number" 
                                                  name="addSesion"
                                                  className='inputAddSesion'
                                                  onKeyUp={ e => esEnter(e)  }                                             
                                             />
                                        </div>
                              }



                              




                         </div>
                         <div className='ADT_cont-cards-despl' >
                              
                              <Cardpry />
                              <Cardpry />
                         </div>
                    </div>
                    <div className='   h-full col-start-2 col-span-2 ' >
                         <Visor/>
                    </div>
                    <div className=' h-full end col-span-2 ' >
                    {
                         existeSesiones && !modalTipoSlide ?    <InfoGestionSlide/>
                         : <div className='textoCentrado' >Agrega una sesión para continuar</div>
                    }
                    </div>
                    {
                         modalTipoSlide ?  <CatalogoSlides setModalTipoSlide={setModalTipoSlide} /> : null
                    }
               </div>
          </div>
     </>
  )
}

export default AreaDeTrabajo