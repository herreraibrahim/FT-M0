// Do not change any of the function names

function mayuscula(nombre) {
  console.log(nombre)
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1); 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1, n2)
  }


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
//   var suman = 0;
//       for (var index = 0; index < numeros.length; index++) {
//         suman = suman + numeros[index];
//       }
//       cb (suman);  
//
  // var suma = numeros.reduce (function (pv, elementos) {
  //     return pv + elementos;
  //   })
  //     cb(suma);
    var suma = 0;
    numeros.forEach (function (x) {
      suma = suma + x;
    });
     cb (suma);
  }

  function forEach(array, cb) { //[1, 10, 20, 4, 3]  
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach (function (va) {
  cb (va)
})
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
var arrayNuevo = array.map (function (an){
      return cb(an);
})
 return arrayNuevo;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var palabraConA =
    array.filter(function (palabra) {
    if (palabra[0] === "a") {
    return palabra
    }
  });
    return palabraConA
  } 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
