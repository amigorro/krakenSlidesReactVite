export const ActualizarRegBdSlideContenidos = async (variable,valor,slideSelected,sesion,idProyectoActual,idUsuario) =>{

     const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
     db.transaction(function(tx) {
          tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${variable} = ? WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [valor, slideSelected.id,sesion,idProyectoActual,idUsuario], function(tx, results) {
              // console.log('results', results)                    
          }, null);
     });
}

export const BorrarRegsTabla = async (mov,slideSelected,sesion,idProyectoActual,idUsuario) =>{

     
     /**
      * ! Registros a tomar en cuenta para borrar según movimiento:
      * ? 1. Borrar cronograma
      * ? 2. Borrar objetivo
      * ? 3. Borrar slide
      * ?      - Para esta opción hay que borrar [cronograma, objetivo y slide]
      * ? 4. Borrar sesion
      * ?      - Para esta opción hay que borrar [cronograma, objetivo, slide dentro de la misma sesion]
      * ? 5. Borrar proyecto
      * ?      - Todo alv
      */

      const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);

     switch (mov) {
          case (1):
               // Borrar cronograma
               db.transaction(function(tx) {
                    tx.executeSql(`DELETE FROM TBL_CRONOGRAMA WHERE id_slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [slideSelected,sesion,idProyectoActual,idUsuario], function(tx, results) {
                         console.log('Cronograma eliminado', results)
                    }, null);
               });
               break;
          case (2):
               // Borrar Objetivo temático
               console.warn(`DELETE FROM ObjetivoApr WHERE slide = ${slideSelected.id}  AND sesion = ${sesion} AND id_proyecto = ${idProyectoActual} AND id_usuario = ${idUsuario}  `)
               db.transaction(function(tx) {
                    tx.executeSql(`DELETE FROM ObjetivoApr WHERE slide = ?  AND sesion = ? AND id_proyecto = ? AND id_usuario = ?  `, [slideSelected,sesion,idProyectoActual,idUsuario], function(tx, results) {
                         console.log('Objetivo eliminado', results)
                         
                    }, null);
               });
               
               break;
     }




     
     
}

