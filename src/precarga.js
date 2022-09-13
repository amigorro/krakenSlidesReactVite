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
                   id_pregunta varchar(10),                   
                   num_checks_sel int,
   
                   tipo_contenido varchar(20),
                   plantilla varchar(50),
   
                   nombre_lamina varchar(50),
                   
                   titulo varchar(200),
                   subtitulo1 varchar(200),                   
                   texto1 varchar(1200),
                   texto2 varchar(1200),
                   texto3 varchar(1200),
                   texto4 varchar(1200),
                   texto5 varchar(1200),
                   texto6 varchar(1200),
                   imagen1 varchar(100),                
                   imagen2 varchar(100),
                   imagen3 varchar(100),
                   imagen4 varchar(100),
                   imagen5 varchar(100),
                   imagen6 varchar(100),
                   imagen7 varchar(100),
                   imagen8 varchar(100),
                   audio varchar(100),
                   video varchar(100),
                   tabla varchar(200),
                   
                   anterior int,
                   siguiente int,
                   orden real,
                   paginacion real,
                   primary key(slide,sesion,id_proyecto,id_usuario)
                   );`);
   
        tx.executeSql(`CREATE TABLE IF NOT EXISTS PLANTILLAS( 
                    id_plantilla varchar(20),
                    nombre_plantilla varchar(20),
                    tipo varchar(15),
                    miniatura varchar(20),
                    titulo int,
                    subtitulo int,
                    texto1 int,
                    texto2 int,
                    texto3 int,
                    texto4 int,
                    texto5 int,
                    texto6 int,
                    imagen1 int,
                    imagen2 int,
                    imagen3 int,
                    imagen4 int,
                    imagen5 int,
                    imagen6 int,
                    imagen7 int,
                    imagen8 int,
                    audio int,
                    video int,
                    primary key(id_plantilla));`);
        
        tx.executeSql(`CREATE TABLE IF NOT EXISTS TBL_CRONOGRAMA(
                     id_cronograma varhar(10),
                     id_proyecto int,
                     id_usuario int,
                     sesion int,
                     tipo int,
                     id_slide varhar(10),
                     objetivo varchar(330),
                     instrucciones varchar(330),
                     tiempo int,
                     materiales varchar(200),
                     notas varchar(330),
                     tec1 int,
                     tec2 int,
                     tec3 int,
                     tec4 int,
                     tec5 int,
                     tec6 int,
                     tec7 int,
                     tec8 int,
                     tec9 int,
                     tec10 int,
                     primary key(id_proyecto,id_slide,sesion,id_usuario));`);  

          /**
           * 
           * 
           * 
           * 
           */



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


          //Tabla Respuesta        
          tx.executeSql(`CREATE TABLE IF NOT EXISTS TBL_RESPUESTA(
                                          id_respuesta VARCHAR(10),
                                          txt01_respuesta varchar(200),
                                          valor01 INTEGER,
                                          txt02_respuesta varchar(200),
                                          valor02 INTEGER,
                                          txt03_respuesta varchar(200),
                                          valor03 INTEGER,
                                          txt04_respuesta varchar(200),
                                          valor04 INTEGER,
                                          txt05_respuesta varchar(200),
                                          valor05 INTEGER,
                                          txt06_respuesta varchar(200),
                                          valor06 INTEGER,
                                          txt07_respuesta varchar(200),
                                          valor07 INTEGER,
                                          txt08_respuesta varchar(200),
                                          valor08 INTEGER,
                                          salta VARCHAR(10),                                           
                                          sesion INTEGER,                                                                                 
                                          id_usuario INTEGER,                                      
                                          id_proyecto INTEGER,
                                          slide VARCHAR(10),
                                          primary key(id_respuesta,slide, id_proyecto,sesion,id_usuario));`);

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
   
         tx.executeSql('select * from TBL_CONTROL_SYNC',[], function (tx, results){
           var cont = results.rows.length;   
           if (cont == 0) {
   
             /* ====== INSERTS ====== */ 
             //TBL_CONTROL_SYNC
             tx.executeSql('INSERT INTO TBL_CONTROL_SYNC  VALUES (0,"B-1.0.0.0","19-05-2022","DIABLO");    ');
   
             tx.executeSql(`insert into PLANTILLAS values
                    (1,"Título y texto"                 ,1,"pl01",1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
                    (2,"Tlt, txt, img"                  ,1,"pl02",1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0),
                    (3,"texto con dos imagenes y desc." ,1,"pl03",1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0),
                    (4,"Título & imagen grande"         ,1,"pl04",1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0),
                    (5,"texto e imagen flotante izq."   ,1,"pl05",1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0),
                    (6,"img centrada"                   ,1,"pl06",0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0),
                    (7,"Título"                         ,1,"pl07",1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
                    (8,"dos filas imagenes"             ,1,"pl08",1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0),
                    (9,"cajas texto imagenes"           ,1,"pl09",1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0),
                    (10,"cajas texto imagenes"           ,2,"pr01",1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0),
                      (200,"disenio6",2,"diapo10.png",1,null,null,1,null,null,null,null,1,1,null,null,null,null,null,null,null,null),
                      (210,"disenio7",2,"diapo11.png",null,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
                      (220,"disenio8",3,"diapo14.png",1,null,null,1,1,null,null,null,1,1,null,null,null,null,null,null,null,null),
                      (230,"disenio9",3,"diapo16.png",1,1,null,null,null,null,null,null,1,1,1,null,null,null,null,null,null,null),
                      (240,"disenio10",4,"diapo20.png",1,null,1,1,1,null,null,null,1,1,null,null,null,null,null,null,null,1)
            `); 







             // TBL_FIGURA
              tx.executeSql('insert into TBL_FIGURA values(11,"Instructor de: Instructor municipal"); '); 
              tx.executeSql('insert into TBL_FIGURA values(12,"Instructor de: Supervisor de entrevistadores"); '); 
              tx.executeSql('insert into TBL_FIGURA values(13,"Instructor de: Entrevistador de cuestionario básico"); '); 
              tx.executeSql('insert into TBL_FIGURA values(14,"Instructor de: Entrevistador de cuestionario ampliado"); '); 
              tx.executeSql('insert into TBL_FIGURA values(15,"Instructor de: Supervisor de entrevistadores de operativos especiales"); '); 
              tx.executeSql('insert into TBL_FIGURA values(16,"Instructor de: Entrevistador de operativos especiales"); '); 
              tx.executeSql('insert into TBL_FIGURA values(17,"Instructor de: Supervisor de verificadores"); '); 
              tx.executeSql('insert into TBL_FIGURA values(18,"Instructor de: Verificador"); '); 

              tx.executeSql('insert into TBL_FIGURA values(51,"Instructor municipal"); ');
              tx.executeSql('insert into TBL_FIGURA values(52,"Responsable de área"); '); 
              tx.executeSql('insert into TBL_FIGURA values(53,"Supervisor de entrevistadores"); '); 
              tx.executeSql('insert into TBL_FIGURA values(54,"Entrevistador de cuestionario básico"); '); 
              tx.executeSql('insert into TBL_FIGURA values(55,"Entrevistador de cuestionario ampliado"); '); 
              tx.executeSql('insert into TBL_FIGURA values(56,"Supervisor de entrevistadores de operativos especiales"); '); 
              tx.executeSql('insert into TBL_FIGURA values(57,"Entrevistador de operativos especiales"); '); 
              tx.executeSql('insert into TBL_FIGURA values(58,"Supervisor de verificadores"); '); 
              tx.executeSql('insert into TBL_FIGURA values(59,"Verificador"); '); 
              tx.executeSql('insert into TBL_FIGURA values(60,"Responsable de posenumeración"); '); 
              tx.executeSql('insert into TBL_FIGURA values(61,"Supervisor de posenumeración"); '); 
              tx.executeSql('insert into TBL_FIGURA values(62,"Entrevistador de posenumeración"); '); 
             
             //usuarios
             tx.executeSql(' insert into usuarios values (0,"PHILIP ANSELMO","kraken",2,"kraken",4000)');
             tx.executeSql(' insert into usuarios values (1,"Daniel Acosta","Diablo",6,"kraken#666",666)');
           
   /**
    * Una tabla con todos los datos que compnen el slide (el de las col1, col2, ...)
    * Una tabla de respuestas
    * Una tabla con los objetos tipo input, button, textarea que se mostrarán en la mascara de captura.
    */
   
   
   
   
   
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
            


            /** Borrar estas precargas */
            
            tx.executeSql(`INSERT INTO APP_PROYECTOS VALUES (1,'Capacitación del líder de proyecto',1,'20-06-2022',51,1,1),
(2,'Capacitación del Coordinador de zona',1,'20-06-2022',52,1,1),
(3,'Capacitación del Coordinador municipal',1,'20-06-2022',53,1,1),
(4,'Capacitación del Responsable de área',1,'20-06-2022',54,1,1),
(5,'Capacitación del Supervisor de entrevistadores',1,'20-06-2022',52,1,1),
(6,'Capacitación del Entrevistador de básico',2,'20-06-2022',53,1,1),
(7,'Capacitación del Entrevistador de ampliado',2,'20-06-2022',55,1,1),
(8,'Capacitación del Responsable de verificación',2,'20-06-2022',56,1,1),
(9,'Capacitación del Supervisor de verificación',2,'20-06-2022',57,1,1),
(10,'Capacitación del Verificador',2,'20-06-2022',58,1,1),
(11,'Capacitación del Responsable de operativos especiales',2,'20-06-2022',59,1,1),
(12,'Capacitación del Supervisor de entrevistadores de operativos especiales Productos cartográficos para usar en campo',1,'20-06-2022',53,1,1),
(13,'Capacitación del Entrevistador de operativos especiales',2,'20-06-2022',51,1,1),
(14,'Capacitación del Responsable de posenumeración',2,'20-06-2022',52,1,1),
(15,'Capacitación del Supervisor de posenumeración',2,'20-06-2022',53,1,1),
(16,'Capacitación del Entrevistador de posenumeración',2,'20-06-2022',51,1,1),
(17,'Capacitación del cuestionario básico emergente',2,'20-06-2022',52,1,1),
(18,'Capacitación del cuestionario ampliado emergente',2,'20-06-2022',53,1,1),
(19,'Capacitación del Resposable de área para la planeación',2,'20-06-2022',51,1,1),
(20,'Capacitación del Verificador del básico',2,'20-06-2022',52,1,1);`); 



   
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