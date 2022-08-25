import { fs, path } from './ConstantesNode';


export function crearArchivo(nombreArchivo, contenidoArchivo, rutaAlmacenamiento){
	const realPath = path.join(rutaAlmacenamiento, nombreArchivo);
	return new Promise(function(resolve, reject){
		fs.outputFile(realPath, contenidoArchivo)
			.then(function(){
				resolve(path.normalize(realPath))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function renombrarArchivo(rutaArchivo, nuevoNombre){
	let realNewPath = path.join(path.dirname(rutaArchivo), nuevoNombre);
	return new Promise(function(resolve, reject){
		fs.rename(rutaArchivo, realNewPath)
			.then(function(){
				resolve(path.normalize(realNewPath))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function moverArchivo(rutaArchivo, destino){
	let realNewPath = path.join(destino, path.basename(rutaArchivo));
	return new Promise(function(resolve, reject){
		fs.move(rutaArchivo, realNewPath, { overwrite: true })
			.then(function(){
				resolve(path.normalize(realNewPath))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function eliminarArchivo(rutaArchivo){
	return new Promise(function(resolve, reject){
		fs.remove(rutaArchivo)
			.then(function(){
				resolve(path.normalize(rutaArchivo))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function moverDesdeInput(nombreInput, nuevoNombre, proyecto,slide,idProyectoActual,objeto){
	
	
	const rutaAlmacenamiento = `C:/flskrk/${proyecto}/`;
 	let pathFile = nombreInput.current;
 	let realPath = '', extension = '', response = '', estado = '';

  return new Promise(function(resolve, reject){
	if (pathFile && pathFile.files[0]) {
		estado = pathFile;
		pathFile = pathFile.files[0].path;
		extension = path.extname(pathFile);
		if (!path.extname(nuevoNombre)) {
		nuevoNombre = `${nuevoNombre}${extension}`
		}
		realPath = path.join(rutaAlmacenamiento, nuevoNombre);
		response = fs.copy(pathFile, realPath, { overwrite: true })


		.then(function(){
		estado.value = '';

				/** Acá poner la función para guardar en BD el nombre de la imagen */
				let objMulti='';
				switch (objeto){
					case "i1":
						objMulti='imagen1'
						break;
				}


				const db = window.openDatabase("KRAKEN-SLIDES-3.2", "1.0", "LTA 1.0", 100000);
				db.transaction(function(tx) {
					tx.executeSql(`UPDATE DATOS_INTRODUCIDOS SET ${objMulti} = ? WHERE slide = ?  AND id_proyecto = ? `, [nuevoNombre, slide,idProyectoActual], function(tx, results) {
						console.log('results', results)                    
					}, null);
				});

				

		return realPath;
		})
		.catch(function(err){
		reject(err)
		})
	} else {
		response = false; 
	}	
	resolve(response)
	})
}