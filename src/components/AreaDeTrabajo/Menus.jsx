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
     
     } = useContext(ContextAreaDeTrabajo); 

     const [opcionSlideSelected, setOpcionSlideSelected] = useState('');
     


     useEffect( (slideSelected,sesion,idProyectoActual,idUsuario) =>{
          getDataProyectosBD();
     },[]);


     const getDataProyectosBD = async (id_usuario) =>{
        
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql('SELECT * FROM MENUS WHERE id_proyecto = ? AND id_usuario = ? AND sesion = ? AND slide = ? ', [idProyectoActual,1,sesion,slideSelected.id], function(tx, results) {
                    //console.log('results', results)
                    let len = results.rows.length, i;
                    let pry;
                    console.log("lento: " + len,idProyectoActual,id_usuario,sesion,slideSelected.id)
                    if(len > 0){
                         let opciones = []
                         for (i = 0; i < len; i++){
                              if (i==0){localStorage.removeItem("opcMenu");}
                              opciones.push(results.rows.item(i))
                              pry={
                                   id: results.rows.item(i).txt,
                                   nombre: results.rows.item(i).skip,
                              }
                              //GuardarEnStorage('opcMenu', pry)
                         }
                         
                         //let opcionesDelMenu = JSON.parse(localStorage.getItem("opcMenu"))
                         //setProyectos(opcionesDelMenu)
                         setListadoOpcionesMenu(opciones)
                    }
               }, null);
          });
          
     }
  

     const guardarOpcionMenu = (txt,slideSeleccionado) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          console.log("llegando a la BD",txt,slideSelected.id)
          db.transaction(function(tx) {
               tx.executeSql('INSERT INTO MENUS (id_option,id_proyecto,id_usuario,sesion,slide,txt,skip) VALUES (?,?,?,?,?,?,?)', [nanoid(10),idProyectoActual,idUsuario,sesion,slideSelected.id,txt,slideSeleccionado], function(tx, results) {
                    console.log('results', results)
               }, null);
          });
          
     }






  return (
    <div>
          <div>Menú:</div>
          <input 
               type="text"   
               name='txtMenu'             
          />
          <div
               onClick={()=>{
                    let txt = document.getElementsByName('txtMenu')[0].value
                    guardarOpcionMenu(txt,opcionSlideSelected)
                    console.log("txt: " + txt)
               }}
          >add option</div>
          {
               listadoOpcionesMenu ?               
                    <ImprimeOpcionesMenu/>
               :    console.log("no hay opciones")               
          }
    </div>
  )
}


export const ImprimeOpcionesMenu = () =>{
     
     const {
          setEdicion,
          plantillaSeleccionada,
          slideSelected,sesion,idProyectoActual,idUsuario,
          plnTitulo, setPlnTitulo,
          valPlant_Titulo, setValPlant_Titulo,
          valoresBDslide, setValoresBDslide,
          listadoOpcionesMenu, setListadoOpcionesMenu,
     
     } = useContext(ContextAreaDeTrabajo); 

     console.table(listadoOpcionesMenu)

     return(
          listadoOpcionesMenu.map((item,index)=>{
               return(
                    <div
                    key={index}     
                    >{item.txt}</div>
               )
          })
     )
}
