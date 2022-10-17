import {useContext,useRef,useState,useEffect} from 'react'
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo';
import './Menus.css'
import { nanoid } from 'nanoid'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage.jsx';




export const Menu01 = () => {

     const {
          setEdicion,
          plantillaSeleccionada,
          slideSelected,sesion,idProyectoActual,idUsuario,
          plnTitulo, setPlnTitulo,
          valPlant_Titulo, setValPlant_Titulo,
          valoresBDslide, setValoresBDslide,
          listadoOpcionesMenu, setListadoOpcionesMenu,
          slidesSeleccionables, setSlidesSeleccionables,
          slideSeleccionado, setSlideSeleccionado,
          modalEditarOpcMenu, setModalEditarOpcMenu,
     
     } = useContext(ContextAreaDeTrabajo); 

     const [opcionSlideSelected, setOpcionSlideSelected] = useState('');
     const [flagInput, setFlagInput] = useState(false);
     const [flagModalSlides, setFlagModalSlides] = useState(false);



     useEffect( (slideSelected,sesion,idProyectoActual,idUsuario) =>{
          getDataProyectosBD();
     },[slidesSeleccionables]);


     const getDataProyectosBD = async (id_usuario) =>{   
          setListadoOpcionesMenu([' '])     
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {               
               tx.executeSql('SELECT * FROM MENUS M LEFT JOIN DATOS_INTRODUCIDOS D ON  M.skip=D.slide WHERE  M.id_proyecto = ? AND M.id_usuario = ? AND M.sesion = ? AND M.slide = ? ', [idProyectoActual,1,sesion,slideSelected.id], function(tx, results) {                    
                    let len = results.rows.length, i;                                        
                    if(len > 0){
                         let opciones = []
                         for (i = 0; i < len; i++){                              
                              opciones.push(results.rows.item(i))                              
                         }
                         setListadoOpcionesMenu(opciones)
                    }
               }, null);
          });
          
     }


     const guardarOpcionMenu = (txt) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          console.log("llegando a la BD",txt,slideSelected.id)
          db.transaction(function(tx) {
               tx.executeSql('INSERT INTO MENUS (id_option,id_proyecto,id_usuario,sesion,slide,txt,skip) VALUES (?,?,?,?,?,?,?)', [nanoid(10),idProyectoActual,idUsuario,sesion,slideSelected.id,txt,slideSeleccionado], function(tx, results) {
                    console.log('results', results)
                    document.getElementsByName('txtMenu')[0].value = '';
                    setFlagInput(false);
                    setSlideSeleccionado('')
                    getDataProyectosBD();
                    
               }, null);
          });
          
     }


     const muestraBtnAdd = (val) =>{
          if ( val.length > 1 ){   
               setFlagInput(true)
          }else{
               setFlagInput(false)
          }    
     }

     const ListadoSlides = () =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT slide,nombre_lamina,tipo_contenido  FROM DATOS_INTRODUCIDOS WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ?  ', [idProyectoActual,1,sesion], function(tx, results) {
                    
                    let len = results.rows.length, i;                    
                    console.log("LISTADO SLIDES: " + len,idProyectoActual,sesion,slideSelected.id)
                    if(len > 0){
                         let lista = []
                         for (i = 0; i < len; i++){                              
                              lista.push(results.rows.item(i))                             
                              //GuardarEnStorage('opcMenu', pry)
                         }
                         
                         //let opcionesDelMenu = JSON.parse(localStorage.getItem("opcMenu"))
                         //setProyectos(opcionesDelMenu)
                         setSlidesSeleccionables(lista)
                    }
                    console.table(slidesSeleccionables)
               }, null);
          });
          setFlagModalSlides(true)
         
     }


  return (
    <div>
          <div className='editTlt' >Menú:</div>
          <input 
               type="text"   
               name='txtMenu'  
               className='input-titulo'           
               onChange={(e) => muestraBtnAdd(e.target.value)}
          />
          {
               flagInput   ?
                    <div className='contOptionsMenu' >
                         <div onClick={ () => ListadoSlides() } className='contOptionsMenu-selectSlide'  ><i class="fa-solid fa-arrow-up-right-from-square"></i> Selecciona slide &nbsp;</div>
                         <div
                              className='contOptionsMenuSaveOption'
                              onClick={()=>{
                                   let txt = document.getElementsByName('txtMenu')[0].value
                                   guardarOpcionMenu(txt,opcionSlideSelected)                                   
                              }}
                         >
                             <i class="fa-sharp fa-solid fa-download"></i> &nbsp; Guardar</div>
                    </div>
               : null
          }
          {

               <ImprimeOpcionesMenu getDataProyectosBD={getDataProyectosBD} />
                    
               
               
          }

          {
               flagModalSlides ?   
                    <ModalSlides setFlagModalSlides={setFlagModalSlides} />
               : null               
          }
          {
               modalEditarOpcMenu ?
                    <ModalSlidesEditar ListadoSlides={ListadoSlides} />
               : null
          }

    </div>
  )
}


export const ImprimeOpcionesMenu = ({getDataProyectosBD}) =>{

     const [id_showBtns, setId_showBtns] = useState('');
     const {
          slideSelected,sesion,idProyectoActual,idUsuario,
          listadoOpcionesMenu, setListadoOpcionesMenu,
          modalEditarOpcMenu, setModalEditarOpcMenu,  
          editarSlide, setEditarSlide,   
          txtUpdateMenu, setTxtUpdateMenu,
     } = useContext(ContextAreaDeTrabajo); 

     const deleteOpcionMenu = (id_option) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('DELETE FROM MENUS WHERE id_option = ? AND id_proyecto = ? AND id_usuario = ? AND sesion = ? AND slide = ? ', [id_option,idProyectoActual,1,sesion,slideSelected.id], function(tx, results) {
                    console.log('results DELETEEEEEEEE', results)
                    getDataProyectosBD();
               }, null);
          });
     }

     return(
          listadoOpcionesMenu.map((item,index)=>{
               return(
                    <div 
                         key={index}
                         onDoubleClick={()=>{
                              console.log("doble click")
                              setId_showBtns(item.id_option)
                         }}
                         className='regOpcionMenu'
                    >
                         <div >{item.txt}</div>
                         {
                              item.id_option === id_showBtns ?
                                   <div className='btnsOpcionMenu'>
                                        <div className='btnOpcionMenu btnEditMenu ' 
                                             onClick={()=>{
                                                            setModalEditarOpcMenu(true)
                                                            setEditarSlide(item.id_option)
                                                            setTxtUpdateMenu(item.txt)
                                                       }   
                                        }><i className='fa-duotone fa-edit'></i></div>
                                        <div className='btnOpcionMenu btnDeleteMenu' onClick={()=>{deleteOpcionMenu(item.id_option)}
                                        }><i class="fa-solid fa-trash"></i></div>
                                   </div>
                              : null
                         }
                    </div>
               )
          })
     )
}

export const ModalSlides = ({setFlagModalSlides}) =>{
     const {          
          slideSelected,sesion,idProyectoActual,idUsuario,
          slidesSeleccionables, setSlidesSeleccionables,   
          slideSeleccionado, setSlideSeleccionado,  
     } = useContext(ContextAreaDeTrabajo); 

     return(
     <div className='modalSlidesSeleccionables' >
          <div className='modalSlidesSeleccionables-desp'>
               <div>
                    <div className='tltModalMenu' >Selecciona el slide a donde se dirigirá esta opción del menú:</div  > 
                    <div 
                         onClick={ () => setFlagModalSlides(false) } 
                         className='btnGuardarModalSlides22'
                    >Seleccionar</div>
               </div>
               <div className='desplRegsMenues' >
                    {
                         slidesSeleccionables.map((item,index)=>{
                              return(
                                   <div
                                        key={index}                                           
                                        onClick={ () => setSlideSeleccionado(item.slide)    }                                         
                                   >
                                        <div className={ item.slide === slideSeleccionado ? 'slideSeleccionado22 reg_slide22' : 'reg_slide22' }>
                                             <div className='reg_slideCode22'  >[ {item.slide} ]</div>
                                             <div>{item.nombre_lamina}</div>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>          
     </div>)
}

export const ModalSlidesEditar = ({ListadoSlides}) =>{
     const {          
          slideSelected,sesion,idProyectoActual,idUsuario,
          slidesSeleccionables, setSlidesSeleccionables,   
          slideSeleccionado, setSlideSeleccionado,  
          modalEditarOpcMenu, setModalEditarOpcMenu,
          editarSlide, setEditarSlide,
          txtUpdateMenu, setTxtUpdateMenu,
     } = useContext(ContextAreaDeTrabajo); 

     const actualizarOpcionMenu = (txt) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               console.warn(txt,slideSeleccionado,editarSlide,idProyectoActual,1,sesion)
               tx.executeSql('UPDATE MENUS SET txt = ?, skip = ? WHERE id_option = ? AND id_proyecto = ? AND id_usuario = ? AND sesion = ? ', [txt,slideSeleccionado,editarSlide,idProyectoActual,1,sesion], function(tx, results) {
                    let qry ='UPDATE MENUS SET txt = '+txt+', skip = '+slideSeleccionado+' WHERE id_option = '+editarSlide+' AND id_proyecto = '+idProyectoActual+' AND id_usuario = 1 AND sesion = '+sesion+' ';
                    console.log('results UPDATEEE', qry)                    
                    setModalEditarOpcMenu(false)
                    ListadoSlides2();
               }, null);
          });
     }
     useEffect( () =>{
          ListadoSlides2();
        },[]);

     const ListadoSlides2 = () =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT slide,nombre_lamina,tipo_contenido  FROM DATOS_INTRODUCIDOS WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ?  ', [idProyectoActual,1,sesion], function(tx, results) {
                    
                    let len = results.rows.length, i;                    
                    if(len > 0){
                         let lista = []
                         for (i = 0; i < len; i++){                              
                              lista.push(results.rows.item(i))                             
                              //GuardarEnStorage('opcMenu', pry)
                         }
                         
                         //let opcionesDelMenu = JSON.parse(localStorage.getItem("opcMenu"))
                         //setProyectos(opcionesDelMenu)
                         setSlidesSeleccionables(lista)
                    }
               }, null);
          });
     }
     
     let txtOpcVal =txtUpdateMenu;

     return(
     <div className='modalSlidesSeleccionables' >
          <div className='modalSlidesSeleccionables-desp'>
               <div>
                    <div className='tltModalMenu22' >Texto de la opción del menú:<input className='inputEditModal22' type="text" name="txtUodateMenu" defaultValue={txtOpcVal} /></div>
                    
                    <div className='tltModalMenu' >Selecciona el slide a donde se dirigirá esta opción del menú:</div>
                    <div 
                         onClick={ () => setModalEditarOpcMenu(false) } 
                         className='btnCloseModalSlides'
                    >Cerrar</div>
                    <div 
                         onClick={ () => actualizarOpcionMenu( document.getElementsByName('txtUodateMenu')[0].value  ) } 
                         className='btnGuardarModalSlides'
                    >Guardar</div>
               </div>
               <div className='desplRegsMenues22'>
                    {
                         slidesSeleccionables.map((item,index)=>{
                              return(
                                   <div
                                        key={index}                                           
                                        onClick={ () => setSlideSeleccionado(item.slide)    }                                         
                                   >
                                        <div className={ item.slide === slideSeleccionado ? 'slideSeleccionado22 reg_slide22' : 'reg_slide22' }>
                                             <div className='reg_slideCode22'  >[ {item.slide} ]</div>
                                             <div>{item.nombre_lamina}</div>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>          
     </div>)
}