'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  //this._length = 0
}

function Node(value) {
  this.value = value;
  this.next = null
}

LinkedList.prototype.add = function (value) {
  //Instancio un nuevo nodo
  let node = new Node(value)
  //Creo el current para ayudarme a recorrer la lista. Lo coloco en el head
  let current = this.head
  // Si la lista está vacía inserto el nodo en el head
  if (current === null) {//(!current) -> Si no tengo current, si current es null
    this.head = node
    //this._length++;
    return node
  }
  // Si la lista no está vacía, la recorro hasta encontrar el último nodo e inserto el nuevo atrás
  while (current.next !== null) {//El siguiente de current es distinto de null?
    //(current.next) -> Da true al menos que sea null(false), el while sigue
    //Si current.next no es null, si current tiene siguiente, sigo recorriendo
    current = current.next
  }
  current.next = node
  //Cuando encuentra un nodo con next null significa que es el último por lo tanto engancha el nuevo de él
  //this._length++;
  return node
};

LinkedList.prototype.remove = function () {
  let current = this.head //Current ahora es el head
  if(!current) return null //Si current es null, si la lista está vacía, retorno null
  if(!current.next) {//Si current existe pero no tiene un siguiente, entro en este if
    let removedNode = this.head.value//Guardo el valor de head en una variable para poder retornarlo
    this.head = null//Elimino head
    return removedNode
  }
  while (current.next.next) current = current.next;//Si la lista tiene más nodos pregunto por el siguiente del siguiente y avanzo. Cuando el siguiente del siguiente no exista, salgo del while
  let removedNode = current.next.value//Guardo el valor en una variable para poder retornarlo
  current.next = null//Elimino el nodo
  return removedNode
};

LinkedList.prototype.search = function (valorOFuncion) {
  let current = this.head
  if(!current) return null//Si current es null, si la lista está vacía, retorno null
  while(current){//Sino, mientras si exista current, si la lista tiene algo empiezo el while
    if(typeof valorOFuncion === 'function'){//Si el argumento es una función entra en este if
      if(valorOFuncion(current.value)) return current.value//Si a esa función pasándole el valor del nodo me da true retorno su valor
    }
    if(current.value === valorOFuncion) return current.value//Si el valor del nodo es igual al valor pasado retorno el valor del nodo
    current = current.next//Si no entra en ninguno de los dos if, avanzo al siguiente
  }
  return null//Si recorrió todo, salió del while, ya no hay nada en la lista retorno null
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = []
}

HashTable.prototype.hash = function(str){
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
  acc += str.charCodeAt(i)
  }
  return acc % 35// acc % this.numBuckets
}

HashTable.prototype.set = function(clave, valor){
  if(typeof clave !== 'string') throw new TypeError ('Keys must be strings');
  let numBucket = this.hash(clave);
  if(this.buckets[numBucket] === undefined){//Si no hay nada en esa posición del arreglo buckets
    this.buckets[numBucket] = {}//Agrego un objeto vacío para evitar las colisiones
  } 
  this.buckets[numBucket][clave] = valor//Y después del if, ya sea si entró o no, agrego el valor en esa posición
}

HashTable.prototype.get = function(clave){
  let numBucket = this.hash(clave)
  return this.buckets[numBucket][clave]
}

HashTable.prototype.hasKey = function(clave){
  let numBucket = this.hash(clave)
  // if(this.buckets[numBucket][clave] === undefined) {
  //   return false
  // } else return true
  return this.buckets[numBucket].hasOwnProperty(clave)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
