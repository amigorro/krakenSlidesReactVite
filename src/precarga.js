function precarga() {

     return new Promise(function (resolve, reject) {
       var db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "KRK-SLD 1.0", 100);
   
       db.transaction(function(tx) {
       
         tx.executeSql(`CREATE TABLE IF NOT EXISTS TBL_CONTROL_SYNC  (
                           TOKEN INTEGER,                               
                           FECHA_ACT VARCHAR (10),
                           VERSION VARCHAR (10),
                           USUARIO VARCHAR (20),
                           PRIMARY KEY (TOKEN))`);
         
         /** USUARIOS */
         tx.executeSql(`CREATE TABLE IF NOT EXISTS usuarios(
                           id_usuario int primary key,
                           nombre_usuario varchar(100),                            
                           nickname varchar(30),
                           nivel int,
                           psw varchar(150),
                           grupo_trabajo int);`);
   
         /** APP_PROYECTOS */
         tx.executeSql(`CREATE TABLE IF NOT EXISTS APP_PROYECTOS(
                   id_proyecto INTEGER primary key AUTOINCREMENT ,
                   nombre_proyecto varchar(200),
                   status varchar(200),                                       
                   fecha varchar(40),
                   id_figura int,
                   megaproyecto int,
                   id_usuario int
               );`);
         
         tx.executeSql(` CREATE TABLE IF NOT EXISTS DATOS_INTRODUCIDOS (
                   id_usuario int,
                   id_proyecto int,  
                   sesion int,
                   slide int,
                   
                   figura int,
                   id_pregunta int, 
                   t_pregunta varchar(100),
                   tx_pregunta varchar(250),
                   instruccion varchar(250),
                   num_checks_sel int,
   
                   tipo_contenido varchar(20),
                   subtipo varchar(50),
   
                   nombre_lamina varchar(50),
                   
                   titulo varchar(200),
                   subtitulo1 varchar(200),
                   subtitulo2 varchar(200),
                   
                   texto1 varchar(1200),
                   texto2 varchar(1200),
                   texto3 varchar(1200),
                   texto4 varchar(1200),
                   imagen1 varchar(100),                
                   imagen2 varchar(100),
                   imagen3 varchar(100),
                   imagen4 varchar(100),
                   imagen5 varchar(100),
                   imagen6 varchar(100),
                   imagen7 varchar(100),
                   imagen8 varchar(100),
                   
                   lista1 varchar(100),
                   lista2 varchar(100),
                   lista3 varchar(100),
                   lista4 varchar(100),
                   
                   tabla varchar(200),
                   
                   slideAnterior int,
                   slideSiguiente int,
                   orden real,
                   paginacion real,
                   primary key(slide,slide,id_proyecto,id_usuario)
                   );`);
   
   
   
           //Tabla Figura
           tx.executeSql(`CREATE TABLE IF NOT EXISTS TBL_FIGURA(
                               id_figura int primary key,
                               nombre_figura varchar(50)); `);
   
           tx.executeSql(` CREATE TABLE IF NOT EXISTS indice(
                               id_indice int,
                               tema VARCHAR(250),
                               idproyecto int,
                               idusuario int,
                               sesion VARCHAR(20),
                               PRIMARY KEY (id_indice, idproyecto, idusuario)
                       ); `);
   
   
           tx.executeSql(` CREATE TABLE IF NOT EXISTS TBL_TEMA_GENERAL(
                               id_tema int,                          
                               tema VARCHAR(250),
                               idproyecto int,
                               idusuario int,
                               sesion int,
                               PRIMARY KEY (id_tema, idproyecto, idusuario)
                       ); `);
   
           tx.executeSql(`CREATE TABLE IF NOT EXISTS TBL_VALORACION  (
                               ID_REACTIVO INT,  
                               PUESTO INT,                                      
                               TIPO INT,
                               TXT1 VARCHAR (800),
                               TXT2 VARCHAR (800),
                               OPC1 VARCHAR (100),
                               OPC2 VARCHAR (100),
                               OPC3 VARCHAR (100),
                               OPC4 VARCHAR (100),
                               OPC5 VARCHAR (100),
                               OPC6 VARCHAR (100),
                               OPC7 VARCHAR (100),
                               idproyecto INT,
                               idusuario INT,
                               PRIMARY KEY (ID_REACTIVO, idproyecto, idusuario)
                       ); `);
   
           //Tabla items listas desplegables
           tx.executeSql(`CREATE TABLE IF NOT EXISTS APP_ITEMS_SELECTS(                                      
                                             id INTEGER PRIMARY KEY AUTOINCREMENT, 
                                             idpregunta INTEGER,
                                             id_select INTEGER,
                                             texto varchar(120),
                                             valor INTEGER,
                                             id_figura INTEGER,
                                             sesion INTEGER,     
                                             idusuario INTEGER,                                      
                                             idproyecto INTEGER,
                                             categoria varchar(60),
                                             tipo_contenido varchar(60)
                                             );     `);
   
           tx.executeSql('CREATE TABLE IF NOT EXISTS TBL_GLOSARIO  ( '+
                                           ' ID_CONCEPTO INTEGER,'+  
                                           ' LETRA VARCHAR (5),'+                                      
                                           ' CONCEPTO VARCHAR (150),'+
                                           ' DESCRIPCION VARCHAR (800),'+
                                           ' ID_USUARIO INTEGER,'+ 
                                           ' ID_PROYECTO INTEGER,'+ 
                                           ' primary key(ID_CONCEPTO,ID_PROYECTO));');  
   
           //Tabla TBL_CRONORGAMA    
           tx.executeSql('CREATE TABLE IF NOT EXISTS TBL_CRONORGAMA('+
                                           ' ID_PROYECTO int,'+
                                           ' SESION int,'+
                                           ' ID_FIGURA int,'+
                                           ' ID_SLIDE int,'+
                                           ' OBJETIVO varchar(330),'+
                                           ' INSTRUCCIONES varchar(330),'+
                                           ' TIEMPO int,'+
                                           ' MATERIALES varchar(200),'+
                                           ' NOTAS varchar(330),'+ 
                                           ' TEC1 int,'+
                                           ' TEC2 int,'+
                                           ' TEC3 int,'+
                                           ' TEC4 int,'+
                                           ' TEC5 int,'+
                                           ' TEC6 int,'+
                                           ' TEC7 int,'+
                                           ' TEC8 int,'+
                                           ' TEC9 int,'+
                                           ' TEC10 int,'+
                                           ' primary key(ID_PROYECTO,SESION, ID_FIGURA,ID_SLIDE));');  
   
           //Tabla Respuesta        
           tx.executeSql('CREATE TABLE IF NOT EXISTS TBL_RESPUESTA('+
                                           ' id_respuesta INTEGER primary key AUTOINCREMENT,'+
                                           ' tx_respuesta varchar(200),'+
                                           ' valor INTEGER,'+
                                           ' siguiente INTEGER,'+
                                           ' figura INTEGER,'+
                                           ' sesion INTEGER,'+                                      
                                           ' idpregunta INTEGER,'+
                                           ' idusuario INTEGER,'+                                      
                                           ' idproyecto INTEGER,'+
                                           ' categoria varchar(60),'+
                                           ' tipo_contenido varchar(60)'+
                                           ' );   ');  
   
           
             
   
             
           //Tabla Apllicacion Columna
           tx.executeSql('CREATE TABLE IF NOT EXISTS APP_COLUMNA('+
                                           ' nombre_diapo varchar(20),'+
                                           ' nombre_columna varchar(10),'+
                                           ' contenido_columna varchar(30),'+
                                           ' primary key(nombre_diapo,nombre_columna, contenido_columna));');
             
           //Tabla Aplicacion Clasificacion
           tx.executeSql('CREATE TABLE IF NOT EXISTS APP_CLASIFICACION('+
                                           ' clasificacion1 varchar(50),'+
                                           ' subtipo varchar(50) primary key,'+
                                           ' clasificacion2 varchar(50),'+
                                           ' cantidadc2 int,'+
                                           ' clasificacion3 varchar(50),'+
                                           ' cantidadc3 int,'+
                                           ' clasificacion4 varchar(50),'+
                                           ' cantidadc4 int,'+
                                           ' clasificacion5 varchar(50),'+
                                           ' descripcionc5 varchar(50),'+
                                           ' png varchar(50));');
   
         
         
         tx.executeSql(' CREATE TABLE IF NOT EXISTS APP_DISENOS ('+
                                           ' subtipo varchar(15),'+
                                           ' codigo_html varchar(500),'+
                                           'primary key(subtipo));');
   
         tx.executeSql('select * from APP_COLUMNA',[], function (tx, results){
           var cont = results.rows.length;   
           if (cont == 0) {
   
             /* ====== INSERTS ====== */ 
             //TBL_CONTROL_SYNC
             tx.executeSql('INSERT INTO TBL_CONTROL_SYNC  VALUES (0,"B-1.0.0.0","19-05-2022","DIABLO");    ');
   
             // TBL_FIGURA
             tx.executeSql('insert into TBL_FIGURA values(51,"Instructor municipal"); ');
             tx.executeSql('insert into TBL_FIGURA values(52,"Responsable de área"); '); 
             
             //usuarios
             tx.executeSql(' insert into usuarios values (0,"PHILIP ANSELMO","kraken",2,"kraken",4000)');
             tx.executeSql(' insert into usuarios values (1,"Daniel Acosta","Diablo",6,"kraken#666",666)');
           
   /**
    * Una tabla con todos los datos que compnen el slide (el de las col1, col2, ...)
    * Una tabla de respuestas
    * Una tabla con los objetos tipo input, button, textarea que se mostrarán en la mascara de captura.
    */
   
   
           //APP_COLUMNA      
           tx.executeSql('insert into APP_COLUMNA values("diapo3","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo3","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo3","Col3","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo3","Col4","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo3","Col5","imagen"); ');      
           tx.executeSql('insert into APP_COLUMNA values("diapo6","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo6","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo7","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo7","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo7","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col5","subtitulo1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col7","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo8","Col8","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo9","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo9","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo9","Col3","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo9","Col4","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo9","Col5","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo10","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo10","Col2","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col5","subtitulo1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col6","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo11","Col7","imagen1"); ');      
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col4","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col5","imagen2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col6","imagen3"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col7","subtitulo1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col8","imagen4"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col9","imagen5"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col10","imagen6"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo14","Col11","imagen7"); ');      
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col5","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col6","subtitulo1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col7","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col8","imagen2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo16","Col9","imagen3"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo17","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo17","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo17","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo17","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo17","Col5","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo18","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo18","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo18","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo18","Col4","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo18","Col5","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo18","Col6","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo21","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo21","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo21","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo21","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo21","Col5","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo22","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo22","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo22","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo22","Col4","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo23","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo23","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo23","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo23","Col4","subtitulo1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo23","Col5","texto1"); ');      
           tx.executeSql('insert into APP_COLUMNA values("diapo26","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo26","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo26","Col3","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo26","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo27","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo27","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo27","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo27","Col4","imagen1"); ');      
           tx.executeSql('insert into APP_COLUMNA values("diapo29","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo29","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo29","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo29","Col4","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo29","Col5","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo30","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo30","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo30","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo30","Col4","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo39","Col1","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo40","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo40","Col2","subtitulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo40","Col3","texto"); ');
   
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col3","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col4","texto2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col5","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col6","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo19","Col7","lista"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo20","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo20","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo20","Col3","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo20","Col4","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo20","Col5","imagen2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo20","Col6","lista"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col4","lista"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col5","lista1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col6","lista2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo24","Col7","lista3"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col2","subtitulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col3","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col4","lista"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col5","imagen1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col6","lista1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col7","imagen2"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col8","lista2"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col9","imagen3"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo31","Col10","lista3"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo32","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo32","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo32","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo32","Col4","lista"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo32","Col5","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo32","Col6","lista1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo33","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo33","Col2","subtitulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo33","Col3","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo33","Col4","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo33","Col5","imagen1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo33","E","contenedor_opc"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col4","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col5","texto2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col6","texto3"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col7","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","Col8","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo34","E","radio_0"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","Col3","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","Col4","texto2"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","Col5","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","Col6","imagen1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo35","E","radio_0"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","Col3","texto1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","Col4","texto2"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","Col5","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","Col6","imagen1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo36","E","contenedor_opc"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo37","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo37","Col2","subtitulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo37","Col3","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo37","Col4","texto1"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo37","Col5","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo37","E","radio_0"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo38","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo38","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo38","Col3","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo38","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo48","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo48","Col2","subtitulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo48","Col3","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo48","Col4","texto1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo48","E","contenedor_opc"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo49","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo49","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo49","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo49","E","radio_0"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo50","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo50","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo50","Col3","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo50","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo51","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo51","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo51","Col3","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo51","E","contenedor_opc"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_1","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_1","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_1","Col3","imagen"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_1","E","contenedor_opc"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_2","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_2","Col2","texto"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_2","E","contenedor_opc"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_3","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_3","Col2","texto"); ');
           
           tx.executeSql('insert into APP_COLUMNA values("diapo_opc_3","E","contenedor_opc"); ');
           
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_4","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_4","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_4","Col3","texto1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_4","Col4","texto2"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_4","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_5","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_5","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_5","Col3","imagen"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_5","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_6","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_6","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_6","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_7","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_7","Col2","subtitulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_7","Col3","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_7","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_8","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_8","Col2","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_8","Col3","texto1"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_8","Col4","texto2"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_8","E","contenedor_opc"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_9","Col1","titulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_9","Col2","subtitulo"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_9","Col3","texto"); ');
            //tx.executeSql('insert into APP_COLUMNA values("diapo_opc_9","E","contenedor_opc"); ')
   
           tx.executeSql('insert into APP_COLUMNA values("contenido_audio","t_pregunta","upload_audio"); ');
           tx.executeSql('insert into APP_COLUMNA values("contenido_video","t_pregunta","upload_video"); ');
           tx.executeSql('insert into APP_COLUMNA values("radio","t_pregunta","radio_0"); ');
           tx.executeSql('insert into APP_COLUMNA values("radio","Col1","titulo"); ');
           tx.executeSql('insert into APP_COLUMNA values("check","t_pregunta","check_0"); ');
           tx.executeSql('insert into APP_COLUMNA values("check","Col1","titulo"); ');
   
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","Col1","titulo"); ');
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","Col2","texto"); ');
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","ccc","radios3"); ');
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","Col3","imagen"); ');
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","Col4","imagen1"); ');
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","Col5","imagen2"); ');
           tx.executeSql('insert or ignore into APP_COLUMNA values("radio3","Col6","imagen3"); ');
   
           tx.executeSql(' insert or ignore into APP_CLASIFICACION values("Pregunta","radio3","",null,"",null,"",null,"","","radio3"); ');
           tx.executeSql(' insert or ignore into APP_DISENOS values ("radio3","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'radio3\'><div class=\'celdas4\'><input type=\'radio\' id=\'resp1\' name=\'respuesta\'   ><label for=\'resp1\'><div class=\'centrado\'><img  class=\'generico\'  id=\'v-imagen\' /></div></label></div><div class=\'celdas4\'><input type=\'radio\' id=\'resp2\' name=\'respuesta\'   ><label for=\'resp2\'><div class=\'centrado\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></label></div><div class=\'celdas4\'><input type=\'radio\' id=\'resp3\' name=\'respuesta\'   ><label for=\'resp3\'><div class=\'centrado\'><img  class=\'generico\'  id=\'v-imagen2\' /></div></label></div><div class=\'celdas4\'><input type=\'radio\' id=\'resp4\' name=\'respuesta\'   ><label for=\'resp4\'><div class=\'centrado\'><img  class=\'generico\'  id=\'v-imagen3\' /></div></label></div></div>");');
   
           tx.executeSql('insert or ignore into APP_COLUMNA values("dsg_crn01","xxx","cronograma"); ');
           tx.executeSql(' insert or ignore into APP_CLASIFICACION values("Cronograma","dsg_crn01","",null,"",null,"",null,"","","dsg_crn01"); ');
           tx.executeSql(' insert or ignore into APP_DISENOS values ("dsg_crn01","<div class=\'cronograma\'><div class=\'cronograma-header\' > <div class=\'cronograma-header-obj\'>  <div class=\'cronograma-tlt1\'>Objetivo temático</div> <div id=\'v-objTem\' ></div>  </div>   <div class=\'cronograma-header-tecnica\' >  <div class=\'cronograma-tlt1\'>Técnica</div> <div id=\'v-tecnica\' ></div>  </div><div class=\'cronograma-header-tiempo\'>  <div class=\'cronograma-tlt1\'>Tiempo</div> <div id=\'v-tiempo\' ></div>  </div></div> <div class=\'cronograma-body\' ><div class=\'cronograma-body-instrucciones\' > <div class=\'cronograma-tlt2\' id=\'v-tltInst\' ></div> <div  id=\'v-instr\' ></div> </div><div  class=\'cronograma-body-materiales\'> <div class=\'cronograma-tlt1\' >Materiales</div> <div id=\'v-materiales\' ></div> </div></div> </div> <div class=\'cronograma-footer blink\' id=\'v-notas\' ></div> "); ');
   
   
   
   
            //APP_CLASIFICACION     
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo3","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo3"); ');      
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo6","Sin subtitulo",null,"Con texto",1,"Sin imagen",null,"","","diapo6"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo7","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"","","diapo7"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo8","Con subtitulo",2,"Con texto",2,"Con imagen",2,"","","diapo8"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo9","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo9"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo10","Sin subtitulo",null,"Sin texto",null,"Con imagen",1,"","","diapo10"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo11","Con subtitulo",2,"Con texto",2,"Con imagen",2,"","","diapo11"); ');      
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo14","Con subtitulo",2,"Sin texto",null,"Con imagen",8,"","","diapo14"); ');      
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo16","Con subtitulo",2,"Con texto",2,"Con imagen",4,"","","diapo16"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo17","Con subtitulo",2,"Con texto",1,"Con imagen",2,"","","diapo17"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo18","Con subtitulo",1,"Con texto",2,"Con imagen",2,"","","diapo18"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo19","Sin subtitulo",null,"Con texto",3,"Con imagen",2,"Con lista","1 lista","diapo19"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo20","Sin subtitulo",null,"Con texto",2,"Con imagen",2,"Con lista","1 lista","diapo20"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo21","Con subtitulo",1,"Con texto",1,"Con imagen",2,"","","diapo21"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo22","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"","","diapo22"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo23","Con subtitulo",2,"Con texto",2,"Sin imagen",null,"","","diapo23"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo24","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"Con lista","4 listas","diapo24"); ');      
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo26","Con subtitulo",1,"Con texto",1,"Con imagen",1,"","","diapo26"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo27","Sin subtitulo",null,"Con texto",1,"Con imagen",2,"","","diapo27"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo29","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo29"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo30","Con subtitulo",1,"Con texto",1,"Con imagen",1,"","","diapo30"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta ","diapo31","Con subtitulo",1,"Sin texto",null,"Con imagen",4,"Con lista","4 listas","diapo31"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo32","Con subtitulo",1,"Sin texto",null,"Con imagen",2,"Con lista","2 listas","diapo32"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo33","Con subtitulo",1,"Con texto",1,"Con imagen",2,"Con contenedor","","diapo33"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo34","Con subtitulo",1,"Con texto",4,"Con imagen",2,"Con contenedor","5 opciones","diapo34"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo35","Sin subtitulo",null,"Con texto",3,"Con imagen",2,"Con contenedor","Pregunta contenedor 4 opciones","diapo35"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo36","Sin subtitulo",null,"Con texto",3,"Con imagen",2,"Con contenedor","Pregunta contenedor 5 opciones","diapo36"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo37","Con subtitulo",1,"Con texto",2,"Con imagen",1,"Con contenedor","7 opciones","diapo37"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo38","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"Con contenedor","7 opciones","diapo38"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo39","Sin subtitulo",null,"Sin texto",null,"Con imagen",1,"","","diapo39"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo40","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo40"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo41","Con subtitulo",2,"Con texto",3,"",null,"","","diapo41"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo42","Con subtitulo",1,"Con texto",1,"Con imagen",3,"","","diapo42"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo43","Con subtitulo",1,"Con texto",2,"Con imagen",2,"","","diapo43"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo44","Con subtitulo",1,"Con texto",1,"Con imagen",3,"","","diapo44"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo45","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo45"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo46","Con subtitulo",1,"Con texto",2,"Con imagen",2,"","","diapo46"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo47","Sin subtitulo",null,"Con texto",2,"Con imagen",2,"","","diapo47"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo48","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo48"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo49","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"","","diapo49"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo50","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"","","diapo50"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","diapo51","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"","","diapo51"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo52","Sin subtitulo",null,"Con texto",1,"Con imagen",2,"","","diapo52"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo53","Sin subtitulo",null,"Con texto",2,"Con imagen",1,"","","diapo53"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo54","Con subtitulo",2,"Con texto",2,"Con imagen",2,"","","diapo54"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo55","Con subtitulo",2,"Con texto",3,"Con imagen",1,"","","diapo55"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo56","Con subtitulo",2,"Con texto",4,"Con imagen",1,"","","diapo56"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo57","Sin subtitulo",null,"Con texto",3,"Con imagen",1,"","","diapo57"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo58","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"","","diapo58"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Diapo","diapo59","Con subtitulo",1,"Con texto",2,"Con imagen",1,"","","diapo59"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_1","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"Con contenedor","5 opciones","diapo_opc_1"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_2","Sin subtitulo",null,"Con texto",1,"Sin imagen",null,"Con contenedor","3 opciones","diapo_opc_2"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_3","Sin subtitulo",null,"Con texto",2,"Sin imagen",null,"Con contenedor","7 opciones izquierda y derecha 8 opc.","diapo_opc_3"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_4","Sin subtitulo",null,"Con texto",3,"Sin imagen",null,"Con contenedor","2 opciones","diapo_opc_4"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_5","Sin subtitulo",null,"Con texto",1,"Con imagen",1,"Con contenedor","5 opciones","diapo_opc_5"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_6","Sin subtitulo",null,"Con texto",1,"Sin imagen",null,"Con contenedor","9 opciones","diapo_opc_6"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_7","Con subtitulo",1,"Con texto",1,"Sin imagen",null,"Con contenedor","7 opciones","diapo_opc_7"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_8","Sin subtitulo",null,"Con texto",3,"Sin imagen",null,"Con contenedor","5 opciones","diapo_opc_8"); ');
            //tx.executeSql(' insert into APP_CLASIFICACION values("Menu","diapo_opc_9","Con subtitulo",1,"Con texto",1,"Sin imagen",null,"Con contenedor","3 opciones","diapo_opc_9"); ');      
           tx.executeSql(' insert into APP_CLASIFICACION values("Video","contenido_video","",null,"",null,"",null,"","","contenido_video"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Audio","contenido_audio","",null,"",null,"",null,"","","contenido_audio"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","radio","",null,"",null,"",null,"","","radio"); ');
           tx.executeSql(' insert into APP_CLASIFICACION values("Pregunta","check","",null,"",null,"",null,"","","check"); ');
   
            //APP_DISENO
           tx.executeSql(' insert into APP_DISENOS values ("radio","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-radio\'></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("check","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-check\'></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("contenido_audio","<div  id=\'v-audio\' ></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("contenido_video","<div  id=\'v-video\' ></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo3","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'cont-fila\' ><div class=\'celdas2\'><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo\' id=\'v-texto1\'></div></div><div class=\'celdas2 centrado\'><div><img  class=\'img-01\'  id=\'v-imagen\' /></div></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo6","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo7","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'cont-fila\'><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'celdas2 centrado\'><img class=\'generico\' id=\'v-imagen\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo8","<div class=\'titulo\' id=\'v-titulo\' ></div><div><div class=\'cont-fila\'><div class=\'subtitulo celdas2\' id=\'v-subtitulo\'></div><div class=\'subtitulo celdas2\' id=\'v-subtitulo1\'></div></div><div class=\'cont-fila\'><div class=\'celdas2 centrado\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'celdas2 centrado\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div><div class=\'cont-fila\'><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'parrafo celdas2\' id=\'v-texto1\'></div></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo9","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'cont-fila\' ><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'celdas2 centrado\' ><img  class=\'generico\'  id=\'v-imagen\' /></div></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo\' id=\'v-texto1\'></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo10","<div class=\'titulo\' id=\'v-titulo\'></div><div class=\'centrado\'><img  class=\'generico\'  id=\'v-imagen\' /></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo11","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\' ><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'celdas2 centrado\' ><img  class=\'generico\'  id=\'v-imagen1\' /></div></div><div class=\'cont-fila\' ><div class=\'celdas2 centrado\' ><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'celdas2\'><div class=\'subtitulo\' id=\'v-subtitulo1\'></div><div class=\'parrafo\' id=\'v-texto1\'></div></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo14","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\'><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen1\' /></div><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen2\' /></div><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen3\' /></div></div><div class=\'subtitulo\' id=\'v-subtitulo1\'></div><div class=\'cont-fila\'><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen4\' /></div><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen5\' /></div><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen6\' /></div><div class=\'centrado celdas4\'><img  class=\'generico\'  id=\'v-imagen7\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo16","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\'><div class=\'parrafo celdas3\' id=\'v-texto\'></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div><div class=\'subtitulo\' id=\'v-subtitulo1\'></div><div class=\'cont-fila\'><div class=\'parrafo celdas3\' id=\'v-texto1\'></div><div class=\'centrado celdas3\'><img class=\'generico\'  id=\'v-imagen2\' /></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen3\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo17","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\'><div class=\'parrafo celdas3\' id=\'v-texto\'></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo18","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'cont-fila\'><div class=\'parrafo celdas3\' id=\'v-texto1\'></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo19","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'cont-fila\'><div class=\'parrafo celdas2\' id=\'v-texto1\'></div><div class=\'parrafo celdas2\' id=\'v-texto2\'></div></div><div class=\'cont-fila\'><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div><div class=\'centrado\' ><select  id=\'v-lista1\'></select></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo20","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'cont-fila\'><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'parrafo celdas2\' id=\'v-texto1\'></div></div><div class=\'cont-fila\'><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen1\' /></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen2\' />    </div></div><div class=\'centrado\' ><select  id=\'v-lista1\'></select></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo21","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo\' id=\'v-texto\'></div><div  class=\'cont-fila\'><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo22","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'cont-fila\'><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'celdas2\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div><div><img  class=\'generico\'  id=\'v-imagen\' /></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo23","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'subtitulo\' id=\'v-subtitulo1\'></div><div class=\'parrafo\' id=\'v-texto1\'></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo24","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'contenedor-resp-diapo24\' ><img  class=\'generico\'  id=\'v-imagen\' /><div class=\'select01-diapo24\' ><select  id=\'v-lista1\'></select></div><div class=\'select02-diapo24\' ><select  id=\'v-lista3\'></select></div><div class=\'select03-diapo24\' ><select  id=\'v-lista2\'></select></div><div class=\'select04-diapo24\' ><select  id=\'v-lista4\'></select></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo26","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'centrado\'><img class=\'generico\'  id=\'v-imagen\' /></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo27","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'cont-fila\'><div class=\'centrado celdas2\' ><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo29","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\' ><div class=\'parrafo celdas2\' id=\'v-texto\'></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen\' /></div></div><div class=\'parrafo\' id=\'v-texto1\'></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo30","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\'><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'parrafo celdas2\' id=\'v-texto\'></div></div>"); ');
            //tx.executeSql(' insert into APP_DISENOS values ("diapo31","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\' ><div class=\'celdas2\' ><img  class=\'generico\' id=\'v-imagen\' /><div id=\'v-lista\'></div></div><div class=\'celdas2\'><img  class=\'generico\'  id=\'v-imagen1\' /><div id=\'v-lista1\'></div></div></div><div class=\'cont-fila\'><div class=\'celdas2\'><img  class=\'generico\'  id=\'v-imagen2\' /><div id=\'v-lista2\'></div></div><div class=\'celdas2\'><img  class=\'generico\'  id=\'v-imagen3\' /><div id=\'v-lista3\'></div></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo32","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'cont-fila\' ><div class=\'celdas2\' ><img  class=\'generico\'  id=\'v-imagen\' /><div ><select  id=\'v-lista1\'></select></div></div><div class=\'celdas2 etiqueta-censo\'><img  class=\'generico\'  id=\'v-imagen1\' /><div ><select  id=\'v-lista2\'></select></div></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo34","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo \' id=\'v-texto\'></div><div class=\'cont-fila\'><div class=\'parrafo centrado celdas3 \' id=\'v-texto1\'></div><div class=\'parrafo centrado celdas3 \' id=\'v-texto2\'></div><div class=\'parrafo centrado celdas3 \' id=\'v-texto3\'></div> </div><div class=\'cont-fila\'><div class=\'parrafo centrado celdas3 \' id=\'v-radio\'></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo35","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'cont-fila\'><div class=\'parrafo centrado celdas3 \' id=\'v-texto\'></div><div class=\'parrafo centrado celdas3 \' id=\'v-texto1\'></div><div class=\'parrafo centrado celdas3 \' id=\'v-texto2\'></div> </div><div class=\'cont-fila\'><div class=\'parrafo centrado celdas3 \' id=\'v-radio\'></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen\' /></div><div class=\'centrado celdas3\'><img  class=\'generico\'  id=\'v-imagen1\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo37","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'subtitulo\' id=\'v-subtitulo\'></div><div class=\'parrafo \' id=\'v-texto\'></div><div class=\'cont-fila\'><div class=\'parrafo centrado celdas2 \' id=\'v-radio\'></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo39","<div class=\'centrado\'><img  class=\'generico\'  id=\'v-imagen\' /></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo49","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'cont-fila\'><div class=\'cont-columna centrado celdas2\'><div class=\'parrafo \' id=\'v-texto\'></div><div class=\'parrafo centrado \' id=\'v-radio\'></div></div><div class=\'centrado celdas2\'><img  class=\'generico\'  id=\'v-imagen\' /></div></div>"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo_opc_1","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'parrafo\' id=\'v-opcionesMenu1\'></div><div  ><img  class=\'generico\'  id=\'v-imagen\' /><div >"); ');
           tx.executeSql(' insert into APP_DISENOS values ("diapo_opc_2","<div class=\'titulo\' id=\'v-titulo\'>  </div>  <div class=\'parrafo\' id=\'v-texto\'>  </div>  <div class=\'menu\' id=\'v-opcionesMenu1\'> </div>"); ');
            //tx.executeSql(' insert into APP_DISENOS values ("diapo_opc_5","<div class=\'titulo\' id=\'v-titulo\'>  </div>  <div class=\'cont-fila\'>  <div class=\'cont-columna celdas2\'>  <div class=\'parrafo\' id=\'v-texto\'>  </div>    <div class=\'menu celdas2\' id=\'v-opcionesMenu1\'>   </div> </div>   <img class=\'generico\' id=\'v-imagen\' /> </div>"); ');
            // Modificar este contenedor y clases para asignar el tamaño de las opciones del menú y el tipo flex del contenedor
           tx.executeSql(' insert into APP_DISENOS values ("diapo_opc_3","<div class=\'titulo\' id=\'v-titulo\' ></div><div class=\'parrafo\' id=\'v-texto\'></div><div class=\'parrafo contenedorMenuDosColumnas\' id=\'v-opcionesMenu1\'></div>"); ');
   
   
                 }
           });
         
   
   
       }, function(error) {
           console.log('PRECARGA error: ' + error.message);
       }, function() {
           console.log('PRECARGA OK');  
           resolve("OK"); 
       });  
         
        }); //fin de promesa
     }

export default precarga;