export const GuardarEnStorage = (variable,valor) =>{
     //obtener objetos
     let elementos = JSON.parse(localStorage.getItem(variable))

     //es un array?
     if (Array.isArray(elementos)){
          //Añadir elemento nuevo
          elementos.push(valor)
     }else{
          //crear arreglo y añadir elemento
          elementos = [valor]
     }

     //guardar
     localStorage.setItem(variable, JSON.stringify(elementos))

     // retornar objeto
     return elementos;          
}