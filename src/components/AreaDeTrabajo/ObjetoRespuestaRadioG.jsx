import {useContext} from 'react';
import { ContextAreaDeTrabajo } from '../../context/ContextAreaDeTrabajo'

export const ObjetoRespuestaRadioG = ( params ) => {
  
  const {
     slideSelected,idProyectoActual,
     resp1,resp2,resp3,resp4,resp5,resp6,resp7,resp8,
     setResp1,setResp2,setResp3,setResp4,setResp5,setResp6,setResp7,setResp8,
     valResp1,valResp2,valResp3,valResp4,valResp5,valResp6,valResp7,valResp8,
     setValResp1,setValResp2,setValResp3,setValResp4,setValResp5,setValResp6,setValResp7,setValResp8,     
  } = useContext(ContextAreaDeTrabajo); 

     const actualizaResp = (e) => {
          let variableDb = '';
          switch (params.numObj){
               case "1":
                    variableDb = 'txt01_respuesta';
                    break;
               case "2":
                    variableDb = 'txt02_respuesta';
                    break;
               case "3":
                    variableDb = 'txt03_respuesta';
                    break;
               case "4":
                    variableDb = 'txt04_respuesta';
                    break;
               case "5":
                    variableDb = 'txt05_respuesta';
                    break;          
          }


          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
          db.transaction(function(tx) {
               tx.executeSql(`UPDATE TBL_RESPUESTA SET ${variableDb} = ? WHERE slide = ?  AND id_proyecto = ? `, [e,slideSelected.id,idProyectoActual], function(tx, results) {                         
               }, null);
          });
     }
          
  
     const resetRespuesta = (numResp) => {          
          let variableRespDB='';
          switch(numResp){
               case  '1':
                    setResp1('')
                    variableRespDB='txt01_respuesta'
                    break;
               case  '2':
                    setResp2('')
                    variableRespDB='txt02_respuesta'
                    break;
               case  '3':
                    setResp3('')
                    variableRespDB='txt03_respuesta'
                    break;
               case  '4':
                    setResp4('')
                    variableRespDB='txt04_respuesta'
                    break;
               case  '5':
                    setResp5('')
                    variableRespDB='txt05_respuesta'
                    break;
               case  '6':
                    setResp6('')
                    variableRespDB='txt06_respuesta'
                    break;
               case  '7':
                    setResp7('')
                    variableRespDB='txt07_respuesta'
                    break;
               case  '8':
                    setResp8('')
                    variableRespDB='txt08_respuesta'
                    break;
          }
          
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE TBL_RESPUESTA SET ${variableRespDB} = '' WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
                    }, null);
               });
     }


     const actualizaRespuestaValRadio = (idResp) =>{
          const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
               db.transaction(function(tx) {
                    tx.executeSql(`UPDATE TBL_RESPUESTA SET valor01 = '',valor02 = '',valor03 = '',valor04 = '',valor05 = '',valor06 = '',valor07 = '',valor08 = ''  WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
                    }, null);
                    tx.executeSql(`UPDATE TBL_RESPUESTA SET valor0${idResp} = 1  WHERE slide = ?  AND id_proyecto = ? `, [slideSelected.id,idProyectoActual], function(tx, results) {                         
                    }, null);
               });
               
               
     }

     const seleccionaCorrecta = ( idResp ) => {
          setValResp1('')
          setValResp2('')
          setValResp3('')
          setValResp4('')
          setValResp5('')          
          switch(idResp){
               case '1':
                    setValResp1('1')
                    actualizaRespuestaValRadio(1)
                    break;
               case '2':                    
                    setValResp2('1')                    
                    actualizaRespuestaValRadio(2)
                    break;
               case '3':                    
                    setValResp3('1')                    
                    actualizaRespuestaValRadio(3)
                    break;
               case '4':                    
                    setValResp4('1')                    
                    actualizaRespuestaValRadio(4)
                    break;
               case '5':                    
                    setValResp5('1')                    
                    actualizaRespuestaValRadio(5)
                    break;               
          }
     }

     return (
          <div>
               <div>Respuesta {  params.numObj  }:</div> { params.elim=='true' && <div onClick={ () => resetRespuesta(params.numObj)} >trash</div> }
               <input 
               type="text" 
               value={ 
                    params.numObj == '1' ? resp1 
                    : params.numObj == '2' ? resp2
                    : params.numObj == '3' ? resp3
                    : params.numObj == '4' ? resp4
                    : params.numObj == '5' ? resp5                    
                    : ''
               }
               onChange={(e) => {   
                    params.numObj == '1' && setResp1(e.target.value )
                    params.numObj == '2' && setResp2(e.target.value )
                    params.numObj == '3' && setResp3(e.target.value )
                    params.numObj == '4' && setResp4(e.target.value )
                    params.numObj == '5' && setResp5(e.target.value )                                       
                  }}
               onBlur={ (e) => { actualizaResp(e.target.value) } }
               /> 
               
               <div 
                    className={  
                              (params.numObj =='1' && resp1  && valResp1==1 ) ?  'radioValCorrect selected' : 
                              (params.numObj =='1' && resp1  ) ?  'radioValCorrect' :                         
                              (params.numObj =='2' && resp2  && valResp2==1 ) ?  'radioValCorrect selected' :       
                              (params.numObj =='2' && resp2  ) ?  'radioValCorrect' : 
                              (params.numObj =='3' && resp3  && valResp3==1 ) ?  'radioValCorrect selected' :       
                              (params.numObj =='3' && resp3  ) ?  'radioValCorrect' : 
                              (params.numObj =='4' && resp4  && valResp4==1 ) ?  'radioValCorrect selected' :       
                              (params.numObj =='4' && resp4  ) ?  'radioValCorrect' : 
                              (params.numObj =='5' && resp5  && valResp5==1 ) ?  'radioValCorrect selected' :       
                              (params.numObj =='5' && resp5  ) ?  'radioValCorrect' : 'quitarRadioValCorrect'
                    }
                    onClick={ () => { seleccionaCorrecta(params.numObj) } }
               ></div>

          </div>
     )
}
