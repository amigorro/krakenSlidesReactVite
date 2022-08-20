
export const ActualizarRegBdSlideContenidos = async (variable,valor,slideSelected,sesion,idProyectoActual,idUsuario) =>{

     const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
     db.transaction(function(tx) {
          tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
               console.log('results', results)                    
          }, null);
     });
}