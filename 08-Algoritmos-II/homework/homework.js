'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array
  //Separar en left, pivot y right
  let pivot = array[0]
  let left = []
  let right = []
  //Recorro el arreglo evaluando si los números son mayores o menores al pivote
  //Empiezo en 1 porque la posición 0 es el pivote
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i])
    else right.push(array[i])
  }
  //Aplico la recursión concatenando los arrays con los pivotes
  return quickSort(left).concat(pivot).concat(quickSort(right))
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array
  //Divido el arreglo en dos
  let mitad = Math.floor(array.length / 2)//Math.floor se usa por si la longitud es impar
  let left = array.slice(0, mitad)//Hago otro array con los elementos desde la posición 0 hasta una antes de la mitad
  let right = array.slice(mitad)//Hago otro array con los elementos desde la mitad hasta el final
  //Recursión usando la función auxiliar
  return merge(mergeSort(left), mergeSort(right))

};

//Necesitamos una función auxiliar merge para ordenar los arreglos que van quedando
function merge(left, right) {
  let leftIndex = 0
  let rightIndex = 0
  let arrOrdenado = []
  //Tengo dos índices que se usan para comparar y ordenar el arreglo izquierdo y el derecho
  while (leftIndex < left.length && rightIndex < right.length) {//Mientras los índices no se vayan de rango
    //Si el de la izquierda es menor lo agrego al array ordenado e incremento el índice y si el de la izquierda es mayor, agrego el de la derecha e incremento el índice
    if (left[leftIndex] < right[rightIndex]) {
      arrOrdenado.push(left[leftIndex])
      leftIndex++
    } else {
      arrOrdenado.push(right[rightIndex])
      rightIndex++
    }
  }
  //Retorno el array ordenado pero le tengo que concatenar lo que hubiera quedado sin agregar a la derecha o a la izquierda, si uno de los arrays era más largo los índices se van de rango y no se agrega ese elemento(el mayor) Si no sobró nada se concatenan arrays vacíos, no modifica nada
  return arrOrdenado.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
