'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1]
  let divisor = 2
  while (num !== 1) {
    if (num % divisor === 0) {
      factores.push(divisor)
      num = num / divisor
    }
    else divisor++
  }
  return factores
};

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let boolean = true
  //Declaro un booleano en true para que entre al while
  while (boolean) {
    //Lo cambio para que si no entra al for (si no hubo cambios de posición) quede en false y corte el while
    boolean = false
    //El for recorre todo una vez y si hace cambios, vuelve a entrar al while y realizar otro while
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let auxiliar = array[i]
        array[i] = array[i + 1]
        array[i + 1] = auxiliar
        boolean = true
      }
    }
  }
  return array
};

// Con recursión
//   let boolean = false
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       let auxiliar = array[i]
//       array[i] = array[i + 1]
//       array[i + 1] = auxiliar
//       boolean = true
//     }
//   }
//   while (boolean === true) return bubbleSort(array)
//   return array

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //Va comparando en cada vuelta la i con la j, la j va disminuyendo su valor hasta encontrar un valor menor que i, cuando lo encuentra inserta auxiliar, que contiene el valor de i, en el siguiente de i
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let auxiliar = array[i]
    while (array[j] > auxiliar && j >= 0) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = auxiliar
  }
  return array
};

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let minimo = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[minimo] > array[j]) {
        minimo = j
      }
    }
    let auxiliar = array[i]
    array[i] = array[minimo]
    array[minimo] = auxiliar
  }
  return array
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
